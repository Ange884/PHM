import { View, Text, StyleSheet, ImageBackground, Dimensions, Touchable } from 'react-native';

const { width, height } = Dimensions.get('window'); // get device width & height

export default function WelcomeScreen() {
    return (
        <ImageBackground 
            source={require('../assets/images/welcome.png')} 
            style={styles.background}
            resizeMode="cover" 
        >
        <Image source={require('../assets/images/phmlogo.png')} style={styles.logo}/>
         <Text style={styles.title}>Welcome to PHM App</Text>
           <Text style={styles.subtitle}>Grow your daily Scripture through prayer and fellowship</Text>
              <TouchableOpacity style={styles.button}>
                 <Text style={styles.buttonText}>Join now!</Text>
              </TouchableOpacity>

              <Text style={styles.signInText}>Already have an account?<Text style={styles.highlight}>Sign In</Text></Text>
            <View style={styles.overlay}>
                <Text style={styles.text}>Welcome!</Text>
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
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.3)', 
        padding: 20,
        borderRadius: 10,
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
