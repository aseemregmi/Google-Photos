import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback
} from "react-native";

export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key
          });
        };

        return (
          <TouchableNativeFeedback
            accessibilityRole="none"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={label}
          >
            <View style={styles.iconContainer}>
              {options.tabBarIcon({
                size: 22,
                color: isFocused ? "#0f77ea" : "#6e6e70"
              })}
              <Text
                style={[
                  { color: isFocused ? "#0f77ea" : "#6e6e70" },
                  styles.label
                ]}
              >
                {label}
              </Text>
            </View>
          </TouchableNativeFeedback>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15
  },
  label: {
    fontFamily: "lato-bold",
    fontSize: 15,
    paddingTop: 5
  }
});
