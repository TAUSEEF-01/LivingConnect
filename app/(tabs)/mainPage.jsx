// import { View, Text } from 'react-native'
// import React from 'react'

// export default function home() {
//   return (
//     <View>
//       <Text>home</Text>
//     </View>
//   )
// }






// ////////////////////////////////

// // import { View, Text, StyleSheet } from "react-native";
// // import React from "react";

// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { router } from "expo-router";
// import styles from "../../styles";

// export default function mainPage() {
//   // return (
//   //   <View style={styles.container}>
//   //     <Text style={{ fontSize: 20 }}>Hello Ashraful, Tamzid, Sumaiya! </Text>
//   //   </View>
//   // );


//   const auth = getAuth();
//   const user = auth.currentUser;


//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         // If user is not authenticated, reset the navigation stack
//         router.replace("/login");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   // const backOption = async () => {
//   //   try {
//   //     // Use expo-router's navigation
//   //   //   router.replace("/home");
//   //       // router.back();
//   //   } catch (error) {
//   //     console.error("Home page return error:", error);
//   //   }
//   // };

//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.titleHome}>Welcome To Home page</Text>
//       <Text style={styles.emailText}>{user?.email}</Text>

//       {/* <TouchableOpacity style={styles.button} onPress={backOption}>
//         <Text style={styles.buttonText}>Return</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// }






import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { router } from "expo-router";
import styles from "../../styles";

export default function mainPage() {
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.authContainer}>
      <Text style={styles.titleHome}>Welcome To Home page</Text>
      <Text style={styles.emailText}>{user?.email}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("../screens/DetailPage")}
      >
        <Text style={styles.buttonText}>Go to Detail Page</Text>
      </TouchableOpacity>
    </View>
  );
}











// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#c3c7F3", // Set background color to blue
//     justifyContent: "center", // Optional: centers the text vertically
//     alignItems: "center", // Optional: centers the text horizontally
//   },
// });




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#c3c7F3", // Set background color to blue
//     justifyContent: "center", // Optional: centers the text vertically
//     alignItems: "center", // Optional: centers the text horizontally
//   },

//   // container: {
//   //   flex: 1,
//   //   backgroundColor: "white",
//   // },
//   backgroundImage: {
//     height: "100%",
//     width: "100%",
//     position: "absolute",
//   },
//   lightsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     width: "100%",
//     position: "absolute",
//   },
//   lightLeft: {
//     height: 225,
//     width: 90,
//   },
//   lightRight: {
//     height: 160,
//     width: 65,
//   },
//   content: {
//     flex: 1,
//     justifyContent: "space-around",
//     paddingTop: 160,
//     paddingBottom: 40,
//   },
//   titleContainer: {
//     alignItems: "center",
//   },
//   title: {
//     color: "black",
//     fontWeight: "bold",
//     fontSize: 50,
//     letterSpacing: 2,
//   },
//   titleHome: {
//     color: 'Black',
//     fontWeight: 'bold',
//     fontSize: 50,
//     letterSpacing: 2,
//   },
//   formContainer: {
//     alignItems: "center",
//     marginHorizontal: 16,
//     marginTop: 20,
//   },
//   inputContainer: {
//     backgroundColor: "rgba(0,0,0,0.05)",
//     padding: 20,
//     borderRadius: 16,
//     width: "100%",
//     marginBottom: 16,
//   },
//   input: {
//     fontSize: 16,
//   },
//   errorText: {
//     color: "#e74c3c",
//     marginBottom: 16,
//     textAlign: "center",
//   },
//   buttonContainer: {
//     width: "100%",
//   },
//   button: {
//     backgroundColor: "#38bdf8",
//     padding: 12,
//     borderRadius: 16,
//     marginBottom: 12,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   toggleContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   toggleText: {
//     fontSize: 16,
//   },
//   toggleLink: {
//     fontSize: 16,
//     color: "#0284c7",
//   },
//   authContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//   },
//   emailText: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
// });
