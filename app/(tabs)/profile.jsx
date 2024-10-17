// import { View, Text } from "react-native";
// import React from "react";

// export default function profile() {
//   return (
//     <View>
//       <Text>profile</Text>
//     </View>
//   );
// }




//////////////////////////////////////////////

// import React, { useEffect } from "react";
// import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { getAuth } from "firebase/auth";
// import { router } from "expo-router";
// import styles from "../../styles";

// export default function mainPage() {
//   const auth = getAuth();
//   const user = auth.currentUser;

//   const handleLogout = async () => {
//     // Show confirmation alert before logging out
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
//               await auth.signOut();
//               // Use expo-router's navigation to navigate to the login screen
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

//   // const testPage = async () => {
//   //   try {
//   //     // Use expo-router's navigation
//   //     router.replace("/testPage");
//   //     // router.push("/testPage");
//   //   } catch (error) {
//   //     console.error("Test page error:", error);
//   //   }
//   // };

//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.titleHome}>Welcome</Text>
//       <Text style={styles.emailText}>{user?.email}</Text>
//       <TouchableOpacity style={styles.button} onPress={handleLogout}>
//         <Text style={styles.buttonText}>Logout</Text>
//       </TouchableOpacity>

//       {/* <TouchableOpacity style={styles.button} onPress={testPage}>
//         <Text style={styles.buttonText}>TestPage</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// }














// File: app/(tabs)/profile.tsx
import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { getAuth } from "firebase/auth";
import { router } from "expo-router";
import styles from "../../styles";

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;

  const handleLogout = async () => {
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
              // Clear the stack and navigate to the login screen
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

  return (
    <View style={styles.authContainer}>
      <Text style={styles.titleHome}>Logout from your account?</Text>
      <Text style={styles.emailText}>{user?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
