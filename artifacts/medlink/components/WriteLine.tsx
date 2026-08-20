import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  multiline?: boolean;
  minLines?: number;
  placeholder?: string;
  onMicPress?: () => void;
  isRecording?: boolean;
  onFocus?: () => void;
}

export function WriteLine({
  label,
  value,
  onChangeText,
  multiline = false,
  minLines = 1,
  placeholder,
  onMicPress,
  isRecording = false,
  onFocus,
}: Props) {
  return (
    <View style={styles.wrap}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.inputRow}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor="#b5b5ad"
          style={[
            styles.input,
            multiline && {
              minHeight: 22 * minLines + 12,
              textAlignVertical: "top",
              paddingTop: 6,
            },
            onMicPress && styles.inputWithMic,
          ]}
        />
        {onMicPress ? (
          <Pressable
            onPress={onMicPress}
            hitSlop={8}
            style={({ pressed }) => [
              styles.micBtn,
              isRecording && styles.micBtnActive,
              pressed && { opacity: 0.6 },
            ]}
          >
            <Feather
              name="mic"
              size={15}
              color={isRecording ? "#ffffff" : "#888880"}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 4,
  },
  label: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    color: "#5c5c5c",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    color: "#1a1a1a",
    paddingVertical: 4,
    paddingHorizontal: 0,
    minHeight: 28,
  },
  inputWithMic: {
    paddingRight: 4,
  },
  micBtn: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#e8e8e2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 3,
    marginLeft: 4,
  },
  micBtnActive: {
    backgroundColor: "#c8102e",
  },
});
