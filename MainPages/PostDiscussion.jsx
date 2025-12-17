import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Platform
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // dropdown
import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";

export default function PostDiscussionScreen({ navigation }) {
  const [category, setCategory] = useState(""); // dropdown state

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  });

  if (!fontsLoaded) return <></>;

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.mainHeading}>New Discussion</Text>

      {/* CATEGORY DROPDOWN */}
      <Text style={styles.label}>Category</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
          dropdownIconColor="#4A5568"
        >
          <Picker.Item label="Select category..." value="" />
          <Picker.Item label="Prayer" value="prayer" />
          <Picker.Item label="Bible Study" value="bibleStudy" />
          <Picker.Item label="Support" value="support" />
        </Picker>
      </View>

      {/* Title */}
      <Text style={styles.label}>Discussion Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter discussion title"
        placeholderTextColor="#999"
      />

      {/* Discussion Content */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.bigInput}
        placeholder="Write your discussion content here..."
        placeholderTextColor="#999"
        multiline={true}
        textAlignVertical="top"
      />

      {/* Tags */}
      <Text style={styles.label}>Tags (Optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="prayer, encouragement, bible"
        placeholderTextColor="#999"
      />

      {/* Buttons */}
      <View style={styles.inlineButtons}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.navigate("home")}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestText}>Post Discussion</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
