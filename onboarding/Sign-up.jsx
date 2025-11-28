import React from "react";
import { useFonts, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignUpScreen({ navigate }) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) return <></>;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        {/* Title */}
        <Text style={styles.titleText}>Sign Up</Text>
        <Text style={styles.subtitleText}>Create an account! Please enter your details</Text>

        {/* Inputs */}
        <TextInput 
          placeholder="First Name"
          style={styles.input}
          placeholderTextColor="#353434ff"
        />
        <TextInput 
          placeholder="Last Name"
          style={styles.input}
          placeholderTextColor="#353434ff"
        />
        <TextInput 
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          placeholderTextColor="#353434ff"
        />
        <TextInput 
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#353434ff"
        />

        {/* Create Account Button */}
        <TouchableOpacity style={styles.createBtn}>
          <Text style={styles.createBtnText}>Create Account</Text>
        </TouchableOpacity>

        {/* Divider */}
        <Text style={styles.orText}>Or continue with</Text>

        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          {/* Google */}
          <TouchableOpacity style={styles.socialBtn}>
            <Ionicons name="logo-google" size={22} color="#EA4335" />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          {/* Apple */}
          <TouchableOpacity style={styles.socialBtn}>
            <Ionicons name="logo-apple" size={22} color="#000" />
            <Text style={styles.socialText}>Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Already have account */}
        <Text style={styles.accountText}>
          Already have an account?
          <Text style={styles.highlight}> Log in</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FDFDFD",
  },

  container: {
    width: "100%",
    alignItems: "center",
  },

  titleText: {
    fontFamily: "Lato_700Bold",
    fontSize: 28,
    color: "#8C4227",
    textAlign: "center",
  },

  subtitleText: {
    fontFamily: "Lato_400Regular",
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 25,
  },

  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    color: "#000",

    // Shadow
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderColor: "#a3a1a1ff",
    borderWidth: 1,
  },

  createBtn: {
    backgroundColor: "#8C4227",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },

  createBtnText: {
    color: "#fff",
    fontFamily: "Lato_700Bold",
    fontSize: 17,
  },

  orText: {
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Lato_400Regular",
    color: "#888",
    fontSize: 13,
  },

  socialContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    paddingVertical: 12,
    backgroundColor: "#f4f4f4",
    borderRadius: 10,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },

  socialText: {
    marginLeft: 10,
    fontFamily: "Lato_700Bold",
    fontSize: 14,
    color: "#333",
  },

  accountText: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginTop: 25,
    fontFamily: "Lato_400Regular",
  },

  highlight: {
    color: "#8C4227",
    fontFamily: "Lato_700Bold",
  },
});
