import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import AppHeader from "../components/AppHeader";
import { COLORS } from "../constants/theme";
import TaskNavigator from "../navigations/TaskNavigator";
import { LinearGradient } from "expo-linear-gradient";

const Task = () => {
  return (
    <AppScreen>
      <AppHeader
        title="Task"
        titleStyle={{ color: COLORS.text, textAlign: "center" }}
        rightIcon="shopping-outline"
        leftIcon="chevron-left"
        leftIconColor={COLORS.text}
      />
      <TaskNavigator />
      <LinearGradient style={styles.absolute} colors={["#DFFFEE", "#B0F5F1"]} />
    </AppScreen>
  );
};

export default Task;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: -1,
  },
});
