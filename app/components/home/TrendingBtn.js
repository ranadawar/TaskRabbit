import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS } from "../../constants/theme";

const TrendingBtn = ({ image, onPress, title }) => {
  return (
    <Pressable style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image source={image} resizeMode="cover" style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default TrendingBtn;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
  },
  imageContainer: {
    height: 130,
  },
  mainContainer: {
    marginRight: 18,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    ...SHADOWS.dark,
  },
  title: {
    width: 120,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    fontSize: 14,
  },
});
