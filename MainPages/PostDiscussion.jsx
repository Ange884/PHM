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
          dropdownIconColor="#222"
        >
          <Picker.Item label="Select category..." value="" style={styles.pickerItem} />
          <Picker.Item label="Prayer" value="prayer" style={styles.pickerItem}  />
          <Picker.Item label="Bible Study" value="bibleStudy" style={styles.pickerItem} />
          <Picker.Item label="Support" value="support" style={styles.pickerItem} />
        </Picker>
      </View>

      {/* Title */}
      <Text style={styles.label}>Discussion Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter discussion title"
        placeholderTextColor="#444"
      />

      {/* Discussion Content */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.bigInput}
        placeholder="Write your discussion content here..."
        placeholderTextColor="#444"
        multiline={true}
        textAlignVertical="top"
      />

      {/* Tags */}
      <Text style={styles.label}>Tags (Optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="prayer, encouragement, bible"
        placeholderTextColor="#444"
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

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: "#F8F5F0",
    flexGrow: 1
  },

  mainHeading: {
    fontSize: 22, // medium
    fontFamily: "Lato_700Bold",
    color: "#2D3748",
    marginBottom: 20
  },

  label: {
    fontSize: 17, // medium
    fontFamily: "Lato_700Bold",
    color: "#222",
    marginBottom: 6
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 17, // medium
    fontFamily: "Lato_400Regular",
    color: "#2D3748",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2
  },

  bigInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 17,
    fontFamily: "Lato_400Regular",
    color: "#2D3748",
    height: 140,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2
  },

  dropdownContainer: {
    backgroundColor: "#fff",
    marginBottom: 16,
    overflow: "hidden",
    borderColor: "#fff",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    ...Platform.select({
      android: { paddingHorizontal: 2 }
    })
  },

  picker: {
    height: 45,
    fontSize: 17,
   
  },
  pickerItem: {
  fontSize: 9,           // medium size
  fontFamily: "Lato_400Regular",
  color: "#2D3748",
  paddingVertical: 4
}
,

  inlineButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },

  cancelButton: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: "center",
    marginRight: 10,
    borderWidth:1,
    borderColor:"#999",
  },

  cancelText: {
    fontSize: 16,
    fontFamily: "Lato_700Bold",
    color: "#4A5568"
  },

  requestButton: {
    flex: 1,
    backgroundColor: "#8C4227",
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: "center",
    marginLeft: 10
  },

  requestText: {
    fontSize: 16,
    fontFamily: "Lato_700Bold",
    color: "#FFFFFF"
  }
});
