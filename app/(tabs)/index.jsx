// navigation/AppNavigator.jsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import all your screens
import BibleStudies from "../../MainPages/BibleStudies.jsx";
import BibleStudyScreen from "../../MainPages/Biblestudy.jsx";
import CommunityForum from "../../MainPages/communityForum.jsx";
import ContactUsScreen from "../../MainPages/ContactUs.jsx";
import DailyDevotionScreen from "../../MainPages/DailyDevotion.jsx";
import DevotionScreen from "../../MainPages/Devotion.jsx";
import DiscoverScreen from "../../MainPages/Discover.jsx";
import FAQsScreen from "../../MainPages/FAQs.jsx";
import ForumsScreen from "../../MainPages/Forums.jsx";
import HomeScreen from "../../MainPages/Home.jsx";
import MoreScreen from "../../MainPages/More.jsx";
import PostDiscussionScreen from "../../MainPages/PostDiscussion.jsx";
import SavedScreen from "../../MainPages/Saved.jsx";
import SubmitPrayerRequest from "../../MainPages/Submit_Request.jsx";
import OnboardingScreen from "../../onboarding/onboarding.jsx";
import OnboardingScreen2 from "../../onboarding/onboarding2.jsx";
import OnboardingScreen3 from "../../onboarding/onboarding3.jsx";
import SignInScreen from "../../onboarding/sign-in.jsx";
import SignUpScreen from "../../onboarding/Sign-up.jsx";
import WelcomeScreen from "../../onboarding/welcome.jsx";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerTintColor: "#333",
          headerStyle: { backgroundColor: "#fff" },
          gestureEnabled: true,
        }}
      >
        {/* Onboarding Flow */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Onboarding1" component={OnboardingScreen} />
        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
        <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="signin" component={SignInScreen} />

        {/* Main App Screens */}
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="DailyDevotions" component={DevotionScreen} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
        <Stack.Screen name="BibleStudy" component={BibleStudyScreen} />
        <Stack.Screen name="More" component={MoreScreen} />

        {/* Additional Screens */}
        <Stack.Screen name="SubmitPrayer" component={SubmitPrayerRequest} />
        <Stack.Screen name="FAQs" component={FAQsScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
         <Stack.Screen name="DailyDevotion" component={DailyDevotionScreen} />
          <Stack.Screen name="CommunityForum" component={CommunityForum} />
          <Stack.Screen name="PostDiscussion" component={PostDiscussionScreen} />
          <Stack.Screen name="BibleStudies" component={BibleStudies} />
          <Stack.Screen name="Forums" component={ForumsScreen} />
          <Stack.Screen name="Saved" component={SavedScreen} />
      </Stack.Navigator>

  );
}