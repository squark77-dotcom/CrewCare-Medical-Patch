import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface Props {
  size?: number;
}

export function MedlinkLogo({ size = 56 }: Props) {
  return (
    <View style={styles.row}>
      <View
        style={[
          styles.square,
          { width: size, height: size, borderRadius: size * 0.12 },
        ]}
      >
        <FontAwesome5
          name="plane"
          size={size * 0.55}
          color="#ffffff"
          style={{ transform: [{ rotate: "-30deg" }] }}
        />
      </View>
      <Text style={[styles.wordmark, { fontSize: size * 0.55 }]}>CrewCare</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  square: {
    backgroundColor: "#c8102e",
    alignItems: "center",
    justifyContent: "center",
  },
  wordmark: {
    fontFamily: "Inter_700Bold",
    color: "#1a1a1a",
    letterSpacing: 2,
  },
});
