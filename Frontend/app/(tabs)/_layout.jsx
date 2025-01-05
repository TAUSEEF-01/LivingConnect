// // import { View, Text } from "react-native";
// // import React, { useEffect } from "react";
// // import { Tabs, router } from "expo-router";
// // import { Ionicons } from "@expo/vector-icons";
// // import { Colors } from "../../constants/Colors";
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import axios from "axios";

// // export default function TabLayout() {
// //   useEffect(() => {
// //     const checkAuthStatus = async () => {
// //       try {

// //         // Get the token or session info from AsyncStorage
// //         const token = await AsyncStorage.getItem("userToken");
// //         if (!token) {
// //           // If no token, redirect to login
// //           router.replace("/login");
// //           return;
// //         }

// //         // Verify the token/session with the backend
// //         const response = await axios.get("http://localhost:5000/verify", {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });

// //         if (response.status !== 200) {
// //           // If verification fails, redirect to login
// //           router.replace("/login");
// //         }

// //       } catch (err) {
// //         console.error("Authentication check failed:", err);
// //         router.replace("/login");
// //       }
// //     };

// //     checkAuthStatus();
// //   }, []);

// //   const handleLogout = async () => {
// //     try {
// //       // Optional: Notify the backend to invalidate the session
// //       const token = await AsyncStorage.getItem("userToken");
// //       await axios.post("http://localhost:5000/logout", {}, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });

// //       // Clear the session data locally
// //       await AsyncStorage.removeItem("userToken");

// //       // Redirect to login screen
// //       router.replace("/login");
// //     } catch (err) {
// //       console.error("Logout failed:", err);
// //     }
// //   };

// //   return (
// //     <Tabs
// //       screenOptions={{
// //         headerShown: true,
// //         tabBarActiveTintColor: Colors.PRIMARY,
// //       }}
// //     >
// //       <Tabs.Screen
// //         name="mainPage"
// //         options={{
// //           headerShown: false,
// //           tabBarLabel: "Home",
// //           tabBarIcon: ({ color }) => (
// //             <Ionicons name="home" size={24} color={color} />
// //           ),
// //         }}
// //       />

// //       <Tabs.Screen
// //         name="explore"
// //         options={{
// //           tabBarLabel: "Explore",
// //           tabBarIcon: ({ color }) => (
// //             <Ionicons name="search" size={24} color={color} />
// //           ),
// //         }}
// //       />

// //       <Tabs.Screen
// //         name="profile"
// //         options={{
// //           tabBarLabel: "Profile",
// //           tabBarIcon: ({ color }) => (
// //             <Ionicons name="person-circle" size={24} color={color} />
// //           ),
// //           headerRight: () => (
// //             <Ionicons
// //               name="log-out"
// //               size={24}
// //               color={Colors.PRIMARY}
// //               style={{ marginRight: 16 }}
// //               onPress={handleLogout} // Trigger logout on icon press
// //             />
// //           ),
// //         }}
// //       />
// //     </Tabs>
// //   );
// // }














// import { View, Text } from "react-native";
// import React, { useEffect } from "react";
// import { Tabs, router } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { Colors } from "../../constants/Colors";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// export default function TabLayout() {
//   // useEffect(() => {
//   //   const checkAuthStatus = async () => {
//   //     try {
//   //       // Retrieve the JWT token from AsyncStorage

//   //       const token = await AsyncStorage.getItem("userToken");

//   //       // const token = await AsyncStorage.removeItem("userToken");

//   //       if (!token) {
//   //         // If no token, redirect to login
//   //         router.replace("/login");
//   //         return;
//   //       }

//   //       // Verify the token with the backend
//   //       const response = await axios.get("http://localhost:5000/verify", {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       });

//   //       if (response.status === 200) {
//   //         // If token is valid, redirect to the mainPage
//   //         router.replace("/mainPage");

//   //         // router.replace("/screens/about_us");
//   //       } else {
//   //         // If verification fails, redirect to login
//   //         router.replace("/login");
//   //       }
//   //     } catch (err) {
//   //       console.error("Authentication check failed:", err);
//   //       // Redirect to login on error
//   //       router.replace("/login");
//   //     }
//   //   };

//   //   checkAuthStatus();
//   // }, []);

//   // const handleLogout = async () => {
//   //   try {
//   //     // Retrieve the token
//   //     const token = await AsyncStorage.getItem("userToken");

//   //     // Notify the backend to invalidate the session (optional)
//   //     await axios.post(
//   //       "http://localhost:5000/logout",
//   //       {},
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       }
//   //     );

//   //     // Clear the session data locally
//   //     await AsyncStorage.removeItem("userToken");

//   //     // Redirect to login screen
//   //     router.replace("/login");
//   //   } catch (err) {
//   //     console.error("Logout failed:", err);
//   //   }
//   // };

//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: true,
//         tabBarActiveTintColor: Colors.PRIMARY,
//       }}
//     >
//       <Tabs.Screen
//         name="mainPage"
//         options={{
//           headerShown: false,
//           tabBarLabel: "Home",
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="home" size={24} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="explore"
//         options={{
//           tabBarLabel: "Explore",
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="search" size={24} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="profile"
//         options={{
//           tabBarLabel: "Profile",
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="person-circle" size={24} color={color} />
//           ),
//           // headerRight: () => (
//           //   <Ionicons
//           //     name="log-out"
//           //     size={24}
//           //     color={Colors.PRIMARY}
//           //     style={{ marginRight: 16 }}
//           //     onPress={handleLogout} // Trigger logout on icon press
//           //   />
//           // ),
//         }}
//       />
//     </Tabs>
//   );
// }



import { Tabs } from "expo-router";

export default function App() {
  return <Tabs />;
}
