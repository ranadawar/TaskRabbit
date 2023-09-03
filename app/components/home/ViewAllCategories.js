import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../constants/theme";

const ViewAllCategories = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.category}>Categories</Text>
      <View style={styles.innerRow}>
        <Text style={styles.viewAll}>View All</Text>
        <MaterialCommunityIcons
          color={COLORS.danger}
          name="chevron-right"
          size={26}
        />
      </View>
    </View>
  );
};

export default ViewAllCategories;

const styles = StyleSheet.create({
  category: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingVertical: 15,
  },
  viewAll: {
    color: COLORS.danger,
  },
});
