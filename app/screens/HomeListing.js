import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import { LinearGradient } from "expo-linear-gradient";
import TopBar from "../components/home/TopBar";
import { COLORS, FONTS } from "../constants/theme";
import SearchInput from "../components/home/SearchInput";
import ViewAllCategories from "../components/home/ViewAllCategories";
import CategroyBtn from "../components/home/CategroyBtn";
import PopularBtn from "../components/home/PopularBtn";
import SolidColorBtn from "../components/home/SolidColorBtn";
import TrendingBtn from "../components/home/TrendingBtn";

const categories = [
  {
    id: 1,
    title: "TV Mounting",
    icon: require("../../assets/icons/tv.png"),
  },
  {
    id: 2,
    title: "Cleaning",
    icon: require("../../assets/icons/cleaning.png"),
  },
  {
    id: 3,
    title: "Furniture",
    icon: require("../../assets/icons/furniture.png"),
  },
  {
    id: 4,
    title: "Help Moving",
    icon: require("../../assets/icons/moving.png"),
  },
  {
    id: 5,
    title: "Furniture",
    icon: require("../../assets/icons/furniture.png"),
  },
  {
    id: 6,
    title: "Help Moving",
    icon: require("../../assets/icons/moving.png"),
  },
];

const popularProjects = [
  {
    id: 1,
    title: "Minor Home Repairs",
    image: require("../../assets/images/labor.png"),
  },
  {
    id: 2,
    title: "Lawn Mowing",
    image: require("../../assets/images/garden.png"),
  },
  {
    id: 3,
    title: "Minor Home Repairs",
    image: require("../../assets/images/labor.png"),
  },
  {
    id: 4,
    title: "Lawn Mowing",
    image: require("../../assets/images/garden.png"),
  },
];

const movingHouse = [
  {
    id: 1,
    title: "Interior Wall Painting",
    color: "#C51607",
    textColor: COLORS.white,
  },
  {
    id: 2,
    title: "Furniture Dust Removal",
    color: "#81E7D6",
    textColor: COLORS.text,
  },
  {
    id: 3,
    title: "Replacing a Light Switch",
    color: "#CDD8FF",
    textColor: COLORS.text,
  },
];

const trending = [
  {
    id: 1,
    title: "Garden Tree Cutting",
    image: require("../../assets/images/garden.png"),
  },
  {
    id: 2,
    title: "Delivery",
    image: require("../../assets/images/delivery.png"),
  },
  {
    id: 3,
    title: "General Mounting",
    image: require("../../assets/images/girl.png"),
  },
];

const HomeListing = () => {
  return (
    <AppScreen style={{ backgroundColor: COLORS.secondary }}>
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topContainer}>
            <View style={styles.innerTopAbsolute}>
              <TopBar />
              <Text style={styles.help}>I need help with</Text>
              <SearchInput
                placeholder="Try “mount TV” or Leaky faucet"
                icon="magnify"
                style={styles.input}
              />
              <LinearGradient
                style={styles.linear}
                colors={["#FF6153", "#E64374"]}
              />
            </View>
          </View>
          <ViewAllCategories />
          <View style={styles.categoriesContainer}>
            <FlatList
              data={categories}
              showsHorizontalScrollIndicator={false}
              horizontal
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <CategroyBtn title={item.title} icon={item.icon} />
              )}
            />
          </View>
          <Text style={styles.popularText}>Popular Projects</Text>

          <View style={styles.popularContainer}>
            <FlatList
              data={popularProjects}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <PopularBtn title={item.title} image={item.image} />
              )}
            />
          </View>

          <Text style={styles.popularText}>Help Moving Your Home</Text>
          <View style={styles.popularContainer}>
            <FlatList
              data={movingHouse}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <SolidColorBtn
                  title={item.title}
                  bgColor={item.color}
                  colorText={item.textColor}
                />
              )}
            />
          </View>

          <View style={styles.bottomContainer}>
            <Text style={styles.popularText}>Trending</Text>
            <View style={{ marginHorizontal: 5 }}>
              <FlatList
                data={trending}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TrendingBtn title={item.title} image={item.image} />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default HomeListing;

const styles = StyleSheet.create({
  bottomContainer: {
    marginHorizontal: 0,
    paddingVertical: 20,
    backgroundColor: "#E9F9F6",
    marginTop: 7,
  },
  categoriesContainer: {
    marginVertical: 7,
    marginHorizontal: 10,
  },
  help: {
    color: COLORS.white,
    fontSize: 24,
    fontFamily: FONTS.semiBold,
    marginHorizontal: 20,
  },
  input: {
    borderRadius: "25%",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  linear: {
    width: "100%",
    height: 235,
    borderBottomEndRadius: 63,
    position: "absolute",
    zIndex: -1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  popularContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  popularText: {
    fontFamily: FONTS.semiBold,
    fontSize: 20,
    marginHorizontal: 17,
    marginTop: 15,
    marginBottom: 8,
  },

  topContainer: {
    height: 235,
    borderBottomEndRadius: 30,
  },
});
