import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants/theme";

const SelectionComponent = ({ source, title = "Drywall" }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Pressable
      style={[
        styles.mainContainer,
        { borderColor: isSelected ? "#333333" : "#E3E3E3" },
      ]}
      onPress={toggleSelection}
    >
      <View style={styles.rowInner}>
        <Image source={source} resizeMode="contain" style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      {isSelected ? (
        <MaterialCommunityIcons
          name="check-circle"
          color={COLORS.orange}
          size={33}
        />
      ) : (
        <MaterialCommunityIcons
          name="circle-outline"
          size={33}
          color={COLORS.gray}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 15,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 30,
  },
  rowInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#333333",
    fontFamily: FONTS.medium,
    fontSize: 18,
  },
});

export default SelectionComponent;
