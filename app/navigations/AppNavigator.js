import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeListing from "../screens/HomeListing";
import TaskReceipt from "../screens/TaskReceipt";
import SelectTasker from "../screens/SelectTasker";
import Profile from "../screens/Profile";
import { COLORS } from "../constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import TaskerStack from "./TaskerStack";
import Task from "../screens/Task";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeListing}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Image
                resizeMode="contain"
                source={require("../../assets/icons/homec.png")}
                style={{ width: size, height: size }}
              />
            ) : (
              <Image
                resizeMode="contain"
                source={require("../../assets/icons/home.png")}
                style={{ width: size, height: size }}
              />
            ),
          tabBarActiveTintColor: COLORS.secondary,
          tabBarInactiveTintColor: COLORS.primaryGreen,
        }}
      />
      <Tab.Screen
        name="Task"
        component={Task}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Image
                resizeMode="contain"
                source={require("../../assets/icons/taskc.png")}
                style={{ width: size, height: size }}
              />
            ) : (
              <Image
                resizeMode="contain"
                source={require("../../assets/icons/task.png")}
                style={{ width: size, height: size }}
              />
            ),
          tabBarActiveTintColor: COLORS.secondary,
          tabBarInactiveTintColor: COLORS.primaryGreen,
        }}
      />
      <Tab.Screen
        name="Taskers"
        component={TaskerStack}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <MaterialCommunityIcons
                name="heart"
                color={COLORS.secondary}
                size={size}
              />
            ) : (
              <MaterialCommunityIcons
                name="heart-outline"
                color={COLORS.primaryGreen}
                size={size}
              />
            ),
          tabBarActiveTintColor: COLORS.secondary,
          tabBarInactiveTintColor: COLORS.primaryGreen,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Image
                resizeMode="contain"
                source={require("../../assets/icons/profilec.png")}
                style={{ width: size, height: size }}
              />
            ) : (
              <Image
                resizeMode="contain"
                source={require("../../assets/icons/profile.png")}
                style={{ width: size, height: size }}
              />
            ),
          tabBarActiveTintColor: COLORS.secondary,
          tabBarInactiveTintColor: COLORS.primaryGreen,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});