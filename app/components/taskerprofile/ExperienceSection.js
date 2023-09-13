import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const ExperienceSection = ({
  experienceDetails = "I’m here for of your TV mounting needs, big or small. I have all the tools needed to make sure everything is secure and level. Ask me about cable...",
  onPress,
  title = "Skills and Experience",
}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{experienceDetails}</Text>
      <Text style={styles.readMore} onPress={onPress}>
        Read More
      </Text>
    </View>
  );
};

export default ExperienceSection;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    backgroundColor: COLORS.lightBg,
  },
  readMore: {
    color: COLORS.text,
    fontFamily: FONTS.semiBold,
    fontSize: 16,
    marginVertical: 12,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.text,
  },
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: 20,
    marginBottom: 10,
  },
});
