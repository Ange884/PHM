import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import FixedNavigationBar from "../components/Navbar.jsx";

const { width } = Dimensions.get("window");

export default function BibleStudies({ navigation }) {
  const topics = [
    {
      topic1: "Understanding Sin – Part 1",
      subhead: "Definition and Development",
      progress: "2 / 4 Questions",
    },
    {
      topic1: "Understanding Sin – Part 1",
      subhead: "Consequences and Victory",
      progress: "2 / 4 Questions",
    },
  ];

  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with language selector */}
        <View style={styles.topBar}>
          <View style={styles.languageSelector}>
            <TouchableOpacity style={styles.languageButton}>
              <Ionicons name="language" size={24} color="#4a5568" />
              <Text style={styles.languageText}>EN</Text>
              <Ionicons name="chevron-down" size={16} color="#4a5568" />
            </TouchableOpacity>
          </View>
        </View>

        {/* HEADERS */}
        <View style={{ paddingHorizontal: 22 }}>
        <View style={styles.headers}>
          <Text style={styles.diffHeader}>Current Study</Text>
          <Text style={styles.header}>Past Studies</Text>
        </View>

        {/* TOPIC LIST */}
        {topics.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.topicCard}
            activeOpacity={0.85}
            onPress={() =>
              navigation.navigate("BibleStudyScreen", {
                topic: item.topic1,
              })
            }
          >
            {/* TOP ROW */}
            <View style={styles.topRow}>
              <View style={styles.iconBox}>
                <Ionicons name="book-outline" size={26} color="#8C4227" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.topicTitle}>{item.topic1}</Text>
                <Text style={styles.subHead}>{item.subhead}</Text>
              </View>
            </View>

            {/* BOTTOM ROW */}
            <View style={styles.bottomRow}>
              <View style={styles.progressBox}>
                <Text style={styles.progressText}>{item.progress}</Text>
              </View>

              <Text style={styles.readText}>Read Study</Text>
            </View>
          </TouchableOpacity>
        ))}
        </View>
      </ScrollView>

      <FixedNavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    paddingBottom: 110,
  },

  topBar: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 20,
  paddingVertical: 14,
  backgroundColor: "#f8f5f0",
  marginBottom: 20,
  borderBottomColor: "#e2e8f0",
  borderBottomWidth: 1,
},

iconButton: {
  width: 44,
  height: 44,
  borderRadius: 22,
  backgroundColor: "#ffffff",
  alignItems: "center",
  justifyContent: "center",
  elevation: 3,
},

backIcon: {
  marginLeft: -2, // slight optical alignment
},

languageSelector: {
  backgroundColor: "#ffffff",
  borderRadius: 22,
  elevation: 3,
},

languageButton: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 14,
  paddingVertical: 8,
  gap: 6,
},

languageText: {
  fontSize: 16,
  fontFamily: "Lato_700Bold",
  color: "#333",
},


  headers: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  diffHeader: {
    fontSize: 20,
    fontFamily: "Lato_700Bold",
    color: "#8C4227",
    textDecorationStyle: "underline",
    textDecorationLine: "underline",
  },

  header: {
    fontSize: 20,
    fontFamily: "Lato_400Regular",
    color: "#222",
  },

  topicCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    elevation: 3,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#f3e6de",
    alignItems: "center",
    justifyContent: "center",
  },

  topicTitle: {
    fontSize: 20,
    fontFamily: "Lato_700Bold",
    color: "#333",
  },

  subHead: {
    fontSize: 16,
    fontFamily: "Lato_400Regular",
    color: "#222",
    marginTop: 4,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
  },

  progressBox: {
    backgroundColor: "#f8f5f0",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  progressText: {
    fontSize: 14,
    fontFamily: "Lato_700Bold",
    color: "#8C4227",
  },

  readText: {
    fontSize: 16,
    fontFamily: "Lato_700Bold",
    color: "#8C4227",
    textDecorationLine: "underline",
  },
});


