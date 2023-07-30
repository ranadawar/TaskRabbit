import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";

const AppButton = ({ title = "Button", onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.mainContainer, style]} onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.secondaryGreen,
    padding: 17,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textStyle: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
});
