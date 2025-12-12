import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";

export default function NavbarFooter() {
  const [openIndex, setOpenIndex] = useState(null);
  let [fontsLoaded] = useFonts({
          Lato_400Regular,
          Lato_700Bold,
        });
      
        if (!fontsLoaded) return <></>;

        return (
            <View style={styles.navbar}>
                <TouchableOpacity >
                <Image source={require('../assets/images/Home.png')} style={styles.navicon} />
                <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={require('../assets/images/Devotion.png')} style={styles.navicon} />
                <Text style={styles.navText}>Daily Devotions</Text>
                </TouchableOpacity>
                 <TouchableOpacity>
                <Image source={require("../assets/images/discover.png")} style={styles.navicon} />
                <Text style={styles.navText}>Discover</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={require("../assets/images/biblestudy.png")} style={styles.navicon} />
                <Text style={styles.navText}>Bible study</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={require("../assets/images/More.png")} style={styles.navicon} />
                <Text style={styles.navText}>More</Text>
                </TouchableOpacity>
                </View>
        );
    }