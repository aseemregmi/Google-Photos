import React from "react";
import { View, StyleSheet, StatusBar, ScrollView, Text } from "react-native";
import SearchBar from "./SearchBar.jsx";
import FourImageGrid from "./FourImageGrid";
import DeviceGalleryItem from "./DeviceGalleryItem/index.jsx";

const Albums = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.imageGridContainer}
      >
        <FourImageGrid index={0} />
        <FourImageGrid index={1} />
        <FourImageGrid index={2} />
        <FourImageGrid index={3} />
      </ScrollView>
      <View style={styles.deviceGalleryContainer}>
        <Text style={styles.sectionTitle}>DEVICE GALLERY</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <DeviceGalleryItem title="Camera" index={0} noOfPhotos={211} />
          <DeviceGalleryItem title="Shared" index={1} noOfPhotos={12} />
          <DeviceGalleryItem title="Old Shots" index={2} noOfPhotos={22} />
          <DeviceGalleryItem title="New Shots" index={3} noOfPhotos={211} />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight > 24 ? StatusBar.currentHeight : 0
  },
  imageGridContainer: {
    marginTop: 15,
    marginBottom: 25
  },
  deviceGalleryContainer: {
    display: "flex"
  },
  sectionTitle: {
    color: "#6e6e70",
    fontFamily: "lato-bold",
    fontSize: 12,
    paddingLeft: 25
  }
});

export default Albums;
