import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const SolidColorBtn = ({ colorText = COLORS.text, bgColor, title }) => {
  return (
    <Pressable style={[styles.mainContainer, { backgroundColor: bgColor }]}>
      <Text
        numOfLines={2}
        multiLine={true}
        style={[styles.title, { color: colorText }]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default SolidColorBtn;

const styles = StyleSheet.create({
  mainContainer: {
    height: 70,
    padding: 12,
    borderRadius: 15,
    width: 140,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    fontSize: 14,
  },
});
