import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";

const FilterBtn = ({ bgColor = "#81E7D6", title }) => {
  return (
    <Pressable style={[styles.mainContainer, { backgroundColor: bgColor }]}>
      <Text numberOfLines={1} adjustToFontSize>
        {title}
      </Text>
    </Pressable>
  );
};

export default FilterBtn;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: "20%",
    marginHorizontal: 5,
    minWidth: 80,
    maxWidth: 150,
  },
});
