import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUpScreen({ navigation, checked, onPress}) {
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

        {/* Inputs with labels */}
        <Text style={styles.label}>First Name</Text>
        <TextInput 
          placeholder="Enter your First Name"
          style={styles.input}
          placeholderTextColor="#7a7878ff"
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput 
          placeholder="Enter your Last Name"
          style={styles.input}
          placeholderTextColor="#7a7878ff"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput 
          placeholder="Enter your Email"
          style={styles.input}
          keyboardType="email-address"
          placeholderTextColor="#7a7878ff"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput 
          placeholder="Enter your Password"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#7a7878ff"
        />

          <View style={styles.policyTermsContainer}>
      {/* Checkbox + Label */}
      <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
        <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
          {checked && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </TouchableOpacity>

      {/* Terms and Privacy text */}
      <Text style={styles.policyTermsText}>
        By signing up, you agree to our{" "}
        <Text style={styles.highlight}>Terms of Service</Text> and{" "}
        <Text style={styles.highlight}>Privacy Policy</Text>.
      </Text>
    </View>

        {/* Create Account Button */}
        <TouchableOpacity style={styles.createBtn} onPress={() =>navigation.navigate("signin")}>
          <Text style={styles.createBtnText}>Create Account</Text>
        </TouchableOpacity>


        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          {/* Google */}
          <TouchableOpacity style={styles.socialBtn}>
            <Ionicons name="logo-google" size={22} color="#EA4335" />
            <Text style={styles.socialText}>Sign in with Google</Text>
          </TouchableOpacity>

          {/* Apple */}
          <TouchableOpacity style={styles.socialBtn}>
            <Ionicons name="logo-apple" size={22} color="#000" />
            <Text style={styles.socialText}>Sign in with Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Already have account */}
        <Text style={styles.accountText}>
          Already have an account?
          <Text style={styles.highlight}>Sign in</Text>
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
    marginTop: 40,
    marginBottom: 40,
  },

  titleText: {
    fontFamily: "Lato_700Bold",
    fontSize: 26,       // slightly smaller than 28, still readable
    color: "#8C4227",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 5,
  },

  subtitleText: {
    fontFamily: "Lato_400Regular",
    fontSize: 17,       // minimal 17
    color: "#555",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 20,
  },

  label: {
    fontSize: 17,
    fontFamily: "Lato_700Bold",
    color: "#333",
    alignSelf: "flex-start",
    marginBottom: 5,
    marginLeft: 5,
  },

  input: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontFamily: "Lato_400Regular",
    fontSize: 17,       // uniform font size
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
    paddingVertical: 17,
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
    fontSize: 18,
  },

  orText: {
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Lato_400Regular",
    color: "#888",
    fontSize: 17,
  },

  socialContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    borderColor: "#a5a2a2ff",
    borderWidth:1,
    marginTop: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },

  socialText: {
    marginLeft: 10,
    fontFamily: "Lato_700Bold",
    fontSize: 17,
    color: "#333",
  },

  accountText: {
    fontSize: 17,
    color: "#333",
    letterSpacing: 0.5,
    textAlign: "center",
    marginTop: 25,
    fontFamily: "Lato_700Bold",
  },

  highlight: {
    color: "#8C4227",
    fontFamily: "Lato_700Bold",
    fontSize:18,
  },
  policyTermsContainer: {
  width: "100%",
  marginTop: 10,
  marginBottom: 15,
  flexDirection: "row",
  alignItems: "flex-start",
  gap: 10,
},

checkboxContainer: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 3,
},

checkbox: {
  width: 22,
  height: 22,
  borderWidth: 2,
  borderColor: "#8C4227",
  borderRadius: 6,
  justifyContent: "center",
  alignItems: "center",
},

checkboxChecked: {
  backgroundColor: "#8C4227",
  borderColor: "#8C4227",
},

checkmark: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
},

policyTermsText: {
  flex: 1,
  fontSize: 16,
  fontFamily: "Lato_400Regular",
  color: "#333",
  lineHeight: 20,
},

highlight: {
  color: "#8C4227",
  fontFamily: "Lato_700Bold",
},
  
});
