// // File: app/index.tsx
// import { router, useRouter  } from "expo-router";
// import { View, Text, LogBox, Button } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import React, { useEffect } from "react";

// LogBox.ignoreAllLogs(); // Ignore all log notifications

// export default function Index() {

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       try {
//         const token = await AsyncStorage.getItem("userToken");
//         if (!token) {
//           // No token, navigate to login screen
//           router.replace("/login");
//           return;
//         }

//         // Verify the token with the backend
//         const response = await axios.get("http://localhost:5000/verify", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (response.status === 200) {
//           // If token is valid, navigate to the main page
//           router.replace("/mainPage");
//         } else {
//           // Invalid token, clear storage and navigate to login
//           await AsyncStorage.removeItem("userToken");
//           router.replace("/login");
//         }
//       } catch (err) {
//         console.error("Authentication check error:", err);
//         await AsyncStorage.removeItem("userToken");
//         router.replace("/login");
//       }
//     };

//     checkAuthentication();
//   }, []);

//   return null; // No UI is needed as this component only handles redirection
// }

//   // return (
//   //   <View>
//   //     <Button title="Login" onPress={() => console.log("Login pressed")} />
//   //     <Button title="Register" onPress={() => console.log("Register pressed")} />
//   //   </View>
//   // );

//   // const router = useRouter();

//   // useEffect(() => {
//   //   // Ensure navigation happens after layout is mounted
//   //   const timer = setTimeout(() => {
//   //     router.replace("/login");
//   //   }, 0);

//   //   return () => clearTimeout(timer); // Cleanup timeout on unmount
//   // }, []);

//   // return (
//   //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//   //     <Text>Loading...</Text>
//   //   </View>
//   // );

// import { useEffect } from "react";
// import { router } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function Index() {
//   useEffect(() => {
//     const checkAuthentication = async () => {
//       try {
//         const token = await AsyncStorage.getItem("userToken");
//         if (token) {
//           router.replace("/(tabs)/mainPage"); // Navigate to the authenticated section
//         } else {
//           router.replace("/login"); // Navigate to login
//         }
//       } catch (error) {
//         console.error("Error checking authentication:", error);
//         router.replace("/login");
//       }
//     };

//     checkAuthentication();
//   }, []);

//   return null; // No UI as this is just a redirecting screen
// }

import { useEffect } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"; // You can use axios or any other HTTP client

export default function Index() {
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // await AsyncStorage.clear();

        const keys = await AsyncStorage.getAllKeys();
        console.log("AsyncStorage keys:", keys); // Logs all keys in AsyncStorage

        const token = await AsyncStorage.getItem("userToken");

        console.log("Retrieved token from AsyncStorage:", token); // Check if token exists

        // const lol = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTg3YTU2YzU1OTcyNjZjZGY0ZDFlNyIsImlhdCI6MTczNDAyOTc0MSwiZXhwIjoxNzM0MDM2OTQxfQ.0zSlZCpeOVldVMN7fjJvGf4VUZ3W0weeISIt1ua6KaY';

        if (token) {
          console.log("Token found in AsyncStorage");
          // Check the token validity using the verify endpoint
          const response = await axios.get(
            "http://192.168.50.242:5000/auth/verify",
            // const response = await axios.get(
            //   "http://10.33.24.139:5000/auth/verify",
            {
              headers: {
                Authorization: `Bearer ${token}`, // Send token in the Authorization header
                // Authorization: `Bearer ${lol}`, // Send token in the Authorization header
              },
            }
          );

          if (response.status === 200) {
            // Token is valid, navigate to the main page
            // router.replace("/(tabs)/mainPage");
            router.replace("/pages/mainPage");

            // router.replace("/pages/propertyList");
            // router.replace("/pages/showAll");
          } else {
            // Invalid token, navigate to login
            await AsyncStorage.clear();
            router.replace("/login");
          }
        } else {
          await AsyncStorage.clear();
          // No token found, navigate to login
          router.replace("/login");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        await AsyncStorage.clear();
        router.replace("/login");
      }
    };

    checkAuthentication();
  }, []);

  return null; // No UI as this is just a redirecting screen
}
