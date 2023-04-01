import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";
import { spacing, fontSizes, button } from "../utils/sizes";

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton
          size={button.md}
          title="10"
          onPress={() => onChangeTime(10)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={button.md}
          title="15"
          onPress={() => onChangeTime(15)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={button.md}
          title="20"
          onPress={() => onChangeTime(20)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
});
