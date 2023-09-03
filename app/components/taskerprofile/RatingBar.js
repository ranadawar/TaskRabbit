import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/theme";

const RatingBar = ({ rating }) => {
  const filledPercentage = (rating / 5) * 100;

  return (
    <View style={styles.container}>
      <View style={[styles.fill, { width: `${filledPercentage}%` }]} />
      <View style={styles.empty} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 5,
    width: Dimensions.get("window").width / 1.8,
    borderRadius: 10,
    overflow: "hidden",
  },
  fill: {
    backgroundColor: COLORS.danger, // Change this color to your liking
    flex: 1,
  },
  empty: {
    backgroundColor: "lightgray", // Change this color to your liking
    flex: 1,
  },
});

export default RatingBar;
