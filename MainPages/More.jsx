import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import FixedNavigationBar from "../components/Navbar.jsx";

const { width } = Dimensions.get("window");

export default function MoreScreen({navigation}) {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f5f0" }}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color="#333" style={{marginTop: 20}}/>
          </TouchableOpacity>
        {/* PROFILE HEADER */}
        <View style={styles.profileCard}>
          <Image
            source={require("../assets/images/Jane Doe.png")}
            style={styles.profileImage}
          />
          <Text style={styles.nameText}>Jane Doe</Text>
          <Text style={styles.descText}>Member since 2020</Text>
        </View>

        {/* OPTIONS */}
        <View style={styles.optionsContainer}>
          <OptionItem icon="bookmark-outline" label="Saved" onPress={() => navigation.navigate("Saved")}/>
          <OptionItem icon="people-outline" label="Community Forums" onPress={() => navigation.navigate("Forums")} />
          <OptionItem icon="share-social-outline" label="Share PHM App" />
          <OptionItem icon="log-out-outline" label="Logout" danger />
        </View>
      </ScrollView>

      <FixedNavigationBar />
    </View>
  );
}

/* 🔹 Reusable Option Component */
function OptionItem({ icon, label, danger, onPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.optionButton,
      ]}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <Ionicons
        name={icon}
        size={24}
        color={danger ? "#e53e3e" : "#333"}
      />
      <Text
        style={[
          styles.optionText,
          danger && { color: "#e53e3e" },
        ]}
      >
        {label}
      </Text>
      <Ionicons name="chevron-forward" size={20} color="#aaa" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },

  /* PROFILE */
  profileCard: {
    backgroundColor: "#f8f5f0",
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 28,
    marginTop: 20,
    marginBottom: 30,
    elevation: 3,
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },

  nameText: {
    fontSize: 22,
    fontFamily: "Lato_700Bold",
    color: "#333",
  },

  descText: {
    fontSize: 15,
    fontFamily: "Lato_400Regular",
    color: "#333",
    marginTop: 4,
  },

  /* OPTIONS */
  optionsContainer: {
    backgroundColor: "#f8f5f0",
    borderRadius: 20,
    paddingVertical: 8,
    elevation: 3,
  },

  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    gap: 14,
  },

  optionText: {
    flex: 1,
    fontSize: 17,
    fontFamily: "Lato_700Bold",
    color: "#333",
  },
});
