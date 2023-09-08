import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import HalfHeader from "../components/headers/HalfHeader";
import Separator from "../components/Separator";
import { COLORS } from "../constants/theme";
import SelectionComponent from "../components/SelectionComponent";

const DescribeTask = ({ navigation }) => {
  return (
    <AppScreen style={{ paddingTop: 60 }}>
      <HalfHeader
        title="Describe Your Task"
        rightIcon="chevron-right"
        rightIconColor={COLORS.bg}
        onPressRight={() => navigation.navigate("mount")}
      />
      <Separator />
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/dtask.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.optionContainer}>
          <SelectionComponent
            source={require("../../assets/icons/drywall.png")}
          />
          <SelectionComponent
            source={require("../../assets/icons/concrete.png")}
          />
          <SelectionComponent
            source={require("../../assets/icons/brick.png")}
          />
          <SelectionComponent source={require("../../assets/icons/wood.png")} />
          <SelectionComponent
            source={require("../../assets/icons/other.png")}
          />
        </View>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width - 10,
    height: 300,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 20,
  },
  optionContainer: {},
});

export default DescribeTask;
