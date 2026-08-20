import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CheckBox } from "@/components/CheckBox";
import { KeyboardAwareScrollViewCompat } from "@/components/KeyboardAwareScrollViewCompat";
import { MedlinkLogo } from "@/components/MedlinkLogo";
import { WriteLine } from "@/components/WriteLine";
import { useDictation } from "@/hooks/useDictation";

// react-native-view-shot requires a development build and is not bundled in
// Expo Go. We guard the import so the app loads normally; export shows a
// friendly alert when the native module isn't present.
let ViewShot: any = null;
let captureRef: ((ref: any, opts: any) => Promise<string>) | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const m = require("react-native-view-shot");
  ViewShot = m.default;
  captureRef = m.captureRef;
} catch {
  // Running in Expo Go — native module not available
}

// Safe wrapper: uses ViewShot when available (dev build), falls back to View in Expo Go.
const SheetWrapper = (ViewShot ?? View) as any;

interface FormState {
  // Patient
  patientName: string;
  seatNo: string;
  patientAge: string;
  male: boolean;
  female: boolean;
  // S — Signs & Symptoms
  consciousYes: boolean;
  consciousNo: boolean;
  signs: string;
  symptoms: string;
  // A — Allergies
  allergies: string;
  allergiesNilKnown: boolean;
  allergiesReaction: string;
  // M — Medications
  medications: string;
  lastTaken: string;
  // P — Past Medical History
  medicalHistory: string;
  medAlertYes: boolean;
  medAlertNo: boolean;
  medAlertFor: string;
  // L — Last Oral Intake
  lastFood: string;
  lastBowel: string;
  // E — Events Leading Up to Incident
  events: string;
  // Personnel
  personnelYes: boolean;
  personnelNo: boolean;
  personnelProfession: string;
  personnelName: string;
  careInitiated: string;
  // Vitals
  bloodPressure: string;
  pulse: string;
  respirations: string;
  // Flight crew
  flight: string;
  date: string;
  acType: string;
  acRegistration: string;
  currentLocation: string;
  departurePort: string;
  destinationPort: string;
  eta: string;
}

const initial: FormState = {
  patientName: "",
  seatNo: "",
  patientAge: "",
  male: false,
  female: false,
  consciousYes: false,
  consciousNo: false,
  signs: "",
  symptoms: "",
  allergies: "",
  allergiesNilKnown: false,
  allergiesReaction: "",
  medications: "",
  lastTaken: "",
  medicalHistory: "",
  medAlertYes: false,
  medAlertNo: false,
  medAlertFor: "",
  lastFood: "",
  lastBowel: "",
  events: "",
  personnelYes: false,
  personnelNo: false,
  personnelProfession: "",
  personnelName: "",
  careInitiated: "",
  bloodPressure: "",
  pulse: "",
  respirations: "",
  flight: "",
  date: "",
  acType: "",
  acRegistration: "",
  currentLocation: "",
  departurePort: "",
  destinationPort: "",
  eta: "",
};

export default function MedlinkChecklist() {
  const insets = useSafeAreaInsets();
  const [form, setForm] = useState<FormState>(initial);
  const [exporting, setExporting] = useState<boolean>(false);
  const [epipenDeliveries, setEpipenDeliveries] = useState<string[]>([]);
  const [epipenDeadline, setEpipenDeadline] = useState<number | null>(null);
  const [epipenRemaining, setEpipenRemaining] = useState<number | null>(null);
  const [secondEpipenRequired, setSecondEpipenRequired] = useState<
    boolean | null
  >(null);
  const shotRef = useRef<any>(null);
  const { activeDictationKey, startDictating } = useDictation();

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  /** Shorthand: attach voice dictation to a text field. */
  const mic = (key: keyof FormState) => ({
    onMicPress: () =>
      startDictating(key, form[key] as string, (v) => set(key, v as FormState[typeof key])),
    isRecording: activeDictationKey === key,
  });

  const toggle = (key: keyof FormState) => {
    if (Platform.OS !== "web") {
      Haptics.selectionAsync().catch(() => {});
    }
    setForm((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    if (epipenDeadline === null) return;

    const updateCountdown = () => {
      const secondsLeft = Math.max(
        0,
        Math.ceil((epipenDeadline - Date.now()) / 1000),
      );
      setEpipenRemaining(secondsLeft);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [epipenDeadline]);

  const recordEpipenDelivery = () => {
    const now = new Date();
    const deliveredTime = now.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    setEpipenDeliveries((previous) =>
      previous.length < 2 ? [...previous, deliveredTime] : previous,
    );
    setEpipenDeadline(now.getTime() + 6 * 60 * 1000);
    setEpipenRemaining(6 * 60);
  };

  const handleEpipenDelivered = () => {
    if (epipenDeliveries.length === 0) {
      recordEpipenDelivery();
    }
  };

  const handleSecondEpipenDecision = (required: boolean) => {
    setSecondEpipenRequired(required);
    if (required && epipenDeliveries.length === 1) {
      recordEpipenDelivery();
    }
  };

  const shareFallback = async (uri: string) => {
    const available = await Sharing.isAvailableAsync();
    if (!available) return false;
    await Sharing.shareAsync(uri, {
      mimeType: "image/png",
      dialogTitle: "Crew Care",
      UTI: "public.png",
    });
    return true;
  };

  const handleExport = async () => {
    if (!captureRef) {
      Alert.alert(
        "Requires development build",
        "Export is not available in Expo Go. Build the app with EAS or a local dev build to enable saving and sharing.",
      );
      return;
    }
    try {
      setExporting(true);
      await new Promise((r) => setTimeout(r, 60));
      const uri = await captureRef(shotRef, {
        format: "png",
        quality: 1,
        result: "tmpfile",
      });

      if (Platform.OS === "web") {
        await shareFallback(uri);
        return;
      }

      const perm = await MediaLibrary.requestPermissionsAsync(true);
      if (!perm.granted) {
        Alert.alert(
          "Photos access needed",
          "Allow access to Photos so the checklist can be saved. You can change this in Settings.",
          [
            { text: "Cancel", style: "cancel" },
            {
              text: "Share instead",
              onPress: () => {
                shareFallback(uri).catch(() => {});
              },
            },
          ],
        );
        return;
      }

      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert(
        "Saved to Photos",
        "The checklist is in your Photos. Open Photos to AirDrop it.",
        [
          { text: "Done", style: "default" },
          {
            text: "Share now",
            onPress: () => {
              shareFallback(uri).catch(() => {});
            },
          },
        ],
      );
    } catch (e) {
      Alert.alert("Export failed", String(e));
    } finally {
      setExporting(false);
    }
  };

  const handleReset = () => {
    Alert.alert("Clear form?", "All entries will be cleared.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Clear",
        style: "destructive",
        onPress: () => {
          setForm(initial);
          setEpipenDeliveries([]);
          setEpipenDeadline(null);
          setEpipenRemaining(null);
          setSecondEpipenRequired(null);
        },
      },
    ]);
  };

  const webTopInset = Platform.OS === "web" ? 16 : 0;
  const webBottomInset = Platform.OS === "web" ? 34 : 0;

  return (
    <View style={styles.root}>
      <KeyboardAwareScrollViewCompat
        contentContainerStyle={{
          paddingTop: insets.top + 8 + webTopInset,
          paddingBottom: 120 + insets.bottom + webBottomInset,
          paddingHorizontal: 16,
        }}
        bottomOffset={20}
        keyboardShouldPersistTaps="handled"
      >
        <SheetWrapper
          ref={shotRef}
          style={styles.sheet}
          {...(ViewShot ? { options: { format: "png", quality: 1 } } : {})}
        >
          {/* Header */}
          <View style={styles.headerRow}>
            <View style={{ flex: 1 }}>
              <MedlinkLogo size={56} />
              <Text style={styles.tagline}>by jetlogix</Text>
              <Text style={styles.relayNote}>Crew will relay via AirDrop · SMS · Email</Text>
            </View>
            <View style={styles.headerRight}>
              <Text style={styles.contact}>(602) 239-3627</Text>
              <Text style={styles.contact}>ACARS: PHXMACR</Text>
            </View>
          </View>

          <View style={styles.headerRule} />

          {/* SECTION: FA */}
          <Text style={styles.sectionTitle}>
            FLIGHT ATTENDANT WILL OBTAIN THE FOLLOWING:
          </Text>

          <View style={styles.row}>
            <View style={{ flex: 2 }}>
              <WriteLine
                label="Patient Name"
                value={form.patientName}
                onChangeText={(v) => set("patientName", v)}
                {...mic("patientName")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <WriteLine
                label="Seat No."
                value={form.seatNo}
                onChangeText={(v) => set("seatNo", v)}
              />
            </View>
          </View>

          <View style={[styles.row, { alignItems: "flex-end" }]}>
            <View style={{ flex: 1 }}>
              <WriteLine
                label="Patient Age"
                value={form.patientAge}
                onChangeText={(v) => set("patientAge", v)}
              />
            </View>
            <View style={styles.inlineChecks}>
              <Text style={styles.inlineLabel}>Sex:</Text>
              <CheckBox
                label="Male"
                checked={form.male}
                onToggle={() => toggle("male")}
              />
              <CheckBox
                label="Female"
                checked={form.female}
                onToggle={() => toggle("female")}
              />
            </View>
          </View>

          {/* ── S: Signs & Symptoms ── */}
          <SampleHeader letter="S" title="Signs & Symptoms" />
          <View style={styles.inlineChecks}>
            <Text style={styles.inlineLabel}>Conscious:</Text>
            <CheckBox
              label="Yes"
              checked={form.consciousYes}
              onToggle={() => toggle("consciousYes")}
            />
            <CheckBox
              label="No"
              checked={form.consciousNo}
              onToggle={() => toggle("consciousNo")}
            />
          </View>
          <View style={styles.cluster}>
            <ClusterRow
              label={"Signs\n(observable)"}
              value={form.signs}
              onChangeText={(v) => set("signs", v)}
              multiline
              minLines={2}
              {...mic("signs")}
            />
            <ClusterRow
              label={"Symptoms\n(reported)"}
              value={form.symptoms}
              onChangeText={(v) => set("symptoms", v)}
              multiline
              minLines={2}
              last
              {...mic("symptoms")}
            />
          </View>

          {/* ── A: Allergies ── */}
          <SampleHeader letter="A" title="Allergies" />
          <View style={styles.cluster}>
            <ClusterRow
              label={"Allergies\n(Food / Drug)"}
              value={form.allergies}
              onChangeText={(v) => set("allergies", v)}
              extra={
                <CheckBox
                  label="Nil known"
                  checked={form.allergiesNilKnown}
                  onToggle={() => toggle("allergiesNilKnown")}
                />
              }
              {...mic("allergies")}
            />
            <ClusterRow
              label="Reaction"
              value={form.allergiesReaction}
              onChangeText={(v) => set("allergiesReaction", v)}
              last
              {...mic("allergiesReaction")}
            />
          </View>

          {/* ── EpiPen Delivery Timer ── */}
          <View style={styles.epipenPanel}>
            <Pressable
              accessibilityRole="button"
              onPress={handleEpipenDelivered}
              style={({ pressed }) => [
                styles.epipenButton,
                pressed && { opacity: 0.8 },
              ]}
            >
              <Feather name="clock" size={14} color="#ffffff" />
              <Text style={styles.epipenButtonText}>
                EPIPEN DELIVERED AT
              </Text>
            </Pressable>
            {epipenDeliveries.length > 0 ? (
              <View style={styles.epipenStatus}>
                {epipenDeliveries.map((time, index) => (
                  <Text key={`${time}-${index}`} style={styles.epipenTime}>
                    {index === 0
                      ? `EpiPen delivered at ${time}`
                      : index === 1
                        ? `2nd EpiPen: ${time}`
                        : `${index + 1}th EpiPen: ${time}`}
                  </Text>
                ))}
                {epipenRemaining !== null && epipenRemaining > 0 ? (
                  <Text style={styles.epipenCountdown}>
                    {`Check patient in ${Math.floor(epipenRemaining / 60)}:${String(epipenRemaining % 60).padStart(2, "0")}`}
                  </Text>
                ) : epipenRemaining !== null ? (
                  <>
                    <Text style={styles.epipenReminder}>CHECK PATIENT</Text>
                    {epipenDeliveries.length === 1 ? (
                      <View style={styles.secondEpipenDecision}>
                        <Text style={styles.secondEpipenQuestion}>
                          2nd EpiPen required?
                        </Text>
                        <CheckBox
                          label="Yes"
                          checked={secondEpipenRequired === true}
                          onToggle={() => handleSecondEpipenDecision(true)}
                        />
                        <CheckBox
                          label="No"
                          checked={secondEpipenRequired === false}
                          onToggle={() => handleSecondEpipenDecision(false)}
                        />
                      </View>
                    ) : null}
                  </>
                ) : null}
              </View>
            ) : null}
          </View>

          {/* ── M: Medications ── */}
          <SampleHeader letter="M" title="Medications" />
          <View style={styles.cluster}>
            <ClusterRow
              label={"Medications\n(Rx / OTC / Supplements)"}
              value={form.medications}
              onChangeText={(v) => set("medications", v)}
              multiline
              minLines={2}
              {...mic("medications")}
            />
            <ClusterRow
              label="Last Taken"
              value={form.lastTaken}
              onChangeText={(v) => set("lastTaken", v)}
              last
              {...mic("lastTaken")}
            />
          </View>

          {/* ── P: Past Medical History ── */}
          <SampleHeader letter="P" title="Past Medical History" />
          <View style={styles.cluster}>
            <ClusterRow
              label={"Conditions /\nSurgeries / Episodes"}
              value={form.medicalHistory}
              onChangeText={(v) => set("medicalHistory", v)}
              multiline
              minLines={2}
              last
              {...mic("medicalHistory")}
            />
          </View>
          <View style={styles.inlineChecks}>
            <Text style={styles.inlineLabel}>Medical Alert Tag:</Text>
            <CheckBox
              label="Yes"
              checked={form.medAlertYes}
              onToggle={() => toggle("medAlertYes")}
            />
            <CheckBox
              label="No"
              checked={form.medAlertNo}
              onToggle={() => toggle("medAlertNo")}
            />
            <View style={{ flex: 1, minWidth: 140 }}>
              <WriteLine
                label="If yes, for"
                value={form.medAlertFor}
                onChangeText={(v) => set("medAlertFor", v)}
                {...mic("medAlertFor")}
              />
            </View>
          </View>

          {/* ── L: Last Oral Intake ── */}
          <SampleHeader letter="L" title="Last Oral Intake" />
          <View style={styles.cluster}>
            <ClusterRow
              label={"Last Food &\nDrink (what / when)"}
              value={form.lastFood}
              onChangeText={(v) => set("lastFood", v)}
              multiline
              minLines={2}
              {...mic("lastFood")}
            />
            <ClusterRow
              label="Last Bowel Movement"
              value={form.lastBowel}
              onChangeText={(v) => set("lastBowel", v)}
              last
              {...mic("lastBowel")}
            />
          </View>

          {/* ── E: Events Leading Up ── */}
          <SampleHeader letter="E" title="Events Leading Up to Incident" />
          <View style={styles.cluster}>
            <ClusterRow
              label={"What happened\nbefore onset?"}
              value={form.events}
              onChangeText={(v) => set("events", v)}
              multiline
              minLines={3}
              last
              {...mic("events")}
            />
          </View>

          {/* Medical personnel */}
          <View style={[styles.inlineChecks, { marginTop: 10 }]}>
            <Text style={styles.inlineLabel}>Medical personnel onboard:</Text>
            <CheckBox
              label="Yes"
              checked={form.personnelYes}
              onToggle={() => toggle("personnelYes")}
            />
            <CheckBox
              label="No"
              checked={form.personnelNo}
              onToggle={() => toggle("personnelNo")}
            />
            <View style={{ flex: 1, minWidth: 140 }}>
              <WriteLine
                label="What profession?"
                value={form.personnelProfession}
                onChangeText={(v) => set("personnelProfession", v)}
                {...mic("personnelProfession")}
              />
            </View>
          </View>

          <WriteLine
            label="Name"
            value={form.personnelName}
            onChangeText={(v) => set("personnelName", v)}
            {...mic("personnelName")}
          />

          <View style={styles.cluster}>
            <ClusterRow
              label="Care Initiated by Crew"
              value={form.careInitiated}
              onChangeText={(v) => set("careInitiated", v)}
              multiline
              minLines={2}
              last
              {...mic("careInitiated")}
            />
          </View>

          {/* SECTION: Vitals */}
          <Text style={styles.sectionTitle}>VITAL SIGNS:</Text>
          <Text style={styles.sectionNote}>
            (If available have onboard medical volunteer relay this information)
          </Text>

          <WriteLine
            label="Blood Pressure"
            value={form.bloodPressure}
            onChangeText={(v) => set("bloodPressure", v)}
            {...mic("bloodPressure")}
          />
          <WriteLine
            label="Pulse"
            value={form.pulse}
            onChangeText={(v) => set("pulse", v)}
            {...mic("pulse")}
          />
          <WriteLine
            label="Respirations"
            value={form.respirations}
            onChangeText={(v) => set("respirations", v)}
            {...mic("respirations")}
          />

          {/* SECTION: Flight crew */}
          <Text style={styles.sectionTitle}>
            FLIGHT CREW WILL RELAY THIS INFORMATION:
          </Text>

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <WriteLine
                label="Flight #"
                value={form.flight}
                onChangeText={(v) => set("flight", v)}
              />
            </View>
            <View style={{ flex: 1 }}>
              <WriteLine
                label="Date"
                value={form.date}
                onChangeText={(v) => set("date", v)}
                onFocus={() => {
                  if (!form.date) {
                    const now = new Date();
                    const formatted = now.toLocaleDateString("en-US", {
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                    });
                    const utcDateTime = now
                      .toISOString()
                      .slice(0, 16)
                      .replace("T", " ");
                    set("date", `${formatted} | UTC ${utcDateTime}`);
                  }
                }}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <WriteLine
                label="A/C Type"
                value={form.acType}
                onChangeText={(v) => set("acType", v)}
              />
            </View>
            <View style={{ flex: 1 }}>
              <WriteLine
                label="A/C Registration"
                value={form.acRegistration}
                onChangeText={(v) => set("acRegistration", v)}
              />
            </View>
          </View>

          <WriteLine
            label="Current Location"
            value={form.currentLocation}
            onChangeText={(v) => set("currentLocation", v)}
          />

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <WriteLine
                label="Departure Port"
                value={form.departurePort}
                onChangeText={(v) => set("departurePort", v)}
              />
            </View>
            <View style={{ flex: 1 }}>
              <WriteLine
                label="Destination Port"
                value={form.destinationPort}
                onChangeText={(v) => set("destinationPort", v)}
              />
            </View>
            <View style={{ flex: 1 }}>
              <WriteLine
                label="ETA"
                value={form.eta}
                onChangeText={(v) => set("eta", v)}
              />
            </View>
          </View>
        </SheetWrapper>
      </KeyboardAwareScrollViewCompat>

      {/* Action bar */}
      <View
        style={[
          styles.actionBar,
          { paddingBottom: 12 + insets.bottom + webBottomInset },
        ]}
      >
        <Pressable
          onPress={handleReset}
          style={({ pressed }) => [
            styles.secondaryBtn,
            pressed && { opacity: 0.7 },
          ]}
        >
          <Feather name="rotate-ccw" size={16} color="#1a1a1a" />
          <Text style={styles.secondaryBtnText}>Clear</Text>
        </Pressable>
        <Pressable
          onPress={handleExport}
          disabled={exporting}
          style={({ pressed }) => [
            styles.primaryBtn,
            (pressed || exporting) && { opacity: 0.85 },
          ]}
        >
          <Feather name="download" size={16} color="#ffffff" />
          <Text style={styles.primaryBtnText}>
            {exporting ? "Saving…" : "Save to Photos"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function SampleHeader({
  letter,
  title,
}: {
  letter: string;
  title: string;
}) {
  return (
    <View style={sampleHeaderStyles.row}>
      <View style={sampleHeaderStyles.badge}>
        <Text style={sampleHeaderStyles.letter}>{letter}</Text>
      </View>
      <Text style={sampleHeaderStyles.title}>{title}</Text>
    </View>
  );
}

const sampleHeaderStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
    marginBottom: 4,
  },
  badge: {
    width: 22,
    height: 22,
    borderRadius: 2,
    backgroundColor: "#c8102e",
    alignItems: "center",
    justifyContent: "center",
  },
  letter: {
    fontFamily: "Inter_700Bold",
    fontSize: 13,
    color: "#ffffff",
    lineHeight: 16,
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 12,
    color: "#1a1a1a",
    textDecorationLine: "underline",
    letterSpacing: 0.5,
  },
});

interface ClusterRowProps {
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  last?: boolean;
  multiline?: boolean;
  minLines?: number;
  extra?: React.ReactNode;
  onMicPress?: () => void;
  isRecording?: boolean;
}

function ClusterRow({
  label,
  value,
  onChangeText,
  last,
  multiline,
  minLines,
  extra,
  onMicPress,
  isRecording,
}: ClusterRowProps) {
  return (
    <View style={[clusterStyles.row, !last && clusterStyles.divider]}>
      <View style={clusterStyles.labelCell}>
        <Text style={clusterStyles.label}>{label}</Text>
      </View>
      <View style={clusterStyles.valueCell}>
        <WriteLine
          label=""
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          minLines={minLines}
          onMicPress={onMicPress}
          isRecording={isRecording}
        />
        {extra ? <View style={clusterStyles.extra}>{extra}</View> : null}
      </View>
    </View>
  );
}

const clusterStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    minHeight: 44,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
  },
  labelCell: {
    width: 130,
    borderRightWidth: 1,
    borderRightColor: "#1a1a1a",
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: "center",
  },
  label: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    color: "#1a1a1a",
  },
  valueCell: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: "center",
  },
  extra: {
    marginTop: 6,
    flexDirection: "row",
  },
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f0",
  },
  sheet: {
    backgroundColor: "#ffffff",
    padding: 14,
    borderWidth: 1,
    borderColor: "#1a1a1a",
    gap: 8,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  tagline: {
    fontFamily: "Inter_500Medium",
    fontSize: 9,
    color: "#1a1a1a",
    letterSpacing: 1,
    marginTop: 4,
    marginLeft: 2,
  },
  relayNote: {
    fontFamily: "Inter_400Regular",
    fontSize: 8,
    color: "#666666",
    marginTop: 2,
    marginLeft: 2,
  },
  headerRight: {
    alignItems: "flex-end",
    gap: 2,
  },
  contact: {
    fontFamily: "Inter_500Medium",
    fontSize: 10,
    color: "#1a1a1a",
  },
  headerRule: {
    height: 1,
    backgroundColor: "#1a1a1a",
    marginVertical: 6,
  },
  sectionTitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 12,
    color: "#1a1a1a",
    textDecorationLine: "underline",
    marginTop: 10,
  },
  sectionNote: {
    fontFamily: "Inter_400Regular",
    fontSize: 11,
    color: "#1a1a1a",
    marginBottom: 4,
  },
  row: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
  inlineChecks: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    flexWrap: "wrap",
    paddingVertical: 4,
  },
  inlineLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    color: "#1a1a1a",
  },
  cluster: {
    borderWidth: 1,
    borderColor: "#1a1a1a",
    marginVertical: 4,
  },
  actionBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: "rgba(245,245,240,0.96)",
    borderTopWidth: 1,
    borderTopColor: "#d9d9d2",
  },
  primaryBtn: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#c8102e",
    paddingVertical: 14,
    borderRadius: 6,
  },
  primaryBtnText: {
    color: "#ffffff",
    fontFamily: "Inter_700Bold",
    fontSize: 15,
    letterSpacing: 0.5,
  },
  secondaryBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#1a1a1a",
    paddingVertical: 14,
    borderRadius: 6,
  },
  secondaryBtnText: {
    color: "#1a1a1a",
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  epipenPanel: {
    marginTop: 6,
    gap: 6,
  },
  epipenButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#c8102e",
    paddingVertical: 10,
    borderRadius: 6,
  },
  epipenButtonText: {
    fontFamily: "Inter_700Bold",
    fontSize: 13,
    color: "#ffffff",
    letterSpacing: 0.5,
  },
  epipenStatus: {
    gap: 4,
  },
  epipenTime: {
    fontFamily: "Inter_500Medium",
    fontSize: 12,
    color: "#1a1a1a",
  },
  epipenCountdown: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 13,
    color: "#1a1a1a",
  },
  epipenReminder: {
    fontFamily: "Inter_700Bold",
    fontSize: 15,
    color: "#c8102e",
    letterSpacing: 1,
  },
  secondEpipenDecision: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginTop: 4,
    flexWrap: "wrap",
  },
  secondEpipenQuestion: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 13,
    color: "#1a1a1a",
  },
});
