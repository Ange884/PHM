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

export default function DailyDevotion() {
    // Expanded devotion data with more items
    const devotionNotifications = [
        {
            id: 1,
            date: "TUESDAY, AUGUST 15, 2024",
            title: "Walking in Faith",
            subtitle: "By Pastor James Muyango",
            content: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. - Proverbs 3:5-6",
            min1: "5min read",
            min2: "3min listen",
            bibleVerse: "Proverbs 3:5-6"
        },
        {
            id: 2,
            date: "WEDNESDAY, AUGUST 16, 2024",
            title: "The Power of Prayer",
            subtitle: "By Pastor Sarah Johnson",
            content: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. - Philippians 4:6",
            min1: "7min read",
            min2: "4min listen",
            bibleVerse: "Philippians 4:6"
        },
        {
            id: 3,
            date: "THURSDAY, AUGUST 17, 2024",
            title: "Strength in Weakness",
            subtitle: "By Pastor Michael Chen",
            content: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me. - 2 Corinthians 12:9",
            min1: "6min read",
            min2: "3min listen",
            bibleVerse: "2 Corinthians 12:9"
        },
        {
            id: 4,
            date: "FRIDAY, AUGUST 18, 2024",
            title: "Love Your Neighbor",
            subtitle: "By Pastor Maria Rodriguez",
            content: "Love your neighbor as yourself. There is no commandment greater than these. - Mark 12:31",
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
                                <TouchableOpacity style={styles.readButton}>
                                    <Text style={styles.readButtonText}>Read More</Text>
                                    <Ionicons name="chevron-forward" size={14} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Reminder Section */}
                <View style={styles.reminderContainer}>
                    <Image 
                        source={require("../assets/images/bible.png")} 
                        style={styles.bibleImage}
                        resizeMode="contain"
                    />
                    <Text style={styles.reminderDate}>TOMORROW, AUGUST 8, 2025</Text>
                    <Text style={styles.reminderTitle}>Upcoming Devotion</Text>
                    <Text style={styles.reminderDescription}>
                        Get ready for tomorrow's inspiring message about walking in faith during uncertain times.
                    </Text>
                    <TouchableOpacity style={styles.reminderButton}>
                        <Ionicons name="notifications-outline" size={18} color="#fff" />
                        <Text style={styles.reminderButtonText}>Set Reminder</Text>
                    </TouchableOpacity>
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
        paddingBottom: 20,
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
        backgroundColor: "#F7FAFC",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },
    dateText: {
        fontSize: 12,
        fontFamily: "Lato_700Bold",
        color: "#4A5568",
        letterSpacing: 0.5,
    },
    title: {
        fontSize: 22,
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
        marginBottom: 15,
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
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
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
    bibleImage: {
        width: 80,
        height: 80,
        marginBottom: 15,
    },
    reminderDate: {
        fontSize: 12,
        fontFamily: "Lato_700Bold",
        color: "#4A5568",
        letterSpacing: 0.5,
        marginBottom: 8,
    },
    reminderTitle: {
        fontSize: 20,
        fontFamily: "Lato_700Bold",
        color: "#2D3748",
        marginBottom: 10,
    },
    reminderDescription: {
        fontSize: 15,
        fontFamily: "Lato_400Regular",
        color: "#718096",
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 20,
    },
    reminderButton: {
        backgroundColor: "#8C4227",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 25,
        minWidth: 180,
        justifyContent: 'center',
    },
    reminderButtonText: {
        fontSize: 15,
        fontFamily: "Lato_600SemiBold",
        color: "#fff",
    },
});