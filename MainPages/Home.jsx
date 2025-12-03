import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Video from "react-native-video";

export default function HomeScreen(){
    <ScrollView style={Styles.container}>
         
         <Text style={Styles.header}>Your Daily Devotion</Text>
         <View style={styles.VidContainer}>
            {/* Right-side Video */}
           <Video 
           source={{ }}
           style={Styles.Video}
           />
            
            {/* Left side Words */}

         </View>

  </ScrollView>
}