import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from "react-native";
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

      {/* Upper Content */}
      <View style={styles.upperContents}>
        {/* Left side text */}
        <View style={styles.leftSide}>
          <Text style={styles.prep}>Prepare Your Heart To Meet With God</Text>
          <Text style={styles.subprep}>By Pastor James Muyango</Text>
          <View style={styles.TextIconRow}>
            <Ionicons name="book-outline" size={20} color="#555" />
            <Text style={styles.iconText}>5 min read</Text>
            <Ionicons name="headset-outline" size={20} color="#555" style={{ marginLeft: 20 }} />
            <Text style={styles.iconText}>3 min listen</Text>
          </View>
        </View>

        {/* Right side video */}
        <Video
          source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }} // replace with your video
          style={styles.video}
          controls={true}
          resizeMode="contain"
        />
      </View>

      {/* Boxes Grid */}
      <View style={styles.boxGrid}>
        {BoxContents.map((box, index) => (
          <View key={index} style={styles.box}>
            <Ionicons name={box.icon} size={30} color="#4D2415" />
            <Text style={styles.boxTitle}>{box.title1}</Text>
            <Text style={styles.boxSub}>{box.title2}</Text>
            <TouchableOpacity style={styles.boxButton}>
              <Text style={styles.buttonText}>{box.buttonText}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
    color: "#333",
    fontFamily:"Lato_700Bold",
  },
  upperContents: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 24,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  leftSide: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  prep: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    color: "#222",
  },
  subprep: {
    fontSize: 16,
    color: "#555",
    marginBottom: 12,
  },
  TextIconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconText: {
    marginLeft: 6,
    fontSize: 14,
    color: "#555",
  },
  video: {
    flex: 1,
    height: 180,
  },
  boxGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  box: {
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

  // Make it a flex container
  flexDirection: "column",
  justifyContent: "space-between", // this pushes content to top and bottom
  height: 200, // set a fixed height for consistent spacing
},

  boxTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 8,
    color: "#222",
    textAlign: "center",
  },
  boxSub: {
    fontSize: 14,
    color: "#555",
    marginVertical: 8,
    marginBottom:0,
  },
 boxButton: {
  backgroundColor: "#8C4227",
  paddingVertical: 12,
  paddingHorizontal: 16,
  borderRadius: 8,
  // remove marginTop
  alignSelf: "stretch", // optional: makes button full width inside box
},

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
