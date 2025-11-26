import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function WelcomeScreen() {
    return (
        <ImageBackground 
            source={require('../assets/images/welcome.png')} 
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.text}>Welcome!</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, 
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
