import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const DeviceGalleryItem = ({ index, title, noOfPhotos }) => {
  return (
    <View style={[styles.container, { marginRight: index === 3 ? 10 : 0 }]}>
      <Image
        style={styles.image}
        source={require("./../../../assets/People/4.jpg")}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10, display: "flex", alignItems: "center" },
  image: {
    height: 150,
    width: 150,
    resizeMode: "cover",
    borderRadius: 5
  },
  title: {
    fontFamily: "lato-bold",
    margin: 10
  }
});

export default DeviceGalleryItem;
