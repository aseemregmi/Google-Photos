import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const FourImageGrid = ({ index }) => {
  const data = [
    require("./../../../assets/People/1.jpg"),
    require("./../../../assets/People/2.jpeg"),
    require("./../../../assets/People/3.jpg"),
    require("./../../../assets/People/4.jpg")
  ];

  return (
    <View style={[styles.container, { marginRight: index === 3 ? 10 : 0 }]}>
      <View style={styles.imageGrid}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Image style={styles.image} source={item} />
          )}
          numColumns={2}
          keyExtractor={index => index.toString() + "peop"}
        />
      </View>
      <Text style={styles.header}>People</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  header: {
    color: "#6e6e70",
    fontFamily: "lato-bold",
    textAlign: "center",
    marginTop: 12
  },
  imageGrid: {},
  image: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 4,
    margin: 2
  }
});

export default FourImageGrid;
