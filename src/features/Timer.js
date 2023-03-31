import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Countdown } from "../comonents/Countdown";
import { spacing, fontSizes } from "../utils/sizes";
import { RoundedButton } from "../comonents/RoundedButton";

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          onProgress={() => {}}
          isPaused={!isStarted}
          onEnd={() => {}}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
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
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
});
