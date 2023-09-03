import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import AppHeader from "../components/AppHeader";
import { COLORS, FONTS } from "../constants/theme";
import ProfileCard from "../components/profile/ProfileCard";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import OptionsBtn from "../components/profile/OptionsBtn";
import SignOutBtn from "../components/profile/SignOutBtn";

const Profile = () => {
  const [email, setEmail] = React.useState("dawar@Gmail.com");
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <ScrollView showVerticalScrollIndicator={false}>
          <AppHeader
            leftIcon="chevron-left"
            leftIconColor={COLORS.text}
            titleStyle={{ color: COLORS.text }}
            title="Profile"
            size={33}
            rightIcon="dots-vertical"
          />
          <View style={styles.topContainer}>
            <View style={styles.whiteAbsolute} />

            <ProfileCard />
            <Image
              resizeMode="contain"
              source={require("../../assets/images/g.png")}
              style={{
                width: Dimensions.get("window").width - 40,
                height: 110,
                marginTop: 5,
                marginHorizontal: 20,
              }}
            />
          </View>

          <ImageBackground
            source={require("../../assets/images/bg.png")}
            style={styles.bgImage}
            resizeMode="cover"
            blurRadius={0}
          >
            <View style={styles.row}>
              <Text style={styles.account}>Account</Text>
              <Text style={styles.email}>{email}</Text>
            </View>
          </ImageBackground>

          <View style={styles.optionsContainer}>
            <OptionsBtn />
            <OptionsBtn
              title="Change Password"
              image={require("../../assets/icons/changepass.png")}
            />
            <OptionsBtn
              title="Payment"
              image={require("../../assets/icons/pcard.png")}
            />
            <OptionsBtn
              title="Promos"
              image={require("../../assets/icons/promo.png")}
            />
            <OptionsBtn
              title="Notification"
              image={require("../../assets/icons/notification.png")}
            />
            <OptionsBtn
              title="Support"
              image={require("../../assets/icons/support.png")}
            />
            <OptionsBtn
              title="About"
              image={require("../../assets/icons/about.png")}
            />
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              resizeMode="contain"
              source={require("../../assets/images/truster.png")}
              style={styles.imageTruster}
            />
          </View>
          <SignOutBtn />
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  absoluteContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -60,
    width: Dimensions.get("window").width,
    height: 200,
    zIndex: -1,
    height: 100,
  },
  account: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.white,
    marginTop: 42,
  },
  bgImage: {
    width: Dimensions.get("window").width,
    height: 100,
    marginTop: -50,
  },
  email: {
    fontFamily: FONTS.regular,
    fontSize: 15,
    color: COLORS.white,
    marginTop: 42,
  },
  imageAb: {
    width: Dimensions.get("window").width,
    height: 100,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  imageTruster: {
    height: 72,
    width: Dimensions.get("window").width,
    alignSelf: "center",
  },
  innerHorizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
  },
  optionsContainer: {
    marginHorizontal: 20,
    backgroundColor: "#E9F9F6",
    paddingVertical: 15,
  },
  topContainer: {
    paddingBottom: 30,
    backgroundColor: COLORS.white,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    zIndex: 1,
    height: 320,
  },
  whiteAbsolute: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: COLORS.white,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
});
