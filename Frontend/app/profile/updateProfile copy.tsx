// import React from "react";
// import { View, Text, TouchableOpacity, Alert } from "react-native";
// import { router } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import styles from "../../styles";

// export default function Profile() {
//   const [userEmail, setUserEmail] = React.useState("");

//   React.useEffect(() => {
//     const fetchUserEmail = async () => {
//       try {
//         const token = await AsyncStorage.getItem("userToken");
//         // console.log(token);
//         // if (!token) {
//         //   router.replace("/login");
//         //   return;
//         // }

//         // Fetch user data
//         const response = await axios.get("https://livingconnect-backend.vercel.app/verify", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         // console.log(response);

//         const data = await response.data;

//         // console.log(data.user.email);

//         // if (response.status === 200) {
//         setUserEmail(data.user.email); // Update with user email from backend
//         // } else {
//         //   router.replace("/login");
//         // }
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//         // router.replace("/login");
//       }
//     };

//     fetchUserEmail();
//   }, []);

//   const handleLogout = async () => {
//     Alert.alert(
//       "Log Out",
//       "Are you sure you want to log out?",
//       [
//         {
//           text: "Cancel",
//           onPress: () => null,
//           style: "cancel",
//         },
//         {
//           text: "Yes",
//           onPress: async () => {
//             try {
//               // Call backend to invalidate session (optional)
//               const token = await AsyncStorage.getItem("userToken");
//               if (token) {
//                 await axios.post(
//                   "https://livingconnect-backend.vercel.app/logout",
//                   {},
//                   {
//                     headers: { Authorization: `Bearer ${token}` },
//                   }
//                 );
//               }

//               // Clear token from AsyncStorage
//               await AsyncStorage.removeItem("userToken");

//               // Navigate to the login screen
//               router.replace("/login");
//             } catch (error) {
//               console.error("Logout error:", error);
//             }
//           },
//         },
//       ],
//       { cancelable: false }
//     );
//   };

//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.titleHome}>Logout from your account?</Text>
//       <Text style={styles.emailText}>{userEmail || "Loading..."}</Text>
//       <TouchableOpacity style={styles.button} onPress={handleLogout}>
//         <Text style={styles.buttonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, TextInput, Alert, Image, StyleSheet } from "react-native";
// import { router } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import * as ImagePicker from "expo-image-picker";

// export default function Profile() {
//   const [userEmail, setUserEmail] = useState("");
//   const [userName, setUserName] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [profileImage, setProfileImage] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = await AsyncStorage.getItem("userToken");

//         const response = await axios.get("https://livingconnect-backend.vercel.app/verify", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const data = await response.data;
//         setUserEmail(data.user.email);
//         setUserName(data.user.name || "Your Name");
//         setContactNumber(data.user.contact || "");
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleUpdateProfile = async () => {
//     try {
//       const token = await AsyncStorage.getItem("userToken");
//       await axios.post(
//         "https://livingconnect-backend.vercel.app/update-profile",
//         { name: userName, contact: contactNumber, profileImage },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       Alert.alert("Profile updated successfully!");
//     } catch (err) {
//       console.error("Error updating profile:", err);
//       Alert.alert("Error updating profile. Please try again.");
//     }
//   };

//   const handlePickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setProfileImage(result.uri);
//     }
//   };

//   const handleLogout = async () => {
//     Alert.alert(
//       "Log Out",
//       "Are you sure you want to log out?",
//       [
//         { text: "Cancel", onPress: () => null, style: "cancel" },
//         {
//           text: "Yes",
//           onPress: async () => {
//             try {
//               const token = await AsyncStorage.getItem("userToken");
//               if (token) {
//                 await axios.post(
//                   "https://livingconnect-backend.vercel.app/logout",
//                   {},
//                   { headers: { Authorization: `Bearer ${token}` } }
//                 );
//               }
//               await AsyncStorage.removeItem("userToken");
//               router.replace("/login");
//             } catch (error) {
//               console.error("Logout error:", error);
//             }
//           },
//         },
//       ],
//       { cancelable: false }
//     );
//   };

//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.titleHome}>Your Profile</Text>

//       {/* Profile Picture */}
//       <TouchableOpacity onPress={handlePickImage}>
//         {profileImage ? (
//           <Image source={{ uri: profileImage }} style={styles.profileImage} />
//         ) : (
//           <View style={styles.profilePlaceholder}>
//             <Text style={styles.profilePlaceholderText}>
//               {userName.charAt(0).toUpperCase()}
//             </Text>
//           </View>
//         )}
//       </TouchableOpacity>

//       {/* Name Input */}
//       <TextInput
//         style={styles.input}
//         value={userName}
//         onChangeText={setUserName}
//         placeholder="Enter your name"
//       />

//       {/* Contact Input */}
//       <TextInput
//         style={styles.input}
//         value={contactNumber}
//         onChangeText={setContactNumber}
//         placeholder="Enter your contact number"
//         keyboardType="phone-pad"
//       />

//       {/* Email Display */}
//       <Text style={styles.emailText}>{userEmail || "Loading..."}</Text>

//       {/* Update Button */}
//       <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
//         <Text style={styles.buttonText}>Update Profile</Text>
//       </TouchableOpacity>

//       {/* Logout Button */}
//       <TouchableOpacity style={styles.button} onPress={handleLogout}>
//         <Text style={styles.buttonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   authContainer: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "center",
//     backgroundColor: "#fff",
//   },
//   titleHome: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     alignSelf: "center",
//     marginBottom: 20,
//     borderWidth: 2,
//     borderColor: "#000",
//   },
//   profilePlaceholder: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: "#38bdf8",
//     justifyContent: "center",
//     alignItems: "center",
//     alignSelf: "center",
//     marginBottom: 20,
//     borderWidth: 2,
//     borderColor: "#000",
//   },
//   profilePlaceholderText: {
//     color: "white",
//     fontSize: 36,
//     fontWeight: "bold",
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 16,
//     fontSize: 16,
//   },
//   emailText: {
//     fontSize: 16,
//     marginBottom: 20,
//     textAlign: "center",
//     color: "#555",
//   },
//   button: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#38bdf8",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 8,
//     marginBottom: 16,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   Alert,
//   StyleSheet,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";

// export default function Profile() {
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [userName, setUserName] = useState("John Doe"); // Example user name

//   const pickImage = async () => {
//     // Ask for permissions to access media library
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (!permissionResult.granted) {
//       Alert.alert("Permission required", "Please grant permission to access photos.");
//       return;
//     }

//     // Open image picker
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       base64: true, // This will include the Base64 encoding in the response
//       quality: 1, // Image quality (1 = highest)
//     });

//     if (!result.canceled) {
//       const { base64 } = result.assets[0]; // Get the base64 string from result
//       setProfileImage(`data:image/jpeg;base64,${base64}`);
//     }
//   };

//   const handleSaveProfile = () => {
//     if (!profileImage) {
//       Alert.alert("Error", "Please select an image first.");
//       return;
//     }

//     // Submit Base64 image to your backend
//     const payload = {
//       name: userName,
//       image: profileImage, // This is the Base64 string
//     };

//     // Simulate sending data to a server
//     Alert.alert("Profile Saved", `Image uploaded as Base64: ${payload.image.slice(0, 50)}...`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Profile</Text>
//       <TouchableOpacity onPress={pickImage}>
//         {profileImage ? (
//           <Image
//             source={{ uri: profileImage }}
//             style={styles.profileImage}
//           />
//         ) : (
//           <View style={styles.imagePlaceholder}>
//             <Text style={styles.imagePlaceholderText}>Pick an Image</Text>
//           </View>
//         )}
//       </TouchableOpacity>

//       <Text style={styles.userName}>{userName}</Text>

//       <TouchableOpacity
//         style={styles.saveButton}
//         onPress={handleSaveProfile}
//       >
//         <Text style={styles.buttonText}>Save Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: 50,
//     backgroundColor: "#f5f5f5",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     borderWidth: 2,
//     borderColor: "black",
//   },
//   imagePlaceholder: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     backgroundColor: "#ccc",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   imagePlaceholderText: {
//     color: "#555",
//     fontSize: 16,
//   },
//   userName: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginTop: 10,
//   },
//   saveButton: {
//     marginTop: 30,
//     padding: 12,
//     backgroundColor: "#38bdf8",
//     borderRadius: 8,
//     alignItems: "center",
//     width: "80%",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   Alert,
//   StyleSheet,
//   TextInput,
// } from "react-native";
// import axios from "axios";

// export default function Profile() {
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [userName, setUserName] = useState("John Doe");

//   const pickImage = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (!permissionResult.granted) {
//       Alert.alert("Permission required", "Please grant permission to access photos.");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       base64: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const { base64 } = result.assets[0];
//       setProfileImage(`data:image/jpeg;base64,${base64}`);
//     }
//   };

//   const handleSaveProfile = async () => {
//     if (!userName.trim()) {
//       Alert.alert("Error", "Name cannot be empty.");
//       return;
//     }

//     if (!profileImage) {
//       Alert.alert("Error", "Please select an image first.");
//       return;
//     }

//     try {
//       const response = await axios.post("https://livingconnect-backend.vercel.app/update-profile", {
//         email: "user@example.com", // Replace with the actual user email
//         name: userName,
//         profileImage,
//       });

//       if (response.status === 200) {
//         Alert.alert("Success", "Profile updated successfully!");
//       } else {
//         Alert.alert("Error", "Failed to update profile.");
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       Alert.alert("Error", "An error occurred while updating the profile.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Profile</Text>

//       <TouchableOpacity onPress={pickImage}>
//         {profileImage ? (
//           <Image source={{ uri: profileImage }} style={styles.profileImage} />
//         ) : (
//           <View style={styles.imagePlaceholder}>
//             <Text style={styles.imagePlaceholderText}>Pick an Image</Text>
//           </View>
//         )}
//       </TouchableOpacity>

//       <TextInput
//         style={styles.input}
//         value={userName}
//         onChangeText={setUserName}
//         placeholder="Enter your name"
//       />

//       <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
//         <Text style={styles.buttonText}>Save Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: 50,
//     backgroundColor: "#f5f5f5",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     borderWidth: 2,
//     borderColor: "black",
//   },
//   imagePlaceholder: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     backgroundColor: "#ccc",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   imagePlaceholderText: {
//     color: "#555",
//     fontSize: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 10,
//     width: "80%",
//     marginTop: 20,
//     fontSize: 16,
//   },
//   saveButton: {
//     marginTop: 30,
//     padding: 12,
//     backgroundColor: "#38bdf8",
//     borderRadius: 8,
//     alignItems: "center",
//     width: "80%",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

//Started from here

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   Alert,
//   StyleSheet,
//   TextInput,
// } from "react-native";
// import axios from "axios";
// import * as ImagePicker from "expo-image-picker";

// export default function Profile() {
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [userName, setUserName] = useState("John Doe");
//   const [contactNumber, setContactNumber] = useState("1234567890");

//   const pickImage = async () => {
//     // console.log("here in pick image");

//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (!permissionResult.granted) {
//       Alert.alert("Permission required", "Please grant permission to access photos.");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       base64: true,
//       quality: 1,
//     });

//     // console.log(result);

//     if (!result.canceled) {
//       const { base64 } = result.assets[0];
//       setProfileImage(`data:image/jpeg;base64,${base64}`);
//     }
//   };

// const handleSaveProfile = async () => {
//   if (!userName.trim()) {
//     Alert.alert("Error", "Name cannot be empty.");
//     return;
//   }

//   if (!contactNumber.trim()) {
//     Alert.alert("Error", "Contact number cannot be empty.");
//     return;
//   }

//   if (!profileImage) {
//     Alert.alert("Error", "Please select an image first.");
//     return;
//   }

//   // try {
//   //   // Create FormData for multipart upload
//   //   const formData = new FormData();
//   //   formData.append('email', 'abc01@gmail.com');
//   //   formData.append('name', userName);
//   //   formData.append('contactNumber', contactNumber);

//   //   // Directly create a file-like object for upload
//   //   if (profileImage.startsWith('data:image')) {
//   //     // Remove the data URI prefix
//   //     const base64Data = profileImage.split(',')[1];

//   //     formData.append('profileImage', {
//   //       uri: profileImage,
//   //       type: 'image/jpeg',
//   //       name: 'profile.jpg',
//   //       // For React Native, you can directly use the base64 string
//   //       data: base64Data
//   //     });
//   //   }

//   //   console.log('FormData contents:', formData);

//   //   const response = await axios.post("https://livingconnect-backend.vercel.app/update-profile", formData, {
//   //     headers: {
//   //       'Content-Type': 'multipart/form-data'
//   //     },
//   //     transformRequest: (data, headers) => {
//   //       // You can add additional transformation if needed
//   //       return data;
//   //     },
//   //     timeout: 10000
//   //   });

//   try {
//     // Compress or resize the image before converting to base64
//     const resizedImage = await ImageManipulator.manipulateAsync(
//       profileImage,
//       [{ resize: { width: 500 } }], // Resize to max width of 500px
//       { compress: 0.7, format: 'jpeg' } // Compress to 70% quality
//     );

//     const base64 = await FileSystem.readAsStringAsync(resizedImage.uri, {
//       encoding: FileSystem.EncodingType.Base64
//     });

//     // Now send the compressed base64 image
//     const formData = {
//       email: 'abc01@gmail.com',
//       name: userName,
//       contactNumber: contactNumber,
//       profileImage: `data:image/jpeg;base64,${base64}`
//     };

//     const response = await axios.post("http://localhost:5000/update-profile", formData, {
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       timeout: 10000
//     });

//     if (response.status === 200) {
//       Alert.alert("Success", "Profile updated successfully!");
//     } else {
//       Alert.alert("Error", "Failed to update profile.");
//     }
//   } catch (error) {
//     console.error("Detailed Error:", JSON.stringify(error, null, 2));

//     if (error.response) {
//       console.error("Error Response Data:", error.response.data);
//       console.error("Error Response Status:", error.response.status);
//     } else if (error.request) {
//       console.error("No response received:", error.request);
//     } else {
//       console.error("Error Message:", error.message);
//     }

//     Alert.alert("Network Error", "Check your server connection and try again.");
//   }
// };

// import axios from "axios";
// import * as ImagePicker from "expo-image-picker";
// import * as ImageManipulator from "expo-image-manipulator";
// import { router } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function Profile() {
//   const [profileImage, setProfileImage] = useState(null);
//   const [userName, setUserName] = useState("");
//   const [contactNumber, setContactNumber] = useState("");

//   interface UserProfile {
//     email: string;
//     name: string;
//     contactNumber: string;
//     profileImage: string | null;
//   }

//   const pickImage = async () => {
//     const permissionResult =
//       await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (!permissionResult.granted) {
//       Alert.alert(
//         "Permission required",
//         "Please grant permission to access photos."
//       );
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 0.7,
//       base64: true,
//     });

//     if (!result.canceled) {
//       // Compress and resize the image
//       const manipResult = await ImageManipulator.manipulateAsync(
//         result.assets[0].uri,
//         [{ resize: { width: 500 } }],
//         { compress: 0.7, base64: true }
//       );

//       // Store the base64 image with data URI prefix
//       setProfileImage(`data:image/jpeg;base64,${manipResult.base64}`);
//     }
//   };

//   const [profile, setProfile] = useState<UserProfile | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   const fetchUserProfile = async () => {
//     try {
//       // Retrieve the token from AsyncStorage
//       const token = await AsyncStorage.getItem("userToken");

//       if (!token) {
//         throw new Error("No token found");
//       }

//       setLoading(true);
//       const response = await axios.get(
//         "https://livingconnect-backend.vercel.app/profile/get-profile",
//         // "https://livingconnect-backend.vercel.app/profile/get-profile",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setProfile(response.data);

//       setProfileImage(response.data.profileImage);
//       setUserName(response.data.name);
//       setContactNumber(response.data.contactNumber);
//       // setLoading(false);
//     } catch (err) {
//       console.error("Failed to fetch profile:", err);
//       // setLoading(false);
//     }
//   };

//   const handleSaveProfile = async () => {
//     // Validation
//     if (!userName.trim()) {
//       Alert.alert("Error", "Name cannot be empty.");
//       return;
//     }

//     if (!contactNumber.trim()) {
//       Alert.alert("Error", "Contact number cannot be empty.");
//       return;
//     }

//     if (!profileImage) {
//       Alert.alert("Error", "Please select an image first.");
//       return;
//     }

//     try {
//       const token = await AsyncStorage.getItem("userToken");

//       const response = await axios.post(
//         // "https://livingconnect-backend.vercel.app/profile/update-profile",
//         "https://livingconnect-backend.vercel.app/profile/update-profile",
//         {
//           // email: 'abc02@gmail.com',
//           name: userName,
//           contactNumber: contactNumber,
//           profileImage: profileImage,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           // timeout: 10000
//           timeout: 1000,
//         }
//       );

//       if (response.status === 200) {
//         Alert.alert("Success", "Profile updated successfully!");
//         router.push("/pages/mainPage");
//       } else {
//         Alert.alert("Error", "Failed to update profile.");
//         // router.push("/pages/mainPage");
//       }
//     } catch (error) {
//       console.error("Detailed Error:", JSON.stringify(error, null, 2));

//       if (error.response) {
//         console.error("Error Response Data:", error.response.data);
//       }

//       Alert.alert(
//         "Network Error",
//         "Check your server connection and try again."
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Update Profile</Text>
//       <View style={styles.profileContainer}>
//         <TouchableOpacity onPress={pickImage}>
//           {profileImage ? (
//             <Image source={{ uri: profileImage }} style={styles.profileImage} />
//           ) : (
//             <View style={styles.imagePlaceholder}>
//               <Text style={styles.imagePlaceholderText}>Pick an Image</Text>
//             </View>
//           )}
//         </TouchableOpacity>

//         <TextInput
//           style={styles.input}
//           value={userName}
//           onChangeText={setUserName}
//           // placeholder="Enter your name"
//           placeholder={userName || "Enter your name"} // Use `userName` if available, else default placeholder
//           placeholderTextColor="#FFFFFF" // Set placeholder color to white
//         />

//         <TextInput
//           style={styles.input}
//           value={contactNumber}
//           onChangeText={setContactNumber}
//           placeholder={contactNumber || "Enter your contact number"}
//           keyboardType="phone-pad"
//           placeholderTextColor="#FFFFFF" // Set placeholder color to white
//         />
//       </View>
//       <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
//         <Text style={styles.buttonText}>Save Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: 40,
//     backgroundColor: "black",
//   },
//   profileContainer: {
//     // width: "90%",
//     // alignItems: "center",
//     // justifyContent: "center",
//     // backgroundColor: "#1f2937",
//     // borderRadius: 10,
//     // padding: 20,
//     // marginBottom: 20,
//     // shadowColor: "#000",
//     // shadowOffset: { width: 0, height: 2 },
//     // shadowOpacity: 0.1,
//     // shadowRadius: 4,
//     // elevation: 3,

//     width: "100%",
//     backgroundColor: "#1f2937",
//     borderRadius: 10,
//     padding: 20,
//     alignItems: "center",
//     marginBottom: 15,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 4,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#38bdf8",
//   },
//   profileImage: {
//     width: 180,
//     height: 180,
//     borderRadius: 10,
//     borderWidth: 3,
//     borderColor: "#38bdf8",

//     // width: 150,
//     // height: 150,
//     // borderRadius: 75,
//     // borderWidth: 2,
//     // borderColor: "black",

//     // width: "100%",
//     // height: 150,
//     // backgroundColor: "#fff",
//     // borderRadius: 10,
//     // padding: 20,
//     // alignItems: "center",
//     // marginBottom: 15,
//   },
//   imagePlaceholder: {
//     width: 180,
//     height: 180,
//     borderRadius: 10,
//     borderWidth: 3,
//     borderColor: "#38bdf8",
//     backgroundColor: "#fff",
//     // padding: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 15,

//     // shadowColor: "#000",
//     // shadowOffset: { width: 0, height: 3 },
//     // shadowOpacity: 0.1,
//     // shadowRadius: 5,
//     // elevation: 4,

//     // width: 150,
//     // height: 150,
//     // borderRadius: 75,
//     // backgroundColor: "#fff",

//     // padding: 20,
//     // alignItems: "center",
//     // marginBottom: 20,
//   },
//   imagePlaceholderText: {
//     color: "#555",
//     fontSize: 16,
//     textAlign: "center",
//   },
//   input: {
//     borderWidth: 2,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 10,
//     width: "90%",
//     marginTop: 20,
//     fontSize: 16,
//     backgroundColor: "#2d3748",
//     color: "white",
//   },
//   saveButton: {
//     marginTop: 30,
//     padding: 12,
//     backgroundColor: "#38bdf8",
//     borderRadius: 8,
//     alignItems: "center",
//     width: "80%",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
  SafeAreaView,
  Platform,
} from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserProfile {
  email: string;
  name: string;
  contactNumber: string;
  profileImage: string | null;
}

export default function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile();
  }, []);

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
      allowsEditing: true,
      quality: 0.7,
      base64: true,
    });

    if (!result.canceled) {
      const manipResult = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 500 } }],
        { compress: 0.7, base64: true }
      );

      setProfileImage(`data:image/jpeg;base64,${manipResult.base64}`);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      if (!token) throw new Error("No token found");

      const response = await axios.get(
        "https://livingconnect-backend.vercel.app/profile/get-profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setProfile(response.data);
      setProfileImage(response.data.profileImage);
      setUserName(response.data.name);
      setContactNumber(response.data.contactNumber);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch profile:", err);
      setLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    if (!userName.trim()) {
      Alert.alert("Error", "Name cannot be empty.");
      return;
    }

    if (!contactNumber.trim()) {
      Alert.alert("Error", "Contact number cannot be empty.");
      return;
    }

    if (!profileImage) {
      Alert.alert("Error", "Please select an image first.");
      return;
    }

    try {
      const token = await AsyncStorage.getItem("userToken");
      const response = await axios.post(
        "https://livingconnect-backend.vercel.app/profile/update-profile",
        {
          name: userName,
          contactNumber: contactNumber,
          profileImage: profileImage,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          timeout: 1000,
        }
      );

      if (response.status === 200) {
        Alert.alert("Success", "Profile updated successfully!");
        router.push("/pages/mainPage");
      } else {
        Alert.alert("Error", "Failed to update profile.");
      }
    } catch (error) {
      console.error("Detailed Error:", JSON.stringify(error, null, 2));
      Alert.alert(
        "Network Error",
        "Check your server connection and try again."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#38bdf8" />

      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Update Profile</Text>
          <Text style={styles.headerSubtitle}>Edit Your Information</Text>
        </View>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={pickImage}>
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={styles.profileImage}
              />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Text style={styles.placeholderText}>Select Image</Text>
              </View>
            )}
          </TouchableOpacity>
          <View style={styles.imageBorder} />
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              value={userName}
              onChangeText={setUserName}
              placeholder={userName || "Enter your name"}
              placeholderTextColor="#6B7280"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Contact Number</Text>
            <TextInput
              style={styles.input}
              value={contactNumber}
              onChangeText={setContactNumber}
              placeholder={contactNumber || "Enter your contact number"}
              keyboardType="phone-pad"
              placeholderTextColor="#6B7280"
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleSaveProfile}
        >
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    backgroundColor: "#38bdf8",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 24,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: 24,
  },
  headerContent: {
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#E0E7FF",
    marginTop: 4,
    letterSpacing: 0.5,
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    margin: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "rgba(229, 229, 229, 0.5)",
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E0E7FF",
  },
  imageBorder: {
    position: "absolute",
    top: -3,
    left: -3,
    right: -3,
    bottom: -3,
    borderRadius: 63,
    borderWidth: 3,
    borderColor: "#38bdf8",
    opacity: 0.2,
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E0E7FF",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#6B7280",
    fontSize: 16,
    fontWeight: "500",
  },
  detailsContainer: {
    gap: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  input: {
    backgroundColor: "#F8FAFF",
    borderWidth: 1,
    borderColor: "#E0E7FF",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#38bdf8",
  },
  buttonContainer: {
    padding: 16,
  },
  actionButton: {
    backgroundColor: "#38bdf8",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
});

//   const handleSaveProfile = async () => {
//     if (!userName.trim()) {
//       Alert.alert("Error", "Name cannot be empty.");
//       return;
//     }

//     if (!contactNumber.trim()) {
//       Alert.alert("Error", "Contact number cannot be empty.");
//       return;
//     }

//     if (!profileImage) {
//       Alert.alert("Error", "Please select an image first.");
//       return;
//     }

//     try {
//       const response = await axios.post("https://livingconnect-backend.vercel.app/update-profile", {
//         email: "abc01@gmail.com", // Replace with the actual user email
//         name: userName,
//         contactNumber,
//         profileImage,
//       });

//       if (response.status === 200) {
//         Alert.alert("Success", "Profile updated successfully!");
//       } else {
//         Alert.alert("Error", "Failed to update profile.");
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       Alert.alert("Error", "An error occurred while updating the profile.");
//     }
//   };

// const handleSaveProfile = async () => {
//     if (!userName.trim()) {
//       Alert.alert("Error", "Name cannot be empty.");
//       return;
//     }

//     if (!contactNumber.trim()) {
//       Alert.alert("Error", "Contact number cannot be empty.");
//       return;
//     }

//     if (!profileImage) {
//       Alert.alert("Error", "Please select an image first.");
//       return;
//     }

//     try {
//       // Create FormData instead of sending base64 directly
//       const formData = new FormData();
//       formData.append('email', 'abc01@gmail.com'); // Replace with actual email
//       formData.append('name', userName);
//       formData.append('contactNumber', contactNumber);

//       console.log('mark 1');
//       // Convert base64 to file
//       const base64Response = await fetch(profileImage);

//       const blob = await base64Response.blob();

//       console.log('mark 2');

//       formData.append('profileImage', {
//         uri: profileImage,
//         type: 'image/jpeg',
//         name: 'profile.jpg'
//       });

//       console.log('mark 3');

//       const response = await axios.post("https://livingconnect-backend.vercel.app/update-profile", formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       console.log('mark 4');

//       if (response.status === 200) {
//         Alert.alert("Success", "Profile updated successfully!");
//       } else {
//         Alert.alert("Error", "Failed to update profile.");
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       Alert.alert("Error", "An error occurred while updating the profile.");
//     }
//   };

// const handleSaveProfile = async () => {
//     if (!userName.trim()) {
//       Alert.alert("Error", "Name cannot be empty.");
//       return;
//     }

//     if (!contactNumber.trim()) {
//       Alert.alert("Error", "Contact number cannot be empty.");
//       return;
//     }

//     if (!profileImage) {
//       Alert.alert("Error", "Please select an image first.");
//       return;
//     }

//     console.log(profileImage);

//     try {
//       // Use FormData for multipart uploads
//       const formData = new FormData();
//       formData.append('email', 'abc01@gmail.com'); // Replace with actual email
//       formData.append('name', userName);
//       formData.append('contactNumber', contactNumber);

//       console.log(formData);

//       // Check if profileImage is a base64 string
//       if (profileImage.startsWith('data:image')) {
//         const base64Response = await fetch(profileImage);

//         console.log(base64Response);

//         const blob = await base64Response.blob();
//         formData.append('profileImage', {
//           uri: profileImage,
//           type: 'image/jpeg',
//           name: 'profile.jpg'
//         });
//       }

//       // console.log(formData);

//       // Detailed error logging
//       const response = await axios.post("https://livingconnect-backend.vercel.app/update-profile", formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         },
//         timeout: 10000 // 10 second timeout
//       });

//       if (response.status === 200) {
//         Alert.alert("Success", "Profile updated successfully!");
//       } else {
//         Alert.alert("Error", "Failed to update profile.");
//       }
//     } catch (error) {
//       console.error("Detailed Error:", JSON.stringify(error, null, 2));

//       if (error.response) {
//         // The request was made and the server responded with a status code
//         console.error("Error Response Data:", error.response.data);
//         console.error("Error Response Status:", error.response.status);
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error("No response received:", error.request);
//       } else {
//         // Something happened in setting up the request
//         console.error("Error Message:", error.message);
//       }

//       Alert.alert("Network Error", "Check your server connection and try again.");
//     }
//   };

// const handleSaveProfile = async () => {
//     if (!userName.trim()) {
//       Alert.alert("Error", "Name cannot be empty.");
//       return;
//     }

//     if (!contactNumber.trim()) {
//       Alert.alert("Error", "Contact number cannot be empty.");
//       return;
//     }

//     if (!profileImage) {
//       Alert.alert("Error", "Please select an image first.");
//       return;
//     }

//     try {
//       // Create FormData instead of sending base64 directly
//       const formData = new FormData();
//       formData.append('email', 'abc01@gmail.com'); // Replace with actual email
//       formData.append('name', userName);
//       formData.append('contactNumber', contactNumber);

//       // Convert base64 to file
//       const base64Response = await fetch(profileImage);
//       const blob = await base64Response.blob();
//       formData.append('profileImage', {
//         uri: profileImage,
//         type: 'image/jpeg',
//         name: 'profile.jpg'
//       });

//       const response = await axios.post("https://livingconnect-backend.vercel.app/update-profile", formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       if (response.status === 200) {
//         Alert.alert("Success", "Profile updated successfully!");
//       } else {
//         Alert.alert("Error", "Failed to update profile.");
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       Alert.alert("Error", "An error occurred while updating the profile.");
//     }
//   };

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   Alert,
//   StyleSheet,
//   TextInput,
// } from "react-native";
// import axios from "axios";
// import * as ImagePicker from "expo-image-picker";
// import * as ImageManipulator from "expo-image-manipulator";

// export default function Profile() {
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [userName, setUserName] = useState("John Doe");
//   const [contactNumber, setContactNumber] = useState("1234567890");

//   const pickImage = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (!permissionResult.granted) {
//       Alert.alert("Permission required", "Please grant permission to access photos.");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaType.IMAGE,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       // Resize the image to reduce payload size
//       const resizedImage = await ImageManipulator.manipulateAsync(
//         result.assets[0].uri,
//         [{ resize: { width: 500 } }], // Resize width to 500px (adjust as needed)
//         { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
//       );

//       const base64 = await (await fetch(resizedImage.uri)).text(); // Convert resized image to Base64
//       setProfileImage(`data:image/jpeg;base64,${base64}`);
//     }
//   };

//   const handleSaveProfile = async () => {
//     if (!userName.trim()) {
//       Alert.alert("Error", "Name cannot be empty.");
//       return;
//     }

//     if (!contactNumber.trim()) {
//       Alert.alert("Error", "Contact number cannot be empty.");
//       return;
//     }

//     if (!profileImage) {
//       Alert.alert("Error", "Please select an image first.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/update-profile", {
//         email: "user@example.com", // Replace with the actual user email
//         name: userName,
//         contactNumber,
//         profileImage,
//       });

//       if (response.status === 200) {
//         Alert.alert("Success", "Profile updated successfully!");
//       } else {
//         Alert.alert("Error", "Failed to update profile.");
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       Alert.alert("Error", "An error occurred while updating the profile.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Profile</Text>

//       <TouchableOpacity onPress={pickImage}>
//         {profileImage ? (
//           <Image source={{ uri: profileImage }} style={styles.profileImage} />
//         ) : (
//           <View style={styles.imagePlaceholder}>
//             <Text style={styles.imagePlaceholderText}>Pick an Image</Text>
//           </View>
//         )}
//       </TouchableOpacity>

//       <TextInput
//         style={styles.input}
//         value={userName}
//         onChangeText={setUserName}
//         placeholder="Enter your name"
//       />

//       <TextInput
//         style={styles.input}
//         value={contactNumber}
//         onChangeText={setContactNumber}
//         placeholder="Enter your contact number"
//         keyboardType="phone-pad"
//       />

//       <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
//         <Text style={styles.buttonText}>Save Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: 50,
//     backgroundColor: "#f5f5f5",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     borderWidth: 2,
//     borderColor: "black",
//   },
//   imagePlaceholder: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     backgroundColor: "#ccc",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   imagePlaceholderText: {
//     color: "#555",
//     fontSize: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 10,
//     width: "80%",
//     marginTop: 20,
//     fontSize: 16,
//   },
//   saveButton: {
//     marginTop: 30,
//     padding: 12,
//     backgroundColor: "#38bdf8",
//     borderRadius: 8,
//     alignItems: "center",
//     width: "80%",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });
