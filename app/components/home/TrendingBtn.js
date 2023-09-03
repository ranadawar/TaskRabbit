import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTS } from "../../constants/theme";

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
    padding: 12,
  },
  title: {
    width: 120,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    fontSize: 14,
  },
});