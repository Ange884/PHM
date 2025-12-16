import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { Video } from "expo-av";
import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import FixedNavigationBar from "../components/Navbar.jsx";
import { DancingScript_400Regular, DancingScript_500Medium, DancingScript_600SemiBold, useFonts as useFontsHandwriting } from "@expo-google-fonts/dancing-script";

export default function DailyDevotionScreen({navigation}) {
    // Expanded devotion data with more items
    const devotionNotifications = [
        {
            id: 1,
            date: "TUESDAY, AUGUST 15, 2024",
            title: "Walking in faith",
            subtitle: "By Pastor James Muyango",
            min1: "5min read",
            min2: "3min listen",
            bibleVerse: "Proverbs 3:5-6"
        },
        {
            id: 2,
            date: "WEDNESDAY, AUGUST 16, 2024",
            title: "The Power of prayer",
            subtitle: "By Pastor Sarah Johnson",
            min1: "7min read",
            min2: "4min listen",
            bibleVerse: "Philippians 4:6"
        },
        {
            id: 3,
            date: "THURSDAY, AUGUST 17, 2024",
            title: "Strength in weakness",
            subtitle: "By Pastor Michael Chen",
            min1: "6min read",
            min2: "3min listen",
            bibleVerse: "2 Corinthians 12:9"
        },
        {
            id: 4,
            date: "FRIDAY, AUGUST 18, 2024",
            title: "Love Your neighbor",
            subtitle: "By Pastor Maria Rodriguez",
            min1: "4min read",
            min2: "2min listen",
            bibleVerse: "Mark 12:31"
        }
    ];

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Daily Devotion</Text>
                    <Text style={styles.headerSubtitle}>Nourish your spirit daily</Text>
                </View>

                {/* Devotion Cards */}
                <View style={styles.cardsContainer}>
                    {devotionNotifications.map((notification, index) => (
                        <View 
                            key={notification.id} 
                            style={[
                                styles.devotionCard,
                                index === 2 && styles.highlightedCard // Third card gets special background
                            ]}
                        >
                            {/* Date Badge */}
                            <View style={styles.dateBadge}>
                                <Text style={styles.dateText}>{notification.date}</Text>
                            </View>
                            
                            {/* Title Section */}
                            <Text style={styles.title}>{notification.title}</Text>
                            <Text style={styles.subtitle}>{notification.subtitle}</Text>
                            
                            {/* Bible Verse */}
                            <View style={styles.verseContainer}>
                                <Ionicons name="book-outline" size={16} color="#8C4227" />
                                <Text style={styles.verseText}>{notification.bibleVerse}</Text>
                            </View>
                            
                            {/* Content */}
                            <Text style={styles.content}>{notification.content}</Text>
                            
                            {/* Time Indicators */}
                            <View style={styles.timeContainer}>
                                <View style={styles.timeItem}>
                                    <Ionicons name="time-outline" size={14} color="#8C4227" />
                                    <Text style={styles.timeText}>{notification.min1}</Text>
                                </View>
                                <View style={styles.timeItem}>
                                    <Ionicons name="headset-outline" size={14} color="#8C4227" />
                                    <Text style={styles.timeText}>{notification.min2}</Text>
                                </View>
                                {/* <TouchableOpacity style={styles.readButton}>
                                    <Text style={styles.readButtonText}>Read More</Text>
                                    <Ionicons name="chevron-forward" size={14} color="#fff" />
                                </TouchableOpacity> */}
                            </View>
                        </View>
                    ))}
                </View>

                {/* Reminder Section */}
                <View style={styles.reminderContainer}>
    {/* Top Section with Image and Date */}
    <View style={styles.reminderHeader}>
        <View style={styles.imageDateWrapper}>
            <Ionicons name="book-outline" size={24} color="#8C4227" style={styles.bibleImage} />
            <View style={styles.dateWrapper}>
                <Text style={styles.reminderDate}>TOMORROW, AUGUST 8, 2025</Text>
                 <Text style={styles.reminderTitle}>Upcoming Devotion</Text>
            </View>
        </View>
    </View>

    {/* Content Section */}
    <View style={styles.reminderContent}>
       
        <Text style={styles.reminderDescription}>
            Get ready for tomorrow's inspiring message about walking in faith during uncertain times.
        </Text>
    </View>

    {/* Button Section */}
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.reminderButton}>
            <Text style={styles.reminderButtonText}>Set Reminder</Text>
        </TouchableOpacity>
    </View>
</View>
                
                {/* Bottom Spacing */}
                <View style={{ height: 30 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA",
    },
    scrollContainer: {
        paddingBottom: 5,
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#E2E8F0",
    },
    headerTitle: {
        fontSize: 28,
        fontFamily: "Lato_700Bold",
        color: "#2D3748",
        marginBottom: 5,
    },
    headerSubtitle: {
        fontSize: 16,
        fontFamily: "Lato_400Regular",
        color: "#718096",
    },
    cardsContainer: {
        padding: 20,
        gap: 20,
    },
    devotionCard: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },
    highlightedCard: {
        backgroundColor: "#FFF8F0",
        borderColor: "#F6AD55",
        shadowColor: "#F6AD55",
        shadowOpacity: 0.15,
    },
    dateBadge: {
        paddingVertical: 6,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginBottom: 3,
    },
    dateText: {
        fontSize: 14,
        fontFamily: "Lato_700Bold",
        color: "#666",
        letterSpacing: 0.5,
        textAlign:"left",
        alignSelf:"flex-start",
    },
    title: {
        fontSize: 18,
        fontFamily: "Lato_700Bold",
        color: "#2D3748",
        marginBottom: 5,
        lineHeight: 28,
    },
    subtitle: {
        fontSize: 15,
        fontFamily: "Lato_400Regular",
        color: "#718096",
        marginBottom: 15,
    },
    verseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#FEF5EB",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 1,
        borderWidth: 1,
        borderColor: "#FEEBC8",
    },
    verseText: {
        fontSize: 14,
        fontFamily: "Lato_600SemiBold",
        color: "#8C4227",
        marginLeft: 8,
        fontStyle: 'italic',
    },
    content: {
        fontSize: 15,
        fontFamily: "Lato_400Regular",
        color: "#4A5568",
        lineHeight: 22,
        marginBottom: 20,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: "#E2E8F0",
    },
    timeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    timeText: {
        fontSize: 13,
        fontFamily: "Lato_400Regular",
        color: "#8C4227",
    },
    readButton: {
        backgroundColor: "#8C4227",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    readButtonText: {
        fontSize: 13,
        fontFamily: "Lato_600SemiBold",
        color: "#fff",
    },
    reminderContainer: {
  backgroundColor: "#FFFFFF",
  borderRadius: 16,
  padding: 20,
  marginVertical: 20,
  elevation: 4,
},

/* HEADER */
reminderHeader: {
  marginBottom: 12,
},

imageDateWrapper: {
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
},

bibleImage: {
  width:38,
  height:38,
  backgroundColor:"#F0E6DC",
    padding:7,
    borderRadius:50,
},

dateWrapper: {
  justifyContent: "center",
},

reminderDate: {
  fontSize: 14,
  fontFamily: "Lato_400Regular",
  color: "#555",
  letterSpacing: 0.5,
  marginBottom: 4,
},

/* CONTENT */
reminderContent: {
  marginTop: 8,
  marginBottom: 18,
},

reminderTitle: {
  fontSize: 15,
  fontFamily: "Lato_700Bold",
  color: "#2D3748",
  marginBottom: 6,
},

reminderDescription: {
  fontSize: 16,
  fontFamily: "Lato_400Regular",
  color: "#5D5D5D",
  lineHeight: 20,
  marginLeft: 10,
},

/* BUTTON */
buttonContainer: {
  marginTop: 6,
},

reminderButton: {
  backgroundColor: "#F7ECE6",
  borderRadius: 10,
  paddingVertical: 14,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
  borderColor: "#E8DDD9",
},

buttonIcon: {
  marginRight: 8,
},

reminderButtonText: {
  fontSize: 17,
  fontFamily: "Lato_700Bold",
  color: "#8C4227",
},
});