import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import FixedNavigationBar from "../components/Navbar.jsx";

const { width } = Dimensions.get("window");

export default function BibleStudyScreen({navigation}) {
  const [openIndex, setOpenIndex] = useState(null);
  const [answers, setAnswers] = useState({});

  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) return null;

  const QuestionAndAnswer = [
    { question: "What is sin?" },
    { question: "Where did sin originate?" },
    { question: "How does sin affect believers?" },
    { question: "What is the solution to sin according to the Bible?" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={Styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}
      >
        {/* HEADER */}
        <Text style={Styles.header}>Understanding Sin – Part 1</Text>
        <Text style={Styles.pageTitle}>By Pastor James Muyango</Text>

        <Text style={Styles.mainParagraph}>
          Today’s bible study focuses on understanding sin, its origin, and its
          effects. Please answer the questions below thoughtfully.
        </Text>

        {/* QUESTIONS */}
        {QuestionAndAnswer.map((item, index) => (
          <View key={index} style={Styles.questionCard}>
            <Text style={Styles.questionLabel}>Question</Text>
            <Text style={Styles.questionText}>{item.question}</Text>

            {/* ANSWER BUTTON */}
            <TouchableOpacity
              style={Styles.answerRow}
              onPress={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              activeOpacity={0.7}
            >
              <Ionicons name="pencil" size={22} color="#8C4227" />
              <Text style={Styles.answerText}>Answer Question</Text>
            </TouchableOpacity>

            {/* DROPDOWN FORM */}
            {openIndex === index && (
              <View style={Styles.dropdownForm}>
                <TextInput
                  style={Styles.textArea}
                  multiline
                  placeholder="Write your answer here..."
                  value={answers[index] || ""}
                  onChangeText={(text) =>
                    setAnswers({ ...answers, [index]: text })
                  }
                />

                <View style={Styles.buttonRow}>
                  <TouchableOpacity
                    style={Styles.cancelBtn}
                    onPress={() => setOpenIndex(null)}
                  >
                    <Text style={Styles.btnTextDark}>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={Styles.saveBtn}
                    onPress={() => {
                      console.log("Saved Answer:", answers[index]);
                      navigation.navigate("BibleStudies");
                      
                      setOpenIndex(null);
                    }}
                  >
                    <Text style={Styles.btnTextLight}>Save Answer</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      <FixedNavigationBar />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
  },

  pageTitle: {
    fontSize: 15,
    fontFamily: "Lato_400Regular",
    color: "#444",
    marginTop: 1,
  },
topBar: {
    flexDirection: "row",
    flexWrap: "nowrap",
    flex:1,
    alignItems: "center",
    marginRight:10,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "#F7F7F7",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    fontSize: 22,
    fontFamily: "Lato_700Bold",
    marginTop: 12,
    color: "#333",
  },

  mainParagraph: {
    fontSize: 14,
    fontFamily: "Lato_400Regular",
    lineHeight: 17,
    marginVertical: 18,
    color: "#444",
    letterSpacing:0.2,
  },

  languageSelector: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    justifyContent: "flex-end",
  },
  languageButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  languageText: {
    fontSize: 14,
    fontFamily: "Lato_700Bold",
    color: "#4a5568",
  },
  questionCard: {
    backgroundColor: "#F6F3EC",
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    elevation: 3,
  },

  questionLabel: {
    fontSize: 16,
    fontFamily: "Lato_700Bold",
    color: "#8C4227",
    marginBottom: 6,
  },

  questionText: {
    fontSize: 18,
    fontFamily: "Lato_400Regular",
    color: "#222",
    marginBottom: 14,
    fontWeight: "600",
  },

  answerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  answerText: {
    fontSize: 16,
    fontFamily: "Lato_700Bold",
    color: "#8C4227",
  },

  /* DROPDOWN */
  dropdownForm: {
    marginTop: 14,
    backgroundColor: "#f8f5f0",
    padding: 14,
    borderRadius: 12,
  },

  textArea: {
    minHeight: 110,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    textAlignVertical: "top",
    backgroundColor: "#fff",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 14,
    gap: 12,
  },

  cancelBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderWidth:1,
    borderColor:"#999",
    width:130,
    textAlign:"center",
    justifyContent:"center",
  },

  saveBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 5,
    backgroundColor: "#8C4227",
  },

  btnTextDark: {
    fontSize: 15,
    fontFamily: "Lato_700Bold",
    color: "#333",
    textAlign:"center",
    justifyContent:"center",
  },

  btnTextLight: {
    fontSize: 15,
    fontFamily: "Lato_700Bold",
    color: "#fff",
  },
});
