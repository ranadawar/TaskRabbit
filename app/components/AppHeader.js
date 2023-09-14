import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants/theme";

const AppHeader = ({
  leftIcon = "chevron-left",
  rightText,
  rightIcon,
  size = 24,
  leftIconColor = COLORS.white,
  rightTextStyle,
  titleStyle,
  title = "Header",
  rightIconColor,
  onPressLeft,
  onPressRight,
}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        resizeMode="contain"
        style={{ width: 18, height: 18 }}
        source={require("../../assets/icons/chevSign.png")}
      />
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={[styles.title, titleStyle]}
      >
        {title}
      </Text>
      {rightIcon && (
        <MaterialCommunityIcons
          name={rightIcon}
          color={rightIconColor}
          size={size}
          onPress={onPressRight}
        />
      )}
      {rightText && (
        <Text onPress={onPressRight} style={[styles.rightText, rightTextStyle]}>
          {rightText}
        </Text>
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingVertical: 25,
    backgroundColor: COLORS.secondary,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,

    position: "absolute",
    //center of the View both horizontal and vertically
    left: 140,
  },
  rightText: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.white,
  },
});
