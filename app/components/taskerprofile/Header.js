import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../constants/theme";

const Header = ({ title = "Tasker Profile", onPressBack }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <MaterialCommunityIcons
        name="chevron-left"
        color={COLORS.text}
        size={33}
        style={styles.icon}
        onPress={onPressBack}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    left: 20,
    top: 14,
    bottom: 15,
  },
  mainContainer: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    textAlign: "center",
  },
});
