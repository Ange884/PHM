import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
        <Text style={styles.headerTitle}>Community Forums</Text>
      </View>

      {/* CONTENT */}
    <View style={styles.contentBox}>
  {/* CENTERED TEXT */}
  <View style={styles.centerContent}>
    <Text style={styles.paragraphHeader}>
      Welcome to the Community Forums!
    </Text>

    <Text style={styles.paragraphText}>
      This is a safe space to share, learn, and grow together in faith.
      Start a discussion, ask questions, and encourage one another.
    </Text>
  </View>

  {/* BOTTOM BUTTON */}
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
    backgroundColor: "#fff",
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
  flex: 1,
  backgroundColor: "#ffffff",
  borderRadius: 20,
  padding: 24,
  elevation: 3,
},

centerContent: {
  flex: 1,
  justifyContent: "center", // vertical center
},

  paragraphHeader: {
    fontSize: 17,
    fontFamily: "Lato_700Bold",
    color: "#000",
    marginBottom: 12,
  },

  paragraphText: {
    fontSize: 16,
    fontFamily: "Lato_400Regular",
    color: "#222",
    lineHeight: 20,
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
