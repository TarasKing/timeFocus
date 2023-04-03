import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const Item = (item) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTitle}> - {item.title}</Text>
    </View>
  );
};

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.title}>You haven't focused on anything yet</Text>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things I've focused on:</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Item title={item.title} item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: spacing.md,
  },
  title: {
    color: colors.mustard,
    fontSize: fontSizes.lg,
    textAlign: "center",
    fontWeight: "bold",
  },
  item: {
    paddingTop: spacing.sm,
    // backgroundColor: colors.sage,
  },
  itemTitle: {
    fontSize: fontSizes.lg,
    color: colors.mustard,
  },
});
