import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppScreen from "../../components/AppScreen";
import { LinearGradient } from "expo-linear-gradient";
import AppHeader from "../../components/AppHeader";
import { COLORS, FONTS } from "../../constants/theme";
import AppTextInput from "../../components/AppTextInput";
import AppTextPasswordInput from "../../components/AppTextPasswordInput";

import { CountryPicker } from "react-native-country-codes-picker";
import CountryCode from "../../components/CountryCode";
import AppButton from "../../components/AppButton";

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [countryCode, setCountryCode] = useState("");
  const [postelCode, setPostelCode] = useState("");

  const onChangeFirstName = (text) => {
    setFirstName(text);
  };

  const onChangeLastName = (text) => {
    setLastName(text);
  };

  const onChangeEmail = (text) => {
    setEmail(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const onChangePhoneNumber = (text) => {
    setPhoneNumber(text);
  };

  const onChangePostelCode = (text) => {
    setPostelCode(text);
  };

  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <AppHeader
          title="Taskrabbit"
          titleStyle={styles.title}
          rightText="Not Now"
          onPressLeft={() => navigation.goBack()}
        />

        <View style={styles.middleContainer}>
          <Text style={styles.signUp}>Sign Up</Text>

          <View style={styles.middleContainerInner}>
            <View style={styles.horizontal}>
              <View style={styles.inputContainerAtWork}>
                <AppTextInput
                  placeholder="First Name"
                  value={firstName}
                  onChange={(text) => onChangeFirstName(text)}
                  icon={false}
                />
              </View>
              <View style={styles.inputContainerAtWork}>
                <AppTextInput
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(text) => onChangeLastName(text)}
                  icon={false}
                />
              </View>
            </View>
            <AppTextInput
              value={email}
              placeholder="Email"
              onChange={(text) => onChangeEmail(text)}
            />
            <AppTextPasswordInput
              placeholder="Password"
              value={password}
              onChange={(text) => onChangePassword(text)}
            />

            <View style={styles.phoneContainer}>
              <CountryCode
                countryCode={countryCode}
                setCountryCode={setCountryCode}
              />

              <View style={styles.phoneNumbering}>
                <AppTextInput
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(text) => onChangePhoneNumber(text)}
                  icon="phone"
                />
              </View>
            </View>
            <AppTextInput
              placeholder="Postel Code"
              value={postelCode}
              onChange={(text) => onChangePostelCode(text)}
              icon="map-marker-check"
            />

            <AppButton
              title="Sign Up"
              style={{ backgroundColor: COLORS.black }}
              onPress={() => navigation.navigate("describe")}
            />
          </View>

          <View style={styles.absoluteInner}>
            <LinearGradient
              style={{ flex: 1, borderRadius: 20 }}
              colors={["#000"]}
            />
          </View>
        </View>

        <View style={styles.absoluteContainer}>
          <LinearGradient
            style={{ flex: 1, zIndex: -1 }}
            colors={["#FF6153", "#E54374"]}
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  absoluteContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  absoluteInner: {
    position: "absolute",
    width: "92%",
    height: "80%",
    zIndex: -1,
    opacity: 0.2,
    alignSelf: "center",
    borderRadius: "20%",
  },
  horizontal: {
    flexDirection: "row",
    gap: 10,
  },
  mainContainer: {
    flex: 1,
  },
  inputContainerAtWork: {
    flex: 1,
  },

  middleContainerInner: {
    marginHorizontal: 15,
    marginVertical: 10,
    marginBottom: 50,
    paddingVertical: 20,
    padding: 12,
    height: Dimensions.get("window").height / 1.5,
  },
  phoneContainer: {
    flexDirection: "row",
    gap: 10,
  },
  phoneNumbering: {
    flex: 1,
  },
  signUp: {
    fontSize: 32,
    fontFamily: FONTS.bold,
    textAlign: "center",
    color: COLORS.white,
    marginVertical: 15,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
  },
});
