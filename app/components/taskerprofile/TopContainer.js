import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";

const TopContainer = ({ name = "Jordan J. ", tag = "Top Rated" }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../../../assets/images/profile.png")}
        />
      </View>

      <Text style={styles.name}>{name}</Text>
      {tag && <Text style={styles.tag}>{tag}</Text>}

      <View style={styles.linearGra}>
        <TextHeader />
        <TextHeader heading="12 TV" subHeading="Mounting Task" />
        <TextHeader heading="15" subHeading="Mounting Tasks " />
        <LinearGradient
          style={styles.absolute}
          colors={["#DFFFEF", "#B2EEF6"]}
        />
      </View>
    </View>
  );
};

const TextHeader = ({ heading = "5.0", subHeading = "9 Reviews" }) => {
  return (
    <View style={styles.mainContainerC}>
      <Text style={styles.title}>{heading}</Text>
      <Text style={styles.subTitle}>{subHeading}</Text>
    </View>
  );
};

export default TopContainer;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 30,
    zIndex: -1,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 145,
    height: 145,
    alignSelf: "center",
    backgroundColor: COLORS.lightBg,
    borderRadius: "50%",
    marginTop: -15,
  },
  linearGra: {
    flexDirection: "row",
    alignItems: "center",
    padding: 25,
    marginVertical: 30,
    marginHorizontal: 25,
    borderRadius: 30,
    justifyContent: "space-between",
    paddingHorizontal: Dimensions.get("window").width / 18,
  },
  mainContainer: {
    paddingVertical: 25,
  },
  mainContainerC: {
    maxWidth: "33.33%",
  },
  name: {
    fontFamily: FONTS.medium,
    fontSize: 20,
    textAlign: "center",
  },
  subTitle: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    textAlign: "center",
  },
  tag: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    textAlign: "center",
    color: COLORS.cho,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
});
