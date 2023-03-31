import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { RoundedButton } from "../comonents/RoundedButton";

export const Focus = () => {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focus feature</Text>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would you like to focus on?"
          value={focusSubject}
          onChangeText={(focusSubject) => setFocusSubject(focusSubject)}
          style={styles.textInput}
        />

        <View style={styles.buttonContainer}>
          <RoundedButton title="ADD" size={50} />
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
    padding: 15,
    justifyContent: "top",
    minWidth: "100%",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  buttonContainer: {
    justifyContent: "center",
  },
});
