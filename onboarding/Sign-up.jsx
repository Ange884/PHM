import React from "react";
import { useFonts, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from "react-native-web";

export default function SignUpScreen({navigate}) {
    let [fontsLoaded] = useFonts({
        Lato_400Regular,
        Lato_700Bold,
    });

    if (!fontsLoaded) {
        return <></>;
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
        <View style={styles.container}>
              <Text style={styles.titleText}>Sign Up</Text>
              <Text style={styles.subtitleText}>Create an account ! Please enter your details</Text>
              </View>
            </ScrollView>
    );
            
}