import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
  style,
  iconColor,
  rightImage,
  onPressRightImage,
  rightImageStyle,
}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <Image
        source={require("../../../assets/icons/describe.png")}
        resizeMode="contain"
        style={{ width: 20, height: 20 }}
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
      {rightImage && (
        <TouchableOpacity style={rightImageStyle} onPress={onPressRightImage}>
          <Image
            source={rightImage}
            resizeMode="contain"
            style={styles.rightImageStyle}
          />
        </TouchableOpacity>
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
  rightImageStyle: {
    width: 15,
    height: 15,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
  },
});
