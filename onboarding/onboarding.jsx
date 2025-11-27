import { TouchableOpacity } from "react-native";
import { View } from "react-native-web";

export default function OnboardingScreen() {
    let [fontsLoaded] = useFonts({
        Lato_400Regular,
        Lato_700Bold,
    });

    if (!fontsLoaded) {
        return <></>;
    }

    return (
       <View style={styles.container}>
        <Text style={styles.text}>What are you seeking in your Faith journey?</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.optionText}>Peace & Comfort</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.optionText}>Purpose & Direction</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.optionText}>Strength in Trials</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.optionText}>Bible study</Text>
            </TouchableOpacity>
          </View>
            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Closer Relationship with God</Text>
            </TouchableOpacity>

            <View style = {styles.skipandNextButtons}>
                <TouchableOpacity>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}