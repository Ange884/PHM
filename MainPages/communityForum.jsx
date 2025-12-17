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
import Ionicons from "@expo/vector-icons/Ionicons";
import FixedNavigationBar from "../components/Navbar.jsx";

const { width } = Dimensions.get("window");

export default function CommunityForum() {
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
        <TouchableOpacity style={styles.communitySearchbar} activeOpacity={0.8}>
          <Text style={styles.searchbarText}>Search Discussions...</Text>
          <Ionicons name="search" size={20} color="#A0AEC0" />
        </TouchableOpacity>

        {/* CATEGORIES */}
        <View style={styles.categories}>
          <Text style={styles.category}>All Posts</Text>
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
        {supportContents.map((item) => (
          <View key={item.id} style={styles.postCard}>
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
              {item.hashtags.map((tag, index) => (
                <Text key={index} style={styles.tag}>
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
                <Ionicons
                  name="chatbubble-outline"
                  size={20}
                  color="#4A5568"
                />
                <Text style={styles.actionText}>{item.comments}</Text>
              </View>

              <TouchableOpacity style={styles.supportButton}>
                <Text style={styles.supportButtonText}>Support</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* NEW DISCUSSION BUTTON */}
        <TouchableOpacity style={styles.newDiscussionButton}>
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
    color: "#2D3748"
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

  searchbarText: {
    color: "#A0AEC0"
  },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 20
  },

  category: {
    backgroundColor: "#EDE6DA",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 13
  },

  indicatorHeaders: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16
  },

  indicatorActive: {
    fontWeight: "700",
    color: "#8C4227"
  },

  indicatorText: {
    color: "#718096"
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
    fontWeight: "700"
  },

  time: {
    fontSize: 12,
    color: "#A0AEC0"
  },

  postTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6
  },

  postMessage: {
    color: "#4A5568",
    marginBottom: 10
  },

  hashtags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12
  },

  tag: {
    color: "#8C4227",
    fontSize: 12
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
    color: "#4A5568"
  },

  supportButton: {
    backgroundColor: "#8C4227",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20
  },

  supportButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600"
  },

  newDiscussionButton: {
    backgroundColor: "#2D3748",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10
  },

  newDiscussionText: {
    color: "#fff",
    fontWeight: "700"
  }
});
