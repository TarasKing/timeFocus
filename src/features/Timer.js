import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Countdown } from "../comonents/Countdown";
export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown onProgress={() => {}} isPaused onEnd={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    backgroundColor: "blue",
  },
});
