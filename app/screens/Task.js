import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import AppHeader from "../components/AppHeader";
import { COLORS, FONTS } from "../constants/theme";
import TaskNavigator from "../navigations/TaskNavigator";
import { LinearGradient } from "expo-linear-gradient";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Task = () => {
  return (
    <AppScreen>
      <View style={[styles.main, styles.row]}>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={30}
            color={COLORS.text}
          />
          <Text style={styles.task}>Task</Text>
        </View>
        <Text style={styles.mainTitle}>Task</Text>
        <Image
          resizeMode="contain"
          source={require("../../assets/icons/gift.png")}
          style={{ width: 25, height: 25, marginRight: 5 }}
        />
      </View>
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
  main: {
    padding: 12,
    marginTop: 15,
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  task: {
    color: COLORS.text,
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
  mainTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: 20,
    marginLeft: -40,
  },
});
