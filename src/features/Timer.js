import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { Countdown } from "../components/Countdown";
import { ProgressBar } from "react-native-paper";
import { spacing, fontSizes } from "../utils/sizes";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/RoundedButton";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          onProgress={(progress) => setProgress(progress)}
          isPaused={!isStarted}
          onEnd={() => {
            Vibration.vibrate(PATTERN);
          }}
          minutes={minutes}
        />
        <View style={{ paddingTop: spacing.xl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View
        style={{
          paddingTop: spacing.sm,
          paddingLeft: spacing.sm,
          paddingRight: spacing.sm,
        }}
      >
        <ProgressBar
          color={colors.mustard}
          style={{
            height: spacing.sm,
            backgroundColor: colors.sage,
          }}
          progress={progress}
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
    // backgroundColor: "red",
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    // backgroundColor: "blue",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  title: {
    color: colors.mustard,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: fontSizes.md,
  },
  task: {
    color: colors.mustard,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: fontSizes.lg,
  },
});
