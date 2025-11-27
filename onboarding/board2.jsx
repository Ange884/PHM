import React from "react";
import { useFonts, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function OnboardingScreen2() {
       let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }

    return (
        <View style={styles.container}>
            <View style={styles.ProgressView}>
                <View style={[styles.progressbar, styles.progressbarActive]}></View>
                <View style={[styles.progressbar, styles.progressbarActive]}></View>
                <View style={styles.progressbar}></View>
            </View>

      <Text style={styles.titleText}>Are you new to the Bible or walking with God for years?</Text>
     </View>
   );}