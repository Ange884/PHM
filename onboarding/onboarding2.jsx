import React, { useState } from "react";
import { useFonts, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function OnboardingScreen3({navigation}) {
    const [options, setOptions] = useState({
      newToBible: false,
      reconnecting: false,
      deepeningWalk: false,
      encouragement: false,
      yetToKnow: false,
    });
    
    // Toggle function
    const toggleOption = (key) => {
      setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
    };
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) return <></>;

  // State for each checkbox

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}>
      {/* Progress Bars */}
      <View style={styles.ProgressView}>
        <View style={[styles.progressbar, styles.progressbarActive]} />
        <View style={[styles.progressbar, styles.progressbarActive]} />
        <View style={[styles.progressbar]} />
      </View>

      {/* Question */}
      <Text style={styles.titleText}>
        Are you new to the Bible or walking with God for years?
      </Text>

      {/* Options */}
      <View style={styles.optionsGrid}>
        <Option
          label="I'm new and just starting out"
          checked={options.newToBible}
          onPress={() => toggleOption("newToBible")}
        />
        <Option
          label="I want to reconnect with God"
          checked={options.reconnecting}
          onPress={() => toggleOption("reconnecting")}
        />
        <Option
          label="I'm deepening my daily walk"
          checked={options.deepeningWalk}
          onPress={() => toggleOption("deepeningWalk")}
        />
        <Option
          label="I'm here for encouragement"
          checked={options.encouragement}
          onPress={() => toggleOption("encouragement")}
        />
        <Option
          label="I'm yet to know"
          checked={options.yetToKnow}
          onPress={() => toggleOption("yetToKnow")}
        />
      </View>

      {/* Buttons */}
      <View style={styles.skipandNextButtons}>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} 
          onPress={() => navigation.navigate("onboarding3")}
        >
          <Text style={styles.nextButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Checkbox Option Component
const Option = ({ label, checked, onPress }) => (
  <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
    <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
      {checked && <Text style={styles.checkmark}>✓</Text>}
    </View>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  ProgressView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    width: "100%",        // adjust as needed
  },
  progressbar: {
    flex:1,
    width: 60,
    height: 5,
    backgroundColor: "#eee",
    marginHorizontal: 5,
    borderRadius: 10,
  },
  progressbarActive: {
    backgroundColor: "#8C4227",
  },
  titleText: {
    fontFamily: "Lato_700Bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  optionsGrid: {
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginLeft:18,
  },
  checkbox: {
    width: 28,
    height: 28,
    borderWidth: 2,
    borderColor: "#f5a88cff",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "#fff",
  },
  checkboxChecked: {
    backgroundColor: "#8C4227",
  },
  checkmark: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    fontFamily: "Lato_400Regular",
    color: "#333",
  },
  skipandNextButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  skipText: {
    fontSize: 18,
    color: "#000",
    marginBottom:0,
    marginTop:15,
    fontFamily: "Lato_700Bold",
  },
  nextButton: {
    backgroundColor: "#8C4227",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  
  nextButtonText: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "Lato_700Bold",
  },
});

