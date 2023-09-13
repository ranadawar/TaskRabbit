import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SignOutBtn from "../profile/SignOutBtn";
import { COLORS, FONTS } from "../../constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import RatingBar from "./RatingBar";

const RatingContainer = ({ rating = "2.5", numOfReviews = "9" }) => {
  const percentage = "50%";
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.topRating}>
        <Text style={styles.ratingText}>Rating & Reviews</Text>
        <SignOutBtn
          title="All Mountings"
          fontSize={12}
          style={{ paddingHorizontal: 15, paddingVertical: 5 }}
        />
      </View>
      <View style={styles.innerRow}>
        <MaterialCommunityIcons name="star" size={30} color={COLORS.danger} />
        <Text style={styles.bold}>{rating}</Text>
        <Text style={styles.reviewText}>({numOfReviews} Reviews)</Text>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.ratingD}>{rating} stars</Text>
        <RatingBar rating={2} />
        <Text style={styles.percentage}>{percentage}</Text>
      </View>
    </View>
  );
};

export default RatingContainer;

const styles = StyleSheet.create({
  bold: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.text,
    marginRight: 10,
    marginLeft: 10,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  percentage: {
    fontSize: 16,
    fontFamily: FONTS.regular,
  },
  ratingContainer: {
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    paddingBottom: 10,
  },
  reviewText: {
    fontFamily: FONTS.medium,
    fontSize: 20,
    color: COLORS.text,
  },
  ratingText: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
  },
  ratingD: {
    fontFamily: FONTS.semiBold,
    fontSize: 16,
    color: COLORS.danger,
  },
  topRating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
