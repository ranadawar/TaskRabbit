import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const TaskerInfo = ({
  image = require("../../../assets/images/profile.png"),
  name = "Johnson J.",
  onPressReport,
  isReport,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerRow}>
        <Image resizeMode="contain" style={styles.image} source={image} />
        <Text style={styles.name}>{name}</Text>
      </View>
      {!isReport && (
        <TouchableOpacity style={styles.reportContainer}>
          <Image
            resizeMode="contain"
            style={styles.reportImage}
            source={require("../../../assets/icons/flag.png")}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TaskerInfo;

const styles = StyleSheet.create({
  image: {
    width: 52,
    height: 52,
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainContainer: {
    padding: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontFamily: FONTS.semiBold,
    fontSize: 24,
    marginLeft: 10,
  },
  reportImage: {
    width: 25,
    height: 25,
  },
  reportContainer: {
    padding: 12,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
