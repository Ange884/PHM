import React from "react";
import { useFonts, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function OnboardingScreen() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        What are you seeking in your Faith journey?
      </Text>

      {/* 2x2 Grid */}
      <View style={styles.optionsGrid}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Peace & Comfort</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Purpose & Direction</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Strength in Trials</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Bible study</Text>
        </TouchableOpacity>
      </View>

      {/* Full-width fifth option */}
      <TouchableOpacity style={styles.fullWidthOption}>
        <Text style={styles.optionText}>
          Closer Relationship with God
        </Text>
      </TouchableOpacity>

      {/* Skip + Next */}
      <View style={styles.skipandNextButtons}>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff", // classic light background
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Lato_700Bold",
    color: "#333",
    marginBottom: 25,
    textAlign: "center",
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 5,
  },
  optionButton: {
    width: "48%",
    paddingVertical: 30,
    backgroundColor: "#EBEBEB",
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, // subtle shadow for Android
  },
  optionText: {
    fontSize: 16,
    fontFamily: "Lato_400Regular",
    color: "#333",
  },
  fullWidthOption: {
    width: "100%",
    paddingVertical: 30,
    backgroundColor: "#EBEBEB",
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 25,
  },
  skipandNextButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    bottom: 10,
    textAlignVertical: "center",
  },
  skipText: {
    fontSize: 16,
    fontFamily: "Lato_400Regular",
    color: "#888",
  },
  nextButton: {
    backgroundColor: "#007AFF", // classic blue button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  nextButtonText: {
    fontSize: 16,
    fontFamily: "Lato_700Bold",
    color: "#fff",
  },
});
