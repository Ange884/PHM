import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View,Image } from "react-native";
import { Video } from "expo-av";
import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import FixedNavigationBar from "../components/Navbar.jsx";

const { width } = Dimensions.get("window");

export default function DevotionScreen({navigation}) {
    return(
        <View style={{flex:1}}>
        <ScrollView style={styles.container}>
            <View style={styles.topIcons}>
                <TouchableOpacity style={styles.iconLeft}>
                <Image source={require("../")}/>
                  </TouchableOpacity>
                <TouchableOpacity style={styles.iconRight}>
                <Ionicons name="languages" size={24} color="black" />
                </TouchableOpacity>
                <Text style={RightText}>EN</Text>
                <Ionicons name="arrow-down"></Ionicons>
               </View>
        <View style={styles.AllTextContainer}>
           <Text style={styles.headerText}>Prepare Your Heart To meet with God</Text>
              <Text style={styles.versesText}>Do not be anxious about anything, but in every situation, 
                by prayer and petition, with thanksgiving, present your requests to God. And the peace of God,
                which transcends all understanding, will guard your hearts and your minds in Christ Jesus.</Text>

                <Text style={styles.referenceText}>Philippians 4:6-7</Text>

                  <Text style={styles.explanationText}>Life often brings worries and uncertainties that can overwhelm our minds and hearts. 
                    The Apostle Paul reminds us to bring everything to God in prayer and with thanksgiving. 
                    This is not just a suggestion but a pathway to experience God's peace—a peace that the world cannot give or understand. When we consciously choose to trust God and turn our anxieties into prayers, we open ourselves to His supernatural peace guarding our hearts.</Text>
               </View>

        <View style={styles.reflectionContainer}>
            <Text style={styles.reflectionHeader}>Reflection</Text>
            <Text style={styles.reflectionText}>Take a moment to consider the things that cause you worry or fear today.
                 How often do you take these concerns to God instead of trying to handle them alone? Reflect on the peace 
                 that comes when you surrender your burdens and trust Him to carry them for you.</Text> 
                
        </View>
            </ScrollView>
            <FixedNavigationBar navigation={navigation}/>
</View>


         
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});