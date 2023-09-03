import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTS } from "../../constants/theme";

const PhotosSection = ({ title = "Photos", images = [] }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.photos}>{title}</Text>
      {images.length && (
        <FlatList
          data={images}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                source={item.image}
                style={styles.image}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default PhotosSection;

const styles = StyleSheet.create({
  image: {
    width: 76,
    height: 76,
    marginRight: 10,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  mainContainer: {
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  photos: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    marginBottom: 10,
  },
});
