import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

const SelectionComponent = ({ source }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Pressable
      style={[
        styles.mainContainer,
        { borderColor: isSelected ? COLORS.orange : COLORS.text },
      ]}
      onPress={toggleSelection}
    >
      <Image source={source} resizeMode="contain" style={styles.image} />
      <Text style={styles.title}>SelectionComponent</Text>
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
          color={COLORS.danger}
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
  },
});

export default SelectionComponent;
