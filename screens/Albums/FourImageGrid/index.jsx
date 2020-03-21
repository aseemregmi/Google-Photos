import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const FourImageGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.photoGrid}>{/* <Image/> */}</View>
      <Text style={styles.header}>People</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {},
  photoGrid: {}
});

export default FourImageGrid;
