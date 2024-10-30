// // import React from "react";
// // import { View, Text, TouchableOpacity } from "react-native";
// // import { getAuth } from "firebase/auth";
// // import { useNavigation } from "@react-navigation/native";
// // import styles from "../styles";

// // export default function HomeScreen() {
// //   const navigation = useNavigation();
// //   const auth = getAuth();
// //   const user = auth.currentUser;

// //   const handleLogout = async () => {
// //     try {
// //       await auth.signOut();
// //       navigation.replace("Login");
// //     } catch (error) {
// //       console.error("Logout error:", error);
// //     }
// //   };

// //   return (
// //     <View style={styles.authContainer}>
// //       <Text style={styles.titleHome}>Welcome</Text>
// //       <Text style={styles.emailText}>{user?.email}</Text>
// //       <TouchableOpacity style={styles.button} onPress={handleLogout}>
// //         <Text style={styles.buttonText}>Logout</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }




// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { getAuth } from "firebase/auth";
// import { router } from "expo-router";
// import styles from "../styles";

// export default function HomeScreen() {
//   const auth = getAuth();
//   const user = auth.currentUser;

//   const handleLogout = async () => {
//     try {
//       await auth.signOut();
//       // Use expo-router's navigation
//       router.replace("/login");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   const testPage = async () => {
//     try {
//       // Use expo-router's navigation
//       router.replace("/testPage");
//       // router.push("/testPage");
//     } catch (error) {
//       console.error("Test page error:", error);
//     }
//   };

//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.titleHome}>Welcome</Text>
//       <Text style={styles.emailText}>{user?.email}</Text>
//       <TouchableOpacity style={styles.button} onPress={handleLogout}>
//         <Text style={styles.buttonText}>Logout</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={testPage}>
//         <Text style={styles.buttonText}>TestPage</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }






/*
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { getAuth } from "firebase/auth";
import { router } from "expo-router";
import styles from "../styles";

export default function HomeScreen() {
  const auth = getAuth();
  const user = auth.currentUser;

  const handleLogout = async () => {
    // Show confirmation alert before logging out
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            try {
              await auth.signOut();
              // Use expo-router's navigation to navigate to the login screen
              router.replace("/login");
            } catch (error) {
              console.error("Logout error:", error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const testPage = async () => {
    try {
      // Use expo-router's navigation
      router.replace("/testPage");
      // router.push("/testPage");
    } catch (error) {
      console.error("Test page error:", error);
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.titleHome}>Welcome</Text>
      <Text style={styles.emailText}>{user?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={testPage}>
        <Text style={styles.buttonText}>TestPage</Text>
      </TouchableOpacity>
    </View>
  );
}*/

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { getAuth } from "firebase/auth";
import { router } from "expo-router";
import styles from "../styles";
import LoadingScreen from './LoadingScreen';

export default function HomeScreen() {
  const [loading, setLoading] = useState(false); // Loading state for the loading screen
  const auth = getAuth();
  const user = auth.currentUser;

  const handleLogout = async () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          onPress: async () => {
            setLoading(true); // Start loading
            try {
              await auth.signOut();
              router.replace("/login"); // Redirect to login screen
            } catch (error) {
              console.error("Logout error:", error);
            } finally {
              setLoading(false); // Stop loading
            }
          },
        },
      ]
    );
  };

  const testPage = async () => {
    try {
      router.replace("/testPage"); // Navigate to the test page
    } catch (error) {
      console.error("Test page error:", error);
    }
  };

  // Show the loading screen if `loading` is true
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.authContainer}>
      <Text style={styles.titleHome}>Welcome</Text>
      <Text style={styles.emailText}>{user?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={testPage}>
        <Text style={styles.buttonText}>TestPage</Text>
      </TouchableOpacity>
    </View>
  );
}

