import React, { useState } from "react";
import { useFonts, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function OnboardingScreen2({navigate}) {
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
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-start" }}>
      {/* Progress Bars */}
      <View style={styles.ProgressView}>
        <View style={[styles.progressbar, styles.progressbarActive]} />
        <View style={[styles.progressbar, styles.progressbarActive]} />
        <View style={[styles.progressbar,styles.progressbarActive]} />
      </View>

      {/* Question */}
      <Text style={styles.titleText}>
        Create a free account to keep your journey going-forever.
      </Text>

      {/* Options */}
      <View style={styles.optionsGrid}>
        <Option
          label="Access offline Bibles-never miss God's word"
          checked={options.newToBible}
          onPress={() => toggleOption("newToBible")}
        />
        <Option
          label="Join Devotin plans -Walk your journey with Others"
          checked={options.reconnecting}
          onPress={() => toggleOption("reconnecting")}
        />
        <Option
          label="Save notes and Reflections -Capture what God teaches you"
          checked={options.deepeningWalk}
          onPress={() => toggleOption("deepeningWalk")}
        />
        <Option
          label="Connect with friends in Faith -Grow together"
          checked={options.encouragement}
          onPress={() => toggleOption("encouragement")}
        />
        {/* <Option
          label="I'm yet to know"
          checked={options.yetToKnow}
          onPress={() => toggleOption("yetToKnow")}
        /> */}

        <View style={styles.mediaIcons}>
  <View style={styles.iconWrapper}>
    <Ionicons name="logo-apple" size={32} color="#000" />
  </View>

  <View style={styles.iconWrapper}>
    <Ionicons name="logo-google" size={32} color="#EA4335" />
  </View>
  <View style={styles.iconWrapper}>
    <Ionicons name="logo-facebook" size={32} color="#1877F2" />
  </View>
</View>
        <View style={styles.CreateAccountButton}>
  <TouchableOpacity 
    style={styles.CreateAccountButtonInner}
    onPress={() => navigate("OnboardingScreen4")}
  >
    <Text style={styles.CreateAccountButtonText}>Create Account</Text>
  </TouchableOpacity>
</View>
  {/*Continue without signing In button! */}
<View style={styles.continueButton}>
  <TouchableOpacity 
    style={styles.ContinueButtonInner}
    onPress={() => navigate("OnboardingScreen4")}
  >
    <Text style={styles.ContinueButtonText}>Create Account</Text>
  </TouchableOpacity>
</View>

<Text style={styles.accountText}>
  Already have an account?
  <Text style={styles.highlight}> Log in</Text>
</Text>




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
    margin:0,
    alignContent:"center",
  },
  ProgressView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 30,
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
    color: "#333",
    marginBottom: 30,
  },
  optionsGrid: {
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginLeft:1,
  },
  checkbox: {
    width: 28,
    height: 28,
    borderWidth: 2,
    borderColor: "#319F43",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "#fff",
  },
  checkboxChecked: {
    backgroundColor: "#319F43",
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
  mediaIcons: {
    width:"100%",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 20,
  gap: 15,  // If gap doesn't work in your RN version, use marginHorizontal inside iconWrapper
},

iconWrapper: {
  padding: 12,
  backgroundColor: "#F0F0F0",
  borderRadius: 30,
  justifyContent: "center",
  alignItems: "center",

  // shadow (iOS)
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,

  // shadow (Android)
  elevation: 4,
},

CreateAccountButton: {
  width: "100%",
  marginTop: 25,
  alignItems: "center",
},

CreateAccountButtonInner: {
  backgroundColor: "#8C4227",
  width: "100%",
  paddingVertical: 17,
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",

  // Shadow (iOS)
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
},

CreateAccountButtonText: {
  fontFamily: "Lato_700Bold",
  color: "#fff",
  fontSize: 18,
  textAlign: "center",
},

continueButton: {
  width: "100%",
  alignItems: "center",
  marginTop: 10,
},

ContinueButtonInner: {
  backgroundColor: "#fff",       // your theme color
  width: "100%",                     // nice width
  paddingVertical: 16,
  borderRadius: 10,
  borderColor: "#8C4227",   // border color
  borderWidth: 2,
  justifyContent: "center",
  alignItems: "center",

  // Soft shadow for iOS
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,

  // soft shadow for Android
  elevation: 4,
},

ContinueButtonText: {
  color: "#8C4227",       // your theme color
  fontFamily: "Lato_700Bold",
  fontSize: 18,
  letterSpacing: 0.5,
},
accountText: {
  fontSize: 19,
  color: "#1b1b1bff",
  textAlign: "center",
  marginTop: 15,
  fontFamily: "Lato_400Regular",
},

highlight: {
  color: "#8C4227",        // your theme color
  fontFamily: "Lato_700Bold",
},


});
