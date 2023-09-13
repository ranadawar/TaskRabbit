import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import { COLORS, FONTS } from "../../constants/theme";

import { LinearGradient } from "expo-linear-gradient";
import SwiperFlatList from "react-native-swiper-flatlist";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const colors = [
  {
    id: 1,
    title: "Home Maintenance Made Easy.",
    subtitle: "Start Here with the Planner",
    price: "€ 100",
    gradient: ["#3FF3FF", "#019EF3"],
  },
  {
    id: 2,
    title: "Home Maintenance Made Easy.",
    subtitle: "Start Here with the Planner",
    price: "€ 100",
    gradient: ["#3FF3FF", "#019EF3"],
  },
  {
    id: 3,
    title: "Home Maintenance Made Easy.",
    subtitle: "Start Here with the Planner",
    price: "€ 100",
    gradient: ["#3FF3FF", "#019EF3"],
  },
  {
    id: 4,
    title: "Home Maintenance Made Easy.",
    subtitle: "Start Here with the Planner",
    price: "€ 100",
    gradient: ["#3FF3FF", "#019EF3"],
  },
];

const WelcomeScreen = () => {
  const onSkip = () => {};
  return (
    <AppScreen style={{ backgroundColor: "#FF6153" }}>
      <View style={styles.mainContainer}>
        <Text onPress={onSkip} style={styles.skipText}>
          Skip
        </Text>
        <View style={styles.topTextContainer}>
          <Text style={styles.title}>Mestierino</Text>
          <Text style={styles.description}>
            See reviews and prices of{" "}
            <Text style={styles.semiBold}>140,000+</Text> background-checked
            Taskers
          </Text>
        </View>

        <View style={styles.bottomScroll}>
          {/* scrollView Desgin */}
          <View style={styles.coverContainer}>
            <SwiperFlatList
              autoplayDelay={2}
              index={0}
              showPagination
              paginationStyleItemActive={{
                width: 13,
                height: 13,
                borderRadius: 6.5,
                backgroundColor: "#fff",
              }}
              paginationStyleItemInactive={{
                width: 11,
                height: 11,
                borderRadius: 5.5,
                backgroundColor: "#E54374",
                borderWidth: 3,
                borderColor: "#fff",
              }}
              paginationStyle={{
                //i want it on the left side instead of the bottom
                position: "absolute",
                bottom: -50,
                left: 0,
              }}
              data={colors}
              renderItem={({ item }) => (
                <View style={[styles.scrollViewItem, { flex: 1 }]}>
                  <Image
                    resizeMode="cover"
                    style={styles.imageCom}
                    source={require("../../../assets/images/combined-removebg-preview.png")}
                  />
                </View>
              )}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.btnSkip}>
          <Text style={styles.gotItText}>Got it</Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={COLORS.white}
          />
        </TouchableOpacity>
        <Image
          style={styles.imageBg}
          resizeMode="cover"
          source={require("../../../assets/images/bgLayer.png")}
        />

        <LinearGradient
          style={styles.absoluteGradient}
          colors={["#FF6153", "#E54374"]}
        />
      </View>
    </AppScreen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  absoluteGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: -2,
  },
  btnSkip: {
    backgroundColor: COLORS.black,
    flexDirection: "row",
    justifyContent: "center",
    width: 110,
    height: 50,
    alignItems: "center",
    borderRadius: 80,
    position: "absolute",
    bottom: 65,
    right: 20,
  },
  gotItText: {
    fontFamily: FONTS.medium,
    color: COLORS.white,

    fontSize: 16,
  },
  description: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.white,
    textAlign: "center",
    maxWidth: "75%",
  },
  imageBg: {
    position: "absolute",
    zIndex: -1,
    top: 150,
    width: "100%",
    height: 400,
  },
  imageCom: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 1.5,
    marginTop: -50,
  },
  mainContainer: {
    flex: 1,
  },
  skipText: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    textAlign: "right",
    color: COLORS.white,
    padding: 25,
  },
  semiBold: {
    fontFamily: FONTS.semiBold,
    fontSize: 16,
    color: COLORS.white,
  },

  topTextContainer: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: 30,
  },
});
