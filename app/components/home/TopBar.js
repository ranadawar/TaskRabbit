import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../constants/theme";

const TopBar = ({ location = "Denvor" }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <MaterialCommunityIcons
          name="map-marker"
          color={COLORS.white}
          size={28}
        />
        <Text style={styles.location}>{location}</Text>
      </View>
      <View>
        <MaterialCommunityIcons name="magnify" color={COLORS.white} size={28} />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: 16,
    marginLeft: 7,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
