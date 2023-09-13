import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
import SwiperFlatList from "react-native-swiper-flatlist";

const colors = [
  {
    id: 1,
    title: "Home Maintenance Made Easy.",
    subtitle: "Start Here with the Planner",
    price: "€ 100",
    image: require("../../assets/images/scrolling.png"),
    gradient: ["#3FF3FF", "#019EF3"],
  },
  {
    id: 2,
    title: "Home Maintenance Made Easy.",
    subtitle: "Start Here with the Planner",
    price: "€ 100",
    image: require("../../assets/images/scrolling.png"),
    gradient: ["#3FF3FF", "#019EF3"],
  },
  {
    id: 3,
    title: "Home Maintenance Made Easy.",
    subtitle: "Start Here with the Planner",
    price: "€ 100",
    image: require("../../assets/images/scrolling.png"),
    gradient: ["#3FF3FF", "#019EF3"],
  },
  {
    id: 4,
    title: "Home Maintenance Made Easy.",
    subtitle: "Start Here with the Planner",
    price: "€ 100",
    image: require("../../assets/images/scrolling.png"),
    gradient: ["#3FF3FF", "#019EF3"],
  },
];

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
  const onPressShop = () => {
    console.log("Shop");
  };
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
          <View style={styles.bottomMain}>
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

            <View style={styles.bottomScroll}>
              {/* scrollView Desgin */}
              <View style={styles.coverContainer}>
                <SwiperFlatList
                  autoplayDelay={2}
                  index={0}
                  showPagination
                  paginationStyleItemActive={{
                    width: 19,
                    height: 7.71,
                    backgroundColor: "#333333",
                  }}
                  paginationStyleItemInactive={{
                    width: 7.71,
                    height: 7.71,
                    borderRadius: 7.71 / 2,
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: "#969696",
                  }}
                  paginationStyle={{
                    //i want it on the left side instead of the bottom
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                  }}
                  data={colors}
                  renderItem={({ item }) => (
                    <View style={[styles.scrollViewItem]}>
                      <Text style={styles.stitle}>{item.title}</Text>
                      <Text style={styles.sSubtitle}>{item.subtitle}</Text>
                      <LinearGradient
                        colors={item.gradient}
                        style={styles.linearGradient}
                      />
                      <Image
                        source={item.image}
                        style={styles.absoluteImage}
                        resizeMode="contain"
                      />
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default HomeListing;

const styles = StyleSheet.create({
  absoluteImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 5,
    left: 0,
    overflow: "hidden",
    borderRadius: 400,
    opacity: 0.3,
  },
  bottomContainer: {
    paddingVertical: 20,
    backgroundColor: "#E9F9F6",
    marginTop: 7,
  },
  bottomMain: {
    paddingHorizontal: 15,
  },
  categoriesContainer: {
    marginVertical: 7,
  },
  help: {
    color: COLORS.white,
    fontSize: 24,
    fontFamily: FONTS.semiBold,
  },
  input: {
    borderRadius: "25%",
    marginVertical: 10,
  },
  linear: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    height: 235,
    borderBottomEndRadius: 63,
    zIndex: -1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  popularContainer: {
    marginTop: 10,
    paddingBottom: 20,
  },
  popularText: {
    fontFamily: FONTS.semiBold,
    fontSize: 20,
    marginTop: 15,
    marginBottom: 8,
  },
  scrollViewItem: {
    marginBottom: 40,
    marginTop: 20,
    width: Dimensions.get("window").width - 30,
    justifyContent: "center",
    alignItems: "flex-start",
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
    overflow: "hidden",
  },

  topContainer: {
    height: 235,
    borderBottomEndRadius: 30,
  },
  innerTopAbsolute: {
    paddingHorizontal: 15,
  },

  stitle: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.text,
  },
  sSubtitle: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.cho,
  },
});
