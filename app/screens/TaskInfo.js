import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import TaskerInfo from "../components/task/TaskerInfo";
import RowItem from "../components/task/RowItem";
import Separator from "../components/Separator";
import { COLORS, FONTS } from "../constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const TaskInfo = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TaskerInfo />

        <View style={styles.topContainer}>
          <RowItem image={require("../../assets/icons/date.png")} />
          <Separator />
          <RowItem
            leftText="Price Details"
            image={require("../../assets/icons/pricetag.png")}
            rightText={false}
          />
          <RowItem
            leftText="Hourly Rate"
            isDollar={true}
            rightText="45"
            isPerHour={true}
          />
          <RowItem
            leftText="Trust & Support Fees"
            isDollar={true}
            rightText="15"
            isPerHour={true}
          />
          <RowItem
            leftText="Total Rate"
            isDollar={true}
            rightText="61.57"
            isPerHour={true}
          />
          <Separator />
          <RowItem
            image={require("../../assets/icons/location.png")}
            leftText="Location"
            rightText="5717 Post Oak Boulevard "
            rightTextStyle={{ width: 120, textAlign: "right" }}
          />
        </View>

        <View style={styles.btn}>
          <Text style={styles.details}>Your Task Details</Text>
          <Image
            source={require("../../assets/icons/chevCircle.png")}
            resizeMode="contain"
            style={{ width: 28, height: 28 }}
          />
        </View>

        <View style={styles.btns}>
          <Image
            style={styles.imagee}
            source={require("../../assets/images/btn.png")}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
      <LinearGradient style={styles.absolute} colors={["#DFFFEE", "#B0F5F1"]} />
    </View>
  );
};

export default TaskInfo;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: -1,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  btns: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 25,
  },
  details: {
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  topContainer: {
    marginHorizontal: 20,
    padding: 5,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    marginBottom: 30,
  },
  imagee: {
    width: Dimensions.get("window").width - 2,
    height: 150,
  },
});
