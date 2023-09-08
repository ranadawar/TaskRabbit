import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../constants/theme";

const TaskerCard = ({
  bio = "I’m here for of your TV mounting needs, big or small. I have all the tools needed to make sure everything is secure and level...",
  onPress,
  image = require("../../../assets/images/profile.png"),
  name = "John Doe",
  rating = 4.5,
  totalReviews = 100,
  numOfSpecificJobs = 12,
  price = 20,
  specificJobTitle = "TV Mounting",
  numOfOverallJobs = 100,
  overallJobTitle = "Mounting",
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View>
          <Image resizeMode="contain" style={styles.pImage} source={image} />
        </View>
        <View style={styles.allTexts}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.innerContainer}>
            <MaterialCommunityIcons
              name="star"
              color={COLORS.yellow}
              size={24}
            />
            <Text style={styles.ratingText}>
              {rating} ({totalReviews} Reviews)
            </Text>
          </View>
          <Text style={styles.specificText}>
            {numOfSpecificJobs} {specificJobTitle} tasks
          </Text>
          <Text style={styles.overallText}>
            {numOfOverallJobs} {overallJobTitle} tasks Overall
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bioText}>{bio}</Text>
        <Text style={styles.profileLink} onPress={onPress}>
          See Profile
        </Text>
      </View>

      <Text style={styles.priceText}>$ {price}/hr</Text>
    </View>
  );
};

export default TaskerCard;

const styles = StyleSheet.create({
  allTexts: {
    marginLeft: 20,
    marginTop: 20,
  },
  bioText: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: COLORS.text,
  },
  bottomContainer: {
    backgroundColor: COLORS.lightBg,
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  mainContainer: {
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
  },
  overallText: {
    fontFamily: FONTS.regular,
    color: COLORS.cho,
    marginTop: 5,
  },
  pImage: {
    width: 70,
    height: 70,
  },
  priceText: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    position: "absolute",
    top: 50,
    right: 20,
  },
  profileLink: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    marginTop: 10,
  },
  specificText: {
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
    marginTop: 5,
  },
  ratingText: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    marginLeft: 5,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
