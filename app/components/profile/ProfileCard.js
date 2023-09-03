import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS, SHADOWS } from "../../constants/theme";

const ProfileCard = ({
  image = require("../../../assets/images/profile.png"),
  time = "5 mins ago",
  name = "John Doe",
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Image resizeMode="contain" source={image} style={styles.image} />
        <View style={styles.cameraIcon}>
          <MaterialCommunityIcons name="camera" size={24} color={COLORS.text} />
        </View>
      </View>
      <View style={styles.rightTexts}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.rowText}>
          <Text style={styles.grayText}>Joined:</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  cameraIcon: {
    position: "absolute",
    top: -5,
    right: -15,
    padding: 5,
    backgroundColor: COLORS.white,
    borderRadius: "50%",
    ...SHADOWS.dark,
  },
  image: {
    width: 90,
    height: 90,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 15,
    paddingVertical: 20,
  },

  rightTexts: {
    marginLeft: 30,
  },
  name: {
    fontSize: 30,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
  },
  rowText: {
    flexDirection: "row",
    alignItems: "center",
  },
  grayText: {
    color: COLORS.cho,
    fontSize: 12,
    marginRight: 5,
  },
  time: {
    fontFamily: FONTS.semiBold,
    fontSize: 12,
    color: COLORS.text,
  },
});
