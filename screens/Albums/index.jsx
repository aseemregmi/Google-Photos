import React from "react";
import { View, StyleSheet, StatusBar, ScrollView } from "react-native";
import SearchBar from "./SearchBar.jsx";
import FourImageGrid from "./FourImageGrid";

const Albums = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      {/* <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      >
        <FourImageGrid />
        <FourImageGrid />
        <FourImageGrid />
        <FourImageGrid />
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight > 24 ? StatusBar.currentHeight : 0,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default Albums;
