import "react-native-gesture-handler";

import React, { useState, useEffect } from "react";
import * as Font from "expo-font";

import RootNavigator from "./RootNavigator";

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      "lato-black": require("./assets/Lato/Lato-Black.ttf"),
      "lato-black-italic": require("./assets/Lato/Lato-BlackItalic.ttf"),
      "lato-bold": require("./assets/Lato/Lato-Bold.ttf"),
      "lato-bold-italic": require("./assets/Lato/Lato-BoldItalic.ttf"),
      "lato-light": require("./assets/Lato/Lato-Light.ttf"),
      "lato-light-italic": require("./assets/Lato/Lato-LightItalic.ttf"),
      lato: require("./assets/Lato/Lato-Regular.ttf"),
      "lato-thin": require("./assets/Lato/Lato-Thin.ttf"),
      "lato-thin-italic": require("./assets/Lato/Lato-ThinItalic.ttf")
    }).then(() => {
      setIsFontLoaded(true);
    });
  });

  return isFontLoaded ? <RootNavigator /> : null;
}
