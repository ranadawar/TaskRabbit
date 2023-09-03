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

const AppTextInputBlackBorder = ({
  placeholder,
  icon = "email",
  size = 24,
  onPressIcon,
  onChange,
  value,
  isPassword = false,
  showPassword,
  inputStyle,
  ...otherProps
}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        onChangeText={onChange}
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        value={value}
        {...otherProps}
      />
      {icon && (
        <Pressable style={{ marginRight: 7 }} onPress={onPressIcon}>
          <MaterialCommunityIcons
            name={icon}
            size={size}
            color={COLORS.primaryGreen}
          />
        </Pressable>
      )}
    </View>
  );
};

export default AppTextInputBlackBorder;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 10,
  },
  mainContainer: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.text,
  },
});
