import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import TopComponent from "../components/tasker/TopComponent";
import ProfileCard from "../components/profile/ProfileCard";
import TaskerCard from "../components/tasker/TaskerCard";
import { COLORS } from "../constants/theme";

const taskers = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "John Doe",
  },
  {
    id: 3,
    name: "John Doe",
  },
  {
    id: 4,
    name: "John Doe",
  },
];

const SelectTasker = ({ navigation }) => {
  return (
    <AppScreen style={{ backgroundColor: "#DFFFEE", paddingTop: 60 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView>
          <TopComponent onPressBack={() => navigation.goBack()} />
          {taskers.map((tasker) => (
            <TaskerCard
              key={tasker.id}
              tasker={tasker}
              onPress={() => navigation.navigate("taskerProfile")}
            />
          ))}
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default SelectTasker;

const styles = StyleSheet.create({});
