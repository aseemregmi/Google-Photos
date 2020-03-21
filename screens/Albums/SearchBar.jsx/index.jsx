import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableNativeFeedback
} from "react-native";

import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback>
        <Feather size={24} color="#6e6e70" name="menu" />
      </TouchableNativeFeedback>
      <TextInput
        clearTextOnFocus={true}
        style={styles.searchInput}
        placeholder="Search Albums"
      />
      <TouchableNativeFeedback>
        <Entypo size={20} color="#6e6e70" name="dots-three-horizontal" />
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    padding: 4,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "lato",
    padding: 10
  }
});

export default SearchBar;
