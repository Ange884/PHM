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
    <>
    <View style={styles.container}>
        <View style={styles.ProgressView}>
            <View style={[styles.progressbar, styles.progressbarActive]}></View>
            <View style={styles.progressbar}></View>
            <View style={styles.progressbar}></View>
        </View>

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

    </View>
      {/* Skip + Next */}
      <View style={styles.skipandNextButtons}>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>continue</Text>
        </TouchableOpacity>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff", // classic light background
    justifyContent: "flex-start",
    alignItems: "center",
  },

  ProgressView: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",        // adjust as needed
  height: 5,
  alignSelf: "center",
  marginVertical: 20,
},

progressbar: {
  flex: 1,
  height: 4,
  backgroundColor: "#D9D9D9",  // inactive color
  marginHorizontal: 4,
  borderRadius: 10,
},
progressbarActive: {
  backgroundColor: "#8C4227",   // your active color
}
,
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
    borderColor: "#f1f1f1ff",
  },
  optionText: {
    fontSize: 18,
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
    borderColor: "#f1f1f1ff",
    marginBottom: 25,
  },
  skipandNextButtons: {
  position: "absolute",
  bottom: 20,
  left: 0,
  right: 0,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 20,
  width: "100%",
},

  skipText: {
    fontSize: 18,
    fontFamily: "Lato_400Regular",
    color: "#000",
    marginLeft: 10,
  },
  nextButton: {
    backgroundColor: "#8C4227", // classic blue button
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 12,
  },
  nextButtonText: {
    fontSize: 16,
    fontFamily: "Lato_700Bold",
    color: "#fff",
  },
});
