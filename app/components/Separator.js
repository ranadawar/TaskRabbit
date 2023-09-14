import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";

const Separator = ({ isHalf, style }) => {
  return (
    <View style={styles.veryMains}>
      {isHalf && <View style={styles.second} />}
      <View style={[styles.mainContainer, style]} />
    </View>
  );
};

export default Separator;

const styles = StyleSheet.create({
  mainContainer: {
    height: 2,
    backgroundColor: COLORS.gray,
    flex: 1,
  },
  second: {
    height: 3,
    backgroundColor: COLORS.secondary,
    width: 135,
  },
  veryMains: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
});
