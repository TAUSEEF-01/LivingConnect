import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
  Alert,
  Keyboard,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

import axios from "axios";

import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import EmojiSelector from "react-native-emoji-selector";
import { UserType } from "../UserContext";
import { useNavigation, useRoute } from "@react-navigation/native";

//
// const API_URL = 'http://192.168.50.242:5000';
// const API_URL = 'http://10.33.25.160:5000';
// const API_URL = 'http://192.168.50.242:5000';

const ChatMessagesScreen = () => {
  const { currentUserId, recipientId } = useLocalSearchParams();

  // useEffect(() => {
  //   if (recipientId && currentUserId) {
  //     fetchRecipientData(recipientId);
  //     fetchMessages(currentUserId, recipientId);
  //   }
  // }, [recipientId, currentUserId]);

  useEffect(() => {
    const fetchRecipientData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/messages/messages/users/${recipientId}`
        );
        setRecipientData(response.data);
      } catch (error) {
        console.error(
          "Error fetching recipient data:",
          error.response?.data || error.message
        );
        Alert.alert("Error", "Failed to fetch recipient data");
      }
    };
    fetchRecipientData();
  }, [recipientId]);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [recipientData, setRecipientData] = useState({
    name: "",
    profileImage: "",
  });

  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter();

  const [showDeleteHeader, setShowDeleteHeader] = useState(false);
  const [recipientImage, setRecipientImage] = useState(null);
  const [recipientName, setRecipientName] = useState("");
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  // Use these IDs without $oid wrapper for requests
  // const recipientId = "675c911919831c86093ed034";
  // const currentUserId = "675d5df58fe7ec7ad49d9fc3";
  const API_URL = "http://192.168.50.242:5000";

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const fetchRecipientData = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}/messages/users/${recipientId}`);
  //       setRecipientData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching recipient data:', error);
  //     }
  //   };
  //   fetchRecipientData();
  // }, [recipientId]);

  useEffect(() => {
    const fetchRecipientData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/messages/messages/users/${recipientId}`
        );
        setRecipientData(response.data); // Set the single user object
      } catch (error) {
        console.error(
          "Error fetching recipient data:",
          error.response?.data || error.message
        );
        Alert.alert("Error", "Failed to fetch recipient data");
      }
    };
    fetchRecipientData();
  }, [recipientId]);

  useEffect(() => {
    if (selectedMessages.length > 0) {
      setShowDeleteHeader(true);
    } else {
      setShowDeleteHeader(false);
    }
  }, [selectedMessages]);

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  // const Header = () => (
  //   <View style={styles.header}>
  //     <View style={styles.headerLeft}>
  //       <Image
  //         source={{ uri: recepientData?.profilePic || 'http://via.placeholder.com/40' }}
  //         style={styles.recipientImage}
  //       />
  //       <Text style={styles.recipientName}>{recipientData.name || 'Recipient'}</Text>
  //     </View>
  //     {showDeleteHeader && (
  //       <TouchableOpacity onPress={handleDeleteMessages}>
  //         <MaterialCommunityIcons name="delete" size={24} color="red" />
  //       </TouchableOpacity>
  //     )}
  //   </View>
  // );

  // const handleDeleteMessages = async () => {
  //   try {
  //     await Promise.all(
  //       selectedMessages.map(messageId =>
  //         axios.delete(`${API_URL}/messages/${messageId}`)
  //       )
  //     );
  //     setMessages(prev => prev.filter(msg => !selectedMessages.includes(msg._id)));
  //     setSelectedMessages([]);
  //     setShowDeleteHeader(false);
  //   } catch (error) {
  //     console.error('Error deleting messages:', error);
  //     Alert.alert('Error', 'Failed to delete messages');
  //   }
  // };

  const handleDeleteMessages = async () => {
    try {
      const response = await axios.delete(`${API_URL}/messages/`, {
        headers: { "Content-Type": "application/json" },
        params: { messageIds: selectedMessages }, // Send message IDs as query parameters
      });
      console.log("Delete Response:", response.data);

      if (response.data) {
        setMessages((prev) =>
          prev.filter((msg) => !selectedMessages.includes(msg._id))
        );
        setSelectedMessages([]);
      }
    } catch (error) {
      console.error(
        "Error deleting messages:",
        error.response?.data || error.message
      );
      Alert.alert("Error", "Failed to delete messages");
    }
  };

  const handleContentSizeChange = () => {
    scrollToBottom();
  };

  const handleEmojiPress = () => {
    Keyboard.dismiss();
    setShowEmojiSelector(!showEmojiSelector);
  };

  const emojis = [
    "😀",
    "😂",
    "😍",
    "🥳",
    "😎",
    "😢",
    "😡",
    "👍",
    "👎",
    "❤️",
    "🔥",
    "💯",
    "🎉",
    "👏",
    "💔",
    "🎁",
    "😴",
    "🤔",
    "🥰",
    "🤗",
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "🥲",
    "🥹",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😛",
    "😝",
    "😜",
    "🤪",
    "🤨",
    "🧐",
    "🤓",
    "😎",
    "🥸",
    "🤩",
    "🥳",
    "🙂‍↕️",
    "😏",
    "😒",
    "🙂‍↔️",
    "😞",
    "😟",
    "😕",
    "🙁",
    "☹️",
    "😯",
    "😦",
    "😧",
    "😮",
    "😲",
    "🥱",
    "😴",
    "🤤",
    "😪",
    "😵",
    "😵‍💫",
    "🫥",
    "🤐",
    "🥴",
    "🤢",
    "🤮",
    "🤧",
    "😷",
    "🤒",
    "🤕",
    "🤑",
    "🤠",
    "😈",
    "👿",
    "👹",
    "👺",
    "🤡",
    "💩",
    "👻",
    "💀",
    "☠️",
    "👽",
    "👾",
    "🤖",
    "🎃",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",
  ];

  const renderEmojiSelector = () => {
    return (
      <View
        style={{
          height: 250,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#dddddd",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {emojis.map((emoji, index) => (
            <Pressable
              key={index}
              onPress={() => {
                setMessage((prevMessage) => prevMessage + emoji);
                setShowEmojiSelector(false); // Hide after selection
              }}
              style={{
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
              }}
            >
              <Text style={{ fontSize: 24 }}>{emoji}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    );
  };

  // const fetchMessages = async () => {
  //   try {
  //     console.log('Fetching messages for:', currentUserId, recipientId);
  //     const response = await axios.get(
  //       `${API_URL}/messages/${currentUserId}/${recipientId}`
  //     );
  //     console.log('Response:', response.data);
  //     if (response.data) {
  //       const transformedMessages = response.data.map(msg => ({
  //         ...msg,
  //         isCurrentUser: msg.senderId === currentUserId,
  //         // Add this to ensure images can be displayed
  //         // base64Image: msg.base64Image ?
  //         //   (msg.base64Image.startsWith('data:image') ? msg.base64Image : `data:image/jpeg;base64,${msg.base64Image}`)
  //         //   : null

  //         base64Image: msg.base64Image
  //           ? (msg.base64Image.startsWith('data:image')
  //             ? msg.base64Image
  //             : `data:image/jpeg;base64,${msg.base64Image}`)
  //           : null

  //       }));
  //       setMessages(transformedMessages);
  //     }
  //   } catch (error) {
  //     console.error('Error details:', error.response?.data);
  //   }
  // };

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/messages/${currentUserId}/${recipientId}`
      );
      const transformedMessages = response.data.map((msg) => ({
        ...msg,
        isCurrentUser: msg.senderId === currentUserId,
        base64Image: msg.imageUrl
          ? msg.imageUrl.startsWith("data:image")
            ? msg.imageUrl
            : `data:image/jpeg;base64,${msg.imageUrl}`
          : null,
      }));
      // console.log('Transformed Messages:', transformedMessages);
      setMessages(transformedMessages);
    } catch (error) {
      console.error(
        "Error fetching messages:",
        error.response?.data || error.message
      );
    }
  };

  // const handleSend = async (messageType, imageUri) => {
  //   if (loading) return;
  //   if (messageType === 'text' && !message.trim()) return;

  //   try {
  //     setLoading(true);
  //     const formData = new FormData();
  //     formData.append('senderId', currentUserId);
  //     formData.append('recepientId', recipientId);
  //     formData.append('messageType', messageType);

  //     if (messageType === 'image') {
  //       formData.append('imageFile', {
  //         uri: imageUri,
  //         type: 'image/jpeg',
  //         name: 'image.jpg',
  //       });
  //     } else {
  //       formData.append('message', message);
  //     }

  //     const response = await axios.post(`${API_URL}/message/messages`, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     }
  //   );

  //     // Transform the new message to match our format
  //     const newMessageWithFlag = {
  //       ...response.data,
  //       _id: response.data._id?.$oid || response.data._id,
  //       senderId: response.data.senderId?.$oid || response.data.senderId,
  //       recepientId: response.data.recepientId?.$oid || response.data.recepientId,
  //       timeStamp: response.data.timeStamp?.$date || response.data.timeStamp,
  //       isCurrentUser: true
  //     };

  //     setMessages(prev => [...prev, newMessageWithFlag]);
  //     setMessage('');
  //     scrollToBottom();
  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       // that falls out of the range of 2xx
  //       console.error('Response data:', error.response.data);
  //       console.error('Response status:', error.response.status);
  //       console.error('Response headers:', error.response.headers);
  //       Alert.alert('Error', `Failed to send message: ${error.response.data.message || 'Unknown error'}`);
  //     } else if (error.request) {
  //       // The request was made but no response was received
  //       console.error('Request data:', error.request);
  //       Alert.alert('Error', 'No response received from server');
  //     } else {
  //       // Something happened in setting up the request that triggered an Error
  //       console.error('Error message:', error.message);
  //       Alert.alert('Error', `Failed to send message: ${error.message}`);
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleSend = async (messageType, base64Image = null) => {
  //   if (loading) return;
  //   if (messageType === 'text' && !message.trim()) return;

  //   try {
  //     setLoading(true);
  //     const payload = {
  //       senderId: currentUserId,
  //       recepientId: recipientId,
  //       messageType,
  //       message: messageType === 'text' ? message : '',
  //       base64Image: messageType === 'image' ? base64Image : null,
  //     };

  //     const response = await axios.post(`${API_URL}/messages/`, payload, {
  //       headers: {
  //         // 'Content-Type': 'application/json',
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     if (response.data) {
  //       setMessages(prev => [...prev, response.data]);
  //       setMessage('');
  //       scrollToBottom();
  //     }
  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //     Alert.alert('Error', 'Failed to send message');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSend = async (messageType, base64Image = null) => {
    if (loading) return;
    if (messageType === "text" && !message.trim()) return;

    try {
      setLoading(true);
      const payload = new FormData();
      payload.append("senderId", currentUserId);
      payload.append("recepientId", recipientId);
      payload.append("messageType", messageType);
      if (messageType === "text") {
        payload.append("message", message);
      } else if (messageType === "image") {
        payload.append("base64Image", base64Image);
      }

      const response = await axios.post(`${API_URL}/messages/`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data) {
        setMessages((prev) => [...prev, response.data]);
        setMessage("");
        scrollToBottom();
      }
    } catch (error) {
      // console.error('Error sending message:', error);
      // Alert.alert('Error', 'Failed to send message');
    } finally {
      setMessage("");
      scrollToBottom();
      setLoading(false);
    }
  };

  // const pickImage = async () => {
  //   try {
  //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (status !== 'granted') {
  //       Alert.alert('Permission needed', 'Please grant permission to access your photos');
  //       return;
  //     }

  //     const result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       quality: 1,
  //     });

  //     if (!result.canceled && result.assets[0]) {
  //       handleSend('image', result.assets[0].uri);
  //     }
  //   } catch (error) {
  //     console.error('Error picking image:', error);
  //     Alert.alert('Error', 'Failed to pick image');
  //   }
  // };

  // const pickImage = async () => {
  //   try {
  //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (status !== 'granted') {
  //       Alert.alert('Permission needed', 'Please grant permission to access your photos');
  //       return;
  //     }

  //     const result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       base64: true,
  //       quality: 0.5,
  //     });

  //     if (!result.canceled && result.assets[0]) {
  //       const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`;
  //       handleSend('image', base64Image);
  //     }
  //   } catch (error) {
  //     console.error('Error picking image:', error);
  //     Alert.alert('Error', 'Failed to pick image');
  //   }
  // };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Please grant permission to access photos."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // mediaTypes: ImagePicker.MediaType.Images,
      allowsEditing: true,
      quality: 0.7,
      base64: true,
    });

    if (!result.canceled) {
      // Compress and resize the image
      const manipResult = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 500 } }],
        { compress: 0.7, base64: true }
      );

      // Send the image as a message
      handleSend("image", `data:image/jpeg;base64,${manipResult.base64}`);
    }
  };

  const formatTime = (time) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date(time).toLocaleString("en-US", options);
  };

  // const handleSelectMessage = (message) => {
  //   const isSelected = selectedMessages.includes(message._id);
  //   if (isSelected) {
  //     setSelectedMessages(prev => prev.filter(id => id !== message._id));
  //   } else {
  //     setSelectedMessages(prev => [...prev, message._id]);
  //   }
  // };

  const handleSelectMessage = (message) => {
    const isSelected = selectedMessages.includes(message._id);
    if (isSelected) {
      const newSelected = selectedMessages.filter((id) => id !== message._id);
      setSelectedMessages(newSelected);
      if (newSelected.length === 0) {
        setIsSelectionMode(false);
        setShowDeleteHeader(false);
      }
    } else {
      setSelectedMessages((prev) => [...prev, message._id]);
      setIsSelectionMode(true);
      setShowDeleteHeader(true);
    }
  };

  const clearSelection = () => {
    setSelectedMessages([]);
    setIsSelectionMode(false);
    setShowDeleteHeader(false);
  };

  // const renderHeader = () => {
  //   return (
  //     <View style={styles.header}>
  //       {showDeleteHeader ? (
  //         <View style={styles.deleteHeader}>
  //           <Text style={styles.headerText}>{selectedMessages.length} selected</Text>
  //           <TouchableOpacity onPress={handleDeleteMessages}>
  //             <MaterialIcons name="delete" size={24} color="red" />
  //           </TouchableOpacity>
  //         </View>
  //       ) : (
  //         <View style={styles.normalHeader}>
  //           <View style={styles.recipientInfo}>
  //             <Image
  //               source={{ uri: recipientImage || 'http://via.placeholder.com/40' }}
  //               style={styles.recipientImage}
  //             />
  //             <Text style={styles.recipientName}>{recipientName || 'User'}</Text>
  //           </View>
  //         </View>
  //       )}
  //     </View>
  //   );
  // };

  const handleMessagePress = (message) => {
    if (isSelectionMode) {
      handleSelectMessage(message);
    }
  };

  const renderHeader = () => (
    <View style={styles.header}>
      {isSelectionMode ? (
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>
            {selectedMessages.length} Selected
          </Text>
          <TouchableOpacity onPress={handleDeleteMessages}>
            <Ionicons name="trash-outline" size={24} color="red" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.headerContent}>
          <Image
            source={{
              uri:
                recipientData?.profileImage || "http://via.placeholder.com/40",
            }}
            style={styles.recipientImage}
          />
          <Text style={styles.recipientName}>
            {recipientData?.name || "Loading..."}
          </Text>
        </View>
      )}
    </View>
  );

  // const renderHeader = () => (
  //   <View style={styles.header}>
  //     {isSelectionMode ? (
  //       <View style={styles.headerContent}>
  //         <Text style={styles.headerText}>{selectedMessages.length} Selected</Text>
  //         <TouchableOpacity onPress={handleDeleteMessages}>
  //           <Ionicons name="trash-outline" size={24} color="red" />
  //         </TouchableOpacity>
  //       </View>
  //     ) : (
  //       <View style={styles.headerContent}>
  //         <Image
  //           source={{
  //             uri: recipientData?.profilePic || 'http://via.placeholder.com/40'
  //           }}
  //           style={styles.recipientImage}
  //         />
  //         <Text style={styles.recipientName}>
  //           {recipientData?.name || 'Loading...'}
  //         </Text>
  //       </View>
  //     )}
  //   </View>
  // );

  // const renderMessage = (item, index) => {
  //   const isSelected = selectedMessages.includes(item._id);

  //   if (item.messageType === 'image') {
  //     return (
  //       <Pressable
  //         onLongPress={() => handleSelectMessage(item)}
  //         onPress={() => handleMessagePress(item)}
  //         key={index}
  //         style={[
  //           styles.messageBubble,
  //           item.isCurrentUser ? styles.sentMessage : styles.receivedMessage,
  //           isSelected && styles.selectedMessage
  //         ]}
  //       >
  //         <View>
  //           {item.messageType === 'image' ? (
  //             <Image
  //               source={{ uri: item.base64Image }}
  //               style={styles.messageImage}
  //             />
  //           ) : (
  //             <Text style={styles.messageText}>{item.message}</Text>
  //           )}
  //           <Text style={styles.timeStamp}>
  //             {formatTime(item.timeStamp)}
  //           </Text>
  //         </View>
  //       </Pressable>
  //     );
  //   }

  //   return (
  //     <Pressable
  //       onLongPress={() => handleSelectMessage(item)}
  //       onPress={() => handleMessagePress(item)}
  //       key={index}
  //       style={[
  //         styles.messageBubble,
  //         item.isCurrentUser ? styles.sentMessage : styles.receivedMessage,
  //         isSelected && styles.selectedMessage
  //       ]}
  //     >
  //       <Text style={[
  //         styles.messageText,
  //         item.isCurrentUser ? styles.sentMessageText : styles.receivedMessageText
  //       ]}>
  //         {item.message}
  //       </Text>
  //       <Text style={[
  //         styles.timeStamp,
  //         item.isCurrentUser ? styles.sentTimeStamp : styles.receivedTimeStamp
  //       ]}>
  //         {formatTime(item.timeStamp)}
  //       </Text>
  //     </Pressable>
  //   );
  // };

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10 }}>
      <Text>{item.isCurrentUser ? "You" : "Other User"}</Text>
      {item.messageType === "text" && <Text>{item.message}</Text>}
      {item.messageType === "image" && item.base64Image && (
        <Image
          source={{ uri: item.base64Image }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  );

  const renderMessage = (item, index) => {
    const isSelected = selectedMessages.includes(item._id);
    const messageContainerStyle = [
      styles.messageBubble,
      item.isCurrentUser ? styles.sentMessage : styles.receivedMessage,
      isSelected && styles.selectedMessage,
    ];

    return (
      <Pressable
        onLongPress={() => handleSelectMessage(item)}
        onPress={() => handleMessagePress(item)}
        key={index}
        style={messageContainerStyle}
      >
        {item.messageType === "image" ? (
          <View>
            {item.imageUrl ? (
              <Image
                // source={{ uri: "http://images.pexels.com/photos/6045328/pexels-photo-6045328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                source={{ uri: item.imageUrl }}
                style={styles.messageImage}
                resizeMode="cover"
                // onLoad={() => {console.log(item.base64Image)} }
                onError={(e) =>
                  console.error("Image loading error:", e.nativeEvent.error)
                }
              />
            ) : (
              <View
                style={[
                  styles.messageImage,
                  {
                    backgroundColor: "#e1e1e1",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text>Image not available</Text>
              </View>
            )}
            <Text
              style={[
                styles.timeStamp,
                item.isCurrentUser
                  ? styles.sentTimeStamp
                  : styles.receivedTimeStamp,
              ]}
            >
              {formatTime(item.timeStamp)}
            </Text>
          </View>
        ) : (
          <View>
            <Text
              style={[
                styles.messageText,
                item.isCurrentUser
                  ? styles.sentMessageText
                  : styles.receivedMessageText,
              ]}
            >
              {item.message}
            </Text>
            <Text
              style={[
                styles.timeStamp,
                item.isCurrentUser
                  ? styles.sentTimeStamp
                  : styles.receivedTimeStamp,
              ]}
            >
              {formatTime(item.timeStamp)}
            </Text>
          </View>
        )}
      </Pressable>
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#F0F0F0" }}>
      {renderHeader()}
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          if (isSelectionMode) {
            setSelectedMessages([]);
            setIsSelectionMode(false);
            setShowDeleteHeader(false);
          }
        }}
      >
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={{ flexGrow: 1 }}
          onContentSizeChange={handleContentSizeChange}
          keyboardShouldPersistTaps="handled"
        >
          {messages.map((item, index) => renderMessage(item, index))}
        </ScrollView>
      </Pressable>
      {/* <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{ flexGrow: 1 }}
        onContentSizeChange={handleContentSizeChange}
        keyboardShouldPersistTaps="handled"
        onPress={() => {
        if (isSelectionMode) {
          setSelectedMessages([]);
          setIsSelectionMode(false);
          setShowDeleteHeader(false);
        }
      }}
      >
        {messages.map((item, index) => renderMessage(item, index))}
      </ScrollView> */}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderTopWidth: 1,
          borderTopColor: "#dddddd",
          marginBottom: showEmojiSelector ? 0 : 25,
        }}
      >
        <Entypo
          onPress={handleEmojiPress}
          style={{ marginRight: 5 }}
          name="emoji-happy"
          size={24}
          color="gray"
        />

        <TextInput
          value={message}
          onChangeText={(text) => setMessage(text)}
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderColor: "#dddddd",
            borderRadius: 20,
            paddingHorizontal: 10,
          }}
          placeholder="Type Your message..."
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 7,
            marginHorizontal: 8,
          }}
        >
          {/* <Entypo onPress={pickImage} name="camera" size={24} color="gray" /> */}
          <TouchableOpacity onPress={pickImage}>
            <Ionicons name="camera" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Pressable
          onPress={() => handleSend("text")}
          style={{
            backgroundColor: "#007bff",
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Send</Text>
        </Pressable>
      </View>

      {showEmojiSelector && renderEmojiSelector()}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  scrollViewContent: {
    padding: 10,
    flexGrow: 1,
  },
  messageBubble: {
    padding: 8,
    maxWidth: "60%",
    borderRadius: 7,
    margin: 10,
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "white",
  },
  selectedMessage: {
    backgroundColor: "#F0FFFF",
    width: "100%",
  },
  messageText: {
    fontSize: 13,
  },
  sentMessageText: {
    color: "black",
  },
  receivedMessageText: {
    color: "black",
  },
  timeStamp: {
    fontSize: 9,
    color: "gray",
    marginTop: 5,
  },
  sentTimeStamp: {
    textAlign: "right",
  },
  receivedTimeStamp: {
    textAlign: "left",
  },
  // messageImage: {
  //   width: 200,
  //   height: 200,
  //   borderRadius: 7,
  // },
  imageTimeStamp: {
    position: "absolute",
    right: 10,
    bottom: 7,
    color: "white",
    fontSize: 9,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
    backgroundColor: "white",
  },
  emojiIcon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  cameraIcon: {
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  disabledButton: {
    opacity: 0.5,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    height: 60,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    justifyContent: "center",
    marginTop: 33,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  recipientImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  recipientName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  messageImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    backgroundColor: "#f0f0f0", // Add a background color for loading state
  },
});

export default ChatMessagesScreen;
