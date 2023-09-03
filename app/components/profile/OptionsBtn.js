import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../constants/theme";

const OptionsBtn = ({
  image = require("../../../assets/icons/security.png"),
  title = "Account Security",
  onPress,
}) => {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <View style={styles.innerRow}>
        <View style={styles.imageContainer}>
          <Image source={image} resizeMode="contain" style={styles.image} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <MaterialCommunityIcons name="chevron-right" size={24} color="#333333" />
    </Pressable>
  );
};

export default OptionsBtn;

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
  imageContainer: {
    padding: 7,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  title: {
    marginLeft: 15,
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
});
