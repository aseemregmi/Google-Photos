import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const EachAlbum = ({ index, title, noOfItems, isShared }) => {
  return (
    <View style={[styles.container, { marginRight: index === 3 ? 10 : 0 }]}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require("./../../../assets/People/4.jpg")}
        />
        <Text style={styles.noOfPhotos}>+{noOfItems}</Text>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>
          {noOfItems} Items {"  "} {isShared && "Shared"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10, display: "flex", alignItems: "center" },
  imageWrapper: {
    position: "relative"
  },
  image: {
    height: 120,
    width: 200,
    resizeMode: "cover",
    borderRadius: 5
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
  },
  content: {
    color: "#999",
    fontFamily: "lato",
    marginTop: -5
  }
});

export default EachAlbum;
