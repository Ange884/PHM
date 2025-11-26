import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { Link} from 'expo-router';
import WelcomeScreen from "../../onboarding/welcome.jsx";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
       <NavigationContainer>
              <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="welcome" component={WelcomeScreen} />
                <Stack.Screen name="/" component={WelcomeScreen}/>
              </Stack.Navigator>
       </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
