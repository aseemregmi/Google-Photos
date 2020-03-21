import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";

const Albums = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight > 24 ? StatusBar.currentHeight : 0
  }
});

export default Albums;
