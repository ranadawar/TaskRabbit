import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectTasker from "../screens/SelectTasker";
import TaskerProfile from "../screens/TaskerProfile";

const Stack = createNativeStackNavigator();

const TaskerStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tasker" component={SelectTasker} />
      <Stack.Screen name="taskerProfile" component={TaskerProfile} />
    </Stack.Navigator>
  );
};

export default TaskerStack;

const styles = StyleSheet.create({});
