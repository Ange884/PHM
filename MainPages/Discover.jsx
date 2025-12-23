import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { Video } from "expo-av";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import FixedNavigationBar from "../components/Navbar.jsx";

const { width } = Dimensions.get("window");

export default function DiscoverScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        {/* HEADER */}
        <Text style={styles.pageTitle}>Discover</Text>

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

        {/* CATEGORIES */}
        <View style={styles.discoverCategories}>
          <Text style={styles.sectionTitle}>Most Popular Categories</Text>

          <View style={styles.categoriesGrid}>
            {[
              "Worship",
              "Fellowship",
              "Prayer & Fasting",
              "Spiritual Growth",
              "Self-control",
              "Salvation",
              "Prayer",
              "Faith",
            ].map((item, index) => (
              <View key={index} style={styles.categoryItem}>
                <Text style={styles.categoryText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* SERMONS HEADER */}
        <View style={styles.sermonsHeader}>
          <Text style={styles.sectionTitle}>Popular Sermons</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        {/* VIDEO CARD */}
        <View style={styles.videoCard}>
          <Video
            style={styles.video}
            source={require("../assets/images/wanderlyn.mp4")}
            resizeMode="cover"
            shouldPlay
            useNativeControls={true}
          />
        </View>

        {/* RECOMMENDED */}
        <Text style={styles.sectionTitle}>Recommended for You</Text>
        <Text style={styles.subheader}>Psalms 118:1–12</Text>
      </ScrollView>

      <FixedNavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f8f5f0",
  },

  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },

  pageTitle: {
    fontSize: 26,
    fontFamily: "Lato_700Bold",
    color: "#2D3748",
    marginBottom: 16,
  },

  /* SEARCH BAR */
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

  /* SECTIONS */
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Lato_700Bold",
    color: "#2D3748",
    marginBottom: 12,
  },

  /* CATEGORIES */
  discoverCategories: {
    marginBottom: 25,
  },

  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  categoryItem: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    elevation: 1,
  },

  categoryText: {
    fontSize: 15,
    fontFamily: "Lato_400Regular",
    color: "#333",
  },

  /* SERMON HEADER */
  sermonsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  seeAll: {
    fontSize: 14,
    fontFamily: "Lato_700Bold",
    color: "#8C4227",
  },

  /* VIDEO */
  videoCard: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 25,
    elevation: 4,
  },

  video: {
    width: "100%",
    height: width * 0.55,
  },

  /* RECOMMENDED */
  subheader: {
    fontSize: 15,
    fontFamily: "Lato_400Regular",
    color: "#555",
    marginBottom: 10,
  },
});
