import { useCallback, useRef, useState } from "react";
import { Alert, Platform } from "react-native";

// expo-speech-recognition requires a development build and is not bundled in
// Expo Go. We guard the import so the app loads normally; voice dictation
// just shows a friendly alert when the native module isn't present.
let ExpoSpeechRecognitionModule: any = null;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let useSpeechRecognitionEvent: (event: string, cb: (e: any) => void) => void =
  () => {};
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const m = require("expo-speech-recognition");
  ExpoSpeechRecognitionModule = m.ExpoSpeechRecognitionModule;
  useSpeechRecognitionEvent = m.useSpeechRecognitionEvent;
} catch {
  // Running in Expo Go — native module not available
}

export function useDictation() {
  const [activeDictationKey, setActiveDictationKey] = useState<string | null>(
    null,
  );
  const onTranscriptRef = useRef<((text: string) => void) | null>(null);
  const currentValueRef = useRef<string>("");
  const activeKeyRef = useRef<string | null>(null);

  useSpeechRecognitionEvent("result", (e) => {
    const transcript = e.results[0]?.transcript ?? "";
    if (!transcript) return;
    const current = currentValueRef.current;
    const sep =
      current.length > 0 && !current.endsWith(" ") && !current.endsWith("\n")
        ? " "
        : "";
    onTranscriptRef.current?.(current + sep + transcript);
  });

  useSpeechRecognitionEvent("end", () => {
    setActiveDictationKey(null);
    activeKeyRef.current = null;
  });

  useSpeechRecognitionEvent("error", (e) => {
    // "aborted" is fired when we call abort() intentionally — not a real error.
    if (e.error !== "aborted" && e.error !== "no-speech") {
      Alert.alert("Dictation error", e.message ?? e.error ?? "Unknown error");
    }
    setActiveDictationKey(null);
    activeKeyRef.current = null;
  });

  const startDictating = useCallback(
    async (
      key: string,
      currentValue: string,
      onTranscript: (text: string) => void,
    ) => {
      if (Platform.OS === "web") {
        Alert.alert(
          "Not supported",
          "Voice dictation is not available in the web preview. Use the iOS app.",
        );
        return;
      }

      // If this same field is already listening, stop it (toggle off).
      if (activeKeyRef.current === key) {
        ExpoSpeechRecognitionModule.stop();
        return;
      }

      // If a different field is listening, abort it first.
      if (activeKeyRef.current !== null) {
        ExpoSpeechRecognitionModule.abort();
        setActiveDictationKey(null);
        activeKeyRef.current = null;
        // Small delay to let the previous session fully close.
        await new Promise((r) => setTimeout(r, 120));
      }

      const perm = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
      if (!perm.granted) {
        Alert.alert(
          "Microphone access needed",
          "Allow Crew Care to access the microphone in Settings to use voice dictation.",
        );
        return;
      }

      currentValueRef.current = currentValue;
      onTranscriptRef.current = onTranscript;
      activeKeyRef.current = key;
      setActiveDictationKey(key);

      ExpoSpeechRecognitionModule.start({
        lang: "en-US",
        interimResults: false,
        continuous: false,
      });
    },
    [],
  );

  return { activeDictationKey, startDictating };
}
