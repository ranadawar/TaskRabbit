import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";

const SocialRegisterBtn = ({ source, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.mainContainer}>
      <Image resizeMode="contain" style={styles.image} source={source} />
    </Pressable>
  );
};

export default SocialRegisterBtn;

const styles = StyleSheet.create({
  image: {
    width: 26.5,
    height: 26.5,
  },
  mainContainer: {
    width: 55,
    height: 55,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
    marginVertical: 10,
  },
});
