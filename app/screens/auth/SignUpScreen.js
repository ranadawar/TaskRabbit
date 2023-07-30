import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import { LinearGradient } from "expo-linear-gradient";
import AppHeader from "../../components/AppHeader";

const SignUpScreen = () => {
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <AppHeader
          title="Taskrabbit"
          titleStyle={styles.title}
          rightText="Not Now"
        />

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
  mainContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
  },
});
