// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from "react-native";
// import { router, useRouter } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import styles from "../../styles";

// // SidePanel Component for Contact Us and About Us
// const SidePanel = ({ isVisible, onClose }) => {

//   if (!isVisible) return null;

//   return (
//     <View style={localStyles.sidePanel}>
//       <View style={localStyles.buttonContainer}>
//         <TouchableOpacity
//           style={localStyles.contactButton}
//           // onPress={() => alert("Contact Us")}

//           onPress={() => router.push("/screens/contact_us")}
//         >
//           <Text style={styles.buttonText}>Contact Us</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={localStyles.aboutButton}
//           // onPress={() => alert("About Us")}

//           onPress={() => router.push("/screens/about_us")}
//         >
//           <Text style={styles.buttonText}>About Us</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// //   const router = useRouter();

// //   if (!isVisible) return null;

// //   return (
// //     <View style={localStyles.sidePanel}>
// //       <View style={localStyles.buttonContainer}>
// //         <TouchableOpacity
// //           style={localStyles.contactButton}
// //           onPress={() => {
// //             onClose();
// //             router.push("/screens/contact_us");
// //           }}
// //         >
// //           <Text style={styles.buttonText}>Contact Us</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={localStyles.aboutButton}
// //           onPress={() => {
// //             onClose();
// //             router.push("/screens/about_us");
// //           }}
// //         >
// //           <Text style={styles.buttonText}>About Us</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// export default function MainPage() {
//   const [isSidePanelVisible, setSidePanelVisible] = useState(false);
//   const [user, setUser] = useState(null);
//   const router = useRouter();

// useEffect(() => {
//   const checkAuthStatus = async () => {
//     try {
//       const token = await AsyncStorage.getItem("userToken");
//       if (!token) {
//         router.replace("/login");
//         return;
//       }

//       const response = await axios.get("http://192.168.50.242:5000/verify", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (response.status === 200) {
//         setUser(response.data.user); // Assuming the backend sends user details in response
//       } else {
//         router.replace("/login");
//       }
//     } catch (err) {
//       console.error("Authentication error:", err);
//       router.replace("/login");
//     }
//   };

//   checkAuthStatus();
// }, []);

//   const toggleSidePanel = () => {
//     setSidePanelVisible(!isSidePanelVisible);
//   };

//   return (
//     <SafeAreaView style={styles.authContainer}>
//       <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

//       <Text style={localStyles.titleHome}>Welcome To Home Page</Text>
//       <Text style={styles.emailText}>{user?.email}</Text>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => router.push("/screens/DetailPage")}
//       >
//         <Text style={styles.buttonText}>Go to Detail Page</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={localStyles.hamburgerMenu}
//         onPress={toggleSidePanel}
//       >
//         <View style={localStyles.bar} />
//         <View style={localStyles.bar} />
//         <View style={localStyles.bar} />
//       </TouchableOpacity>

//       {isSidePanelVisible && (
//         <TouchableOpacity
//           style={localStyles.overlay}
//           activeOpacity={1}
//           onPress={() => setSidePanelVisible(false)}
//         >
//           <SidePanel isVisible={isSidePanelVisible} onClose={() => setSidePanelVisible(false)} />
//         </TouchableOpacity>
//       )}
//     </SafeAreaView>
//   );

//   // return (
//   //   <View style={styles.authContainer}>
//   //     <Text style={styles.titleHome}>Welcome To Home page</Text>
//   //     <Text style={styles.emailText}>{user?.email}</Text>

//   //     {/* Button to navigate to Detail Page */}
//   //     <TouchableOpacity
//   //       style={styles.button}
//   //       onPress={() => router.push("../screens/DetailPage")}
//   //     >
//   //       <Text style={styles.buttonText}>Go to Detail Page</Text>
//   //     </TouchableOpacity>

//   //     {/* Button to toggle Side Panel */}
//   //     <Button title="Open Side Panel" onPress={toggleSidePanel} />

//   //     {/* Hamburger Menu Button */}
//   //     <TouchableOpacity
//   //       style={localStyles.hamburgerMenu}
//   //       onPress={toggleSidePanel}
//   //     >
//   //       <View style={localStyles.bar} />
//   //       <View style={localStyles.bar} />
//   //       <View style={localStyles.bar} />
//   //     </TouchableOpacity>

//   //     {/* Side Panel with Contact Us and About Us */}
//   //     <SidePanel
//   //       isVisible={isSidePanelVisible}
//   //       onClose={() => setSidePanelVisible(false)}
//   //     />
//   //   </View>
//   // );
// }

// // const localStyles = StyleSheet.create({
// //   titleHome: {
// //     color: "black",
// //     fontWeight: "bold",
// //     fontSize: 20,
// //     letterSpacing: 2,
// //     textAlign: "center",
// //   },
// //   hamburgerMenu: {
// //     position: "absolute",
// //     top: 40,
// //     right: 10,
// //     padding: 10,
// //     marginTop: 10,
// //   },
// //   bar: {
// //     width: 20,
// //     height: 3,
// //     backgroundColor: "black",
// //     marginVertical: 1,
// //   },
// //   overlay: {
// //     position: "absolute",
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     backgroundColor: "rgba(0, 0, 0, 0.5)",
// //     justifyContent: "flex-start",
// //   },
// //   sidePanel: {
// //     position: "absolute",
// //     right: 0,
// //     top: 0,
// //     width: "60%",
// //     height: "100%",
// //     backgroundColor: "#FFFFFF",
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.8,
// //     shadowRadius: 2,
// //     elevation: 5,
// //   },
// //   buttonContainer: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   contactButton: {
// //     backgroundColor: "#38bdf8",
// //     paddingTop: 6,
// //     paddingBottom: 6,
// //     paddingLeft: 20,
// //     paddingRight: 20,
// //     borderRadius: 16,
// //     marginBottom: 12,
// //   },
// //   aboutButton: {
// //     backgroundColor: "#38bdf8",
// //     paddingTop: 6,
// //     paddingBottom: 6,
// //     paddingLeft: 30,
// //     paddingRight: 30,
// //     borderRadius: 16,
// //     marginBottom: 12,
// //   },
// // });

// // Local styles for the hamburger menu and side panel
// const localStyles = StyleSheet.create({
//   hamburgerMenu: {
//     position: "absolute",
//     top: 40,
//     left: 20,
//     padding: 10,
//     marginTop: 10,
//   },
//   bar: {
//     width: 30,
//     height: 4,
//     backgroundColor: "black",
//     marginVertical: 2,
//   },
//   sidePanel: {
//     position: "absolute",
//     right: 0,
//     top: 0,
//     width: "60%",
//     height: "100%",
//     backgroundColor: "white",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   closeButton: {
//     alignSelf: "flex-end",
//     marginRight: 20,
//     marginTop: 60,
//   },
//   closeText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   buttonContainer: {
//     flex: 1,
//     marginBottom: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   button: {
//     marginVertical: 10,  // Adds vertical space between the buttons
//   }
// });

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { router, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import styles from "../../styles";

// SidePanel Component for Contact Us and About Us
const SidePanel = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <View style={localStyles.sidePanel}>
      <View style={localStyles.buttonContainer}>
        <TouchableOpacity
          style={localStyles.contactButton}
          // onPress={() => alert("Contact Us")}

          onPress={() => router.push("/screens/contact_us")}
        >
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={localStyles.aboutButton}
          // onPress={() => alert("About Us")}

          onPress={() => router.push("/screens/about_us")}
        >
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function MainPage() {
  const [isSidePanelVisible, setSidePanelVisible] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const toggleSidePanel = () => {
    setSidePanelVisible(!isSidePanelVisible);
  };

  return (
    <SafeAreaView style={styles.authContainer}>
      {/* Set StatusBar background color to match side panel */}

      {/* adding top bar */}
      {/* <View style={localStyles.topBar} /> */}

      {/*  */}

      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <Text style={localStyles.titleHome}>Welcome To Home page</Text>
      <Text style={styles.emailText}>{user?.email}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/screens/DetailPage")}
      >
        <Text style={styles.buttonText}>Go to Detail Page</Text>
      </TouchableOpacity>

      {/* <Button title="Open Side Panel" onPress={toggleSidePanel} /> */}

      <TouchableOpacity
        style={localStyles.hamburgerMenu}
        onPress={toggleSidePanel}
      >
        <View style={localStyles.bar} />
        <View style={localStyles.bar} />
        <View style={localStyles.bar} />
      </TouchableOpacity>

      {isSidePanelVisible && (
        <TouchableOpacity
          style={localStyles.overlay}
          activeOpacity={1}
          onPress={() => setSidePanelVisible(false)}
        >
          <SidePanel
            isVisible={isSidePanelVisible}
            onClose={() => setSidePanelVisible(false)}
          />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  topBar: {
    height: 40, // Adjust the height of the top bar
    backgroundColor: "#38bdf8", // Color for the top bar
    width: "100%",
    position: "absolute",
    top: 0,
  },
  titleHome: {
    color: "Black",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 2,
    textAlign: "center",
  },
  hamburgerMenu: {
    position: "absolute",
    top: 40,
    right: 10,
    padding: 10,
    marginTop: 10,
  },
  bar: {
    width: 20,
    height: 3,
    backgroundColor: "black",
    marginVertical: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark background
    justifyContent: "flex-start",
  },
  sidePanel: {
    position: "absolute",
    right: 0,
    top: 0,
    width: "60%",
    height: "100%",
    marginTop: 30,
    backgroundColor: "#FFFFFF", // Make side panel color match StatusBar
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonContainer: {
    flex: 1,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  contactButton: {
    backgroundColor: "#38bdf8",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 16,
    marginBottom: 12,
  },
  aboutButton: {
    backgroundColor: "#38bdf8",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 16,
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
