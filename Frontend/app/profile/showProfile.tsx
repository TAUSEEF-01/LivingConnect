// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { StyleSheet, Text, View, Image, ActivityIndicator, Alert } from "react-native";

// export default function ShowProfile() {
//   const [userInfo, setUserInfo] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // const fetchUserInfo = async () => {
//     //     try {
//     //       const token = localStorage.getItem("token"); // Fetch token from local storage
//     //       if (!token) {
//     //         throw new Error("User not authenticated");
//     //       }

//     //       setLoading(true);

//     //       // Make a request to the backend with the token in the Authorization header
//     //       const response = await axios.get("http://192.168.50.242:5000/get-profile", {
//     //         headers: {
//     //           Authorization: `Bearer ${token}`,
//     //         },
//     //       });

//     //       // Update the profile state with the received data
//     //       setUserInfo(response.data);
//     //       setLoading(false);
//     //     } catch (err) {
//     //       console.error("Failed to fetch profile:", err);
//     //       setError("Failed to load profile");
//     //       setLoading(false);
//     //     }
//     //   };

//     const fetchUserInfo = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Assume token is stored in localStorage
//         if (!token) {
//           throw new Error("User not authenticated");
//         }

//         const response = await axios.get("http://localhost:5000/get-profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setUserInfo(response.data.userInfo);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchUserInfo();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.centered}>
//         <ActivityIndicator size="large" color="#38bdf8" />
//         <Text style={styles.loadingText}>Loading...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.centered}>
//         <Text style={styles.errorText}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User Profile</Text>
//       <View style={styles.card}>
//         <Image
//           source={{ uri: userInfo.profileImage || "https://via.placeholder.com/150" }} // Fallback to default image
//           style={styles.image}
//         />
//         <View style={styles.details}>
//           <Text style={styles.detailText}><Text style={styles.label}>Email:</Text> {userInfo.email}</Text>
//           <Text style={styles.detailText}><Text style={styles.label}>User ID:</Text> {userInfo.userId}</Text>
//           <Text style={styles.detailText}><Text style={styles.label}>Contact Number:</Text> {userInfo.contactNumber || "N/A"}</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: 50,
//     backgroundColor: "#f9f9f9",
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 20,
//   },
//   card: {
//     width: "80%",
//     maxWidth: 500,
//     backgroundColor: "#fff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//     borderRadius: 10,
//     padding: 20,
//     alignItems: "center",
//   },
//   image: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 20,
//     borderWidth: 3,
//     borderColor: "#38bdf8",
//   },
//   details: {
//     width: "100%",
//   },
//   detailText: {
//     fontSize: 16,
//     color: "#555",
//     marginBottom: 10,
//   },
//   label: {
//     fontWeight: "bold",
//     color: "#333",
//   },
//   centered: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f9f9f9",
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: "#666",
//   },
//   errorText: {
//     color: "red",
//     fontSize: 16,
//   },
// });

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

interface UserProfile {
  email: string;
  name: string;
  contactNumber: string;
  profileImage: string | null;
}

export default function MyImage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      // Retrieve the token from AsyncStorage
      const token = await AsyncStorage.getItem("userToken");

      if (!token) {
        throw new Error("No token found");
      }

      setLoading(true);
      const response = await axios.get(
        // "http://192.168.50.242:5000/profile/get-profile",
        "http://192.168.0.109:5000/profile/get-profile",
        // "http://10.33.24.139:5000/profile/get-profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setProfile(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch profile:", err);
      setError("Failed to load profile");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#38bdf8" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    // <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileContainer}>
        {/* Profile Image Section */}
        <View style={styles.imageBox}>
          {profile?.profileImage ? (
            <Image
              source={{ uri: profile.profileImage }}
              style={styles.profileImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Text style={styles.placeholderText}>No Image</Text>
            </View>
          )}
        </View>

        {/* Information Section */}
        <View style={styles.infoBox}>
          <View style={styles.profileDetails}>
            <Text style={styles.profileText}>
              <Text style={styles.infoLabel}>Name:</Text>{" "}
              {profile?.name || "N/A"}
            </Text>
            <Text style={styles.profileText}>
              <Text style={styles.infoLabel}>Email:</Text>{" "}
              {profile?.email || "N/A"}
            </Text>
            <Text style={styles.profileText}>
              <Text style={styles.infoLabel}>Contact Number:</Text>{" "}
              {profile?.contactNumber || "N/A"}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => {
          router.push("/profile/updateProfile");
        }}
      >
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    // width: "100%",
    //   justifyContent: "center",
    // paddingVertical: 20,
    paddingTop: 40,
  },

  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef2f3",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#38bdf8",
  },
  profileContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBox: {
    width: "100%",
    backgroundColor: "#1f2937",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#38bdf8",
  },
  imagePlaceholder: {
    width: 180,
    height: 180,
    borderRadius: 10,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  placeholderText: {
    color: "#666",
    fontSize: 16,
  },
  infoBox: {
    width: "100%",
    backgroundColor: "#1f2937",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    // alignItems: "center",
    // justifyContent: "center",
  },
  profileDetails: {
    alignItems: "flex-start",
    // alignItems: "center",
  },
  profileText: {
    fontSize: 18,
    color: "white",
    marginVertical: 5,
    textAlign: "left",
  },
  infoLabel: {
    fontWeight: "bold",
    color: "#38bdf8", // Tag color
    fontSize: 20,
  },

  updateButton: {
    marginTop: 30,
    padding: 12,
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

// <ScrollView contentContainerStyle={styles.container}>
//   <View style={styles.profileContainer}>
//     {profile?.profileImage ? (
//       <Image
//         source={{ uri: profile.profileImage }}
//         style={styles.profileImage}
//         resizeMode="cover"
//       />
//     ) : (
//       <View style={styles.imagePlaceholder}>
//         <Text style={styles.placeholderText}>No Image</Text>
//       </View>
//     )}

//     <View style={styles.profileDetails}>
//       <Text style={styles.profileText}>
//         <Text style={styles.boldText}>Name:</Text> {profile?.name || "N/A"}
//       </Text>
//       <Text style={styles.profileText}>
//         <Text style={styles.boldText}>Contact Number:</Text>{" "}
//         {profile?.contactNumber || "N/A"}
//       </Text>
//     </View>
//   </View>
// </ScrollView>

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#f5f5f5",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     centered: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     profileContainer: {
//       width: "90%",
//       backgroundColor: "white",
//       borderRadius: 10,
//       padding: 20,
//       alignItems: "center",
//       shadowColor: "#000",
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.1,
//       shadowRadius: 4,
//       elevation: 3,
//     },
//     profileImage: {
//       width: 200,
//       height: 200,
//       borderRadius: 100,
//       borderWidth: 3,
//       borderColor: "#38bdf8",
//     },
//     imagePlaceholder: {
//       width: 200,
//       height: 200,
//       borderRadius: 100,
//       backgroundColor: "#e0e0e0",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     placeholderText: {
//       color: "#666",
//       fontSize: 16,
//     },

//     boldText: {
//         fontWeight: "bold",
//       },
//       profileText: {
//         fontSize: 16,
//         color: "#666",
//       },

//     profileDetails: {
//       marginTop: 20,
//       alignItems: "center",
//     },
//     // tags: {
//     //   fontSize: 22,
//     //   fontWeight: "bold",
//     //   marginBottom: 10,
//     // },
//     // profileName: {
//     //     fontSize: 22,
//     //     fontWeight: "bold",
//     //     marginBottom: 10,
//     //   },
//     // profileContact: {
//     //   fontSize: 16,
//     //   color: "#666",
//     // },
// errorText: {
//   color: "red",
//   fontSize: 16,
// },
//   });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#eef2f3", // Light gradient-like background
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 20,
//   },
//   centered: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#eef2f3",
//   },
//   profileContainer: {
//     width: "90%",
//     backgroundColor: "white",
//     borderRadius: 15,
//     padding: 20,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.15,
//     shadowRadius: 10,
//     elevation: 5,
//     marginVertical: 10,
//   },
//   profileImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     borderWidth: 4,
//     borderColor: "#38bdf8",
//     shadowColor: "#38bdf8",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.4,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   imagePlaceholder: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     backgroundColor: "#e0e0e0",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   placeholderText: {
//     color: "#666",
//     fontSize: 16,
//   },
//   boldText: {
//     fontWeight: "bold",
//     fontSize: 18,
//     color: "#333",
//   },
//   profileText: {
//     fontSize: 16,
//     color: "#555",
//     marginVertical: 5,
//     textAlign: "center",
//   },
//   profileDetails: {
//     marginTop: 20,
//     alignItems: "center",
//   },
//   errorText: {
//     color: "red",
//     fontSize: 16,
//     textAlign: "center",
//     marginHorizontal: 20,
//   },
// });

// #######################################################

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ActivityIndicator,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
// } from "react-native";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SidePanel from "../sidePanel/sidePanel";
// import { useRouter } from "expo-router";

// interface UserProfile {
//   email: string;
//   name: string;
//   contactNumber: string;
//   profileImage: string | null;
// }

// export default function MyImage() {
//   const [profile, setProfile] = useState<UserProfile | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const [isSidePanelVisible, setSidePanelVisible] = useState(false);
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   const toggleSidePanel = () => {
//     setSidePanelVisible(!isSidePanelVisible);
//   };

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
//         "http://192.168.50.242:5000/get-profile",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setProfile(response.data);
//       setLoading(false);
//     } catch (err) {
//       console.error("Failed to fetch profile:", err);
//       setError("Failed to load profile");
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.centered}>
//         <ActivityIndicator size="large" color="#38bdf8" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.centered}>
//         <Text style={styles.errorText}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <SidePanel
//         isVisible={isSidePanelVisible}
//         onClose={() => setSidePanelVisible(false)}
//       />

// <ScrollView contentContainerStyle={styles.container}>
//   {isSidePanelVisible && (
//     <TouchableOpacity
//       style={[styles.overlay, { zIndex: 999 }]}
//       activeOpacity={1}
//       onPress={() => setSidePanelVisible(false)}
//     >
//       <SidePanel
//         isVisible={isSidePanelVisible}
//         onClose={() => setSidePanelVisible(false)}
//       />
//     </TouchableOpacity>
//   )}

//   <View style={styles.banner}>
//     <TouchableOpacity
//       onPress={toggleSidePanel}
//       style={{
//         position: "absolute",
//         top: 16,
//         left: 16,
//         zIndex: 100,
//       }}
//     >
//       <View style={styles.menuIcon}>
//         <View style={styles.bar} />
//         <View style={styles.bar} />
//         <View style={styles.bar} />
//       </View>
//     </TouchableOpacity>

//     <View style={styles.bannerImageContainer}>
//       <Image
//         source={{
//           uri: "https://images.pexels.com/photos/6045328/pexels-photo-6045328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         }}
//         style={styles.bannerImage}
//       />
//     </View>

//     <View style={styles.profileContainer}>
//       <View style={styles.imageBox}>
//         {profile?.profileImage ? (
//           <Image
//             source={{ uri: profile.profileImage }}
//             style={styles.profileImage}
//             resizeMode="cover"
//           />
//         ) : (
//           <View style={styles.imagePlaceholder}>
//             <Text style={styles.placeholderText}>No Image</Text>
//           </View>
//         )}
//       </View>

//       <View style={styles.infoBox}>
//         <View style={styles.profileDetails}>
//           <Text style={styles.profileText}>
//             <Text style={styles.infoLabel}>Name:</Text>{" "}
//             {profile?.name || "N/A"}
//           </Text>
//           <Text style={styles.profileText}>
//             <Text style={styles.infoLabel}>Email:</Text>{" "}
//             {profile?.email || "N/A"}
//           </Text>
//           <Text style={styles.profileText}>
//             <Text style={styles.infoLabel}>Contact Number:</Text>{" "}
//             {profile?.contactNumber || "N/A"}
//           </Text>
//         </View>
//       </View>
//     </View>
//   </View>
// </ScrollView>

//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   centered: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#eef2f3",
//   },

//   errorText: {
//     color: "red",
//     fontSize: 16,
//   },

//   container: {

//         flex: 1,
//         backgroundColor: "black",
//     // flex: 1,
//     // backgroundColor: "grey",
//     // alignItems: "center",
//     // justifyContent: "center",
//     // paddingVertical: 20,
//   },

//   profileContainer: {
// //     width: "90%",
// //     alignItems: "center",
// //     justifyContent: "center",
//     backgroundColor: "grey",
//   },
//   imageBox: {
//     width: "100%",
//     backgroundColor: "white",
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
//   profileImage: {
//     width: 180,
//     height: 180,
//     borderRadius: 10,
//     borderWidth: 3,
//     borderColor: "#38bdf8",
//   },
//   imagePlaceholder: {
//     width: 180,
//     height: 180,
//     borderRadius: 10,
//     backgroundColor: "#e0e0e0",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   placeholderText: {
//     color: "#666",
//     fontSize: 16,
//   },
//   infoBox: {
//     width: "100%",
//     backgroundColor: "white",
//     borderRadius: 10,
//     padding: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 4,
//   },
//   profileDetails: {
//     alignItems: "flex-start",
//   },
//   profileText: {
//     fontSize: 16,
//     color: "#555",
//     marginVertical: 5,
//     textAlign: "left",
//   },
//   infoLabel: {
//     fontWeight: "bold",
//     color: "#38bdf8", // Tag color
//     fontSize: 16,
//   },

//   menuIcon: {
//     width: 35,
//     height: 26, // Adjust to ensure the bars fit within this height
//     justifyContent: "space-between", // Evenly space the bars
//     alignItems: "center", // Center align the bars horizontally
//     // backgroundColor: "transparent", // Optional: Transparent background
//     backgroundColor: "black", // Replace with your desired color
//     padding: 3,
//     borderColor: "black",
//     borderWidth: 2,
//     borderRadius: 6,
//   },

//   bar: {
//     width: "100%", // Make the bars span the full width of the menuIcon
//     height: 3, // Thickness of the bars
//     // backgroundColor: "black", // Replace with your desired color
//     borderRadius: 2, // Rounded corners for the bars
//     backgroundColor: "white", // Replace with your desired color
//   },

//   banner: {
//     backgroundColor: "#1e3a8a",
//     position: "relative", // Ensure text and image stack properly
//   },

//   bannerImageContainer: {
//     width: "100%",
//     height: 200, // Adjust the height as needed
//     position: "relative",
//   },
//   bannerImage: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 8, // Optional for rounded corners
//   },

//   overlay: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.21)", // Dark overlay
//     zIndex: 1, // Below the side panel
//   },
// });

// ####################################################################
