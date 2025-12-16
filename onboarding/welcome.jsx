import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useFonts, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({navigation}) {
       let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }

    return (
        <ImageBackground 
            source={require('../assets/images/welcome.png')} 
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Image source={require('../assets/images/phmlogo.png')} style={styles.logo} />

                <Text style={styles.title}>Welcome to PHM App</Text>
                <Text style={styles.subtitle}>Grow your daily Scripture through prayer and fellowship</Text>

                <TouchableOpacity style={styles.button}
                   onPress={()=>navigation.navigate("Onboarding1")}
                 >
                    <Text style={styles.buttonText}>Join now!</Text>
                </TouchableOpacity>

                <Text style={styles.signInText}>
                    Already have an account? <Text style={styles.highlight} onPress={()=>navigation.navigate("signin")}>Log in</Text>
                </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 30,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'Lato_700Bold',
    },
    subtitle: {
        fontSize: 19,
        color: '#000',
        textAlign: 'center',
        marginBottom: 30,
        fontFamily: 'Lato_400Regular',
    },
    button: {
        backgroundColor: '#8C4227', // primary button color
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 10,
        marginBottom: 20,
        width: '88%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'Lato_700Bold',
    },
    signInText: {
        color: '#000',
        fontSize: 18,
        fontFamily: 'Lato_400Regular',
    },
    highlight: {
        fontWeight: 'bold',
        color:"#8C4227",
    },
});











