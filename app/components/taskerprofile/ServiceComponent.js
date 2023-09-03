import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const ServiceComponent = ({
  image = require("../../../assets/icons/van.png"),
  title = "Vehicles: Pickup Truck",
}) => {
  return (
    <View style={styles.mainContainer}>
      <Image resizeMode="contain" source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ServiceComponent;

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.text,
    marginLeft: 15,
  },
});
