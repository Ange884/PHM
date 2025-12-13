// components/FixedNavigationBar.jsx
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function FixedNavigationBar({ navigation, activeRoute = "Home" }) {
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { id: "DailyDevotions", label: "Devotions", icon: "book-outline" },
    { id: "Discover", label: "Discover", icon: "compass-outline" },
    { id: "Home", label: "Home", icon: "home-outline" },
    { id: "BibleStudy", label: "Bible", icon: "library-outline" },
    { id: "More", label: "More", icon: "menu-outline" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {navItems.map((item) => {
          const isActive = activeRoute === item.id;
          const isHovered = hovered === item.id;

          return (
            <TouchableOpacity
              key={item.id}
              style={styles.navButton}
              onPress={() => navigation.navigate(item.id)}
              onPressIn={() => setHovered(item.id)}
              onPressOut={() => setHovered(null)}
              activeOpacity={0.7}
            >
              <View style={[
                styles.iconWrapper,
                isActive && styles.iconWrapperActive,
                isHovered && !isActive && styles.iconWrapperHovered
              ]}>
                <Ionicons
                  name={item.icon}
                  size={24}
                  color={isActive ? "#fff" : isHovered ? "#fff" : "#8C4227"}
                />
              </View>
              <Text style={[
                styles.label,
                isActive && styles.labelActive,
                isHovered && !isActive && styles.labelHovered
              ]}>
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
    elevation: 5,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    paddingHorizontal: 8,
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f5f5f5", // Light gray background
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  iconWrapperHovered: {
    backgroundColor: "#a0522d", // Darker brown on hover
    transform: [{ scale: 1.1 }],
  },
  iconWrapperActive: {
    backgroundColor: "#8C4227", // Chocolate color when active
  },
  label: {
    fontSize: 11,
    fontFamily: "Lato_400Regular",
    color: "#666",
  },
  labelHovered: {
    color: "#8C4227",
    fontWeight: "600",
  },
  labelActive: {
    color: "#8C4227",
    fontFamily: "Lato_700Bold",
  },
});