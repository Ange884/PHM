import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";

export default function ForumsScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Community Forums</Text>
      </View>

      {/* CONTENT */}
      <View style={styles.contentBox}>
        <Text style={styles.paragraphHeader}>
          Welcome to the Community Forums
        </Text>

        <Text style={styles.paragraphText}>
          This is a safe space to share, learn, and grow together in faith.
          Start a discussion, ask questions, and encourage one another.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("CreateForumPost")}
        >
          <Text style={styles.buttonText}>＋ New Discussion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f5f0",
    padding: 24,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 40,
  },

  headerTitle: {
    fontSize: 26,
    fontFamily: "Lato_700Bold",
    color: "#222",
  },

  contentBox: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 24,
    elevation: 3,
  },

  paragraphHeader: {
    fontSize: 22,
    fontFamily: "Lato_700Bold",
    color: "#8C4227",
    marginBottom: 12,
  },

  paragraphText: {
    fontSize: 17,
    fontFamily: "Lato_400Regular",
    color: "#555",
    lineHeight: 26,
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#8C4227",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 18,
    fontFamily: "Lato_700Bold",
    color: "#fff",
  },
});
