import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function SavedScreen({ navigation }) {
  const SavedContents = [
    {
      id: 1,
      date: "June 10, 2024",
      title: "Walking in Faith, Not Fear",
      verse: "2 Timothy 1:7",
      description:
        "Life often brings worries and uncertainties that can overwhelm our minds and hearts. The Apostle Paul...",
    },
  ];

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
        {/* HEADER */}
        <View style={styles.SavedContent}>
          <Text style={styles.SavedHeader}>Saved</Text>
        </View>

        {/* SEARCH BAR */}
        <View style={styles.discoverSearchbar}>
  <TextInput
    style={styles.searchInput}
    placeholder="Search Devotions, Plans, Topics..."
    placeholderTextColor="#A0AEC0"
  />
  <TouchableOpacity>
  <Ionicons name="search" size={20} color="#A0AEC0" />
  </TouchableOpacity>
</View>

        {/* SAVED CONTENT LIST */}
        <View style={styles.savedList}>
          {[...Array(3)].map((_, index) => (
            <View key={index} style={styles.savedCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardDate}>
                  {SavedContents[0].date}
                </Text>
                <Ionicons
                  name="arrow-forward"
                  size={20}
                  color="#8C4227"
                />
              </View>

              <Text style={styles.cardTitle}>
                {SavedContents[0].title}
              </Text>

              <Text style={styles.cardVerse}>
                {SavedContents[0].verse}
              </Text>

              <Text style={styles.cardDescription}>
                {SavedContents[0].description}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  SavedContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 20,
  },

  SavedHeader: {
    fontSize: 28,
    fontFamily: "Lato_700Bold",
    color: "#222",
  },

  discoverSearchbar: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: 12,
  paddingHorizontal: 15,
  paddingVertical: 12,
  marginBottom: 20,

  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 3,
  elevation: 2,
},

searchInput: {
  flex: 1,
  fontSize: 16,
  fontFamily: "Lato_400Regular",
  color: "#333",
},


  savedList: {
    gap: 16,
  },

  savedCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#e8e3dc",
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  cardDate: {
    fontSize: 14,
    fontFamily: "Lato_400Regular",
    color: "#111",
  },

  cardTitle: {
    fontSize: 20,
    fontFamily: "Lato_700Bold",
    color: "#111",
    marginBottom: 4,
  },

  cardVerse: {
    fontSize: 15,
    fontFamily: "Lato_400Regular",
    color: "#8C4227",
    marginBottom: 8,
  },

  cardDescription: {
    fontSize: 15,
    fontFamily: "Lato_400Regular",
    color: "#111",
    lineHeight: 22,
  },
});
