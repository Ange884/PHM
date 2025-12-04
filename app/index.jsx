import WelcomeScreen from "../onboarding/welcome.jsx";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "../onboarding/onboarding.jsx";
import OnboardingScreen2 from "../onboarding/onboarding2.jsx";
import OnboardingScreen3 from "../onboarding/onboarding3.jsx";
import SignUpScreen from "../onboarding/Sign-up.jsx"; 
import SignInScreen from "../onboarding/sign-in.jsx";
import HomeScreen from "../MainPages/Home.jsx";

const Stack = createNativeStackNavigator();

export default function MainScreen() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="/" component={WelcomeScreen} />
        <Stack.Screen name="onboarding1" component={OnboardingScreen} />
        <Stack.Screen name="onboarding2" component={OnboardingScreen2} />
        <Stack.Screen name="onboarding3" component={OnboardingScreen3} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="signin" component={SignInScreen} />
        <Stack.Screen name="home" component={HomeScreen}/>
      </Stack.Navigator>
  );
}
