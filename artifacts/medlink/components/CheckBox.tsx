import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
}

export function CheckBox({ label, checked, onToggle }: CheckBoxProps) {
  return (
    <Pressable
      onPress={onToggle}
      style={styles.row}
      hitSlop={6}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
    >
      <View style={styles.box}>
        {checked ? <Text style={styles.x}>X</Text> : null}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  box: {
    width: 24,
    height: 24,
    borderWidth: 1.5,
    borderColor: "#1a1a1a",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  x: {
    fontSize: 18,
    fontFamily: "Inter_700Bold",
    color: "#c8102e",
    lineHeight: 20,
  },
  label: {
    fontSize: 15,
    fontFamily: "Inter_500Medium",
    color: "#1a1a1a",
  },
});
