import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";

// Import your screens
import HomeScreen from "../MainPages/Home.jsx";
import DevotionScreen from "../MainPages/Devotion.jsx";
import DiscoverScreen from "../MainPages/Discover.jsx";
import BibleStudyScreen from "../MainPages/Biblestudy.jsx";
import MoreScreen from "../MainPages/More.jsx";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 70,
            backgroundColor: "#ffffff",
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarActiveTintColor: "#8C4227",
          tabBarInactiveTintColor: "#9E9E9E",
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "Lato_400Regular",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === "Home") {
              iconName = require("../assets/images/Home.png");
            } else if (route.name === "Daily Devotions") {
              iconName = require("../assets/images/Devotion.png");
            } else if (route.name === "Discover") {
              iconName = require("../assets/images/Discover.png");
            } else if (route.name === "Bible Study") {
              iconName = require("../assets/images/biblestudy.png");
            } else if (route.name === "More") {
              iconName = require("../assets/images/More.png");
            }

            return (
              <Image
                source={iconName}
                style={[
                  styles.icon,
                  { tintColor: focused ? "#8C4227" : "#9E9E9E" }
                ]}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Daily Devotions" component={DevotionScreen} />
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Bible Study" component={BibleStudyScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
    resizeMode: "contain",
  },
});