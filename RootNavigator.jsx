import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Albums from "./screens/Albums";
import Photos from "./screens/Photos";
import Assistant from "./screens/Assistant";
import Sharing from "./screens/Sharing";
import MyTabBar from "./components/MyTabBar";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Albums"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Photos") {
              iconName = "file-photo-o";
              return <FontAwesome name={iconName} size={size} color={color} />;
            } else if (route.name === "Albums") {
              iconName = "md-photos";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Assistant") {
              iconName = "assistant";
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Sharing") {
              iconName = "users";
              return <FontAwesome name={iconName} size={size} color={color} />;
            }
          }
        })}
        tabBarOptions={{
          activeTintColor: "#0f77ea",
          inactiveTintColor: "#6e6e70"
        }}
        tabBar={props => <MyTabBar {...props} />}
      >
        <Tab.Screen name="Photos" component={Photos} />
        <Tab.Screen name="Albums" component={Albums} />
        <Tab.Screen name="Assistant" component={Assistant} />
        <Tab.Screen name="Sharing" component={Sharing} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
