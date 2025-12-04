import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Video from "react-native-video";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const BoxContents = [
    {
      icon: "chatbubble-outline",
      title1: "Prayer Regular",
      title2: "Share Your Prayer needs",
      buttonText: "Submit Request",
    },
    {
      icon: "people-outline",
      title1: "Devotional",
      title2: "Daily Devotion Tips",
      buttonText: "Browse Forums",
    },
    {
      icon: "help-circle-outline",
      title1: "Bible Study",
      title2: "Grow in Faith",
      buttonText: "View FAQs",
    },
    {
      icon: "mail-outline",
      title1: "Podcast",
      title2: "Listen to Sermons",
      buttonText: "Contact Us",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Your Daily Devotion</Text>

      <View style={styles.devotionSection}>
        {/* Video */}
        <Video
          source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
          style={styles.video}
          controls={true}
          resizeMode="cover"
        />

        {/* Text Content */}
        <View style={styles.textContent}>
          <Text style={styles.mainText}>Prepare Your Heart <br/> To Meet With God</Text>
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
            <TouchableOpacity style={styles.featureButton}>
              <Text style={styles.buttonLabel}>{box.buttonText}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
    marginBottom: 24,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    gap: 50,
  },
  video: {
    width: "50%",
    height: 200,
    backgroundColor: "#000",
  },
  textContent: {
    flex: 1,
    width:"50%",
    padding: 16,
    alignItems: "flex-end",
    marginLeft:20,
  },
  mainText: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: "#222",
    textAlign: "left",
    lineHeight: 28,
  },
  subText: {
    fontSize: 18,
    color: "#555",
    marginBottom: 12,
    textAlign: "left",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  iconLabel: {
    marginLeft: 6,
    fontSize: 16,
    color: "#555",
    marginRight: 16,
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
    height: 200,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 4,
    color: "#222",
    textAlign: "center",
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
    fontSize: 16,
    textAlign: "center",
  },
});