import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TaskReceipt from "../screens/TaskReceipt";
import TaskChat from "../screens/TaskChat";
import TaskInfo from "../screens/TaskInfo";
import { COLORS, FONTS } from "../constants/theme";

const Tab = createMaterialTopTabNavigator();

const TaskNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.danger,
        tabBarInactiveTintColor: COLORS.text,
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: FONTS.semiBold,
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.danger,
          width: "23%",
          marginLeft: 20,
          marginRight: 20,
        },
      }}
    >
      <Tab.Screen name="Receipt" component={TaskReceipt} />
      <Tab.Screen name="Task-Info" component={TaskInfo} />
      <Tab.Screen name="Chat" component={TaskChat} />
    </Tab.Navigator>
  );
};

export default TaskNavigator;

const styles = StyleSheet.create({});
