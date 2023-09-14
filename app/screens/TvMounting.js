import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import HalfHeader from "../components/headers/HalfHeader";
import Separator from "../components/Separator";
import { COLORS } from "../constants/theme";
import AppTextInputBlackBorder from "../components/AppTextInputBlackBorder";
import AppButton from "../components/AppButton";

const TvMounting = ({ navigation }) => {
  const [streetAddress, setStreetAddress] = React.useState("");
  const [apartment, setApartment] = React.useState("");
  return (
    <AppScreen style={{ backgroundColor: COLORS.white, paddingTop: 60 }}>
      <HalfHeader
        title="Describe Your Task"
        rightIconColor={COLORS.bg}
        onPressRight={() => navigation.navigate("mount")}
        onPressLeft={() => navigation.goBack()}
        rightImage={require("../../assets/icons/cross.png")}
        style={{ paddingHorizontal: 25 }}
        rightImageStyle={{ marginRight: 20 }}
      />
      <Separator style={{ marginHorizontal: 15 }} />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/dtask.png")}
          resizeMode="cover"
        />
      </View>

      <View style={styles.inputs}>
        <AppTextInputBlackBorder
          placeholder="Street Address"
          icon={false}
          imageRight={true}
        />
        <AppTextInputBlackBorder placeholder="Street Address" icon={false} />
        <AppButton
          title="Continue"
          onPress={() => navigation.navigate("homee")}
        />
      </View>
    </AppScreen>
  );
};

export default TvMounting;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: 300,
    marginTop: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    marginHorizontal: 30,
  },
});
