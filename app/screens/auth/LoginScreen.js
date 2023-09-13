import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import AppScreen from "../../components/AppScreen";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS } from "../../constants/theme";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";
import AppTextPasswordInput from "../../components/AppTextPasswordInput";
import SocialRegisterBtn from "../../components/touchables/SocialRegisterBtn";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AppScreen style={{ backgroundColor: "#DFFFEE" }}>
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1 }}>
            <View style={styles.topContainer}>
              <Image
                style={styles.logo}
                resizeMode="contain"
                source={require("../../../assets/icons/login.png")}
              />
              <Text style={styles.title}>Login</Text>
              <Text style={styles.subTitle}>Do away with to do</Text>
            </View>
            <KeyboardAvoidingView style={styles.formContainer}>
              <AppTextInput
                placeholder="Email"
                value={email}
                onChange={(text) => setEmail(text)}
                iconColorTextInput={COLORS.primaryGreen}
              />
              <AppTextPasswordInput
                placeholder="Password"
                value={password}
                onChange={(text) => setPassword(text)}
                iconColorTextInput={COLORS.primaryGreen}
              />

              <View style={styles.horizontal}>
                <Text style={styles.titleForgot}>Forgot your password?</Text>
                <Text style={styles.subTitleForgot}>Reset it</Text>
              </View>

              <AppButton title="Login" />
            </KeyboardAvoidingView>

            <View style={styles.bottomContainer}>
              <Text style={styles.did}>
                Did you purchase an assembly from IKEA or sign up Via
              </Text>
              <View style={styles.socialBtnContainer}>
                <SocialRegisterBtn
                  source={require("../../../assets/icons/facebook.png")}
                  onPress={() => console.log("facebook")}
                />
                <SocialRegisterBtn
                  source={require("../../../assets/icons/google.png")}
                  onPress={() => console.log("google")}
                />
              </View>
              <Text
                onPress={() => navigation.navigate("register")}
                style={styles.lowestPassword}
              >
                Create Password
              </Text>
            </View>
          </View>
        </ScrollView>
        <LinearGradient
          colors={["#DFFFEE", "#B0F5F1"]}
          style={styles.linearFull}
        />
      </View>
    </AppScreen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "15%",
    marginVertical: 15,
  },
  did: {
    fontFamily: FONTS.regular,
    fontSize: 15,
    textAlign: "center",
    color: COLORS.text,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  linearFull: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  logo: {
    width: 125,
    height: 125,
  },
  lowestPassword: {
    fontFamily: FONTS.semiBold,
  },
  mainContainer: {
    flex: 1,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.text,
  },
  socialBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 36,
    marginVertical: 10,
  },

  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "flex-end",
    justifyContent: "flex-end",
  },
  titleForgot: {
    fontFamily: FONTS.regular,
    fontSize: 12,
  },
  subTitleForgot: {
    fontFamily: FONTS.bold,
    marginHorizontal: 5,
    fontSize: 12,
  },
});
