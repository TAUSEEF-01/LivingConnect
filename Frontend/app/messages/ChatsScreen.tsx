// import React from 'react';
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

// // Sample chat data
// const chatData = [
//   {
//     id: '1',
//     name: 'John Doe',
//     lastMessage: 'Hey, how are you?',
//     time: '10:45 AM',
//     photo: 'https://via.placeholder.com/50',
//   },
//   {
//     id: '2',
//     name: 'Jane Smith',
//     lastMessage: 'Lets catch up later.',
//     time: '09:30 AM',
//     photo: 'https://via.placeholder.com/50',
//   },
//   {
//     id: '3',
//     name: 'Alice Johnson',
//     lastMessage: 'See you tomorrow!',
//     time: 'Yesterday',
//     photo: 'https://via.placeholder.com/50',
//   },
// ];

// export default function ChatsScreen() {
//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.chatItem}>
//       <Image source={{ uri: item.photo }} style={styles.avatar} />
//       <View style={styles.chatDetails}>
//         <Text style={styles.chatName}>{item.name}</Text>
//         <Text style={styles.lastMessage}>{item.lastMessage}</Text>
//       </View>
//       <Text style={styles.time}>{item.time}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Top Bar */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Message History</Text>
//       </View>

//       {/* Chat List */}
//       <FlatList
//         data={chatData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.chatList}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     backgroundColor: '#007bff',
//     padding: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   chatList: {
//     padding: 16,
//   },
//   chatItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   chatDetails: {
//     flex: 1,
//   },
//   chatName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   lastMessage: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//   },
//   time: {
//     fontSize: 12,
//     color: '#999',
//   },
// });

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface OwnerInfo {
  email: string;
  name: string;
  contactNumber: string;
}

interface ChatItem {
  _id: string;
  name: string;
  profileImage: string | null;
  lastMessage: string;
}

const ChatScreen = () => {
  const [chats, setChats] = useState<ChatItem>([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const API_URL = "http://192.168.0.103:5000"; // Update this with your API endpoint
  const router = useRouter();

  useEffect(() => {
    fetchProfile();
    // fetchUserData();
    // fetchChats();
  }, []);

  useEffect(() => {
    if (profile?.id) {
      fetchChats();
    }
  }, [profile]);

  const fetchProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken"); // Correct key here
      if (!token) throw new Error("User is not logged in");

      console.log("Retrieved token:", token);

      const response = await axios.get(`${API_URL}/profile/get-profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // console.log("Fetched Profile:", response.data);

      setProfile(response.data); // Ensure this includes the `id` field
      setCurrentUser(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  // Fetch logged-in user data
  // const fetchUserData = async () => {
  //   try {
  //     const response = await axios.get(`${API_URL}/auth/current-user`);
  //     setCurrentUser(response.data);
  //   } catch (error) {
  //     console.error("Error fetching user data:", error.message);
  //     Alert.alert("Error", "Failed to fetch user data.");
  //   }
  // };

  // Fetch chats of the logged-in user
  // const fetchChats = async () => {
  //   try {
  //     // const response = await axios.get(
  //     //   `${API_URL}/messages/conversations/${profile?.id}`
  //     // );
  //     const response = await axios.get(
  //       `${API_URL}/messages/messagehistory/conversations/${profile?.id}`,
  //       {
  //         // params: { userId: profile?.id },
  //       }
  //     );
  //     // setChats(response.data);
  //     const enrichedChats = await Promise.all(
  //       response.data.map(async (chat) => {
  //         const userId =
  //           chat.senderId === profile?.id ? chat.recepientId : chat.senderId;

  //         if (!userId) {
  //           console.error("User ID is undefined for chat:", chat);
  //           return null; // Skip this chat
  //         }

  //         //       const userResponse = await axios.get(`${API_URL}/messages/messages/users/${userId}`);
  //         //     const user = userResponse.data;

  //         //     return {
  //         //       _id: chat._id,
  //         //       name: user.name || "Unnamed User",
  //         //       profileImage: user.profileImage || null,
  //         //       lastMessage: chat.message || "No messages yet.",
  //         //     };
  //         //   })
  //         // );
  //         try {
  //           const userResponse = await axios.get(`${API_URL}/messages/messages/users/${userId}`);
  //           const user = userResponse.data;

  //           return {
  //             _id: chat._id,
  //             name: user.name || "Unnamed User",
  //             profileImage: user.profileImage || null,
  //             lastMessage: chat.message || "No messages yet.",
  //           };

  //         } catch (error) {
  //           console.error("Error fetching recipient data:", error);
  //           return null; // Skip this chat
  //         }
  //       })
  //     );
  //     setChats(enrichedChats);
  //   } catch (error) {
  //     console.log("Received userId:", profile?.id);
  //     console.error("Error fetching chat history:", error.message);
  //     Alert.alert("Error", "Failed to fetch chat history.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // this below code worked for me
  const fetchChats = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}/messages/messagehistory/conversations/${profile?.id}`
      );

      // Enrich chats with user details
      const enrichedChats = await Promise.all(
        response.data.map(async (chat) => {
          try {
            const userId =
              chat.senderId === profile?.id ? chat.recepientId : chat.senderId;

            if (!userId) {
              console.warn("User ID is undefined for chat:", chat);
              return null; // Skip this chat if userId is undefined
            }

            const userResponse = await axios.get(
              `${API_URL}/messages/messages/users/${userId}`
            );
            const user = userResponse.data;

            return {
              _id:
                chat.senderId === profile?.id
                  ? chat.recepientId
                  : chat.senderId,
              name: user?.name || "Unnamed User",
              profileImage: user?.profileImage || null,
              lastMessage: chat.message || "No messages yet.",
              timeStamp: chat?.timeStamp,
            };
          } catch (error) {
            console.error("Error fetching user data:", error.message);
            return null; // Skip this chat on error
          }
        })
      );

      // Filter out any null chats caused by errors
      const validChats = enrichedChats.filter((chat) => chat !== null);

      setChats(validChats);
    } catch (error) {
      console.error("Error fetching chat history:", error.message);
      Alert.alert("Error", "Failed to fetch chat history.");
    } finally {
      setLoading(false);
    }
  };

  // const fetchChats = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(
  //       `${API_URL}/messages/messagehistory/conversations/${profile?.id}`
  //     );

  //     const enrichedChats = response.data.map((chat) => ({
  //       _id: chat.otherUser?._id || "Unknown User",
  //       name: chat.otherUser?.name || "Unnamed User",
  //       profileImage: chat.otherUser?.profileImage || null,
  //       lastMessage: chat.lastMessage || "No messages yet.",
  //       timeStamp: chat.timeStamp,
  //     }));

  //     setChats(enrichedChats);
  //   } catch (error) {
  //     console.error("Error fetching chat history:", error.message);
  //     Alert.alert("Error", "Failed to fetch chat history.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Navigate to the ChatMessagesScreen
  // const navigateToChat = (chat) => {
  //   router.push({
  //     pathname: "/messages/ChatMessagesScreen",
  //     params: {
  //       recipientId: chat.recipientId,
  //       currentUserId: currentUser?._id,
  //     },
  //   });
  // };

  const navigateToChat = (chat: ChatItem) => {
    router.push({
      pathname: "/messages/ChatMessagesScreen",
      params: {
        currentUserId: profile?.id,
        recipientId: chat._id,
        // recipientId: chat._id,
        // currentUserId: currentUser?._id,
        // currentUserId, recipientId
      },
    });
  };

  // Render a single chat item
  // const renderChatItem = ({ item }) => (
  //   <TouchableOpacity
  //     style={styles.chatItem}
  //     onPress={() => navigateToChat(item)}
  //   >
  //     <Image
  //       source={{
  //         uri: item.profileImage || "https://via.placeholder.com/40",
  //       }}
  //       style={styles.profileImage}
  //     />
  //     <View style={styles.chatInfo}>
  //       <Text style={styles.chatName}>{item.name || "Unnamed User"}</Text>
  //       <Text style={styles.lastMessage} numberOfLines={1}>
  //         {item.lastMessage || "No messages yet."}
  //       </Text>
  //     </View>
  //   </TouchableOpacity>
  // );

  const renderChatItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigateToChat(item)}
    >
      <Image
        source={{
          uri: item.profileImage || "https://via.placeholder.com/40",
        }}
        style={styles.profileImage}
      />
      <View style={styles.chatInfo}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={styles.chatItem}>
      <Text style={styles.chatTitle}>{item.title}</Text>
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
    </View>
  );

  // return (

  //   <View style={styles.container}>
  //     {loading ? (
  //       <ActivityIndicator size="large" color="#007bff" />
  //     ) : (
  //       <FlatList
  //         data={chats}
  //         // keyExtractor={(item) => item.chatId.toString()}
  //         keyExtractor={(item) => item._id?.toString() || Math.random().toString()}
  //         renderItem={renderChatItem}

  //         contentContainerStyle={styles.chatList}
  //         ListEmptyComponent={
  //           <Text style={styles.emptyMessage}>No chats available.</Text>
  //         }
  //       />
  //     )}
  //   </View>
  // );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <FlatList
          data={chats}
          keyExtractor={(item) => item._id}
          renderItem={renderChatItem}
          contentContainerStyle={styles.chatList}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>No chats available.</Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginTop: 33,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  chatList: {
    flexGrow: 1,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 14,
    color: "gray",
    marginTop: 2,
  },
  emptyMessage: {
    textAlign: "center",
    color: "gray",
    marginTop: 20,
    fontSize: 16,
  },
});

export default ChatScreen;
