import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS, SHADOWS } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import FilterBtn from "./FilterBtn";

const TopComponent = ({ onPressBack }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="chevron-left"
          color={COLORS.text}
          size={30}
          onPress={onPressBack}
        />
        <Text style={styles.selectText}>Select a Tasker</Text>
        <Image
          resizeMode="contain"
          source={require("../../../assets/icons/filter.png")}
          style={styles.filterIcon}
        />
      </View>

      <View style={styles.btnContainer}>
        <FilterBtn title="Within a week" />
        <FilterBtn title="Flexible" />
        <FilterBtn title="Price" bgColor="#81E7D6" />
      </View>

      <View style={styles.filteredContainer}>
        <Text style={styles.filteredTExt}>Sorted by: Recommended</Text>
      </View>

      <LinearGradient style={styles.linear} colors={["#DFFFEE", "#B0F5F1"]} />
    </View>
  );
};

export default TopComponent;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 25,
  },
  filterIcon: {
    width: 25,
    height: 25,
  },
  filteredContainer: {
    backgroundColor: COLORS.white,
    width: Dimensions.get("window").width - 140,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
    ...SHADOWS.dark,
  },
  filteredTExt: {
    fontFamily: FONTS.regular,
    fontSize: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  linear: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  mainContainer: {
    height: 171,
  },
  selectText: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
  },
});
