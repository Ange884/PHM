import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";

const { width } = Dimensions.get("window");

export default function SubmitPrayerRequest() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Name */}
      <Text style={styles.label}>Name (optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#999"
      />

      {/* Email */}
      <Text style={styles.label}>Email (optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#999"
        keyboardType="email-address"
      />

      {/* Prayer Request */}
      <Text style={styles.label}>Prayer Request</Text>
      <TextInput
        style={styles.bigInput}
        placeholder="Write your prayer request here..."
        placeholderTextColor="#999"
        multiline={true}
        textAlignVertical="top"
      />

      {/* Buttons */}
      <View style={styles.inlineButtons}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestText}>Submit Request</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    flexGrow: 1,
  },

  // Labels
  label: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 6,
    marginTop: 12,
  },

  // Standard input
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 8,
  },

  // Large input for prayer request
  bigInput: {
    width: "100%",
    minHeight: 120,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 12,
  },

  // Buttons container
  inlineButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
    bottom:10,
  },

  // Cancel button
  cancelButton: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 10,
    borderColor:"#333",
    borderWidth:1,
    marginRight: 8,
    alignItems: "center",
  },
  cancelText: {
    color: "#555",
    fontWeight: "700",
    fontSize: 14,
  },

  // Submit button
  requestButton: {
    flex: 1,
    backgroundColor: "#8C4227",
    paddingVertical: 12,
    borderRadius: 10,
    marginLeft: 8,
    alignItems: "center",
  },
  requestText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
