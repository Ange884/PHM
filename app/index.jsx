import WelcomeScreen from "../onboarding/welcome.jsx";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "../onboarding/onboarding.jsx"
const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="/" component={WelcomeScreen} />
        <Stack.Screen name="onboarding1" component={OnboardingScreen} />
      </Stack.Navigator>
  );
}
