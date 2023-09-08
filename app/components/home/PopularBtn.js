import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const PopularBtn = ({
  image = require("../../../assets/images/garden.png"),
  onPress,
  title = "Minor Home Repairs",
}) => {
  return (
    <Pressable onPress={onPress} style={styles.mainContainer}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default PopularBtn;

const styles = StyleSheet.create({
  mainContainer: {
    marginRight: 10,
  },
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: 12,
    color: COLORS.text,
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 100,
    overflow: "hidden",
    borderRadius: 10,
  },
});
