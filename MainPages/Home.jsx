// MainPages/Home.jsx
import React, { useRef, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Video } from "expo-av";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import FixedNavigationBar from "../components/Navbar.jsx";

const { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) return null;

  const BoxContents = [
    {
      icon: "chatbubble-outline",
      title1: "Prayer Regular",
      title2: "Share your Prayer ",
      buttonText: "Submit Request",
      screen: "SubmitPrayer",
    },
    {
      icon: "people-outline",
      title1: "Community",
      title2: "Join Discussions",
      buttonText: "Browse Forums",
      screen: "CommunityForum",
    },
    {
      icon: "help-circle-outline",
      title1: "FAQs",
      title2: "Grow in Faith",
      buttonText: "View FAQs",
      screen: "FAQs",
    },
    {
      icon: "mail-outline",
      title1: "Contact",
      title2: "Listen to Sermons",
      buttonText: "Contact Us",
      screen: "ContactUs",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Header */}
        <View style={styles.NavButtons}>
          <Text style={styles.header}>Your Daily Devotion</Text>
        </View>

        {/* Devotion Section */}
        <View style={styles.devotionSection}>
          {/* 🎥 Video with custom controls */}
          <View style={styles.videoWrapper}>
            <Video
              ref={videoRef}
              style={styles.video}
              source={require("../assets/images/song.mp4")}
              resizeMode="cover"
              shouldPlay={isPlaying}
              useNativeControls={false}
              onPlaybackStatusUpdate={(status) => {
                if (!status.isLoaded) return;
                setIsPlaying(status.isPlaying);
              }}
            />

            <TouchableOpacity
              style={styles.playPauseBtn}
              onPress={async () => {
                const status = await videoRef.current.getStatusAsync();
                if (!status.isLoaded) return;

                if (status.isPlaying) {
                  await videoRef.current.pauseAsync();
                } else {
                  await videoRef.current.playAsync();
                }
              }}
            >
              <Ionicons
                name={isPlaying ? "pause" : "play"}
                size={28}
                color="#fff"
              />
            </TouchableOpacity>
          </View>

          {/* Text Content */}
          <View style={styles.textContent}>
            <Text style={styles.mainText}>
              Prepare your heart to {"\n"}meet with God
            </Text>
            <Text style={styles.subText}>By Pastor James Muyango</Text>

            <View style={styles.iconRow}>
              <Ionicons name="book-outline" size={18} color="#555" />
              <Text style={styles.iconLabel}>5 min read</Text>
              <Ionicons name="headset-outline" size={18} color="#555" />
              <Text style={styles.iconLabel}>3 min listen</Text>
            </View>
          </View>
        </View>

        {/* Feature Boxes */}
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

      {/* Fixed Navbar */}
      <FixedNavigationBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 90,
    backgroundColor: "#f9f9f9",
  },

  NavButtons: {
    alignItems: "center",
    marginBottom: 20,
  },

  header: {
    fontSize: 30,
    color: "#333",
    fontFamily: "Lato_700Bold",
    textAlign: "center",
  },

  devotionSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },

  videoWrapper: {
    width: "40%",
    height: 130,
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#000",
  },

  video: {
    width: "100%",
    height: "100%",
  },

  playPauseBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -18 }, { translateY: -18 }],
    backgroundColor: "rgba(0,0,0,0.55)",
    padding: 10,
    borderRadius: 30,
  },

  textContent: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: "center",
  },

  mainText: {
    fontSize: 16,
    color: "#222",
    fontFamily: "Lato_400Regular",
    marginBottom: 6,
  },

  subText: {
    fontSize: 13,
    color: "#555",
    marginBottom: 10,
    fontFamily: "Lato_400Regular",
  },

  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconLabel: {
    marginHorizontal: 6,
    fontSize: 12,
    color: "#555",
    fontFamily: "Lato_400Regular",
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
    elevation: 3,
  },

  featureTitle: {
    fontSize: 18,
    marginTop: 8,
    color: "#222",
    fontFamily: "Lato_700Bold",
    textAlign: "center",
  },

  featureSubtitle: {
    fontSize: 14,
    color: "#555",
    marginVertical: 8,
    textAlign: "center",
    fontFamily: "Lato_400Regular",
  },

  featureButton: {
    borderColor: "#4D2415",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: "stretch",
  },

  buttonLabel: {
    color: "#4D2415",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Lato_700Bold",
  },
});
