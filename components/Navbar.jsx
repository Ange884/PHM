import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FixedNavigationBar({
  navigation,
  activeRoute ="Home",
}) {
  const [pressed, setPressed] = useState(null);

  const navItems = [
    { id: "Home", label: "Home", icon: require("../assets/images/Home.png") },
    { id: "DailyDevotions", label: "Devotions", icon: require("../assets/images/Devotion.png") },
    { id: "Discover", label: "Discover", icon: require("../assets/images/Discover.png") },
    { id: "BibleStudy", label: "Bible", icon: require("../assets/images/biblestudy.png") },
    { id: "More", label: "More", icon: require("../assets/images/More.png") },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {navItems.map((item) => {
          const isActive = activeRoute === item.id;
          const isPressed = pressed === item.id;

          return (
            <TouchableOpacity
              key={item.id}
              style={styles.navButton}
              onPress={() => navigation.navigate(item.id)}
              onPressIn={() => setPressed(item.id)}
              onPressOut={() => setPressed(null)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.iconWrapper,
                  isActive && styles.iconWrapperActive,
                  isPressed && !isActive && styles.iconWrapperPressed,
                ]}
              >
                <Image source={item.icon} 
                  name={item.icon}
                  size={24}
                  color={isActive || isPressed ? "#fff" : "#8C4227"}
                />
              </View>

              <Text
                style={[
                  styles.label,
                  isActive && styles.labelActive,
                  isPressed && !isActive && styles.labelPressed,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 6,
  },

  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
  },

  navButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  iconWrapper: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },

  iconWrapperPressed: {
    backgroundColor: "#a0522d",
    transform: [{ scale: 1.05 }],
  },

  label: {
    fontSize: 13,
    color: "#333",
  },

  labelActive: {
    color: "#8C4227",
    fontWeight: "700",
  },

  labelPressed: {
    color: "#8C4227",
    fontWeight: "600",
  },
});
