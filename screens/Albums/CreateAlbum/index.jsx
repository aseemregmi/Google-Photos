import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import DeviceGalleryItem from "../DeviceGalleryItem";

const CreateAlbum = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <AntDesign name="plus" size={50} color="#0f77ea" />
      </View>
      <Text style={styles.title}>Create</Text>
    </View>
  );
};
DeviceGalleryItem;
const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginRight: 0,
    display: "flex",
    alignItems: "center"
  },
  imageWrapper: {
    height: 120,
    width: 200,
    borderWidth: 2,
    borderColor: "#0f77ea",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  noOfPhotos: {
    position: "absolute",
    color: "#fff",
    fontFamily: "lato",
    bottom: 10,
    right: 10,
    fontSize: 10
  },
  title: {
    fontFamily: "lato-bold",
    margin: 10
  }
});
export default CreateAlbum;
