import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";

const CategroyBtn = ({
  icon = require("../../../assets/icons/cleaning.png"),
  onPress,
  title = "Cleaning",
}) => {
  return (
    <Pressable onPress={onPress} style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default CategroyBtn;

const styles = StyleSheet.create({
  iconContainer: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.gray,
    height: 70,
    width: 70,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  image: {
    width: 38,
    height: 38,
  },
  mainContainer: {
    width: 98,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 13,
    color: COLORS.text,
  },
});
