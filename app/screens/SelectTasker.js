import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import TopComponent from "../components/tasker/TopComponent";
import ProfileCard from "../components/profile/ProfileCard";
import TaskerCard from "../components/tasker/TaskerCard";

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
    <AppScreen>
      <View style={{ FLEX: 1 }}>
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
