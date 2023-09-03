import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerSecond}></View>
      <View></View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  innerSecond: {},
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
