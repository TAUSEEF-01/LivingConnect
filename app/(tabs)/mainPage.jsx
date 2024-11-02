// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { router } from "expo-router";
// import styles from "../../styles";

// // SidePanel Component for Contact Us and About Us
// const SidePanel = ({ isVisible, onClose }) => {
//   if (!isVisible) return null;

//   return (
//     <View style={localStyles.sidePanel}>
//       <TouchableOpacity style={localStyles.closeButton} onPress={onClose}>
//         <Text style={localStyles.closeText}>x</Text>
//         {/* <View style={localStyles.bar} />
//         <View style={localStyles.bar} />
//         <View style={localStyles.bar} /> */}
//       </TouchableOpacity>
//       <View style={localStyles.buttonContainer}>
//         <View style={localStyles.button}>
//           {/* <Button title="Contact Us" onPress={() => alert("Contact Us")} /> */}
//           <TouchableOpacity
//             style={localStyles.button}
//             onPress={() => alert("Contact Us")}
//           >
//             <Text style={styles.buttonText}>Contact Us</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={localStyles.button}>
//           {/* <Button title="About Us" onPress={() => alert("About Us")} /> */}

//           <TouchableOpacity
//             style={localStyles.button}
//             onPress={() => alert("About Us")}
//           >
//             <Text style={styles.buttonText}>About Us</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default function MainPage() {
//   const [isSidePanelVisible, setSidePanelVisible] = useState(false);
//   const auth = getAuth();
//   const user = auth.currentUser;

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         router.replace("/login");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const toggleSidePanel = () => {
//     setSidePanelVisible(!isSidePanelVisible); // Toggle the side panel visibility
//   };

//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.titleHome}>Welcome To Home page</Text>
//       <Text style={styles.emailText}>{user?.email}</Text>

//       {/* Button to navigate to Detail Page */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => router.replace("../screens/DetailPage")}
//       >
//         <Text style={styles.buttonText}>Go to Detail Page</Text>
//       </TouchableOpacity>

//       {/* Button to toggle Side Panel */}
//       <Button title="Open Side Panel" onPress={toggleSidePanel} />

//       {/* Hamburger Menu Button */}
//       <TouchableOpacity
//         style={localStyles.hamburgerMenu}
//         onPress={toggleSidePanel}
//       >
//         <View style={localStyles.bar} />
//         <View style={localStyles.bar} />
//         <View style={localStyles.bar} />
//       </TouchableOpacity>

//       {/* Side Panel with Contact Us and About Us */}
//       <SidePanel
//         isVisible={isSidePanelVisible}
//         onClose={() => setSidePanelVisible(false)}
//       />
//     </View>
//   );
// }

// // Local styles for the hamburger menu and side panel
// const localStyles = StyleSheet.create({
//   hamburgerMenu: {
//     position: "absolute",
//     top: 40,
//     right: 10,
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
//     marginTop: 30,
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
//     marginTop: 20,
//   },
//   closeText: {
//     fontSize: 30,
//     marginRight: 10,
//     paddingTop: 2,
//     paddingBottom: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     borderRadius: 10,
//     backgroundColor: "#38bdf8",
//     fontWeight: "bold",
//   },
//   buttonContainer: {
//     flex: 1,
//     marginBottom: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   button: {
//     backgroundColor: "#38bdf8",
//     paddingTop: 4,
//     paddingLeft: 10,
//     paddingRight: 10,
//     borderRadius: 16,
//     marginBottom: 12,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });


// //11111111111111111111111111111111111111111111111111111111111111111
// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { router } from "expo-router";
// import styles from "../../styles";

// // SidePanel Component for Contact Us and About Us
// const SidePanel = ({ isVisible, onClose }) => {
//   if (!isVisible) return null;

//   return (
//     <View style={localStyles.sidePanel}>
//       <TouchableOpacity style={localStyles.closeButton} onPress={onClose}>
//         <Text style={localStyles.closeText}>x</Text>
//       </TouchableOpacity>
//       <View style={localStyles.buttonContainer}>
//         <TouchableOpacity
//           style={localStyles.button}
//           onPress={() => alert("Contact Us")}
//         >
//           <Text style={styles.buttonText}>Contact Us</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={localStyles.button}
//           onPress={() => alert("About Us")}
//         >
//           <Text style={styles.buttonText}>About Us</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default function MainPage() {
//   const [isSidePanelVisible, setSidePanelVisible] = useState(false);
//   const auth = getAuth();
//   const user = auth.currentUser;

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         router.replace("/login");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const toggleSidePanel = () => {
//     setSidePanelVisible(!isSidePanelVisible);
//   };

//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.titleHome}>Welcome To Home page</Text>
//       <Text style={styles.emailText}>{user?.email}</Text>

//       {/* Button to navigate to Detail Page */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => router.replace("../screens/DetailPage")}
//       >
//         <Text style={styles.buttonText}>Go to Detail Page</Text>
//       </TouchableOpacity>

//       {/* Button to toggle Side Panel */}
//       <Button title="Open Side Panel" onPress={toggleSidePanel} />

//       {/* Hamburger Menu Button */}
//       <TouchableOpacity
//         style={localStyles.hamburgerMenu}
//         onPress={toggleSidePanel}
//       >
//         <View style={localStyles.bar} />
//         <View style={localStyles.bar} />
//         <View style={localStyles.bar} />
//       </TouchableOpacity>

//       {/* Overlay and Side Panel */}
//       {isSidePanelVisible && (
//         <TouchableOpacity
//           style={localStyles.overlay}
//           activeOpacity={1}
//           onPress={() => setSidePanelVisible(false)}
//         >
//           <SidePanel
//             isVisible={isSidePanelVisible}
//             onClose={() => setSidePanelVisible(false)}
//           />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// }

// // Local styles for the hamburger menu, side panel, and overlay
// const localStyles = StyleSheet.create({
//   hamburgerMenu: {
//     position: "absolute",
//     top: 40,
//     right: 10,
//     padding: 10,
//     marginTop: 10,
//   },
//   bar: {
//     width: 30,
//     height: 4,
//     backgroundColor: "black",
//     marginVertical: 2,
//   },
//   overlay: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark background
//     justifyContent: "flex-start",
//   },
//   sidePanel: {
//     position: "absolute",
//     right: 0,
//     top: 0,
//     width: "60%",
//     height: "100%",
//     marginTop: 30,
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
//     marginTop: 20,
//   },
//   closeText: {
//     fontSize: 30,
//     marginRight: 10,
//     paddingTop: 2,
//     paddingBottom: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     borderRadius: 10,
//     backgroundColor: "#38bdf8",
//     fontWeight: "bold",
//   },
//   buttonContainer: {
//     flex: 1,
//     marginBottom: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   button: {
//     backgroundColor: "#38bdf8",
//     paddingTop: 4,
//     paddingLeft: 10,
//     paddingRight: 10,
//     borderRadius: 16,
//     marginBottom: 12,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });












// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity, Button, StyleSheet, SafeAreaView } from "react-native";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { router } from "expo-router";
// import styles from "../../styles";

// // SidePanel Component for Contact Us and About Us
// const SidePanel = ({ isVisible, onClose }) => {
//   if (!isVisible) return null;

//   return (
//     <View style={localStyles.sidePanel}>
//       {/* cross button */}

//       {/* <TouchableOpacity style={localStyles.closeButton} onPress={onClose}>
//         <Text style={localStyles.closeText}>x</Text>
//       </TouchableOpacity> */}

//       {/*  */}
//       <View style={localStyles.buttonContainer}>
//         <TouchableOpacity
//           style={localStyles.contactButton}
//           onPress={() => alert("Contact Us")}
//         >
//           <Text style={styles.buttonText}>Contact Us</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={localStyles.aboutButton}
//           onPress={() => alert("About Us")}
//         >
//           <Text style={styles.buttonText}>About Us</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default function MainPage() {
//   const [isSidePanelVisible, setSidePanelVisible] = useState(false);
//   const auth = getAuth();
//   const user = auth.currentUser;

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         router.replace("/login");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const toggleSidePanel = () => {
//     setSidePanelVisible(!isSidePanelVisible);
//   };

//   return (
//     <SafeAreaView style={styles.authContainer}>
//       <Text style={styles.titleHome}>Welcome To Home page</Text>
//       <Text style={styles.emailText}>{user?.email}</Text>

//       {/* Button to navigate to Detail Page */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => router.replace("../screens/DetailPage")}
//       >
//         <Text style={styles.buttonText}>Go to Detail Page</Text>
//       </TouchableOpacity>

//       {/* Button to toggle Side Panel */}
//       <Button title="Open Side Panel" onPress={toggleSidePanel} />

//       {/* Hamburger Menu Button */}
//       <TouchableOpacity
//         style={localStyles.hamburgerMenu}
//         onPress={toggleSidePanel}
//       >
//         <View style={localStyles.bar} />
//         <View style={localStyles.bar} />
//         <View style={localStyles.bar} />
//       </TouchableOpacity>

//       {/* Overlay and Side Panel */}
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
// }

// // Local styles for the hamburger menu, side panel, and overlay
// const localStyles = StyleSheet.create({
//   hamburgerMenu: {
//     position: "absolute",
//     top: 40,
//     right: 10,
//     padding: 10,
//     marginTop: 10,
//   },
//   bar: {
//     width: 20,
//     height: 3,
//     backgroundColor: "black",
//     marginVertical: 1,
//   },
//   overlay: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark background
//     justifyContent: "flex-start",
//   },
//   sidePanel: {
//     position: "absolute",
//     right: 0,
//     top: 0,
//     width: "60%",
//     height: "100%",
//     marginTop: 30,
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
//     marginTop: 20,
//   },
//   closeText: {
//     fontSize: 30,
//     marginRight: 10,
//     paddingTop: 2,
//     paddingBottom: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     borderRadius: 10,
//     backgroundColor: "#38bdf8",
//     fontWeight: "bold",
//   },
//   buttonContainer: {
//     flex: 1,
//     marginBottom: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   button: {
//     backgroundColor: "#38bdf8",
//     paddingTop: 6,
//     paddingBottom: 6,
//     paddingLeft: 20,
//     paddingRight: 20,
//     borderRadius: 16,
//     marginBottom: 12,
//   },
//   contactButton: {
//     backgroundColor: "#38bdf8",
//     paddingTop: 6,
//     paddingBottom: 6,
//     paddingLeft: 20,
//     paddingRight: 20,
//     borderRadius: 16,
//     marginBottom: 12,
//   },
//   aboutButton: {
//     backgroundColor: "#38bdf8",
//     paddingTop: 6,
//     paddingBottom: 6,
//     paddingLeft: 30,
//     paddingRight: 30,
//     borderRadius: 16,
//     marginBottom: 12,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });






//333333333333333333333333333333333333333333333333333333333333333333333333
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { router, useRouter  } from "expo-router";
import styles from "../../styles";

// SidePanel Component for Contact Us and About Us
const SidePanel = ({ isVisible, onClose }) => {

  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // If user is not logged in, redirect to login screen
        router.replace("/login");
      }
    });

    return unsubscribe;
  }, []);


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
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/login");
      }
    });

    return () => unsubscribe();
  }, []);

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
          <SidePanel isVisible={isSidePanelVisible} onClose={() => setSidePanelVisible(false)} />
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
    color: 'Black',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 2,
    textAlign: 'center',
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
