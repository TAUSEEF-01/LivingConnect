// // import React from 'react';
// // import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

// // // Sample chat data
// // const chatData = [
// //   {
// //     id: '1',
// //     name: 'John Doe',
// //     lastMessage: 'Hey, how are you?',
// //     time: '10:45 AM',
// //     photo: 'http://via.placeholder.com/50',
// //   },
// //   {
// //     id: '2',
// //     name: 'Jane Smith',
// //     lastMessage: 'Lets catch up later.',
// //     time: '09:30 AM',
// //     photo: 'http://via.placeholder.com/50',
// //   },
// //   {
// //     id: '3',
// //     name: 'Alice Johnson',
// //     lastMessage: 'See you tomorrow!',
// //     time: 'Yesterday',
// //     photo: 'http://via.placeholder.com/50',
// //   },
// // ];

// // export default function ChatsScreen() {
// //   const renderItem = ({ item }) => (
// //     <TouchableOpacity style={styles.chatItem}>
// //       <Image source={{ uri: item.photo }} style={styles.avatar} />
// //       <View style={styles.chatDetails}>
// //         <Text style={styles.chatName}>{item.name}</Text>
// //         <Text style={styles.lastMessage}>{item.lastMessage}</Text>
// //       </View>
// //       <Text style={styles.time}>{item.time}</Text>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       {/* Top Bar */}
// //       <View style={styles.header}>
// //         <Text style={styles.headerText}>Message History</Text>
// //       </View>

// //       {/* Chat List */}
// //       <FlatList
// //         data={chatData}
// //         renderItem={renderItem}
// //         keyExtractor={(item) => item.id}
// //         contentContainerStyle={styles.chatList}
// //       />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f8f9fa',
// //   },
// //   header: {
// //     backgroundColor: '#007bff',
// //     padding: 16,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   headerText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   chatList: {
// //     padding: 16,
// //   },
// //   chatItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //     padding: 12,
// //     borderRadius: 8,
// //     marginBottom: 8,
// //     shadowColor: '#000',
// //     shadowOpacity: 0.1,
// //     shadowRadius: 5,
// //     elevation: 2,
// //   },
// //   avatar: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     marginRight: 12,
// //   },
// //   chatDetails: {
// //     flex: 1,
// //   },
// //   chatName: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#333',
// //   },
// //   lastMessage: {
// //     fontSize: 14,
// //     color: '#666',
// //     marginTop: 4,
// //   },
// //   time: {
// //     fontSize: 12,
// //     color: '#999',
// //   },
// // });

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ActivityIndicator,
//   Alert,
// } from "react-native";
// import axios from "axios";
// import { useRouter } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// interface OwnerInfo {
//   email: string;
//   name: string;
//   contactNumber: string;
// }

// interface ChatItem {
//   _id: string;
//   name: string;
//   profileImage: string | null;
//   lastMessage: string;
// }

// const ChatScreen = () => {
//   const [chats, setChats] = useState<ChatItem>([]);
//   const [loading, setLoading] = useState(true);
//   const [currentUser, setCurrentUser] = useState<any>(null);
//   const [profile, setProfile] = useState<any>(null);
//   const API_URL = "https://livingconnect-backend.vercel.app"; // Update this with your API endpoint
//   const router = useRouter();

//   useEffect(() => {
//     fetchProfile();
//     // fetchUserData();
//     // fetchChats();
//   }, []);

//   useEffect(() => {
//     if (profile?.id) {
//       fetchChats();
//     }
//   }, [profile]);

//   const fetchProfile = async () => {
//     try {
//       const token = await AsyncStorage.getItem("userToken"); // Correct key here
//       if (!token) throw new Error("User is not logged in");

//       console.log("Retrieved token:", token);

//       const response = await axios.get(`${API_URL}/profile/get-profile`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       // console.log("Fetched Profile:", response.data);

//       setProfile(response.data); // Ensure this includes the `id` field
//       setCurrentUser(response.data);
//     } catch (error) {
//       console.error("Error fetching user profile:", error);
//     }
//   };

//   // Fetch logged-in user data
//   // const fetchUserData = async () => {
//   //   try {
//   //     const response = await axios.get(`${API_URL}/auth/current-user`);
//   //     setCurrentUser(response.data);
//   //   } catch (error) {
//   //     console.error("Error fetching user data:", error.message);
//   //     Alert.alert("Error", "Failed to fetch user data.");
//   //   }
//   // };

//   // Fetch chats of the logged-in user
//   // const fetchChats = async () => {
//   //   try {
//   //     // const response = await axios.get(
//   //     //   `${API_URL}/messages/conversations/${profile?.id}`
//   //     // );
//   //     const response = await axios.get(
//   //       `${API_URL}/messages/messagehistory/conversations/${profile?.id}`,
//   //       {
//   //         // params: { userId: profile?.id },
//   //       }
//   //     );
//   //     // setChats(response.data);
//   //     const enrichedChats = await Promise.all(
//   //       response.data.map(async (chat) => {
//   //         const userId =
//   //           chat.senderId === profile?.id ? chat.recepientId : chat.senderId;

//   //         if (!userId) {
//   //           console.error("User ID is undefined for chat:", chat);
//   //           return null; // Skip this chat
//   //         }

//   //         //       const userResponse = await axios.get(`${API_URL}/messages/messages/users/${userId}`);
//   //         //     const user = userResponse.data;

//   //         //     return {
//   //         //       _id: chat._id,
//   //         //       name: user.name || "Unnamed User",
//   //         //       profileImage: user.profileImage || null,
//   //         //       lastMessage: chat.message || "No messages yet.",
//   //         //     };
//   //         //   })
//   //         // );
//   //         try {
//   //           const userResponse = await axios.get(`${API_URL}/messages/messages/users/${userId}`);
//   //           const user = userResponse.data;

//   //           return {
//   //             _id: chat._id,
//   //             name: user.name || "Unnamed User",
//   //             profileImage: user.profileImage || null,
//   //             lastMessage: chat.message || "No messages yet.",
//   //           };

//   //         } catch (error) {
//   //           console.error("Error fetching recipient data:", error);
//   //           return null; // Skip this chat
//   //         }
//   //       })
//   //     );
//   //     setChats(enrichedChats);
//   //   } catch (error) {
//   //     console.log("Received userId:", profile?.id);
//   //     console.error("Error fetching chat history:", error.message);
//   //     Alert.alert("Error", "Failed to fetch chat history.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // this below code worked for me
//   const fetchChats = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `${API_URL}/messages/messagehistory/conversations/${profile?.id}`
//       );

//       // Enrich chats with user details
//       const enrichedChats = await Promise.all(
//         response.data.map(async (chat) => {
//           try {
//             const userId =
//               chat.senderId === profile?.id ? chat.recepientId : chat.senderId;

//             if (!userId) {
//               console.warn("User ID is undefined for chat:", chat);
//               return null; // Skip this chat if userId is undefined
//             }

//             const userResponse = await axios.get(
//               `${API_URL}/messages/messages/users/${userId}`
//             );
//             const user = userResponse.data;

//             return {
//               _id:
//                 chat.senderId === profile?.id
//                   ? chat.recepientId
//                   : chat.senderId,
//               name: user?.name || "Unnamed User",
//               profileImage: user?.profileImage || null,
//               lastMessage: chat.message || "No messages yet.",
//               timeStamp: chat?.timeStamp,
//             };
//           } catch (error) {
//             console.error("Error fetching user data:", error.message);
//             return null; // Skip this chat on error
//           }
//         })
//       );

//       // Filter out any null chats caused by errors
//       const validChats = enrichedChats.filter((chat) => chat !== null);

//       setChats(validChats);
//     } catch (error) {
//       console.error("Error fetching chat history:", error.message);
//       Alert.alert("Error", "Failed to fetch chat history.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // const fetchChats = async () => {
//   //   setLoading(true);
//   //   try {
//   //     const response = await axios.get(
//   //       `${API_URL}/messages/messagehistory/conversations/${profile?.id}`
//   //     );

//   //     const enrichedChats = response.data.map((chat) => ({
//   //       _id: chat.otherUser?._id || "Unknown User",
//   //       name: chat.otherUser?.name || "Unnamed User",
//   //       profileImage: chat.otherUser?.profileImage || null,
//   //       lastMessage: chat.lastMessage || "No messages yet.",
//   //       timeStamp: chat.timeStamp,
//   //     }));

//   //     setChats(enrichedChats);
//   //   } catch (error) {
//   //     console.error("Error fetching chat history:", error.message);
//   //     Alert.alert("Error", "Failed to fetch chat history.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // Navigate to the ChatMessagesScreen
//   // const navigateToChat = (chat) => {
//   //   router.push({
//   //     pathname: "/messages/ChatMessagesScreen",
//   //     params: {
//   //       recipientId: chat.recipientId,
//   //       currentUserId: currentUser?._id,
//   //     },
//   //   });
//   // };

//   const navigateToChat = (chat: ChatItem) => {
//     router.push({
//       pathname: "/messages/ChatMessagesScreen",
//       params: {
//         currentUserId: profile?.id,
//         recipientId: chat._id,
//         // recipientId: chat._id,
//         // currentUserId: currentUser?._id,
//         // currentUserId, recipientId
//       },
//     });
//   };

//   // Render a single chat item
//   // const renderChatItem = ({ item }) => (
//   //   <TouchableOpacity
//   //     style={styles.chatItem}
//   //     onPress={() => navigateToChat(item)}
//   //   >
//   //     <Image
//   //       source={{
//   //         uri: item.profileImage || "http://via.placeholder.com/40",
//   //       }}
//   //       style={styles.profileImage}
//   //     />
//   //     <View style={styles.chatInfo}>
//   //       <Text style={styles.chatName}>{item.name || "Unnamed User"}</Text>
//   //       <Text style={styles.lastMessage} numberOfLines={1}>
//   //         {item.lastMessage || "No messages yet."}
//   //       </Text>
//   //     </View>
//   //   </TouchableOpacity>
//   // );

//   const renderChatItem = ({ item }: { item: ChatItem }) => (
//     <TouchableOpacity
//       style={styles.chatItem}
//       onPress={() => navigateToChat(item)}
//     >
//       <Image
//         source={{
//           uri: item.profileImage || "http://via.placeholder.com/40",
//         }}
//         style={styles.profileImage}
//       />
//       <View style={styles.chatInfo}>
//         <Text style={styles.chatName}>{item.name}</Text>
//         <Text style={styles.lastMessage} numberOfLines={1}>
//           {item.lastMessage}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const renderItem = ({ item }) => (
//     <View style={styles.chatItem}>
//       <Text style={styles.chatTitle}>{item.title}</Text>
//       <Text style={styles.lastMessage}>{item.lastMessage}</Text>
//     </View>
//   );

//   // return (

//   //   <View style={styles.container}>
//   //     {loading ? (
//   //       <ActivityIndicator size="large" color="#007bff" />
//   //     ) : (
//   //       <FlatList
//   //         data={chats}
//   //         // keyExtractor={(item) => item.chatId.toString()}
//   //         keyExtractor={(item) => item._id?.toString() || Math.random().toString()}
//   //         renderItem={renderChatItem}

//   //         contentContainerStyle={styles.chatList}
//   //         ListEmptyComponent={
//   //           <Text style={styles.emptyMessage}>No chats available.</Text>
//   //         }
//   //       />
//   //     )}
//   //   </View>
//   // );
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Messages</Text>
//       {loading ? (
//         <ActivityIndicator size="large" color="#007bff" />
//       ) : (
//         <FlatList
//           data={chats}
//           keyExtractor={(item) => item._id}
//           renderItem={renderChatItem}
//           contentContainerStyle={styles.chatList}
//           ListEmptyComponent={
//             <Text style={styles.emptyMessage}>No chats available.</Text>
//           }
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f0f0",
//     padding: 10,
//     marginTop: 33,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   chatList: {
//     flexGrow: 1,
//   },
//   chatItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     marginVertical: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 1,
//     elevation: 2,
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   chatInfo: {
//     flex: 1,
//   },
//   chatName: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   lastMessage: {
//     fontSize: 14,
//     color: "gray",
//     marginTop: 2,
//   },
//   emptyMessage: {
//     textAlign: "center",
//     color: "gray",
//     marginTop: 20,
//     fontSize: 16,
//   },
// });

// export default ChatScreen;





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
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface ChatData {
  _id: string;
  senderId: string;
  recepientId: string;
  message: string;
  timeStamp: string;
}


interface ChatItem {
  _id: string;
  lastMessage: string;
  timestamp: string;
  userId: string;
  name: string;
  profileImage: string;
}




const ChatScreen = () => {
  const [chats, setChats] = useState<ChatItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  // const API_URL = "https://livingconnect-backend.vercel.app"; // Update this with your API endpoint
  const API_URL = "https://livingconnect-backend.vercel.app";
  const router = useRouter();


  useEffect(() => {
    fetchProfile();
    // fetchUserData();
    // fetchChats();
  }, []);


  useEffect(() => {
    if (profile?.id) {
    console.log(profile.id);
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


      console.log("Fetched Profile:", response.data);


      setProfile(response.data); // Ensure this includes the `id` field
      setCurrentUser(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
 
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));


    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 48) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
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
  const fetchChats = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}/messages/messagehistory/conversations/${profile?.id}`
      );
 
      console.log('API Response:', response.data); // Debug log
 
      // Handle response with proper data validation
      // const chatsData = response.data?.data || [];
     
      // if (!Array.isArray(chatsData)) {
      //   throw new Error('Invalid response format');
      // }
 
      // // Enrich chats with user details
      // const enrichedChats = await Promise.all(
      //   chatsData.map(async (chat) => {
      //     try {
      //       const userId = chat.senderId === profile?.id
      //         ? chat.recepientId
      //         : chat.senderId;
           
      //       return {
      //         ...chat,
      //         userId,
      //       };
      //     } catch (error) {
      //       console.error('Error enriching chat:', error);
      //       return chat;
      //     }
      //   })
      // );
 
      // setChats(enrichedChats);


      if (response.data?.data) {
        setLoading(true);
        const formattedChats = await Promise.all(
          response.data.data.map(async (chat: ChatData) => {
            const userId = (chat.recepientId == profile?.id)? chat.senderId:chat.recepientId;
   
            try {
              const userResponse = await axios.get(
                `${API_URL}/messages/getusersdata/users/${userId}`
              );
              const userData = userResponse.data;
   
              return {
                _id: chat._id,
                lastMessage: chat.message || "Image File",
                timestamp: chat.timeStamp,
                userId: userId,
                name: userData?.name || "Unnamed User",
                profileImage: userData?.profileImage || "https://via.placeholder.com/40"
              };
            } catch (error) {
              console.error(`Error fetching user ${userId} details:`, error);
              return {
                _id: chat._id,
                lastMessage: chat.message || "Image",
                timestamp: chat.timeStamp,
                userId: userId,
                name: "Unnamed User",
                profileImage: "https://via.placeholder.com/40"
              };
            }
          })
        );
        console.log("formated :", formattedChats);
        setChats(formattedChats);
      }
    } catch (error) {
      console.error('Error fetching chats:', error);
      setChats([]);
    } finally {
      setLoading(false);
    }
  };


  // this below code worked for me
  // const fetchChats = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(
  //       `${API_URL}/messages/messagehistory/conversations/${profile?.id}`
  //       // `http://192.168.0.109:8000/messages/messagehistory/conversations/${profile?.id}`
  //     );


  //     // Enrich chats with user details
  //     const enrichedChats = await Promise.all(
  //       response.data.map(async (chat) => {
  //         try {
  //           const userId =
  //             chat.senderId === profile?.id
  //             ? chat.recepientId
  //             // ? chat.recipientId
  //             : chat.senderId;


  //           if (!userId) {
  //             console.warn("User ID is undefined for chat:", chat);
  //             return null; // Skip this chat if userId is undefined
  //           }


  //           const userResponse = await axios.get(
  //             `${API_URL}/messages/messages/users/${userId}`
  //           );
  //           const user = userResponse.data;


  //           return {
  //             _id:
  //               chat.senderId === profile?.id
  //                 ? chat.recepientId
  //                 // ? chat.recipientId
  //                 : chat.senderId,
  //             name: user?.name || "Unnamed User",
  //             profileImage: user?.profileImage || null,
  //             lastMessage: chat.message || "No messages yet.",
  //             timeStamp: chat?.timeStamp,
  //           };
  //         } catch (error) {
  //           console.error("Error fetching user data:", error.message);
  //           return null; // Skip this chat on error
  //         }
  //       })
  //     );


  //     // Filter out any null chats caused by errors
  //     const validChats = enrichedChats.filter((chat) => chat !== null);


  //     setChats(validChats);
  //   } catch (error) {
  //     console.error("Error fetching chat history:", error.message);
  //     Alert.alert("Error", "Failed to fetch chat history.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  // const fetchChats = async () => {
  //   setLoading(true);
  //   try {
  //     const token = await AsyncStorage.getItem("userToken");
  //     if (!token) {
  //       throw new Error("User is not logged in");
  //     }
 
  //     const response = await axios.get(
  //       `${API_URL}/messages/messagehistory/conversations/${profile?.id}`,
  //       {
  //         headers: { Authorization: `Bearer ${token}` }
  //       }
  //     );
     
  //     const chats = response.data.map(chat => ({
  //       _id: chat.partnerId,
  //       name: chat.partnerName,
  //       profileImage: chat.partnerProfileImage || null,
  //       lastMessage: chat.lastMessage || "No messages yet.",
  //       timeStamp: chat.timeStamp
  //     }));
 
  //     setChats(chats);
  //   } catch (error) {
  //     console.error("Error fetching chat history:", error);
  //     Alert.alert(
  //       "Error",
  //       "Failed to fetch chat history. Please try again later."
  //     );
  //     setChats([]); // Ensure chats is an empty array on error
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
        currentUserId: profile?.id,//(chat.senderId === profile?.id)?profile?.id:
        // chat.senderId,
        recipientId: chat.userId,//(chat.recepientId === profile?.id)?profile?.id:
        // chat.recepientId,
       
        // recipientId: chat._id,
        // currentUserId: currentUser?._id,
        // currentUserId, recipientId
      },
    });
    // console.log(chat._id);
    // console.log(chat.userId);
    // console.log(chat.receiverId);
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
    // <TouchableOpacity
    //   style={styles.chatItem}
    //   onPress={() => navigateToChat(item)}
    //   activeOpacity={0.7}
    // >
    //   {/* <Image
    //     source={{
    //       uri: item.profileImage || "https://via.placeholder.com/40",
    //     }}
    //     style={styles.profileImage}
    //   /> */}
    //   {/* <View style={styles.chatContent}> */}
    //     <View style={styles.avatarContainer}>
    //       <Image
    //         source={{
    //           uri: item.profileImage || "https://via.placeholder.com/40",
    //         }}
    //         style={styles.profileImage}
    //       />
    //   </View>
     
    //   <View style={styles.chatInfo}>
    //     <Text style={styles.chatName}>{item.name}</Text>
    //     <Text style={styles.lastMessage} numberOfLines={1}>
    //       {item.lastMessage}
    //     </Text>
    //   </View>
    // </TouchableOpacity>


    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigateToChat(item)}
      activeOpacity={0.7}
    >
      <View style={styles.chatContent}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: item.profileImage || "https://via.placeholder.com/40",
            }}
            style={styles.profileImage}
          />
          {/* Add online indicator here if needed */}
        </View>
        <View style={styles.chatInfo}>
          <View style={styles.chatHeader}>
            <Text style={styles.chatName}>{item.name}</Text>
            <Text style={styles.timestamp}>{formatTimestamp(item.timestamp)}</Text>
          </View>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage}
          </Text>
        </View>
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
//   return (
//     <View style={styles.headerContainer}>
//       <Text style={styles.headerText}>Message History</Text>
//       {loading ? (
//         <ActivityIndicator size="large" color="#007bff" />
//       ) : (
//         <FlatList
//           data={chats}
//           keyExtractor={(item) => item._id}
//           renderItem={renderChatItem}
//           contentContainerStyle={styles.chatList}
//           ListEmptyComponent={
//             <Text style={styles.emptyMessage}>No chats available.</Text>
//           }
//         />
//       )}
//     </View>
//   );
 
// };


return (
  <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Messages</Text>
          <Text style={styles.headerSubtitle}>Your Conversations</Text>
        </View>
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4FA1D8" />
        </View>
      ) : (
        <FlatList
          data={chats}
          keyExtractor={(item) => item._id}
          renderItem={renderChatItem}
          contentContainerStyle={styles.chatList}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyMessage}>No messages yet</Text>
              <Text style={styles.emptySubMessage}>
                Your conversations will appear here
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
);
};




const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#f0f0f0",
  //   padding: 10,
  //   marginTop: 33,
  // },
  // header: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   marginBottom: 10,
  //   textAlign: "center",
  // },
  // chatList: {
  //   flexGrow: 1,
  // },
  // chatItem: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   padding: 10,
  //   backgroundColor: "#fff",
  //   borderRadius: 8,
  //   marginVertical: 5,
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: 1 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 1,
  //   elevation: 2,
  // },
  // profileImage: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 20,
  //   marginRight: 10,
  // },
  // chatInfo: {
  //   flex: 1,
  // },
  // chatName: {
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
  // lastMessage: {
  //   fontSize: 14,
  //   color: "gray",
  //   marginTop: 2,
  // },
  // emptyMessage: {
  //   textAlign: "center",
  //   color: "gray",
  //   marginTop: 20,
  //   fontSize: 16,
  // },
  // headerContainer: {
  //   padding: 16,
  //   backgroundColor: '#fff',
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#e5e5e5',
  // },
  // headerText: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   color: '#4FA1D8', // light blue color
  //   textAlign: 'center',
  // }
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF', // Slightly lighter blue for sophistication
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(229, 229, 229, 0.5)',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  headerContent: {
    padding: 16,
    paddingBottom: 12,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2B2B2B',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#4FA1D8',
    marginTop: 2,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  chatList: {
    padding: 16,
  },
  chatItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(229, 229, 229, 0.5)',
  },
  chatContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E1E1E1',
    borderWidth: 2,
    borderColor: '#F0F6FF',
  },
  chatInfo: {
    flex: 1,
    marginLeft: 14,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2B2B2B',
    letterSpacing: 0.3,
  },
  timestamp: {
    fontSize: 12,
    color: '#4FA1D8',
    fontWeight: '500',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
    letterSpacing: 0.2,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height * 0.2,
  },
  emptyMessage: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2B2B2B',
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  emptySubMessage: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default ChatScreen;



