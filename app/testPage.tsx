import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getAuth } from "firebase/auth";
import { router } from "expo-router";
import styles from "../styles";

export default function TestPage() {
  const auth = getAuth();
  const user = auth.currentUser;

  const backOption = async () => {
    try {
      // Use expo-router's navigation
    //   router.replace("/home");
        router.back();
    } catch (error) {
      console.error("Home page return error:", error);
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.titleHome}>Welcome To test page</Text>
      <Text style={styles.emailText}>{user?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={backOption}>
        <Text style={styles.buttonText}>Return</Text>
      </TouchableOpacity>
    </View>
  );
}










// import React, { useEffect } from "react";
// import { View, Text, TouchableOpacity, BackHandler, Alert } from "react-native";
// import { getAuth } from "firebase/auth";
// import { router } from "expo-router";
// import styles from "../styles";

// export default function TestPage() {
//   const auth = getAuth();
//   const user = auth.currentUser;

//   const backOption = () => {
//     try {
//       // Use router.replace to replace the testPage with home in the stack
//       router.replace("/home");
//     } catch (error) {
//       console.error("Home page return error:", error);
//     }
//   };

//   useEffect(() => {
//     // Handle back button press
//     const onBackPress = () => {
//       // Custom behavior: you can navigate back or show an alert
//       Alert.alert(
//         "Go back?",
//         "Do you want to return to the home page?",
//         [
//           {
//             text: "Cancel",
//             onPress: () => null,
//             style: "cancel",
//           },
//           { text: "YES", onPress: () => backOption() },
//         ]
//       );
//       return true; // Prevent default back button behavior
//     };

//     // Add event listener for the hardware back button on Android
//     const backHandler = BackHandler.addEventListener(
//       "hardwareBackPress",
//       onBackPress
//     );

//     // Cleanup the event listener when the component is unmounted
//     return () => backHandler.remove();
//   }, []);

//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.titleHome}>Welcome To test page</Text>
//       <Text style={styles.emailText}>{user?.email}</Text>
//       <TouchableOpacity style={styles.button} onPress={backOption}>
//         <Text style={styles.buttonText}>Return</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
