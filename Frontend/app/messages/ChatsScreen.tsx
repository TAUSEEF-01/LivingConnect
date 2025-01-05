// import { StyleSheet, Text, View ,ScrollView, Pressable} from "react-native";
// import React, { useContext,useEffect,useState } from "react";
// import { UserType } from "../UserContext";
// import { useNavigation } from "@react-navigation/native";
// // import UserChat from "../components/UserChat";


// const ChatsScreen = () => {
//   const [acceptedFriends, setAcceptedFriends] = useState([]);
//   const { userId, setUserId } = useContext(UserType);
//   const navigation = useNavigation();
//   useEffect(() => {
//     const acceptedFriendsList = async () => {
//       try {
//         const response = await fetch(
//           `http://192.168.0.109:8000/${userId}`
//         );
//         const data = await response.json();

//         if (response.ok) {
//           setAcceptedFriends(data);
//         }
//       } catch (error) {
//         console.log("error showing the accepted friends", error);
//       }
//     };

//     acceptedFriendsList();
//   }, []);
//   console.log("friends",acceptedFriends)
//   return (
//     <ScrollView showsVerticalScrollIndicator={false}>
//       {/* <Pressable>
//           {acceptedFriends.map((item,index) => (
//               <UserChat key={index} item={item}/>
//           ))}
//       </Pressable> */}
//     </ScrollView>
//   );
// };

// export default ChatsScreen;

// const styles = StyleSheet.create({});
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

// Sample chat data
const chatData = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    time: '10:45 AM',
    photo: 'https://via.placeholder.com/50',
  },
  {
    id: '2',
    name: 'Jane Smith',
    lastMessage: 'Lets catch up later.',
    time: '09:30 AM',
    photo: 'https://via.placeholder.com/50',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    lastMessage: 'See you tomorrow!',
    time: 'Yesterday',
    photo: 'https://via.placeholder.com/50',
  },
];

export default function ChatsScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={{ uri: item.photo }} style={styles.avatar} />
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Message History</Text>
      </View>

      {/* Chat List */}
      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatList: {
    padding: 16,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatDetails: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});