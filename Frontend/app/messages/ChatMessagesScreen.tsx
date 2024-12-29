// // import {
// //   StyleSheet,
// //   Text,
// //   View,
// //   ScrollView,
// //   KeyboardAvoidingView,
// //   TextInput,
// //   Pressable,
// //   Image
// // } from "react-native";
// // import React, { useState, useContext, useLayoutEffect, useEffect,useRef } from "react";
// // import { Feather } from "@expo/vector-icons";
// // import { Ionicons } from "@expo/vector-icons";
// // import { FontAwesome } from "@expo/vector-icons";
// // import { MaterialIcons } from "@expo/vector-icons";
// // import { Entypo } from "@expo/vector-icons";
// // import EmojiSelector from "react-native-emoji-selector";
// // import { UserType } from "../UserContext";
// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import * as ImagePicker from "expo-image-picker";
// // import { Keyboard } from "react-native";

// // const ChatMessagesScreen = () => {
// //   const [showEmojiSelector, setShowEmojiSelector] = useState(false);
// //   const [selectedMessages, setSelectedMessages] = useState([]);
// //   const [messages, setMessages] = useState([]);
// //   const [recepientData, setRecepientData] = useState();
// //   const navigation = useNavigation();
// //   const [selectedImage, setSelectedImage] = useState("");
// //   const route = useRoute();
  
// //   const { recepientId } = route.params;
  
// //   const [message, setMessage] = useState("");
// //   const { userId, setUserId } = useContext(UserType);

// //   const scrollViewRef = useRef(null);

// //   useEffect(() => {
// //     scrollToBottom()
// //   },[]);

// //   const scrollToBottom = () => {
// //       if(scrollViewRef.current){
// //           scrollViewRef.current.scrollToEnd({animated:false})
// //       }
// //   }

// //   const handleContentSizeChange = () => {
// //       scrollToBottom();
// //   }

// //   const handleEmojiPress = () => {
// //     Keyboard.dismiss();
// //     setShowEmojiSelector(!showEmojiSelector);
// //   };

//   // const emojis = [
//   //   "😀", "😂", "😍", "🥳", "😎", "😢", "😡", "👍", "👎", "❤️", "🔥", "💯", "🎉",
//   //   "👏", "💔", "🎁", "😴", "🤔", "🥰", "🤗","😀","😃","😄","😁","😆","😅","😂",
//   //   "🤣","🥲","🥹","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘",
//   //   "😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🥸",
//   //   "🤩","🥳","🙂‍↕️","😏","😒","🙂‍↔️","😞","😟","😕","🙁","☹️"
//   //   ,"😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","😵‍💫"
//   //   ,"🫥","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠"
//   //   ,"😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾"
//   //   ,"🤖","🎃","😺","😸" ,"😹","😻","😼","😽","🙀","😿","😾"]; 
    

// //     const renderEmojiSelector = () => {
// //       return (
// //         <View
// //           style={{
// //             height: 250,
// //             backgroundColor: "#FFFFFF",
// //             borderTopWidth: 1,
// //             borderTopColor: "#dddddd",
// //             paddingHorizontal: 10,
// //             paddingVertical: 10,
// //           }}
// //         >
// //           <ScrollView
// //             contentContainerStyle={{
// //               flexDirection: "row",
// //               flexWrap: "wrap",
// //               justifyContent: "flex-start",
// //             }}
// //           >
// //             {emojis.map((emoji, index) => (
// //               <Pressable
// //                 key={index}
// //                 onPress={() => {
// //                   setMessage((prevMessage) => prevMessage + emoji);
// //                   setShowEmojiSelector(false); // Hide after selection
// //                 }}
// //                 style={{
// //                   width: 40,
// //                   height: 40,
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                   margin: 5,
// //                 }}
// //               >
// //                 <Text style={{ fontSize: 24 }}>{emoji}</Text>
// //               </Pressable>
// //             ))}
// //           </ScrollView>
// //         </View>
// //       );
// //     };

// //   const fetchMessages = async () => {
// //     try {
// //       const response = await fetch(
// //         `http://192.168.50.242:5000/messages/${userId}/${recepientId}`
// //       );
// //       const data = await response.json();

// //       if (response.ok) {
// //         setMessages(data);
// //       } else {
// //         console.log("error showing messags", response.status.message);
// //       }
// //     } catch (error) {
// //       console.log("error fetching messages", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchMessages();
// //   }, []);

// //   useEffect(() => {
// //     const fetchRecepientData = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://192.168.50.242:5000/user/${recepientId}`
// //         );

// //         const data = await response.json();
// //         setRecepientData(data);
// //       } catch (error) {
// //         console.log("error retrieving details", error);
// //       }
// //     };

// //     fetchRecepientData();
// //   }, []);
  

// //   const handleSend = async (messageType, imageUri) => {
// //         try {
// //           const formData = new FormData();
// //           formData.append("senderId", userId);
// //           formData.append("recepientId", recepientId);
    
// //           //if the message type id image or a normal text
// //           if (messageType === "image") {
// //             formData.append("messageType", "image");
// //             formData.append("imageFile", {
// //               uri: imageUri,
// //               name: "image.jpg",
// //               type: "image/jpeg",
// //             });
// //           } else {
// //             formData.append("messageType", "text");
// //             formData.append("messageText", message);
// //           }
    
// //           const response = await fetch("http://192.168.50.242:5000/messages", {
// //             method: "POST",
// //             body: formData,
// //           });
    
// //           if (response.ok) {
// //             setMessage("");
// //             setSelectedImage("");
    
// //             fetchMessages();
// //           }
// //         } catch (error) {
// //           console.log("error in sending the message", error);
// //         }
// //       };
// //   console.log("messages", selectedMessages);


// //   useLayoutEffect(() => {
// //         navigation.setOptions({
// //           headerTitle: "",
// //           headerLeft: () => (
// //             <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
// //               <Ionicons
// //                 onPress={() => navigation.goBack()}
// //                 name="arrow-back"
// //                 size={24}
// //                 color="black"
// //               />
    
// //               {selectedMessages.length > 0 ? (
// //                 <View>
// //                   <Text style={{ fontSize: 16, fontWeight: "500" }}>
// //                     {selectedMessages.length}
// //                   </Text>
// //                 </View>
// //               ) : (
// //                 <View style={{ flexDirection: "row", alignItems: "center" }}>
// //                   <Image
// //                     style={{
// //                       width: 30,
// //                       height: 30,
// //                       borderRadius: 15,
// //                       resizeMode: "cover",
// //                     }}
// //                     source={{ uri: recepientData?.image }}
// //                   />
    
// //                   <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold" }}>
// //                     {recepientData?.name}
// //                   </Text>
// //                 </View>
// //               )}
// //             </View>
// //           ),

// //       headerRight: () => (
// //         <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
// //           {selectedMessages.length > 0 ? (
// //             <MaterialIcons
// //               onPress={() => deleteMessages(selectedMessages)}
// //               name="delete"
// //               size={24}
// //               color="black"
// //             />
// //           ) : (
// //             <Ionicons
// //               onPress={() =>
// //                 navigation.navigate("CallerDialScreen", {
// //                   recepientNumber: recepientData?.phoneNumber,
// //                 })
// //               }
// //               name="call"
// //               size={24}
// //               color="black"
// //             />
// //           )}
// //         </View>
// //       ),
// //     });
// //   }, [recepientData, selectedMessages]);

// //   useLayoutEffect(() => {
// //     if (!recepientData) {
// //       navigation.setOptions({
// //         headerTitle: "Messages", // Temporary placeholder
// //       });
// //       return;
// //     }
  
// //     navigation.setOptions({
// //       headerTitle: "",
// //       headerLeft: () => (
// //         <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
// //           <Ionicons
// //             onPress={() => navigation.goBack()}
// //             name="arrow-back"
// //             size={24}
// //             color="black"
// //           />
// //           <View style={{ flexDirection: "row", alignItems: "center" }}>
// //             {recepientData.image ? (
// //               <Image
// //                 style={{
// //                   width: 30,
// //                   height: 30,
// //                   borderRadius: 15,
// //                   resizeMode: "cover",
// //                 }}
// //                 source={{ uri: recepientData.image }}
// //               />
// //             ) : (
// //               <View
// //                 style={{
// //                   width: 30,
// //                   height: 30,
// //                   borderRadius: 15,
// //                   backgroundColor: "gray",
// //                 }}
// //               />
// //             )}
// //             <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold" }}>
// //               {recepientData.name || "Loading..."}
// //             </Text>
// //           </View>
// //         </View>
// //       ),
// //     });
// //   }, [recepientData, selectedMessages]);
  

// //   const deleteMessages = async (messageIds) => {
// //     try {
// //       const response = await fetch("http://192.168.50.242:5000/deleteMessages", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ messages: messageIds }),
// //       });

// //       if (response.ok) {
// //         setSelectedMessages((prevSelectedMessages) =>
// //         prevSelectedMessages.filter((id) => !messageIds.includes(id))
// //       );

// //         fetchMessages();
// //       } else {
// //         console.log("error deleting messages", response.status);
// //       }
// //     } catch (error) {
// //       console.log("error deleting messages", error);
// //     }
// //   };
// //   const formatTime = (time) => {
// //     const options = { hour: "numeric", minute: "numeric" };
// //     return new Date(time).toLocaleString("en-US", options);
// //   };



// //   const pickImage = async () => {
// //     try {
// //       const result = await ImagePicker.launchImageLibraryAsync({
// //         mediaTypes: ImagePicker.MediaTypeOptions.Images, // This might work depending on your Expo version
// //         allowsEditing: true,
// //         aspect: [4, 3],
// //         quality: 1,
// //       });
  
// //       if (!result.canceled) { // The new API uses 'canceled'
// //         console.log("Image selected:", result.assets[0].uri);
// //         handleSend("image", result.assets[0].uri); // Updated to access 'assets' array
// //       } else {
// //         console.log("Image selection was canceled.");
// //       }
// //     } catch (error) {
// //       console.log("Error picking image:", error);
// //     }
// //   };

  
// //   const handleSelectMessage = (message) => {
// //     //check if the message is already selected
// //     const isSelected = selectedMessages.includes(message._id);

// //     if (isSelected) {
// //       setSelectedMessages((previousMessages) =>
// //         previousMessages.filter((id) => id !== message._id)
// //       );
// //     } else {
// //       setSelectedMessages((previousMessages) => [
// //         ...previousMessages,
// //         message._id,
// //       ]);
// //     }
// //   };
// //   return (
// //     <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#F0F0F0" }}>
// //       <ScrollView ref={scrollViewRef} contentContainerStyle={{flexGrow:1}} onContentSizeChange={handleContentSizeChange}
// //         keyboardShouldPersistTaps="handled">
// //         {messages.map((item, index) => {
// //           if (item.messageType === "text") {
// //             const isSelected = selectedMessages.includes(item._id);
// //             return (
// //               <Pressable
// //                 onLongPress={() => handleSelectMessage(item)}
// //                 key={index}
// //                 style={[
// //                   item?.senderId?._id === userId
// //                     ? {
// //                         alignSelf: "flex-end",
// //                         backgroundColor: "#DCF8C6",
// //                         padding: 8,
// //                         maxWidth: "60%",
// //                         borderRadius: 7,
// //                         margin: 10,
// //                       }
// //                     : {
// //                         alignSelf: "flex-start",
// //                         backgroundColor: "white",
// //                         padding: 8,
// //                         margin: 10,
// //                         borderRadius: 7,
// //                         maxWidth: "60%",
// //                       },

// //                   isSelected && { width: "100%", backgroundColor: "#F0FFFF" },
// //                 ]}
// //               >
// //                 <Text
// //                   style={{
// //                     fontSize: 13,
// //                     textAlign: isSelected ? "right" : "left",
// //                   }}
// //                 >
// //                   {item?.message}
// //                 </Text>
// //                 <Text
// //                   style={{
// //                     textAlign: "right",
// //                     fontSize: 9,
// //                     color: "gray",
// //                     marginTop: 5,
// //                   }}
// //                 >
// //                   {formatTime(item.timeStamp)}
// //                 </Text>
// //               </Pressable>
// //             );
// //           }


// //           if (item.messageType === "image") {
// //             const imageUrl = item.imageUrl; // Use the imageUrl from the message
            
// //             return (
// //               <Pressable
// //                 key={index}
// //                 style={[
// //                   item?.senderId?._id === userId
// //                     ? {
// //                         alignSelf: "flex-end",
// //                         backgroundColor: "#DCF8C6",
// //                         padding: 8,
// //                         maxWidth: "60%",
// //                         borderRadius: 7,
// //                         margin: 10,
// //                       }
// //                     : {
// //                         alignSelf: "flex-start",
// //                         backgroundColor: "white",
// //                         padding: 8,
// //                         margin: 10,
// //                         borderRadius: 7,
// //                         maxWidth: "60%",
// //                       },
// //                 ]}
// //               >
// //                 <View>
// //                   <Image
// //                     source={{ uri: imageUrl }} // Use the imageUrl from the message
// //                     style={{ width: 200, height: 200, borderRadius: 7 }}
// //                   />
// //                   <Text
// //                     style={{
// //                       textAlign: "right",
// //                       fontSize: 9,
// //                       position: "absolute",
// //                       right: 10,
// //                       bottom: 7,
// //                       color: "white",
// //                       marginTop: 5,
// //                     }}
// //                   >
// //                     {formatTime(item?.timeStamp)}
// //                   </Text>
// //                 </View>
// //               </Pressable>
// //             );
// //           }

// //         })}
// //       </ScrollView>

// //       <View
// //         style={{
// //           flexDirection: "row",
// //           alignItems: "center",
// //           paddingHorizontal: 10,
// //           paddingVertical: 10,
// //           borderTopWidth: 1,
// //           borderTopColor: "#dddddd",
// //           marginBottom: showEmojiSelector ? 0 : 25,
// //         }}
// //       >
// //         <Entypo
// //           onPress={handleEmojiPress}
// //           style={{ marginRight: 5 }}
// //           name="emoji-happy"
// //           size={24}
// //           color="gray"

// //         />

// //         <TextInput
// //           value={message}
// //           onChangeText={(text) => setMessage(text)}
// //           style={{
// //             flex: 1,
// //             height: 40,
// //             borderWidth: 1,
// //             borderColor: "#dddddd",
// //             borderRadius: 20,
// //             paddingHorizontal: 10,
// //           }}
// //           placeholder="Type Your message..."
// //         />

// //         <View
// //           style={{
// //             flexDirection: "row",
// //             alignItems: "center",
// //             gap: 7,
// //             marginHorizontal: 8,
// //           }}
// //         >
// //           <Entypo onPress={pickImage} name="camera" size={24} color="gray" />

// //           {/* <Feather name="mic" size={24} color="gray" /> */}
// //         </View>

// //         <Pressable
// //           onPress={() => handleSend("text")}
// //           style={{
// //             backgroundColor: "#007bff",
// //             paddingVertical: 8,
// //             paddingHorizontal: 12,
// //             borderRadius: 20,
// //           }}
// //         >
// //           <Text style={{ color: "white", fontWeight: "bold" }}>Send</Text>
// //         </Pressable>
// //       </View>

// //       {showEmojiSelector && renderEmojiSelector()}
// //     </KeyboardAvoidingView>
// //   );
// // };

// // export default ChatMessagesScreen;

// // const styles = StyleSheet.create({});
































// // import {
// //   StyleSheet,
// //   Text,
// //   View,
// //   ScrollView,
// //   KeyboardAvoidingView,
// //   TextInput,
// //   Pressable,
// //   Image,
// //   Keyboard,
// // } from "react-native";
// // import React, { useState, useContext, useLayoutEffect, useEffect, useRef } from "react";
// // import { Feather, Ionicons, FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons";
// // import { UserType } from "../UserContext";
// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import * as ImagePicker from "expo-image-picker";

// // const ChatMessagesScreen = () => {
// //   const [showEmojiSelector, setShowEmojiSelector] = useState(false);
// //   const [selectedMessages, setSelectedMessages] = useState([]);
// //   const [messages, setMessages] = useState([]);
// //   const [recepientData, setRecepientData] = useState();
// //   const navigation = useNavigation();
// //   const [selectedImage, setSelectedImage] = useState("");
// //   const route = useRoute();
// //   const { recepientId } = route.params;
// //   const { userId } = useContext(UserType);
// //   const [message, setMessage] = useState("");
// //   const scrollViewRef = useRef(null);

// //   // Emoji list for the emoji selector
// //   const emojis = [
// //     "😀", "😂", "😍", "🥳", "😎", "😢", "😡", "👍", "👎", "❤️", "🔥", "💯", "🎉",
// //     "👏", "💔", "🎁", "😴", "🤔", "🥰", "🤗","😀","😃","😄","😁","😆","😅","😂",
// //     "🤣","🥲","🥹","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘",
// //     "😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🥸",
// //     "🤩","🥳","🙂‍↕️","😏","😒","🙂‍↔️","😞","😟","😕","🙁","☹️"
// //     ,"😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","😵‍💫"
// //     ,"🫥","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠"
// //     ,"😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾"
// //     ,"🤖","🎃","😺","😸" ,"😹","😻","😼","😽","🙀","😿","😾"]; 

// //   useEffect(() => {
// //     fetchMessages();
// //     fetchRecepientData();
// //   }, []);

// //   // Function to scroll to bottom after message load
// //   const scrollToBottom = () => {
// //     if (scrollViewRef.current) {
// //       scrollViewRef.current.scrollToEnd({ animated: true });
// //     }
// //   };

// //   const handleContentSizeChange = () => {
// //     scrollToBottom();
// //   };

// //   const handleEmojiPress = () => {
// //     Keyboard.dismiss();
// //     setShowEmojiSelector(!showEmojiSelector);
// //   };

// //   // Fetching chat messages
// //   const fetchMessages = async () => {
// //     try {
// //       const response = await fetch(
// //         `http://192.168.50.242:5000/messages/${userId}/${recepientId}`
// //       );
// //       const data = await response.json();
// //       if (response.ok) {
// //         setMessages(data);
// //       } else {
// //         console.error("Error fetching messages", response.status);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching messages", error);
// //     }
// //   };

// //   // Fetching recipient data (user profile)
// //   const fetchRecepientData = async () => {
// //     try {
// //       const response = await fetch(
// //         `http://192.168.50.242:5000/user/${recepientId}`
// //       );
// //       const data = await response.json();
// //       setRecepientData(data);
// //     } catch (error) {
// //       console.error("Error fetching recipient data", error);
// //     }
// //   };

// //   // Handle sending messages (text or image)
// //   const handleSend = async (messageType, imageUri) => {
// //     try {
// //       const formData = new FormData();
// //       formData.append("senderId", userId);
// //       formData.append("recepientId", recepientId);

// //       if (messageType === "image") {
// //         formData.append("messageType", "image");
// //         formData.append("imageFile", {
// //           uri: imageUri,
// //           name: "image.jpg",
// //           type: "image/jpeg",
// //         });
// //       } else {
// //         formData.append("messageType", "text");
// //         formData.append("messageText", message);
// //       }

// //       const response = await fetch("http://192.168.50.242:5000/messages", {
// //         method: "POST",
// //         body: formData,
// //       });

// //       if (response.ok) {
// //         setMessage("");
// //         setSelectedImage("");
// //         fetchMessages();
// //       }
// //     } catch (error) {
// //       console.error("Error sending message", error);
// //     }
// //   };

// //   // Handle deleting selected messages
// //   const deleteMessages = async (messageIds) => {
// //     try {
// //       const response = await fetch("http://192.168.50.242:5000/deleteMessages", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ messages: messageIds }),
// //       });

// //       if (response.ok) {
// //         setSelectedMessages((prevSelectedMessages) =>
// //           prevSelectedMessages.filter((id) => !messageIds.includes(id))
// //         );
// //         fetchMessages();
// //       } else {
// //         console.error("Error deleting messages", response.status);
// //       }
// //     } catch (error) {
// //       console.error("Error deleting messages", error);
// //     }
// //   };

// //   // Image picker for sending images
// //   const pickImage = async () => {
// //     try {
// //       const result = await ImagePicker.launchImageLibraryAsync({
// //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //         allowsEditing: true,
// //         aspect: [4, 3],
// //         quality: 1,
// //       });

// //       if (!result.canceled) {
// //         handleSend("image", result.assets[0].uri);
// //       } else {
// //         console.log("Image selection canceled");
// //       }
// //     } catch (error) {
// //       console.error("Error picking image", error);
// //     }
// //   };

// //   // Handling selection of messages
// //   const handleSelectMessage = (message) => {
// //     const isSelected = selectedMessages.includes(message._id);

// //     if (isSelected) {
// //       setSelectedMessages((prevMessages) =>
// //         prevMessages.filter((id) => id !== message._id)
// //       );
// //     } else {
// //       setSelectedMessages((prevMessages) => [
// //         ...prevMessages,
// //         message._id,
// //       ]);
// //     }
// //   };

// //   // Formatting message timestamps
// //   const formatTime = (time) => {
// //     const options = { hour: "numeric", minute: "numeric" };
// //     return new Date(time).toLocaleString("en-US", options);
// //   };

// //   // Header configuration for navigation
// //   useLayoutEffect(() => {
// //     navigation.setOptions({
// //       headerTitle: "",
// //       headerLeft: () => (
// //         <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
// //           <Ionicons
// //             onPress={() => navigation.goBack()}
// //             name="arrow-back"
// //             size={24}
// //             color="black"
// //           />
// //           {selectedMessages.length > 0 ? (
// //             <Text style={{ fontSize: 16, fontWeight: "500" }}>
// //               {selectedMessages.length}
// //             </Text>
// //           ) : (
// //             <View style={{ flexDirection: "row", alignItems: "center" }}>
// //               <Image
// //                 style={{ width: 30, height: 30, borderRadius: 15 }}
// //                 source={{ uri: recepientData?.image }}
// //               />
// //               <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold" }}>
// //                 {recepientData?.name}
// //               </Text>
// //             </View>
// //           )}
// //         </View>
// //       ),
// //       headerRight: () => (
// //         <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
// //           {selectedMessages.length > 0 ? (
// //             <MaterialIcons
// //               onPress={() => deleteMessages(selectedMessages)}
// //               name="delete"
// //               size={24}
// //               color="black"
// //             />
// //           ) : (
// //             <Ionicons
// //               onPress={() =>
// //                 navigation.navigate("CallerDialScreen", {
// //                   recepientNumber: recepientData?.phoneNumber,
// //                 })
// //               }
// //               name="call"
// //               size={24}
// //               color="black"
// //             />
// //           )}
// //         </View>
// //       ),
// //     });
// //   }, [recepientData, selectedMessages]);

// //   return (
// //     <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#F0F0F0" }}>
// //       <ScrollView
// //         ref={scrollViewRef}
// //         contentContainerStyle={{ flexGrow: 1 }}
// //         onContentSizeChange={handleContentSizeChange}
// //         keyboardShouldPersistTaps="handled"
// //       >
// //         {messages.map((item, index) => (
// //           <Pressable
// //             key={index}
// //             onLongPress={() => handleSelectMessage(item)}
// //             style={[
// //               item?.senderId?._id === userId
// //                 ? { alignSelf: "flex-end", backgroundColor: "#DCF8C6", padding: 8, maxWidth: "60%", borderRadius: 7, margin: 10 }
// //                 : { alignSelf: "flex-start", backgroundColor: "white", padding: 8, margin: 10, borderRadius: 7, maxWidth: "60%" },
// //               selectedMessages.includes(item._id) && { width: "100%", backgroundColor: "#F0FFFF" },
// //             ]}
// //           >
// //             {item.messageType === "text" ? (
// //               <>
// //                 <Text style={{ fontSize: 13, textAlign: item?.senderId?._id === userId ? "right" : "left" }}>
// //                   {item?.message}
// //                 </Text>
// //                 <Text style={{ textAlign: "right", fontSize: 9, color: "gray", marginTop: 5 }}>
// //                   {formatTime(item.timeStamp)}
// //                 </Text>
// //               </>
// //             ) : (
// //               <View>
// //                 <Image source={{ uri: item.imageUrl }} style={{ width: 200, height: 200, borderRadius: 7 }} />
// //                 <Text style={{ textAlign: "right", fontSize: 9, position: "absolute", right: 10, bottom: 7, color: "white" }}>
// //                   {formatTime(item?.timeStamp)}
// //                 </Text>
// //               </View>
// //             )}
// //           </Pressable>
// //         ))}
// //       </ScrollView>

// //       <View style={styles.inputContainer}>
// //         <Entypo onPress={handleEmojiPress} name="emoji-happy" size={24} color="gray" />
// //         <TextInput
// //           value={message}
// //           onChangeText={setMessage}
// //           style={styles.textInput}
// //           placeholder="Type Your message..."
// //         />
// //         <View style={styles.iconContainer}>
// //           <Entypo onPress={pickImage} name="camera" size={24} color="gray" />
// //         </View>
// //         <Pressable onPress={() => handleSend("text")} style={styles.sendButton}>
// //           <Text style={styles.sendText}>Send</Text>
// //         </Pressable>
// //       </View>

// //       {showEmojiSelector && renderEmojiSelector()}
// //     </KeyboardAvoidingView>
// //   );
// // };











// // import {
// //   StyleSheet,
// //   Text,
// //   View,
// //   ScrollView,
// //   KeyboardAvoidingView,
// //   TextInput,
// //   Pressable,
// //   Image,
// //   Keyboard,
// // } from "react-native";
// // import React, { useState, useContext, useLayoutEffect, useEffect, useRef } from "react";
// // import { Feather, Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
// // import { UserType } from "../UserContext";
// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import * as ImagePicker from "expo-image-picker";



// // const ChatMessagesScreen = () => {
// //   const [showEmojiSelector, setShowEmojiSelector] = useState(false);
// //   const [selectedMessages, setSelectedMessages] = useState([]);
// //   const [messages, setMessages] = useState([]);
// //   const [recepientData, setRecepientData] = useState(null);
// //   const [selectedImage, setSelectedImage] = useState("");
// //   const [message, setMessage] = useState("");
// //   const scrollViewRef = useRef(null);

// //   const navigation = useNavigation();
// //   const { recepientId } = useRoute().params;
// //   const { userId } = useContext(UserType);

// //   const emojis = [
// //     "😀", "😂", "😍", "🥳", "😎", "😢", "😡", "👍", "👎", "❤️", "🔥", "💯", "🎉", "👏", "💔",
// //     "🎁", "😴", "🤔", "🥰", "🤗", "🤣", "😊", "🤩", "😈", "👻", "💀", "👽", "😺", "😹",
// //   ];

// //   useEffect(() => {
// //     fetchMessages();
// //     fetchRecepientData();
// //   }, []);

// //   useLayoutEffect(() => {
// //     navigation.setOptions({
// //       headerTitle: "",
// //       headerLeft: () => (
// //         <View style={styles.headerLeft}>
// //           <Ionicons
// //             onPress={navigation.goBack}
// //             name="arrow-back"
// //             size={24}
// //             color="black"
// //           />
// //           {selectedMessages.length > 0 ? (
// //             <Text style={styles.headerText}>{selectedMessages.length}</Text>
// //           ) : (
// //             <View style={styles.recepientInfo}>
// //               <Image
// //                 style={styles.recepientImage}
// //                 source={{ uri: recepientData?.image }}
// //               />
// //               <Text style={styles.recepientName}>{recepientData?.name}</Text>
// //             </View>
// //           )}
// //         </View>
// //       ),
// //       headerRight: () => (
// //         <View style={styles.headerRight}>
// //           {selectedMessages.length > 0 ? (
// //             <MaterialIcons
// //               onPress={() => deleteMessages(selectedMessages)}
// //               name="delete"
// //               size={24}
// //               color="black"
// //             />
// //           ) : (
// //             <Ionicons
// //               onPress={() =>
// //                 navigation.navigate("CallerDialScreen", {
// //                   recepientNumber: recepientData?.phoneNumber,
// //                 })
// //               }
// //               name="call"
// //               size={24}
// //               color="black"
// //             />
// //           )}
// //         </View>
// //       ),
// //     });
// //   }, [recepientData, selectedMessages]);

// //   const fetchMessages = async () => {
// //     try {
// //       const response = await fetch(`http://192.168.50.242:5000/messages/${userId}/${recepientId}`);
// //       const data = await response.json();
// //       if (response.ok) setMessages(data);
// //     } catch (error) {
// //       console.error("Error fetching messages:", error);
// //     }
// //   };

// //   const fetchRecepientData = async () => {
// //     try {
// //       const response = await fetch(`http://192.168.50.242:5000/user/${recepientId}`);
// //       const data = await response.json();
// //       setRecepientData(data);
// //     } catch (error) {
// //       console.error("Error fetching recipient data:", error);
// //     }
// //   };

// //   const handleSend = async (messageType, imageUri = null) => {
// //     const formData = new FormData();
// //     formData.append("senderId", userId);
// //     formData.append("recepientId", recepientId);

// //     if (messageType === "image") {
// //       formData.append("messageType", "image");
// //       formData.append("imageFile", {
// //         uri: imageUri,
// //         name: "image.jpg",
// //         type: "image/jpeg",
// //       });
// //     } else {
// //       formData.append("messageType", "text");
// //       formData.append("messageText", message);
// //     }

// //     try {
// //       const response = await fetch("http://192.168.50.242:5000/messages", {
// //         method: "POST",
// //         body: formData,
// //       });

// //       if (response.ok) {
// //         setMessage("");
// //         setSelectedImage("");
// //         fetchMessages();
// //       }
// //     } catch (error) {
// //       console.error("Error sending message:", error);
// //     }
// //   };

// //   const deleteMessages = async (messageIds) => {
// //     try {
// //       const response = await fetch("http://192.168.50.242:5000/deleteMessages", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ messages: messageIds }),
// //       });

// //       if (response.ok) {
// //         setSelectedMessages((prev) =>
// //           prev.filter((id) => !messageIds.includes(id))
// //         );
// //         fetchMessages();
// //       }
// //     } catch (error) {
// //       console.error("Error deleting messages:", error);
// //     }
// //   };

// //   const pickImage = async () => {
// //     try {
// //       const result = await ImagePicker.launchImageLibraryAsync({
// //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //         allowsEditing: true,
// //         quality: 1,
// //       });
// //       if (!result.canceled) handleSend("image", result.assets[0].uri);
// //     } catch (error) {
// //       console.error("Error picking image:", error);
// //     }
// //   };

// //   const scrollToBottom = () => {
// //     if (scrollViewRef.current) scrollViewRef.current.scrollToEnd({ animated: true });
// //   };

// //   const formatTime = (time) => {
// //     return new Date(time).toLocaleTimeString("en-US", {
// //       hour: "numeric",
// //       minute: "numeric",
// //     });
// //   };

// //   return (
// //     <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#F0F0F0" }}>
// //       <ScrollView
// //         ref={scrollViewRef}
// //         contentContainerStyle={{ flexGrow: 1 }}
// //         onContentSizeChange={scrollToBottom}
// //         keyboardShouldPersistTaps="handled"
// //       >
// //         {messages.map((item) => (
// //           <Pressable
// //             key={item._id}
// //             onLongPress={() => handleSelectMessage(item)}
// //             style={[
// //               item.senderId === userId ? styles.sentMessage : styles.receivedMessage,
// //               selectedMessages.includes(item._id) && styles.selectedMessage,
// //             ]}
// //           >
// //             {item.messageType === "text" ? (
// //               <>
// //                 <Text style={styles.messageText}>{item.message}</Text>
// //                 <Text style={styles.messageTime}>{formatTime(item.timeStamp)}</Text>
// //               </>
// //             ) : (
// //               <Image source={{ uri: item.imageUrl }} style={styles.messageImage} />
// //             )}
// //           </Pressable>
// //         ))}
// //       </ScrollView>
// //       <View style={styles.inputContainer}>
// //         <Entypo onPress={() => setShowEmojiSelector(!showEmojiSelector)} name="emoji-happy" size={24} color="gray" />
// //         <TextInput
// //           value={message}
// //           onChangeText={setMessage}
// //           style={styles.textInput}
// //           placeholder="Type your message..."
// //         />
// //         <Entypo onPress={pickImage} name="camera" size={24} color="gray" />
// //         <Pressable onPress={() => handleSend("text")} style={styles.sendButton}>
// //           <Text style={styles.sendText}>Send</Text>
// //         </Pressable>
// //       </View>
// //     </KeyboardAvoidingView>
// //   );
// // };





// // const styles = StyleSheet.create({
// //   inputContainer: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     paddingHorizontal: 10,
// //     paddingVertical: 10,
// //     borderTopWidth: 1,
// //     borderTopColor: "#dddddd",
// //     marginBottom: 25,
// //   },
// //   textInput: {
// //     flex: 1,
// //     height: 40,
// //     borderWidth: 1,
// //     borderColor: "#dddddd",
// //     borderRadius: 20,
// //     paddingHorizontal: 10,
// //   },
// //   iconContainer: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     gap: 7,
// //     marginHorizontal: 8,
// //   },
// //   sendButton: {
// //     backgroundColor: "#007bff",
// //     paddingVertical: 8,
// //     paddingHorizontal: 12,
// //     borderRadius: 20,
// //   },
// //   sendText: {
// //     color: "white",
// //     fontWeight: "bold",
// //   },
// // });

// // export default ChatMessagesScreen;




















// // // import {
// // //   StyleSheet,
// // //   Text,
// // //   View,
// // //   ScrollView,
// // //   KeyboardAvoidingView,
// // //   TextInput,
// // //   Pressable,
// // //   Image,
// // //   Keyboard,
// // // } from "react-native";
// // // import React, { useState, useContext, useLayoutEffect, useEffect, useRef } from "react";
// // // import { Feather, Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
// // // import { UserType } from "../UserContext";
// // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // import * as ImagePicker from "expo-image-picker";


// // // export default function ChatMessagesScreen() {

// // //   const [showEmojiSelector, setShowEmojiSelector] = useState(false);
// // //   const [selectedMessages, setSelectedMessages] = useState([]);
// // //   const [messages, setMessages] = useState([]);
// // //   const [recepientData, setRecepientData] = useState(null);
// // //   const [selectedImage, setSelectedImage] = useState("");
// // //   const [message, setMessage] = useState("");
// // //   const scrollViewRef = useRef(null);

// // //   const navigation = useNavigation();
// // //   // const { recepientId } = useRoute().params;
// // //   // const { userId } = useContext(UserType);

// // //   const emojis = [
// // //     "😀", "😂", "😍", "🥳", "😎", "😢", "😡", "👍", "👎", "❤️", "🔥", "💯", "🎉", "👏", "💔",
// // //     "🎁", "😴", "🤔", "🥰", "🤗", "🤣", "😊", "🤩", "😈", "👻", "💀", "👽", "😺", "😹",
// // //   ];

// // //   useEffect(() => {
// // //     fetchMessages();
// // //     fetchRecepientData();
// // //   }, []);

// // //   useLayoutEffect(() => {
// // //     navigation.setOptions({
// // //       headerTitle: "",
// // //       headerLeft: () => (
// // //         <View style={styles.headerLeft}>
// // //           <Ionicons
// // //             // onPress={navigation.goBack}
// // //             name="arrow-back"
// // //             size={24}
// // //             color="black"
// // //           />
// // //           {selectedMessages.length > 0 ? (
// // //             <Text style={styles.headerText}>{selectedMessages.length}</Text>
// // //           ) : (
// // //             <View style={styles.recepientInfo}>
// // //               <Image
// // //                 style={styles.recepientImage}
// // //                 source={{ uri: recepientData?.image }}
// // //               />
// // //               <Text style={styles.recepientName}>{recepientData?.name}</Text>
// // //             </View>
// // //           )}
// // //         </View>
// // //       ),
// // //       headerRight: () => (
// // //         <View style={styles.headerRight}>
// // //           {selectedMessages.length > 0 ? (
// // //             <MaterialIcons
// // //               onPress={() => deleteMessages(selectedMessages)}
// // //               name="delete"
// // //               size={24}
// // //               color="black"
// // //             />
// // //           ) : (
// // //             <Ionicons
// // //               // onPress={() =>
// // //                 // navigation.navigate("CallerDialScreen", {
// // //                 //   recepientNumber: recepientData?.phoneNumber,
// // //                 // })
// // //               // }
// // //               // name="call"
// // //               // size={24}
// // //               // color="black"
// // //             />
// // //           )}
// // //         </View>
// // //       ),
// // //     });
// // //   }, [recepientData, selectedMessages]);

// // //   const fetchMessages = async () => {
// // //     try {
// // //       const response = await fetch(`http://192.168.50.242:5000/messages/${userId}/${recepientId}`);
// // //       const data = await response.json();
// // //       if (response.ok) setMessages(data);
// // //     } catch (error) {
// // //       console.error("Error fetching messages:", error);
// // //     }
// // //   };

// // //   const fetchRecepientData = async () => {
// // //     try {
// // //       const response = await fetch(`http://192.168.50.242:5000/user/${recepientId}`);
// // //       const data = await response.json();
// // //       setRecepientData(data);
// // //     } catch (error) {
// // //       console.error("Error fetching recipient data:", error);
// // //     }
// // //   };

// // //   const handleSend = async (messageType, imageUri = null) => {
// // //     const formData = new FormData();
// // //     formData.append("senderId", userId);
// // //     formData.append("recepientId", recepientId);

// // //     if (messageType === "image") {
// // //       formData.append("messageType", "image");
// // //       formData.append("imageFile", {
// // //         uri: imageUri,
// // //         name: "image.jpg",
// // //         type: "image/jpeg",
// // //       });
// // //     } else {
// // //       formData.append("messageType", "text");
// // //       formData.append("messageText", message);
// // //     }

// // //     try {
// // //       const response = await fetch("http://192.168.50.242:5000/messages", {
// // //         method: "POST",
// // //         body: formData,
// // //       });

// // //       if (response.ok) {
// // //         setMessage("");
// // //         setSelectedImage("");
// // //         fetchMessages();
// // //       }
// // //     } catch (error) {
// // //       console.error("Error sending message:", error);
// // //     }
// // //   };

// // //   const deleteMessages = async (messageIds) => {
// // //     try {
// // //       const response = await fetch("http://192.168.50.242:5000/deleteMessages", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ messages: messageIds }),
// // //       });

// // //       if (response.ok) {
// // //         setSelectedMessages((prev) =>
// // //           prev.filter((id) => !messageIds.includes(id))
// // //         );
// // //         fetchMessages();
// // //       }
// // //     } catch (error) {
// // //       console.error("Error deleting messages:", error);
// // //     }
// // //   };

// // //   // const pickImage = async () => {
// // //   //   try {
// // //   //     const result = await ImagePicker.launchImageLibraryAsync({
// // //   //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // //   //       allowsEditing: true,
// // //   //       quality: 1,
// // //   //     });
// // //   //     if (!result.canceled) handleSend("image", result.assets[0].uri);
// // //   //   } catch (error) {
// // //   //     console.error("Error picking image:", error);
// // //   //   }
// // //   // };

// // //   const scrollToBottom = () => {
// // //     if (scrollViewRef.current) scrollViewRef.current.scrollToEnd({ animated: true });
// // //   };

// // //   const formatTime = (time) => {
// // //     return new Date(time).toLocaleTimeString("en-US", {
// // //       hour: "numeric",
// // //       minute: "numeric",
// // //     });
// // //   };



// // //   return (
// // //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// // //       <Text>Chat Messages Screen</Text>
// // //     </View>
// // //   );
// // // }










// // import { useRouter, useSearchParams } from 'expo-router';
// // import React, { useEffect, useState } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// // import axios from 'axios';

// // const MessagingScreen = () => {
// //   const router = useRouter();
// //   const { senderId, recipientId } = useSearchParams(); // Extract dynamic params
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState('');

// //   useEffect(() => {
// //     if (!senderId || !recipientId) {
// //       console.error('Missing senderId or recipientId in URL');
// //       return;
// //     }

// //     const fetchMessages = async () => {
// //       try {
// //         const response = await axios.get(
// //           // `https://192.168.50.242:5000/messages/${senderId}/${recipientId}`
// //           `https://192.168.50.242:5000/messages/676334666b58a226c6fdff18/675c911919831c86093ed034`
// //         );
// //         setMessages(response.data);
// //       } catch (error) {
// //         console.error('Error fetching messages:', error);
// //       }
// //     };

// //     fetchMessages();
// //   }, [senderId, recipientId]);

// //   const sendMessage = async () => {
// //     if (!newMessage.trim()) return;

// //     try {
// //       const messageData = {
// //         senderId,
// //         recepientId: recipientId,
// //         messageType: 'text',
// //         message: newMessage,
// //       };

// //       const response = await axios.post('https://192.168.50.242:5000/messages', messageData);
// //       setMessages([...messages, response.data]);
// //       setNewMessage('');
// //     } catch (error) {
// //       console.error('Error sending message:', error);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <FlatList
// //         data={messages}
// //         keyExtractor={(item) => item._id}
// //         renderItem={({ item }) => (
// //           <View style={styles.messageContainer}>
// //             <Text>{item.message}</Text>
// //           </View>
// //         )}
// //       />
// //       <View style={styles.inputContainer}>
// //         <TextInput
// //           style={styles.textInput}
// //           value={newMessage}
// //           onChangeText={setNewMessage}
// //           placeholder="Type a message..."
// //         />
// //         <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
// //           <Text style={styles.sendButtonText}>Send</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#fff' },
// //   messageContainer: { margin: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 },
// //   inputContainer: { flexDirection: 'row', padding: 10, borderTopWidth: 1, borderColor: '#ccc' },
// //   textInput: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, padding: 10 },
// //   sendButton: { marginLeft: 10, padding: 10, backgroundColor: '#007bff', borderRadius: 5 },
// //   sendButtonText: { color: '#fff', fontWeight: 'bold' },
// // });

// // export default MessagingScreen;














// // import React, { useState, useEffect, useRef } from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   FlatList,
// //   KeyboardAvoidingView,
// //   Platform,
// //   StyleSheet,
// //   Image,
// // } from 'react-native';
// // import { useLocalSearchParams } from 'expo-router';
// // import axios from 'axios';
// // import * as ImagePicker from 'expo-image-picker';
// // import { Ionicons } from '@expo/vector-icons';

// // const ChatMessagesScreen = () => {
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const flatListRef = useRef(null);
// //   const params = useLocalSearchParams();
  
// //   // Replace with your actual user ID and recipient ID
// //   const currentUserId = "675c911919831c86093ed034";
// //   const recipientId =  "675d5df58fe7ec7ad49d9fc3";// params?.recipientId;

// //   useEffect(() => {
// //     fetchMessages();
// //     // Set up real-time updates here if using Socket.io or similar
// //   }, []);

// //   const fetchMessages = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await axios.get(`https://192.168.50.242:5000/message/messages`, {
// //         params: {
// //           senderId: currentUserId,
// //           recipientId: recipientId
// //         }
// //       });
// //       setMessages(response.data);
// //     } catch (error) {
// //       console.error('Error fetching messages:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const sendMessage = async (type = 'text', imageUrl = null) => {
// //     if ((!newMessage && type === 'text') || loading) return;

// //     try {
// //       setLoading(true);
// //       const messageData = {
// //         senderId: currentUserId,
// //         recepientId: recipientId,
// //         messageType: type,
// //         message: type === 'text' ? newMessage : '',
// //         imageUrl: imageUrl,
// //         timeStamp: new Date()
// //       };

// //       const response = await axios.post('https://192.168.50.242:5000/message/messages', messageData);
      
// //       setMessages(prev => [...prev, response.data]);
// //       setNewMessage('');
// //       flatListRef.current?.scrollToEnd();
// //     } catch (error) {
// //       console.error('Error sending message:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const pickImage = async () => {
// //     const result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //       quality: 1,
// //     });

// //     if (!result.canceled) {
// //       // Upload image to your server/storage and get URL
// //       // Then send message with image URL
// //       const imageUrl = 'uploaded_image_url'; // Replace with actual upload logic
// //       sendMessage('image', imageUrl);
// //     }
// //   };

// //   const renderMessage = ({ item }) => {
// //     const isCurrentUser = item.senderId === currentUserId;

// //     return (
// //       <View style={[
// //         styles.messageBubble,
// //         isCurrentUser ? styles.sentMessage : styles.receivedMessage
// //       ]}>
// //         {item.messageType === 'image' ? (
// //           <Image 
// //             source={{ uri: item.imageUrl }}
// //             style={styles.messageImage}
// //           />
// //         ) : (
// //           <Text style={styles.messageText}>{item.message}</Text>
// //         )}
// //         <Text style={styles.timeStamp}>
// //           {new Date(item.timeStamp).toLocaleTimeString([], { 
// //             hour: '2-digit', 
// //             minute: '2-digit'
// //           })}
// //         </Text>
// //       </View>
// //     );
// //   };

// //   return (
// //     <KeyboardAvoidingView 
// //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// //       style={styles.container}
// //     >
// //       <FlatList
// //         ref={flatListRef}
// //         data={messages}
// //         renderItem={renderMessage}
// //         keyExtractor={(item) => item._id}
// //         onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
// //         style={styles.messagesList}
// //       />

// //       <View style={styles.inputContainer}>
// //         <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
// //           <Ionicons name="image" size={24} color="#007AFF" />
// //         </TouchableOpacity>
        
// //         <TextInput
// //           style={styles.input}
// //           value={newMessage}
// //           onChangeText={setNewMessage}
// //           placeholder="Type a message..."
// //           multiline
// //         />
        
// //         <TouchableOpacity 
// //           onPress={() => sendMessage('text')}
// //           style={[
// //             styles.sendButton,
// //             (!newMessage || loading) && styles.disabledButton
// //           ]}
// //           disabled={!newMessage || loading}
// //         >
// //           <Ionicons name="send" size={24} color="#007AFF" />
// //         </TouchableOpacity>
// //       </View>
// //     </KeyboardAvoidingView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F5F5F5',
// //   },
// //   messagesList: {
// //     flex: 1,
// //     padding: 10,
// //   },
// //   messageBubble: {
// //     maxWidth: '80%',
// //     padding: 10,
// //     borderRadius: 15,
// //     marginVertical: 5,
// //   },
// //   sentMessage: {
// //     alignSelf: 'flex-end',
// //     backgroundColor: '#007AFF',
// //   },
// //   receivedMessage: {
// //     alignSelf: 'flex-start',
// //     backgroundColor: '#E5E5EA',
// //   },
// //   messageText: {
// //     color: '#000',
// //     fontSize: 16,
// //   },
// //   messageImage: {
// //     width: 200,
// //     height: 200,
// //     borderRadius: 10,
// //   },
// //   timeStamp: {
// //     fontSize: 12,
// //     color: '#8E8E93',
// //     marginTop: 5,
// //   },
// //   inputContainer: {
// //     flexDirection: 'row',
// //     padding: 10,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //   },
// //   input: {
// //     flex: 1,
// //     padding: 10,
// //     backgroundColor: '#F0F0F0',
// //     borderRadius: 20,
// //     marginHorizontal: 10,
// //     maxHeight: 100,
// //   },
// //   imageButton: {
// //     padding: 5,
// //   },
// //   sendButton: {
// //     padding: 5,
// //   },
// //   disabledButton: {
// //     opacity: 0.5,
// //   },
// // });

// // export default ChatMessagesScreen;












// // // works ##############################################################

// // import React, { useState, useEffect, useRef } from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   FlatList,
// //   KeyboardAvoidingView,
// //   Platform,
// //   StyleSheet,
// //   Image,
// //   Alert,
// // } from 'react-native';
// // import { useLocalSearchParams } from 'expo-router';
// // import axios from 'axios';
// // import * as ImagePicker from 'expo-image-picker';
// // import { Ionicons } from '@expo/vector-icons';

// // // Replace with your actual backend URL
// // const API_URL = 'http://192.168.50.242:5000'; // for Android emulator
// // // const API_URL = 'http://YOUR_MACHINE_IP:3000'; // for physical device

// // const ChatMessagesScreen = () => {
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const flatListRef = useRef(null);
// //   const params = useLocalSearchParams();
  
// //   const currentUserId = "675c911919831c86093ed034"; //params?.userId;
// //   const recipientId = "675d5df58fe7ec7ad49d9fc3"; //params?.recipientId;

// //   useEffect(() => {
// //     fetchMessages();
    
// //     // Fetch messages every 5 seconds
// //     const interval = setInterval(fetchMessages, 5000);
    
// //     return () => clearInterval(interval);
// //   }, []);

// //   const fetchMessages = async () => {
// //     try {
// //       const response = await axios.get(
// //         `${API_URL}/message/messages/${currentUserId}/${recipientId}`
// //       );

// //       console.log(response.data);

// //       setMessages(response.data);
// //     } catch (error) {
// //       console.error('Error fetching messages:', error);
// //       if (!messages.length) { // Only show alert if no messages are loaded
// //         Alert.alert(
// //           'Connection Error',
// //           'Unable to fetch messages. Please check your internet connection.'
// //         );
// //       }
// //     }
// //   };

// //   const pickImage = async () => {
// //     try {
// //       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// //       if (status !== 'granted') {
// //         Alert.alert('Permission needed', 'Please grant permission to access your photos');
// //         return;
// //       }

// //       const result = await ImagePicker.launchImageLibraryAsync({
// //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //         quality: 1,
// //       });

// //       if (!result.canceled) {
// //         sendImageMessage(result.assets[0]);
// //       }
// //     } catch (error) {
// //       console.error('Error picking image:', error);
// //       Alert.alert('Error', 'Failed to pick image');
// //     }
// //   };

// //   const sendImageMessage = async (imageAsset) => {
// //     if (loading) return;

// //     try {
// //       setLoading(true);

// //       const formData = new FormData();
// //       formData.append('imageFile', {
// //         uri: imageAsset.uri,
// //         type: 'image/jpeg',
// //         name: 'image.jpg',
// //       });
// //       formData.append('senderId', currentUserId);
// //       formData.append('recepientId', recipientId);
// //       formData.append('messageType', 'image');

// //       const response = await axios.post(`${API_URL}/message/messages`, formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       setMessages(prev => [...prev, response.data]);
// //       flatListRef.current?.scrollToEnd();
// //     } catch (error) {
// //       console.error('Error sending image:', error);
// //       Alert.alert('Error', 'Failed to send image');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const sendMessage = async () => {
// //     if (!newMessage.trim() || loading) return;

// //     try {
// //       setLoading(true);

// //       const response = await axios.post(`${API_URL}/message/messages`, {
// //         senderId: currentUserId,
// //         recepientId: recipientId,
// //         messageType: 'text',
// //         message: newMessage,
// //       });

// //       setMessages(prev => [...prev, response.data]);
// //       setNewMessage('');
// //       flatListRef.current?.scrollToEnd();
// //     } catch (error) {
// //       console.error('Error sending message:', error);
// //       Alert.alert('Error', 'Failed to send message');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const renderMessage = ({ item }) => {
// //     const isCurrentUser = item.senderId === currentUserId;

// //     return (
// //       <View style={[
// //         styles.messageBubble,
// //         isCurrentUser ? styles.sentMessage : styles.receivedMessage
// //       ]}>
// //         {item.messageType === 'image' ? (
// //           <Image 
// //             source={{ uri: item.imageUrl }}
// //             style={styles.messageImage}
// //             resizeMode="cover"
// //           />
// //         ) : (
// //           <Text style={[
// //             styles.messageText,
// //             isCurrentUser ? styles.sentMessageText : styles.receivedMessageText
// //           ]}>
// //             {item.message}
// //           </Text>
// //         )}
// //         <Text style={styles.timeStamp}>
// //           {new Date(item.timeStamp).toLocaleTimeString([], { 
// //             hour: '2-digit', 
// //             minute: '2-digit'
// //           })}
// //         </Text>
// //       </View>
// //     );
// //   };

// //   return (
// //     <KeyboardAvoidingView 
// //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// //       style={styles.container}
// //     >
// //       <FlatList
// //         ref={flatListRef}
// //         data={messages}
// //         renderItem={renderMessage}
// //         keyExtractor={(item) => item._id}
// //         onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
// //         style={styles.messagesList}
// //       />

// //       <View style={styles.inputContainer}>
// //         <TouchableOpacity 
// //           onPress={pickImage} 
// //           style={styles.imageButton}
// //           disabled={loading}
// //         >
// //           <Ionicons name="image" size={24} color="#007AFF" />
// //         </TouchableOpacity>
        
// //         <TextInput
// //           style={styles.input}
// //           value={newMessage}
// //           onChangeText={setNewMessage}
// //           placeholder="Type a message..."
// //           multiline
// //           maxLength={1000}
// //           editable={!loading}
// //         />
        
// //         <TouchableOpacity 
// //           onPress={sendMessage}
// //           style={[
// //             styles.sendButton,
// //             (!newMessage.trim() || loading) && styles.disabledButton
// //           ]}
// //           disabled={!newMessage.trim() || loading}
// //         >
// //           <Ionicons 
// //             name="send" 
// //             size={24} 
// //             color={!newMessage.trim() || loading ? '#999' : '#007AFF'} 
// //           />
// //         </TouchableOpacity>
// //       </View>
// //     </KeyboardAvoidingView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F5F5F5',
// //   },
// //   messagesList: {
// //     flex: 1,
// //     padding: 10,
// //   },
// //   messageBubble: {
// //     maxWidth: '80%',
// //     padding: 10,
// //     borderRadius: 15,
// //     marginVertical: 5,
// //   },
// //   sentMessage: {
// //     alignSelf: 'flex-end',
// //     backgroundColor: '#007AFF',
// //   },
// //   receivedMessage: {
// //     alignSelf: 'flex-start',
// //     backgroundColor: '#E5E5EA',
// //   },
// //   messageText: {
// //     fontSize: 16,
// //   },
// //   sentMessageText: {
// //     color: '#FFFFFF',
// //   },
// //   receivedMessageText: {
// //     color: '#000000',
// //   },
// //   messageImage: {
// //     width: 200,
// //     height: 200,
// //     borderRadius: 10,
// //   },
// //   timeStamp: {
// //     fontSize: 12,
// //     color: '#8E8E93',
// //     marginTop: 5,
// //     alignSelf: 'flex-end',
// //   },
// //   inputContainer: {
// //     flexDirection: 'row',
// //     padding: 10,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     borderTopWidth: 1,
// //     borderTopColor: '#E5E5EA',
// //   },
// //   input: {
// //     flex: 1,
// //     padding: 10,
// //     backgroundColor: '#F0F0F0',
// //     borderRadius: 20,
// //     marginHorizontal: 10,
// //     maxHeight: 100,
// //   },
// //   imageButton: {
// //     padding: 5,
// //   },
// //   sendButton: {
// //     padding: 5,
// //   },
// //   disabledButton: {
// //     opacity: 0.5,
// //   },
// // });

// // export default ChatMessagesScreen;






















// // import React, { useState, useEffect, useRef } from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   FlatList,
// //   KeyboardAvoidingView,
// //   Platform,
// //   StyleSheet,
// //   Image,
// //   Alert,
// //   Keyboard,
// // } from 'react-native';
// // import { useLocalSearchParams } from 'expo-router';
// // import axios from 'axios';
// // import * as ImagePicker from 'expo-image-picker';
// // import { Ionicons } from '@expo/vector-icons';

// // // Replace with your actual backend URL
// // const API_URL = 'http://192.168.50.242:5000'; // for Android emulator
// // // const API_URL = 'http://YOUR_MACHINE_IP:3000'; // for physical device

// // const ChatMessagesScreen = () => {
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const flatListRef = useRef(null);
// //   const inputRef = useRef(null); // Ref for the input field

// //   const params = useLocalSearchParams();
  
// //   const currentUserId = "675c911919831c86093ed034"; //params?.userId;
// //   const recipientId = "675d5df58fe7ec7ad49d9fc3"; //params?.recipientId;

// //   useEffect(() => {
// //     fetchMessages();

// //     // Fetch messages every 5 seconds
// //     const interval = setInterval(fetchMessages, 5000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   const fetchMessages = async () => {
// //     try {
// //       const response = await axios.get(
// //         `${API_URL}/message/messages/${currentUserId}/${recipientId}`
// //       );
// //       console.log(response.data);
// //       setMessages(response.data);
// //     } catch (error) {
// //       console.error('Error fetching messages:', error);
// //       if (!messages.length) { // Only show alert if no messages are loaded
// //         Alert.alert(
// //           'Connection Error',
// //           'Unable to fetch messages. Please check your internet connection.'
// //         );
// //       }
// //     }
// //   };

// //   const pickImage = async () => {
// //     try {
// //       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// //       if (status !== 'granted') {
// //         Alert.alert('Permission needed', 'Please grant permission to access your photos');
// //         return;
// //       }

// //       const result = await ImagePicker.launchImageLibraryAsync({
// //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //         quality: 1,
// //       });

// //       if (!result.canceled) {
// //         sendImageMessage(result.assets[0]);
// //       }
// //     } catch (error) {
// //       console.error('Error picking image:', error);
// //       Alert.alert('Error', 'Failed to pick image');
// //     }
// //   };

// //   const sendImageMessage = async (imageAsset) => {
// //     if (loading) return;

// //     try {
// //       setLoading(true);

// //       const formData = new FormData();
// //       formData.append('imageFile', {
// //         uri: imageAsset.uri,
// //         type: 'image/jpeg',
// //         name: 'image.jpg',
// //       });
// //       formData.append('senderId', currentUserId);
// //       formData.append('recepientId', recipientId);
// //       formData.append('messageType', 'image');

// //       const response = await axios.post(`${API_URL}/message/messages`, formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       setMessages(prev => [...prev, response.data]);
// //       flatListRef.current?.scrollToEnd();
// //     } catch (error) {
// //       console.error('Error sending image:', error);
// //       Alert.alert('Error', 'Failed to send image');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const sendMessage = async () => {
// //     if (!newMessage.trim() || loading) return;

// //     try {
// //       setLoading(true);

// //       const response = await axios.post(`${API_URL}/message/messages`, {
// //         senderId: currentUserId,
// //         recepientId: recipientId,
// //         messageType: 'text',
// //         message: newMessage,
// //       });

// //       setMessages(prev => [...prev, response.data]);
// //       setNewMessage(''); // Clear the input field after sending
// //       flatListRef.current?.scrollToEnd();
// //     } catch (error) {
// //       console.error('Error sending message:', error);
// //       Alert.alert('Error', 'Failed to send message');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const renderMessage = ({ item }) => {
// //     const isCurrentUser = item.senderId === currentUserId;

// //     return (
// //       <View style={[styles.messageBubble, isCurrentUser ? styles.sentMessage : styles.receivedMessage]}>
// //         {item.messageType === 'image' ? (
// //           <Image 
// //             source={{ uri: item.imageUrl }}
// //             style={styles.messageImage}
// //             resizeMode="cover"
// //           />
// //         ) : (
// //           <Text style={[styles.messageText, isCurrentUser ? styles.sentMessageText : styles.receivedMessageText]}>
// //             {item.message}
// //           </Text>
// //         )}
// //         <Text style={styles.timeStamp}>
// //           {new Date(item.timeStamp).toLocaleTimeString([], { 
// //             hour: '2-digit', 
// //             minute: '2-digit'
// //           })}
// //         </Text>
// //       </View>
// //     );
// //   };

// //   return (
// //     <KeyboardAvoidingView 
// //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// //       style={styles.container}
// //     >
// //       <FlatList
// //         ref={flatListRef}
// //         data={messages}
// //         renderItem={renderMessage}
// //         keyExtractor={(item) => item._id}
// //         onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
// //         style={styles.messagesList}
// //       />

// //       {/* Input container */}
// //       <View style={styles.inputContainer}>
// //         <TouchableOpacity 
// //           onPress={pickImage} 
// //           style={styles.imageButton}
// //           disabled={loading}
// //         >
// //           <Ionicons name="image" size={24} color="#007AFF" />
// //         </TouchableOpacity>
        
// //         <TextInput
// //           ref={inputRef}
// //           style={styles.input}
// //           value={newMessage}
// //           onChangeText={setNewMessage}
// //           placeholder="Type a message..."
// //           multiline
// //           maxLength={1000}
// //           editable={!loading}
// //         />
        
// //         <TouchableOpacity 
// //           onPress={sendMessage}
// //           style={[
// //             styles.sendButton,
// //             (!newMessage.trim() || loading) && styles.disabledButton
// //           ]}
// //           disabled={!newMessage.trim() || loading}
// //         >
// //           <Ionicons 
// //             name="send" 
// //             size={24} 
// //             color={!newMessage.trim() || loading ? '#999' : '#007AFF'} 
// //           />
// //         </TouchableOpacity>
// //       </View>
// //     </KeyboardAvoidingView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F5F5F5',
// //   },
// //   messagesList: {
// //     flex: 1,
// //     padding: 10,
// //   },
// //   messageBubble: {
// //     maxWidth: '80%',
// //     padding: 10,
// //     borderRadius: 15,
// //     marginVertical: 5,
// //   },
// //   sentMessage: {
// //     alignSelf: 'flex-end',
// //     backgroundColor: '#007AFF',
// //   },
// //   receivedMessage: {
// //     alignSelf: 'flex-start',
// //     backgroundColor: '#E5E5EA',
// //   },
// //   messageText: {
// //     fontSize: 16,
// //   },
// //   sentMessageText: {
// //     color: '#FFFFFF',
// //   },
// //   receivedMessageText: {
// //     color: '#000000',
// //   },
// //   messageImage: {
// //     width: 200,
// //     height: 200,
// //     borderRadius: 10,
// //   },
// //   timeStamp: {
// //     fontSize: 12,
// //     color: '#8E8E93',
// //     marginTop: 5,
// //     alignSelf: 'flex-end',
// //   },
// //   inputContainer: {
// //     flexDirection: 'row',
// //     padding: 10,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     borderTopWidth: 1,
// //     borderTopColor: '#E5E5EA',
// //   },
// //   input: {
// //     flex: 1,
// //     padding: 10,
// //     backgroundColor: '#F0F0F0',
// //     borderRadius: 20,
// //     marginHorizontal: 10,
// //     maxHeight: 100,
// //   },
// //   imageButton: {
// //     padding: 5,
// //   },
// //   sendButton: {
// //     padding: 5,
// //   },
// //   disabledButton: {
// //     opacity: 0.5,
// //   },
// // });

// // export default ChatMessagesScreen;










// // import React, { useState, useEffect, useRef } from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   FlatList,
// //   KeyboardAvoidingView,
// //   Platform,
// //   StyleSheet,
// //   Image,
// //   Alert,
// // } from 'react-native';
// // import { useLocalSearchParams } from 'expo-router';
// // import axios from 'axios';
// // import * as ImagePicker from 'expo-image-picker';
// // import { Ionicons } from '@expo/vector-icons';

// // const API_URL = 'http://192.168.50.242:5000';

// // const ChatMessagesScreen = () => {
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const flatListRef = useRef(null);
// //   const inputRef = useRef(null);

// //   const currentUserId = "675c911919831c86093ed034";
// //   const recipientId = "675d5df58fe7ec7ad49d9fc3";

// //   useEffect(() => {
// //     fetchMessages();
// //     const interval = setInterval(fetchMessages, 5000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const fetchMessages = async () => {
// //     try {
// //       const response = await axios.get(
// //         `${API_URL}/message/messages/${currentUserId}/${recipientId}`
// //       );
      
// //       const transformedMessages = response.data.map(msg => ({
// //         ...msg,
// //         isCurrentUser: msg.senderId === currentUserId
// //       }));
      
// //       setMessages(transformedMessages);
// //     } catch (error) {
// //       console.error('Error fetching messages:', error);
// //       if (!messages.length) {
// //         Alert.alert(
// //           'Connection Error',
// //           'Unable to fetch messages. Please check your internet connection.'
// //         );
// //       }
// //     }
// //   };

// //   const pickImage = async () => {
// //     if (loading) return;
    
// //     try {
// //       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// //       if (status !== 'granted') {
// //         Alert.alert('Permission needed', 'Please grant permission to access your photos');
// //         return;
// //       }

// //       const result = await ImagePicker.launchImageLibraryAsync({
// //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //         quality: 1,
// //       });

// //       if (!result.canceled && result.assets[0]) {
// //         await sendImageMessage(result.assets[0]);
// //       }
// //     } catch (error) {
// //       console.error('Error picking image:', error);
// //       Alert.alert('Error', 'Failed to pick image');
// //     }
// //   };

// //   const sendImageMessage = async (imageAsset) => {
// //     if (loading) return;

// //     try {
// //       setLoading(true);
// //       const formData = new FormData();
// //       formData.append('imageFile', {
// //         uri: imageAsset.uri,
// //         type: 'image/jpeg',
// //         name: 'image.jpg',
// //       });
// //       formData.append('senderId', currentUserId);
// //       formData.append('recepientId', recipientId);
// //       formData.append('messageType', 'image');

// //       const response = await axios.post(`${API_URL}/message/messages`, formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       const newImageMessageWithFlag = {
// //         ...response.data,
// //         isCurrentUser: true
// //       };

// //       setMessages(prev => [...prev, newImageMessageWithFlag]);
// //       if (flatListRef.current) {
// //         flatListRef.current.scrollToEnd({ animated: true });
// //       }
// //     } catch (error) {
// //       console.error('Error sending image:', error);
// //       Alert.alert('Error', 'Failed to send image');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const sendMessage = async () => {
// //     if (!newMessage.trim() || loading) return;

// //     try {
// //       setLoading(true);
// //       const messageData = {
// //         senderId: currentUserId,
// //         recepientId: recipientId,
// //         messageType: 'text',
// //         message: newMessage,
// //       };

// //       const response = await axios.post(`${API_URL}/message/messages`, messageData);
      
// //       const newMessageWithFlag = {
// //         ...response.data,
// //         isCurrentUser: true
// //       };

// //       setMessages(prev => [...prev, newMessageWithFlag]);
// //       setNewMessage('');
// //       if (flatListRef.current) {
// //         flatListRef.current.scrollToEnd({ animated: true });
// //       }
// //     } catch (error) {
// //       console.error('Error sending message:', error);
// //       Alert.alert('Error', 'Failed to send message');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Add renderMessage function back
// //   const renderMessage = ({ item }) => {
// //     return (
// //       <View style={[
// //         styles.messageRow,
// //         item.isCurrentUser ? styles.sentMessageRow : styles.receivedMessageRow
// //       ]}>
// //         <View style={[
// //           styles.messageBubble,
// //           item.isCurrentUser ? styles.sentMessage : styles.receivedMessage,
// //           item.messageType === 'image' && styles.imageBubble
// //         ]}>
// //           {item.messageType === 'image' ? (
// //             <Image 
// //               source={{ uri: item.imageUrl }}
// //               style={styles.messageImage}
// //               resizeMode="cover"
// //             />
// //           ) : (
// //             <Text style={[
// //               styles.messageText,
// //               item.isCurrentUser ? styles.sentMessageText : styles.receivedMessageText
// //             ]}>
// //               {item.message}
// //             </Text>
// //           )}
// //           <Text style={[
// //             styles.timeStamp,
// //             item.isCurrentUser ? styles.sentTimeStamp : styles.receivedTimeStamp
// //           ]}>
// //             {new Date(item.timeStamp).toLocaleTimeString([], { 
// //               hour: '2-digit', 
// //               minute: '2-digit'
// //             })}
// //           </Text>
// //         </View>
// //       </View>
// //     );
// //   };

// //   return (
// //     <KeyboardAvoidingView 
// //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// //       style={styles.container}
// //     >
// //       <FlatList
// //         ref={flatListRef}
// //         data={messages}
// //         renderItem={renderMessage}
// //         keyExtractor={(item) => item._id}
// //         onContentSizeChange={() => {
// //           if (flatListRef.current) {
// //             flatListRef.current.scrollToEnd({ animated: true });
// //           }
// //         }}
// //         style={styles.messagesList}
// //         contentContainerStyle={styles.messagesContainer}
// //       />

// //       <View style={styles.inputContainer}>
// //         <TouchableOpacity 
// //           onPress={pickImage} 
// //           style={styles.imageButton}
// //           disabled={loading}
// //         >
// //           <Ionicons name="image" size={24} color="#007AFF" />
// //         </TouchableOpacity>
        
// //         <TextInput
// //           ref={inputRef}
// //           style={styles.input}
// //           value={newMessage}
// //           onChangeText={setNewMessage}
// //           placeholder="Type a message..."
// //           multiline
// //           maxLength={1000}
// //           editable={!loading}
// //         />
        
// //         <TouchableOpacity 
// //           onPress={sendMessage}
// //           style={[
// //             styles.sendButton,
// //             (!newMessage.trim() || loading) && styles.disabledButton
// //           ]}
// //           disabled={!newMessage.trim() || loading}
// //         >
// //           <Ionicons 
// //             name="send" 
// //             size={24} 
// //             color={!newMessage.trim() || loading ? '#999' : '#007AFF'} 
// //           />
// //         </TouchableOpacity>
// //       </View>
// //     </KeyboardAvoidingView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F5F5F5',
// //   },
// //   messagesList: {
// //     flex: 1,
// //   },
// //   messagesContainer: {
// //     padding: 16,
// //   },
// //   messageRow: {
// //     flexDirection: 'row',
// //     marginVertical: 4,
// //   },
// //   sentMessageRow: {
// //     justifyContent: 'flex-end',
// //   },
// //   receivedMessageRow: {
// //     justifyContent: 'flex-start',
// //   },
// //   messageBubble: {
// //     maxWidth: '75%',
// //     padding: 12,
// //     borderRadius: 20,
// //     elevation: 1,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 1 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 1,
// //   },
// //   sentMessage: {
// //     backgroundColor: '#0B93F6',
// //     borderTopRightRadius: 4,
// //     marginLeft: 40,
// //   },
// //   receivedMessage: {
// //     backgroundColor: '#E8E8E8',
// //     borderTopLeftRadius: 4,
// //     marginRight: 40,
// //   },
// //   imageBubble: {
// //     padding: 4,
// //     backgroundColor: 'transparent',
// //   },
// //   messageText: {
// //     fontSize: 16,
// //     lineHeight: 20,
// //   },
// //   sentMessageText: {
// //     color: '#FFFFFF',
// //   },
// //   receivedMessageText: {
// //     color: '#000000',
// //   },
// //   messageImage: {
// //     width: 200,
// //     height: 200,
// //     borderRadius: 12,
// //   },
// //   timeStamp: {
// //     fontSize: 11,
// //     marginTop: 4,
// //   },
// //   sentTimeStamp: {
// //     color: 'rgba(255, 255, 255, 0.7)',
// //     textAlign: 'right',
// //   },
// //   receivedTimeStamp: {
// //     color: '#8E8E93',
// //     textAlign: 'left',
// //   },
// //   inputContainer: {
// //     flexDirection: 'row',
// //     padding: 8,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     borderTopWidth: 1,
// //     borderTopColor: '#E5E5EA',
// //   },
// //   input: {
// //     flex: 1,
// //     paddingHorizontal: 16,
// //     paddingVertical: 10,
// //     backgroundColor: '#F0F0F0',
// //     borderRadius: 24,
// //     marginHorizontal: 8,
// //     maxHeight: 100,
// //     fontSize: 16,
// //   },
// //   imageButton: {
// //     padding: 8,
// //   },
// //   sendButton: {
// //     padding: 8,
// //   },
// //   disabledButton: {
// //     opacity: 0.5,
// //   },
// // });

// // export default ChatMessagesScreen;















// import React, { useState, useEffect, useRef, useContext } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Pressable,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   StyleSheet,
//   Image,
//   Alert,
// } from 'react-native';
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import { Ionicons, Entypo } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';
// import axios from 'axios';

// const API_URL = 'http://192.168.50.242:5000';

// const ChatMessagesScreen = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showEmojiSelector, setShowEmojiSelector] = useState(false);
//   const [selectedMessages, setSelectedMessages] = useState([]);
//   const [recepientData, setRecepientData] = useState(null);
  
//   const scrollViewRef = useRef(null);
//   const router = useRouter();
  
//   const currentUserId = "675c911919831c86093ed034";
//   const recipientId = "675d5df58fe7ec7ad49d9fc3";

//   useEffect(() => {
//     fetchMessages();
//     fetchRecipientData();
//     const interval = setInterval(fetchMessages, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const fetchRecipientData = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/user/${recipientId}`);
//       setRecepientData(response.data);
//     } catch (error) {
//       console.error('Error fetching recipient data:', error);
//     }
//   };

//   const fetchMessages = async () => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/message/messages/${currentUserId}/${recipientId}`
//       );
      
//       const transformedMessages = response.data.map(msg => ({
//         ...msg,
//         isCurrentUser: msg.senderId === currentUserId
//       }));
      
//       setMessages(transformedMessages);
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//       if (!messages.length) {
//         Alert.alert(
//           'Connection Error',
//           'Unable to fetch messages. Please check your internet connection.'
//         );
//       }
//     }
//   };

//   const handleSend = async (messageType, imageUri) => {
//     if (loading) return;
    
//     try {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append('senderId', currentUserId);
//       formData.append('recepientId', recipientId);

//       if (messageType === 'image') {
//         formData.append('messageType', 'image');
//         formData.append('imageFile', {
//           uri: imageUri,
//           type: 'image/jpeg',
//           name: 'image.jpg',
//         });
//       } else {
//         if (!message.trim()) return;
//         formData.append('messageType', 'text');
//         formData.append('message', message);
//       }

//       const response = await axios.post(`${API_URL}/message/messages`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const newMessageWithFlag = {
//         ...response.data,
//         isCurrentUser: true
//       };

//       setMessages(prev => [...prev, newMessageWithFlag]);
//       setMessage('');
//       scrollToBottom();
//     } catch (error) {
//       console.error('Error sending message:', error);
//       Alert.alert('Error', 'Failed to send message');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const pickImage = async () => {
//     try {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert('Permission needed', 'Please grant permission to access your photos');
//         return;
//       }

//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         quality: 1,
//       });

//       if (!result.canceled && result.assets[0]) {
//         handleSend('image', result.assets[0].uri);
//       }
//     } catch (error) {
//       console.error('Error picking image:', error);
//       Alert.alert('Error', 'Failed to pick image');
//     }
//   };

//   const scrollToBottom = () => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollToEnd({ animated: true });
//     }
//   };

//   const formatTime = (time) => {
//     const options = { hour: "numeric", minute: "numeric" };
//     return new Date(time).toLocaleString("en-US", options);
//   };

//   const handleSelectMessage = (message) => {
//     const isSelected = selectedMessages.includes(message._id);
//     if (isSelected) {
//       setSelectedMessages(prev => prev.filter(id => id !== message._id));
//     } else {
//       setSelectedMessages(prev => [...prev, message._id]);
//     }
//   };

//   const renderMessage = (item, index) => {
//     const isSelected = selectedMessages.includes(item._id);
    
//     if (item.messageType === 'image') {
//       return (
//         <Pressable
//           key={index}
//           style={[
//             styles.messageBubble,
//             item.isCurrentUser ? styles.sentMessage : styles.receivedMessage
//           ]}
//         >
//           <View>
//             <Image
//               source={{ uri: item.imageUrl }}
//               style={styles.messageImage}
//             />
//             <Text style={styles.imageTimeStamp}>
//               {formatTime(item.timeStamp)}
//             </Text>
//           </View>
//         </Pressable>
//       );
//     }

//     return (
//       <Pressable
//         onLongPress={() => handleSelectMessage(item)}
//         key={index}
//         style={[
//           styles.messageBubble,
//           item.isCurrentUser ? styles.sentMessage : styles.receivedMessage,
//           isSelected && styles.selectedMessage
//         ]}
//       >
//         <Text style={[
//           styles.messageText,
//           item.isCurrentUser ? styles.sentMessageText : styles.receivedMessageText
//         ]}>
//           {item.message}
//         </Text>
//         <Text style={[
//           styles.timeStamp,
//           item.isCurrentUser ? styles.sentTimeStamp : styles.receivedTimeStamp
//         ]}>
//           {formatTime(item.timeStamp)}
//         </Text>
//       </Pressable>
//     );
//   };

//   return (
//     <KeyboardAvoidingView 
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       <ScrollView
//         ref={scrollViewRef}
//         contentContainerStyle={styles.scrollViewContent}
//         onContentSizeChange={scrollToBottom}
//       >
//         {messages.map((item, index) => renderMessage(item, index))}
//       </ScrollView>

//       <View style={styles.inputContainer}>
//         <Entypo
//           style={styles.emojiIcon}
//           name="emoji-happy"
//           size={24}
//           color="gray"
//           onPress={() => setShowEmojiSelector(!showEmojiSelector)}
//         />

//         <TextInput
//           value={message}
//           onChangeText={setMessage}
//           style={styles.input}
//           placeholder="Type Your message..."
//           multiline
//           maxLength={1000}
//           editable={!loading}
//         />

//         <Entypo
//           name="camera"
//           size={24}
//           color="gray"
//           style={styles.cameraIcon}
//           onPress={pickImage}
//         />

//         <Pressable
//           onPress={() => handleSend('text')}
//           style={[styles.sendButton, (!message.trim() || loading) && styles.disabledButton]}
//           disabled={!message.trim() || loading}
//         >
//           <Text style={styles.sendButtonText}>Send</Text>
//         </Pressable>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F0F0',
//   },
//   scrollViewContent: {
//     padding: 10,
//     flexGrow: 1,
//   },
//   messageBubble: {
//     padding: 8,
//     maxWidth: '60%',
//     borderRadius: 7,
//     margin: 10,
//   },
//   sentMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#DCF8C6',
//   },
//   receivedMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: 'white',
//   },
//   selectedMessage: {
//     backgroundColor: '#F0FFFF',
//     width: '100%',
//   },
//   messageText: {
//     fontSize: 13,
//   },
//   sentMessageText: {
//     color: 'black',
//   },
//   receivedMessageText: {
//     color: 'black',
//   },
//   timeStamp: {
//     fontSize: 9,
//     color: 'gray',
//     marginTop: 5,
//   },
//   sentTimeStamp: {
//     textAlign: 'right',
//   },
//   receivedTimeStamp: {
//     textAlign: 'left',
//   },
//   messageImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 7,
//   },
//   imageTimeStamp: {
//     position: 'absolute',
//     right: 10,
//     bottom: 7,
//     color: 'white',
//     fontSize: 9,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#dddddd',
//     backgroundColor: 'white',
//   },
//   emojiIcon: {
//     marginRight: 5,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#dddddd',
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     marginRight: 8,
//   },
//   cameraIcon: {
//     marginRight: 8,
//   },
//   sendButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 20,
//   },
//   disabledButton: {
//     opacity: 0.5,
//   },
//   sendButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default ChatMessagesScreen;











import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons, Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const API_URL = 'http://192.168.50.242:5000';

const ChatMessagesScreen = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [recepientData, setRecepientData] = useState(null);
  
  const scrollViewRef = useRef(null);
  const router = useRouter();
  
  // Use these IDs without $oid wrapper for requests
  const currentUserId = "675c911919831c86093ed034";
  const recipientId = "675d5df58fe7ec7ad49d9fc3";

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/message/messages/${currentUserId}/${recipientId}`
      );
      
      const transformedMessages = response.data.map(msg => ({
        ...msg,
        // Handle MongoDB ObjectId format
        _id: msg._id?.$oid || msg._id,
        senderId: msg.senderId?.$oid || msg.senderId,
        recepientId: msg.recepientId?.$oid || msg.recepientId,
        // Convert MongoDB timestamp
        timeStamp: msg.timeStamp?.$date || msg.timeStamp,
        // Add isCurrentUser flag
        isCurrentUser: (msg.senderId?.$oid || msg.senderId) === currentUserId
      }));
      
      setMessages(transformedMessages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      if (!messages.length) {
        Alert.alert(
          'Connection Error',
          'Unable to fetch messages. Please check your internet connection.'
        );
      }
    }
  };

  const handleSend = async (messageType, imageUri) => {
    if (loading) return;
    if (messageType === 'text' && !message.trim()) return;
    
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('senderId', currentUserId);
      formData.append('recepientId', recipientId);
      formData.append('messageType', messageType);

      if (messageType === 'image') {
        formData.append('imageFile', {
          uri: imageUri,
          type: 'image/jpeg',
          name: 'image.jpg',
        });
      } else {
        formData.append('message', message);
      }

      const response = await axios.post(`${API_URL}/message/messages`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Transform the new message to match our format
      const newMessageWithFlag = {
        ...response.data,
        _id: response.data._id?.$oid || response.data._id,
        senderId: response.data.senderId?.$oid || response.data.senderId,
        recepientId: response.data.recepientId?.$oid || response.data.recepientId,
        timeStamp: response.data.timeStamp?.$date || response.data.timeStamp,
        isCurrentUser: true
      };

      setMessages(prev => [...prev, newMessageWithFlag]);
      setMessage('');
      scrollToBottom();
    } catch (error) {
      console.error('Error sending message:', error);
      Alert.alert('Error', 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'Please grant permission to access your photos');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled && result.assets[0]) {
        handleSend('image', result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image');
    }
  };

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  const formatTime = (time) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date(time).toLocaleString("en-US", options);
  };

  const handleSelectMessage = (message) => {
    const isSelected = selectedMessages.includes(message._id);
    if (isSelected) {
      setSelectedMessages(prev => prev.filter(id => id !== message._id));
    } else {
      setSelectedMessages(prev => [...prev, message._id]);
    }
  };

  const renderMessage = (item, index) => {
    const isSelected = selectedMessages.includes(item._id);
    
    if (item.messageType === 'image') {
      return (
        <Pressable
          key={index}
          style={[
            styles.messageBubble,
            item.isCurrentUser ? styles.sentMessage : styles.receivedMessage
          ]}
        >
          <View>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.messageImage}
            />
            <Text style={styles.imageTimeStamp}>
              {formatTime(item.timeStamp)}
            </Text>
          </View>
        </Pressable>
      );
    }

    return (
      <Pressable
        onLongPress={() => handleSelectMessage(item)}
        key={index}
        style={[
          styles.messageBubble,
          item.isCurrentUser ? styles.sentMessage : styles.receivedMessage,
          isSelected && styles.selectedMessage
        ]}
      >
        <Text style={[
          styles.messageText,
          item.isCurrentUser ? styles.sentMessageText : styles.receivedMessageText
        ]}>
          {item.message}
        </Text>
        <Text style={[
          styles.timeStamp,
          item.isCurrentUser ? styles.sentTimeStamp : styles.receivedTimeStamp
        ]}>
          {formatTime(item.timeStamp)}
        </Text>
      </Pressable>
    );
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollViewContent}
        onContentSizeChange={scrollToBottom}
      >
        {messages.map((item, index) => renderMessage(item, index))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <Entypo
          style={styles.emojiIcon}
          name="emoji-happy"
          size={24}
          color="gray"
          onPress={() => setShowEmojiSelector(!showEmojiSelector)}
        />

        <TextInput
          value={message}
          onChangeText={setMessage}
          style={styles.input}
          placeholder="Type Your message..."
          multiline
          maxLength={1000}
          editable={!loading}
        />

        <Entypo
          name="camera"
          size={24}
          color="gray"
          style={styles.cameraIcon}
          onPress={pickImage}
        />

        <Pressable
          onPress={() => handleSend('text')}
          style={[styles.sendButton, (!message.trim() || loading) && styles.disabledButton]}
          disabled={!message.trim() || loading}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  scrollViewContent: {
    padding: 10,
    flexGrow: 1,
  },
  messageBubble: {
    padding: 8,
    maxWidth: '60%',
    borderRadius: 7,
    margin: 10,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
  },
  selectedMessage: {
    backgroundColor: '#F0FFFF',
    width: '100%',
  },
  messageText: {
    fontSize: 13,
  },
  sentMessageText: {
    color: 'black',
  },
  receivedMessageText: {
    color: 'black',
  },
  timeStamp: {
    fontSize: 9,
    color: 'gray',
    marginTop: 5,
  },
  sentTimeStamp: {
    textAlign: 'right',
  },
  receivedTimeStamp: {
    textAlign: 'left',
  },
  messageImage: {
    width: 200,
    height: 200,
    borderRadius: 7,
  },
  imageTimeStamp: {
    position: 'absolute',
    right: 10,
    bottom: 7,
    color: 'white',
    fontSize: 9,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    backgroundColor: 'white',
  },
  emojiIcon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  cameraIcon: {
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  disabledButton: {
    opacity: 0.5,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChatMessagesScreen;