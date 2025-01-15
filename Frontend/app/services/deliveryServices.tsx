// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const deliveryServices = () => {
//   return (
//     <View>
//       <Text>deliveryServices</Text>
//     </View>
//   )
// }

// export default deliveryServices

// const styles = StyleSheet.create({})

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ActivityIndicator,
//   ScrollView
// } from "react-native";
// import axios from "axios";

// interface UserProfile {
//   name: string;
//   contactNumber: string;
//   profileImage: string | null;
// }

// export default function MyImage() {
//   const [profile, setProfile] = useState<UserProfile | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   const fetchUserProfile = async () => {
//     try {
//       const token = localStorage.getItem("token"); // Assume token is stored in localStorage
//         if (!token) {
//           throw new Error("User not authenticated");
//         }

//       setLoading(true);
//       const response = await axios.get("https://livingconnect-backend.vercel.app/get-profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         // params: {
//         //   email: "abc02@gmail.com" // Replace with dynamic email as needed
//         // }
//       });

//       // setLoading(true);
//       // const response = await axios.get("https://livingconnect-backend.vercel.app/get-profile", {
//         // params: {
//         //   email: "abc01@gmail.com" // Replace with dynamic email as needed
//         // }
//       // });

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
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.profileContainer}>
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

//         <View style={styles.profileDetails}>
//           <Text style={styles.profileName}>{profile?.name || "N/A"}</Text>
//           <Text style={styles.profileContact}>
//             {profile?.contactNumber || "N/A"}
//           </Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#38bdf8",
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#666",
    fontSize: 16,
  },
  profileDetails: {
    marginTop: 20,
    alignItems: "center",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  profileContact: {
    fontSize: 16,
    color: "#666",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserProfile {
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
        "https://livingconnect-backend.vercel.app/profile/get-profile",
        {
          // const response = await axios.get(
          // "https://livingconnect-backend.vercel.app/profile/get-profile",
          // {
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
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

        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>{profile?.name || "N/A"}</Text>
          <Text style={styles.profileContact}>
            {profile?.contactNumber || "N/A"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

// ... styles remain the same as in previous example

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ActivityIndicator,
//   ScrollView
// } from "react-native";
// import axios from "axios";

// interface UserProfile {
//   name: string;
//   contactNumber: string;
//   profileImage: string | null;
// }

// export default function deliveryServices() {
//   const [profile, setProfile] = useState<UserProfile | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   const fetchUserProfile = async () => {
//     try {
//       setLoading(true);
//       // const response = await axios.get("https://livingconnect-backend.vercel.app/get-profile", {
//       //   params: {
//       //     email: "abc01@gmail.com" // Replace with dynamic email as needed
//       //   }
//       // });

//       // const response = await axios.get("https://livingconnect-backend.vercel.app/get-profile", {
//       //   headers: {
//       //     'Content-Type': 'application/json'
//       //   },
//       //   data: {
//       //     email: "abc01@gmail.com" // Replace with dynamic email as needed
//       //   }
//       // });

//       const response = await axios.get("https://livingconnect-backend.vercel.app/get-profile", {
//         params: {
//           email: "abc01@gmail.com"
//         },
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

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
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.profileContainer}>
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

//         <View style={styles.profileDetails}>
//           <Text style={styles.profileName}>{profile?.name || "N/A"}</Text>
//           <Text style={styles.profileContact}>
//             {profile?.contactNumber || "N/A"}
//           </Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   centered: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   profileContainer: {
//     width: "90%",
//     backgroundColor: "white",
//     borderRadius: 10,
//     padding: 20,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   profileImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     borderWidth: 3,
//     borderColor: "#38bdf8",
//   },
//   imagePlaceholder: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     backgroundColor: "#e0e0e0",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   placeholderText: {
//     color: "#666",
//     fontSize: 16,
//   },
//   profileDetails: {
//     marginTop: 20,
//     alignItems: "center",
//   },
//   profileName: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   profileContact: {
//     fontSize: 16,
//     color: "#666",
//   },
//   errorText: {
//     color: "red",
//     fontSize: 16,
//   },
// });
