import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { CountryPicker } from "react-native-country-codes-picker";
import { COLORS } from "../constants/theme";

const CountryCode = ({ countryCode, setCountryCode = () => {} }) => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShow(true)} style={styles.touchable}>
        <Text
          style={{
            color: COLORS.gray,
            fontSize: 20,
          }}
        >
          {countryCode}
        </Text>
      </TouchableOpacity>
      <SafeAreaView>
        <CountryPicker
          show={show}
          inputPlaceholder="Search"
          pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setShow(false);
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default CountryCode;

const styles = StyleSheet.create({
  touchable: {
    width: "30%",
    height: 60,
    backgroundColor: COLORS.white,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    minWidth: 100,
  },
});
