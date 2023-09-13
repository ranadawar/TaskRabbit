import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

const AppTextPasswordInput = ({
  placeholder,
  size = 24,
  onChange,
  value,
  ...otherProps
}) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        onChangeText={onChange}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        {...otherProps}
      />
      {secureTextEntry ? (
        <Pressable style={{ marginRight: 7 }} onPress={toggleSecureEntry}>
          <MaterialCommunityIcons
            name="eye-off"
            size={size}
            color={COLORS.secondary}
          />
        </Pressable>
      ) : (
        <Pressable style={{ marginRight: 7 }} onPress={toggleSecureEntry}>
          <MaterialCommunityIcons
            name="eye"
            size={size}
            color={COLORS.primaryGreen}
          />
        </Pressable>
      )}
    </View>
  );
};

export default AppTextPasswordInput;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 10,
  },
  mainContainer: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    padding: 12,
    borderRadius: 7,
    alignItems: "center",
    marginBottom: 12,
  },
});
