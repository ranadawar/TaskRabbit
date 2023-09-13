import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import DescribeTask from "../screens/DescribeTask";
import TvMounting from "../screens/TvMounting";
import AppNavigator from "./AppNavigator";
import WelcomeScreen from "../screens/auth/WelcomeScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={SignUpScreen} />
      <Stack.Screen name="describe" component={DescribeTask} />
      <Stack.Screen name="mount" component={TvMounting} />
      <Stack.Screen name="homee" component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
