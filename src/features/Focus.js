import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";

export const Focus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focus feature</Text>
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
});
