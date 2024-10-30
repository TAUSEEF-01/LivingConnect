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
    //tamzid
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
}
