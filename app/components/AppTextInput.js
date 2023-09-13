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

const AppTextInput = ({
  placeholder,
  icon = "email",
  size = 24,
  onPressIcon,
  onChange,
  value,
  isPassword = false,
  showPassword,
  inputStyle,
  iconColorTextInput = COLORS.secondary,
  ...otherProps
}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        onChangeText={onChange}
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor="#333333"
        value={value}
        {...otherProps}
      />
      {icon && (
        <Pressable style={{ marginRight: 7 }} onPress={onPressIcon}>
          <MaterialCommunityIcons
            name={icon}
            size={size}
            color={iconColorTextInput}
          />
        </Pressable>
      )}
    </View>
  );
};

export default AppTextInput;

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
