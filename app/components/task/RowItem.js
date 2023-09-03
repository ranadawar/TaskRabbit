import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const RowItem = ({
  leftText = "Date of Task",
  leftTextStyle,
  rightText = "Nov 30,2023",
  isDollar,
  isPromo,
  isPerHour,
  image,
  rightTextStyle,
  style,
}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <View style={styles.innerRow}>
        {image && (
          <Image source={image} resizeMode="contain" style={styles.image} />
        )}
        <Text style={[styles.leftText, leftTextStyle]}>{leftText}</Text>
      </View>
      {rightText && (
        <Text style={[styles.rightText, rightTextStyle]}>
          {isPromo ? "-" : ""}
          {isDollar ? "$" : ""}

          {rightText}
          {isPerHour ? "/hr " : ""}
        </Text>
      )}
    </View>
  );
};

export default RowItem;

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  innerRow: {
    flexDirection: "row",
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
    backgroundColor: COLORS.white,
  },
  leftText: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.text,
  },
  rightText: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.text,
  },
});
