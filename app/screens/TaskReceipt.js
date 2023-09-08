import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import TaskerInfo from "../components/task/TaskerInfo";
import RowItem from "../components/task/RowItem";
import { COLORS } from "../constants/theme";
import Separator from "../components/Separator";

const TaskReceipt = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TaskerInfo />

        <View style={styles.topContainer1}>
          <RowItem />
          <Separator />
          <RowItem
            leftText="Rate"
            isDollar={true}
            isPerHour={true}
            rightText={45}
          />
          <Separator />
          <RowItem leftText="Hours" rightText="2:30" />
          <Separator />
          <RowItem
            leftText="Trust & Support Fees"
            rightText="39"
            isDollar={true}
          />
          <Separator />
          <RowItem leftText="Expenses" rightText="0" isDollar={true} />
        </View>

        <View style={styles.topContainer}>
          <RowItem leftText="Cost of Task" rightText="39" isDollar={true} />
          <Separator />
          <RowItem
            leftText="Promo"
            rightText="10"
            isDollar={true}
            isPromo={true}
            rightTextStyle={{ color: COLORS.danger }}
          />

          <RowItem
            leftText="Total"
            rightText="142"
            isDollar={true}
            leftTextStyle={{ color: COLORS.white }}
            rightTextStyle={{ color: COLORS.white }}
            style={{
              backgroundColor: COLORS.black,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
            }}
          />
        </View>
      </ScrollView>

      <LinearGradient style={styles.absolute} colors={["#DFFFEE", "#B0F5F1"]} />
    </View>
  );
};

export default TaskReceipt;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: -1,
  },
  topContainer: {
    marginHorizontal: 20,
    paddingTop: 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: 30,
    backgroundColor: COLORS.white,
    overflow: "hidden",
    borderRadius: 20,
  },
  topContainer1: {
    marginHorizontal: 20,
    padding: 5,
    borderRadius: 20,
    marginBottom: 30,
    backgroundColor: COLORS.white,
  },
});
