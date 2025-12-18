// MainPages/Home.jsx
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Video } from "expo-av";
import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import FixedNavigationBar from "../components/Navbar.jsx";

const { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) return <></>;

  const BoxContents = [
    {
      icon: "chatbubble-outline",
      title1: "Prayer Regular",
      title2: "Share your Prayer needs",
      buttonText: "Submit Request",
      screen: "SubmitPrayer", // Updated screen name
    },
    {
      icon: "people-outline",
      title1: "Community",
      title2: "Join Discussions",
      buttonText: "Browse Forums",
      screen: "CommunityForum", // Updated screen name
    },
    {
      icon: "help-circle-outline",
      title1: "FAQs",
      title2: "Grow in Faith",
      buttonText: "View FAQs",
      screen: "FAQs", // Updated screen name
    },
    {
      icon: "mail-outline",
      title1: "Contact",
      title2: "Listen to Sermons",
      buttonText: "Contact Us",
      screen: "ContactUs", // Updated screen name
    },
  ];

  return (
    <View style={{ flex: 1 }}>
    <ScrollView style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 10 }}

      >
      {/* Header */}
      <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color="#333" style={{marginTop: 20}}/>
          </TouchableOpacity>
      <Text style={styles.header}>Your Daily Devotion</Text>
      </View>

      <View style={styles.devotionSection}>
        {/* Video */}
        <Video
          source={{ uri: "https://youtu.be/Sgd23lw8NVY" }}
          style={styles.video}
          useNativeControls
          resizeMode="cover"
        />

        {/* Text Content */}
        <View style={styles.textContent}>
          <Text style={styles.mainText}>Prepare your heart to <br />meet with God</Text>
          <Text style={styles.subText}>By Pastor James Muyango</Text>
          <View style={styles.iconRow}>
            <Ionicons name="book-outline" size={20} color="#555" />
            <Text style={styles.iconLabel}>5 min read</Text>
            <Ionicons name="headset-outline" size={20} color="#555" />
            <Text style={styles.iconLabel}>3 min listen</Text>
          </View>
        </View>
      </View>

      {/* Feature Boxes Grid */}
      <View style={styles.featureGrid}>
        {BoxContents.map((box, index) => (
          <View key={index} style={styles.featureBox}>
            <Ionicons name={box.icon} size={30} color="#4D2415" />
            <Text style={styles.featureTitle}>{box.title1}</Text>
            <Text style={styles.featureSubtitle}>{box.title2}</Text>

            <TouchableOpacity
              style={styles.featureButton}
              onPress={() => navigation.navigate(box.screen)}
            >
              <Text style={styles.buttonLabel}>{box.buttonText}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>

    {/* Fixed Navigation Bar */}
    <FixedNavigationBar navigation={navigation}  />
    </View>
  );
}

// Add these new styles
const styles = StyleSheet.create({

  navButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 16,
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  navButtonText: {
    marginTop: 8,
    fontSize: 12,
    color: "#8C4227",
    fontFamily: "Lato_400Regular",
  },

  container: {
    padding: 16,
    paddingBottom:90,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 16,
    color: "#333",
    fontFamily: "Lato_700Bold",
    textAlign: "center",
  },
  devotionSection: {
    flexDirection: "row",
    justifyContent:"space-between",
    marginBottom: 24,
    backgroundColor: "#fff",
    borderRadius: 12,
    fontFamily:"Lato_400Regular",
   
  },
  video: {
    width: "40%",
    height: 128,
    backgroundColor: "#000",
    borderRadius: 12,
  },
  textContent: {
    flex: 1,
    width:"60%",
    padding: 16,
    alignItems: "flex-end",
  },
  mainText: {
    fontSize: 16,
    fontWeight:400,
    marginBottom: 8,
    color: "#222",
    lineHeight: 19,
    marginRight:27,
    fontFamily:"Lato_400Regular",
  },
  subText: {
    fontSize: 13,
    color: "#555",
    marginBottom: 12,
    marginRight: 33,
    fontFamily:"Lato_400Regular",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  iconLabel: {
    marginRight: 6,
    fontSize: 12,
    color: "#555",
    marginLeft:6,
    fontFamily:"Lato_400Regular",
  },
  featureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureBox: {
    width: width / 2 - 24,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 4,
    color: "#222",
    textAlign: "center",
    fontFamily:"Lato_400Regular",
  },
  featureSubtitle: {
    fontSize: 16,
    color: "#555",
    marginVertical: 8,
    textAlign: "center",
  },
  featureButton: {
    borderColor: "#4D2415",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "stretch",
  },
  buttonLabel: {
    color: "#4D2415",
    fontWeight: "700",
    fontSize: 14,
    textAlign: "center",
    fontFamily:"Lato_400Regular",
  },
});

