import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../constants/theme";

const HalfHeader = ({
  title = "title",
  leftIcon = "chevron-left",
  rightIcon,
  rightIconColor = COLORS.text,
  onPressLeft,
  onPressRight,
  rightText,
  rightTextStyle,
}) => {
  return (
    <View style={styles.mainContainer}>
      <MaterialCommunityIcons
        name="chevron-left"
        color={COLORS.text}
        size={26}
        onPress={onPressLeft}
      />
      <Text style={styles.title}>{title}</Text>
      {rightIcon && (
        <MaterialCommunityIcons
          name={rightIcon}
          color={rightIconColor}
          size={26}
          onPress={onPressRight}
        />
      )}
      {rightText && (
        <Text
          onPress={onPressRight}
          style={[styles.rightText, rightTextStyle]}
        ></Text>
      )}
    </View>
  );
};

export default HalfHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
  },
});
