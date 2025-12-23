import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FixedNavigationBar from "../components/Navbar.jsx";
import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";


const { width } = Dimensions.get("window");

export default function CommunityForum({navigation}) {
    const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) return <></>;
  const supportContents = [
    {
      id: 1,
      name: "Jennifer L",
      time: "2 hours ago",
      title: "Struggling with faith during tough times",
      message: "Praying for strength and guidance during this challenging time.",
      hashtags: ["#faith", "#strength", "#guidance"],
      likes: 45,
      comments: 12
    }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f5f0" }}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* HEADER */}
        <Text style={styles.pageTitle}>Community Forums</Text>

        {/* SEARCH BAR */}
        <View style={styles.discoverSearchbar}>
  <TextInput
    style={styles.searchInput}
    placeholder="Search Devotions, Plans, Topics..."
    placeholderTextColor="#A0AEC0"
  />
  <TouchableOpacity>
  <Ionicons name="search" size={20} color="#A0AEC0" />
  </TouchableOpacity>
</View>

        {/* CATEGORIES */}
        <View style={styles.categories}>
          <Text style={[styles.category, { backgroundColor: "#8C4227", color: "#fff" }]}>All Posts 156</Text>
          <Text style={styles.category}>Prayer 42</Text>
          <Text style={styles.category}>Bible Study 38</Text>
          <Text style={styles.category}>Support</Text>
        </View>

        {/* INDICATORS */}
        <View style={styles.indicatorHeaders}>
          <Text style={styles.indicatorActive}>Recent</Text>
          <Text style={styles.indicatorText}>Trending</Text>
          <Text style={styles.indicatorText}>Unanswered</Text>
        </View>

        {/* POSTS */}
        {Array(3).fill(null).map((_, index) => {
  const item = supportContents[0];

  return (
    <View key={index} style={styles.postCard}>
      <View style={styles.postHeader}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.username}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>

      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postMessage}>{item.message}</Text>

      <View style={styles.hashtags}>
        {item.hashtags.map((tag, tagIndex) => (
          <Text key={tagIndex} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>

      <View style={styles.postActions}>
        <View style={styles.actionItem}>
          <Ionicons name="heart-outline" size={20} color="#4A5568" />
          <Text style={styles.actionText}>{item.likes}</Text>
        </View>

        <View style={styles.actionItem}>
          <Ionicons name="chatbubble-outline" size={20} color="#4A5568" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </View>

        <TouchableOpacity style={styles.supportButton}>
          <Text style={styles.supportButtonText}>Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
})}

        {/* NEW DISCUSSION BUTTON */}
        <TouchableOpacity style={styles.newDiscussionButton}
          onPress={() => navigation.navigate("PostDiscussion")}
        >
          <Text style={styles.newDiscussionText}>New Discussion</Text>
        </TouchableOpacity>
      </ScrollView>

      <FixedNavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },

  pageTitle: {
    fontSize: 26,
    fontWeight: "700",
    marginVertical: 20,
    color: "#2D3748",
    fontFamily: "Lato_700Bold"
  },

  communitySearchbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 20
  },
   discoverSearchbar: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: 12,
  paddingHorizontal: 15,
  paddingVertical: 12,
  marginBottom: 20,

  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 3,
  elevation: 2,
},

searchInput: {
  flex: 1,
  fontSize: 16,
  fontFamily: "Lato_400Regular",
  color: "#333",
},

  searchbarText: {
    color: "#222",
    fontFamily: "Lato_400Regular",
    fontSize: 15,
  },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
    gap:7,
  },

  category: {
    backgroundColor: "#EDE6DA",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 4,
    fontSize: 13,
    width:"23%",
    textAlign:"center",
    textAlignVertical:"center",
    fontFamily: "Lato_700Bold",
  },

  indicatorHeaders: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16
  },

  indicatorActive: {
    fontWeight: "700",
    color: "#8C4227",
    fontFamily: "Lato_700Bold",
  },

  indicatorText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Lato_400Regular",
  },

  postCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#CBD5E0",
    marginRight: 12
  },

  username: {
    fontWeight: "700",
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    marginBottom: 2
  },

  time: {
    fontSize: 12,
    color: "#555",
    fontFamily: "Lato_400Regular",
  },

  postTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
    fontFamily: "Lato_700Bold",
  },

  postMessage: {
    color: "#222",
    marginBottom: 10,
    fontFamily: "Lato_400Regular",
    fontSize: 14,
  },

  hashtags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,

  },

  tag: {
    color: "#8C4227",
    fontSize: 14,
    fontFamily: "Lato_700Bold",
  },

  postActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },

  actionText: {
    fontSize: 13,
    color: "#4A5568",
    fontFamily: "Lato_400Regular",
  },

  supportButton: {
    backgroundColor: "#97783E",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 5,
    textAlignVertical: "center",
    textAlign: "center",
  },

  supportButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Lato_700Bold",
  },

  newDiscussionButton: {
    backgroundColor: "#8C4227",
    padding: 16,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10
  },

  newDiscussionText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "Lato_700Bold",
  }
});
