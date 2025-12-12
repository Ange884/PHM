import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";

//Import your screens
import DevotionScreen from "../MainPages/Devotion.jsx";
import DiscoverScreen from "../MainPages/Discover.jsx";
import BibleStudyScreen from "../MainPages/Biblestudy.jsx";
import MoreScreen from "../MainPages/More.jsx";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          // === NAVBAR STYLE ===
          tabBarStyle: {
            height: 70,
            backgroundColor: "#ffffff",
            paddingBottom: 8,
            paddingTop: 8,
          },

          // === ACTIVE / INACTIVE COLORS ===
          tabBarActiveTintColor: "#582FFB",     // Purple active
          tabBarInactiveTintColor: "#9E9E9E",   // Grey inactive

          // === ICON RENDERING WITH TINT ===
          tabBarIcon: ({ focused }) => {
            let iconSource;

            switch (route.name) {
            //   case "Home":
            //     iconSource = require("../assets/images/Home.png");
            //     break;
              case "Daily Devotions":
                iconSource = require("../assets/images/Devotion.png");
                break;
              case "Discover":
                iconSource = require("../assets/images/Discover.png");
                break;
              case "Bible Study":
                iconSource = require("../assets/images/biblestudy.png");
                break;
              case "More":
                iconSource = require("../assets/images/More.png");
                break;
            }

            return (
              <Image
                source={iconSource}
                style={[
                  styles.icon,
                  {
                    tintColor: focused ? "#582FFB" : "#9E9E9E",
                  },
                ]}
              />
            );
          },

          // === LABEL STYLE ===
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "Lato_400Regular",
          },
        })}
      >
        {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
        <Tab.Screen name="Daily Devotions" component={DevotionScreen} /> 
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Bible Study" component={BibleStudyScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
    resizeMode: "contain",
  },
});
