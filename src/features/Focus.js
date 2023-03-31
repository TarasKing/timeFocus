import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { spacing, button } from "../utils/sizes";
import { RoundedButton } from "../comonents/RoundedButton";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focus feature</Text>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would you like to focus on?"
          value={subject}
          onChangeText={(subject) => setSubject(subject)}
          style={styles.textInput}
        />

        <View style={styles.buttonContainer}>
          <RoundedButton
            title="ADD"
            size={button.sm}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: colors.mustard,
    fontWeight: "bold",
  },
  inputContainer: {
    padding: spacing.md,
    justifyContent: "top",
    minWidth: "100%",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  buttonContainer: {
    justifyContent: "center",
  },
});
