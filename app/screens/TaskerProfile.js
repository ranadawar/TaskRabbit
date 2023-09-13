import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import Header from "../components/taskerprofile/Header";
import TopContainer from "../components/taskerprofile/TopContainer";
import ServiceComponent from "../components/taskerprofile/ServiceComponent";
import Separator from "../components/Separator";
import ExperienceSection from "../components/taskerprofile/ExperienceSection";
import PhotosSection from "../components/taskerprofile/PhotosSection";
import RatingBar from "../components/taskerprofile/RatingBar";
import RatingContainer from "../components/taskerprofile/RatingContainer";
import { COLORS, FONTS } from "../constants/theme";
import AppButton from "../components/AppButton";

const images = [
  {
    id: 1,
    image: require("../../assets/images/delivery.png"),
  },
  {
    id: 2,
    image: require("../../assets/images/profile.png"),
  },
  {
    id: 3,
    image: require("../../assets/images/garden.png"),
  },
  {
    id: 4,
    image: require("../../assets/images/delivery.png"),
  },
  {
    id: 5,
    image: require("../../assets/images/profile.png"),
  },
  {
    id: 6,
    image: require("../../assets/images/garden.png"),
  },
];
const TaskerProfile = ({ navigation }) => {
  const [rate, setRate] = React.useState("45");
  return (
    <AppScreen style={{ paddingTop: 60, backgroundColor: COLORS.white }}>
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header onPressBack={() => navigation.goBack()} />
          <TopContainer />
          <View style={styles.servicesComponent}>
            <ServiceComponent />
            <Separator />
            <ServiceComponent image={require("../../assets/icons/tools.png")} />
          </View>

          <ExperienceSection />
          <View style={{ marginHorizontal: 20 }}>
            <PhotosSection images={images} />

            <RatingContainer />

            <Separator />

            <View style={styles.leastBottom}>
              <Text style={styles.titleRate}>${rate}/hr</Text>
              <AppButton style={styles.btnAtBottom} title="Select" />
            </View>
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default TaskerProfile;

const styles = StyleSheet.create({
  btnAtBottom: {
    width: Dimensions.get("window").width / 1.73,
    padding: 13,
    borderRadius: 30,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  servicesComponent: {
    marginTop: -30,
    marginHorizontal: 20,
  },
  titleRate: {
    fontFamily: FONTS.semiBold,
    fontSize: 20,
  },
  leastBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: -10,
    paddingVertical: 30,
  },
});
