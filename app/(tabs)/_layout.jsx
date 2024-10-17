// import { View, Text } from "react-native";
// import React from "react";
// import { Tabs } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { Colors } from "../../constants/Colors";

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: Colors.PRIMARY,
//       }}
//     >
//       <Tabs.Screen
//         name="mainPage"
//         options={{
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
//         }}
//       />
//     </Tabs>
//   );
// }


////////////////////////////////////////////////////////////////////////////


// import { View, Text, Pressable } from "react-native";
// import React, { useEffect, useState } from "react";
// import { Link, Tabs } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { Colors } from "../../constants/Colors";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { router } from "expo-router";


// export default function TabLayout() {
//   // const auth = getAuth();

//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChanged(auth, (user) => {
//   //     if (!user) {
//   //       // If the user is not logged in, redirect to the login screen
//   //       router.replace("/login");
//   //     } else {
//   //       router.replace("/mainPage");
//   //   }});

//   //   return () => unsubscribe();
//   // }, []);


//   // const colorScheme = useColorScheme();
//   const [isLoading, setIsLoading] = useState(true);

//   getAuth().onAuthStateChanged((user) => {
//     setIsLoading(false);
//     if (!user) {
//       router.replace("/login");
//     }
//   });

//   if (isLoading) return <Text style={{ paddingTop: 30 }}>Loading...</Text>;


//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: Colors.PRIMARY,
//       }}
//     >
//       <Tabs.Screen
//         name="mainPage"
//         options={{
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
//         }}
//       />
//     </Tabs>
//   );
// }












import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Tabs, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function TabLayout() {
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // If user is not authenticated, reset the navigation stack
        // router.reset({
        //   index: 0,
        //   routes: [{ name: "/login" }],
        // });
        router.replace("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Tabs
      screenOptions={{
        // headerShown: false,
        headerShown: true,
        tabBarActiveTintColor: Colors.PRIMARY,
        // headerLeft: null, // Disable the back button
      }}
    >
      <Tabs.Screen
        name="mainPage"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}