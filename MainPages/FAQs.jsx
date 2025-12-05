import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";

export default function FAQsScreen() {
  const [openIndex, setOpenIndex] = useState(null);
  let [fontsLoaded] = useFonts({
          Lato_400Regular,
          Lato_700Bold,
        });
      
        if (!fontsLoaded) return <></>;

  const Questions = [
    {
      question: "Is this App free to use?",
      answer:
        "Yes, our devotional app is completely free. You can access daily devotions, submit prayers, and join the prayer community at no cost.",
    },
    {
      question: "How often are new devotions published?",
      answer:
        "New devotions are published every morning so you can start your day with inspiration and guidance.",
    },
    {
      question: "Can I share devotions with friends?",
      answer:
        "Yes, you can share any devotion with friends through social media or messaging platforms directly from the app.",
    },
    {
      question: "Can I access previous devotions?",
      answer:
        "Absolutely! All previous devotions are stored in the archive and can be read anytime.",
    },
    {
      question: "How can I get notifications for new content?",
      answer:
        "You can enable notifications in your settings to receive alerts for new devotions, updates, and prayer reminders.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Frequently Asked Questions</Text>

      {Questions.map((item, index) => (
        <View key={index} style={styles.questionBox}>
          <TouchableOpacity
            style={styles.row}
            onPress={() => toggleAnswer(index)}
          >
            <Text style={styles.question}>{item.question}</Text>

            <Ionicons
              name={openIndex === index ? "remove-circle-outline" : "add-circle-outline"}
              size={26}
              color="#333"
            />
          </TouchableOpacity>

          {openIndex === index && (
            <Text style={styles.answer}>{item.answer}</Text>
          )}
          <View style={styles.SeparatorLine}></View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 30,
    textAlign: "left",
    marginLeft: 9,
    color: "#2c2c2c",
    fontFamily:"Lato_400Regular",
  },
  questionBox: {
    padding: 10,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontSize: 18,
    color: "#001",
    fontWeight: "400",
    flex: 1,
    marginRight: 10,
    fontFamily:"Lato_400Regular",
  },
  answer: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
    lineHeight: 20,
    fontFamily:"Lato_400Regular",
  },
  SeparatorLine: {
  height: 1,
  backgroundColor: "#555",
  width: "100%",
  marginVertical: 12,
}

});
