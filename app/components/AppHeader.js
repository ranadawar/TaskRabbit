import { StyleSheet, Text, View } from "react-native";
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
      <MaterialCommunityIcons
        name={leftIcon}
        size={size}
        color={leftIconColor}
        onPress={onPressLeft}
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
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
  rightText: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.white,
  },
});
