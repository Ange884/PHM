import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { Video } from "expo-av";
import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import FixedNavigationBar from "../components/Navbar.jsx";
import {DancingScript_400Regular,DancingScript_500Medium,DancingScript_600SemiBold,useFonts as useFontsHandwriting} from "@expo-google-fonts/dancing-script";

const { width } = Dimensions.get("window");

export default function DevotionScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#f8f5f0" }}>
      <ScrollView style={styles.container} 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header with language selector */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.iconButton}>
            <Image 
              source={require("../assets/images/extensions.png")} // Update path as needed
              style={styles.logo}
            />
          </TouchableOpacity>
          
          <View style={styles.languageSelector}>
            <TouchableOpacity style={styles.languageButton}>
              <Ionicons name="language" size={24} color="#4a5568" />
              <Text style={styles.languageText}>EN</Text>
              <Ionicons name="chevron-down" size={16} color="#4a5568" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.contentContainer}>
          {/* Title */}
          <Text style={styles.headerText}>Prepare Your Heart To Meet with God</Text>
          <View style={styles.reflectionUnderline} />
          
          {/* Verses with italic handwriting style */}
          <View style={styles.verseCard}>
            <Text style={styles.versesText}>
              Do not be anxious about anything, but in every situation, 
              by prayer and petition, with thanksgiving, present your requests to God. 
              And the peace of God, which transcends all understanding, will guard your 
              hearts and your minds in Christ Jesus.
            </Text>
            <Text style={styles.referenceText}>Philippians 4:6-7</Text>
          </View>

          {/* Explanation */}
          <View style={styles.explanationCard}>
            <Text style={styles.explanationText}>
              Life often brings worries and uncertainties that can overwhelm our minds and hearts. 
              The Apostle Paul reminds us to bring everything to God in prayer and with thanksgiving. 
              This is not just a suggestion but a pathway to experience God's peace—a peace that 
              the world cannot give or understand. When we consciously choose to trust God and 
              turn our anxieties into prayers, we open ourselves to His supernatural peace 
              guarding our hearts.
            </Text>
          </View>

          {/* Reflection Section */}
          <View style={styles.reflectionContainer}>
            
            <View style={styles.reflectionCard}>
            <View style={styles.reflectionHeaderContainer}>
              <Text style={styles.reflectionHeader}>Reflection</Text>
            </View>
              <Text style={styles.reflectionText}>
                Take a moment to consider the things that cause you worry or fear today.
                How often do you take these concerns to God instead of trying to handle them alone? 
                Reflect on the peace that comes when you surrender your burdens and trust Him to 
                carry them for you.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      
      <FixedNavigationBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "#F7F7F7",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  iconButton: {
    padding: 8,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  languageSelector: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    justifyContent: "flex-end",
  },
  languageButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  languageText: {
    fontSize: 14,
    fontFamily: "Lato_700Bold",
    color: "#4a5568",
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  headerText: {
    fontSize: 19,
    fontFamily: "Lato_700Bold",
    color: "#2d3748",
    textAlign: "left",
    lineHeight: 36,
  },
  verseCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 25,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: "#8C4227",
  },
  versesText: {
    fontSize: 15,
    fontStyle: "italic",
    color: "#4a5568",
    lineHeight: 28,
    textAlign: "left",
    marginBottom: 15,
  },
  referenceText: {
    fontSize: 15,
    fontFamily: "Lato_700Bold",
    color: "#8C4227",
    textAlign: "left",
    marginTop: 5,
  },
  explanationCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 22,
    marginBottom: 30,
  },
  explanationText: {
    fontSize: 15,
    fontFamily: "Lato_400Regular",
    color: "#444",
    lineHeight: 24,
    textAlign: "justify",
  },
  reflectionContainer: {
    marginTop: 10,
  },
  reflectionHeaderContainer: {
    alignItems: "left",
    marginBottom: 20,
  },
  reflectionHeader: {
    fontSize: 17,
    textAlign:"left",
    fontFamily: "Lato_700Bold",
    color: "#765E30",
    marginBottom: 3,
  },
  reflectionUnderline: {
    width: 80,
    height: 3,
    backgroundColor: "#8C4227",
    borderRadius: 2,
    marginBottom: 30,
  },
  reflectionCard: {
    backgroundColor: "#F6F3EC",
    borderRadius: 16,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  reflectionText: {
    fontSize: 15,
    fontFamily: "Lato_400Regular",
    color: "#765E30",
    lineHeight: 26,
    textAlign: "left",
  },
});