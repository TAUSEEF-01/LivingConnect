// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from "react-native";

// const MainPage = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.logo}>home.cy</Text>
//         <TouchableOpacity>
//           <View style={styles.menuIcon}></View>
//         </TouchableOpacity>
//       </View>

//       {/* Banner */}
//       <View style={styles.banner}>
//         <Text style={styles.bannerText}>The home of</Text>
//         <Text style={styles.bannerText}>real estate</Text>
//         <View style={styles.bannerImageContainer}>
//           <Image
//             source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual image URL
//             style={styles.bannerImage}
//           />
//         </View>
//       </View>

//       {/* Navigation Tabs */}
//       <View style={styles.navTabs}>
//         <TouchableOpacity style={[styles.tab, styles.activeTab]}>
//           <Text style={styles.tabText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.tab}>
//           <Text style={styles.tabText}>Land</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.tab}>
//           <Text style={styles.tabText}>Services</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Filter */}
//       <View style={styles.filter}>
//         <View style={styles.filterOptions}>
//           <TouchableOpacity style={styles.filterButton}>
//             <Text style={styles.filterButtonText}>House</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.filterButton}>
//             <Text style={styles.filterButtonText}>Apartment</Text>
//           </TouchableOpacity>
//         </View>
//         <TextInput
//           placeholder="Where would you like to live?"
//           placeholderTextColor="#ccc"
//           style={styles.searchInput}
//         />
//         <View style={styles.filterActions}>
//           <TouchableOpacity style={styles.actionButton}>
//             <Text style={styles.actionButtonText}>Buy</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton}>
//             <Text style={styles.actionButtonText}>Rent</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Latest Listings */}
//       <View style={styles.latestListings}>
//         <Text style={styles.latestListingsHeader}>Latest real estate for sale</Text>
//         <TouchableOpacity>
//           <Text style={styles.showAll}>Show all</Text>
//         </TouchableOpacity>

//         {/* Cards */}
//         <ScrollView horizontal style={styles.cardContainer}>
//           <View style={styles.card}>
//             <Image
//               source={{ uri: "https://via.placeholder.com/300x200" }}
//               style={styles.cardImage}
//             />
//             <Text style={styles.cardPrice}>€185,000</Text>
//             <Text style={styles.cardDetails}>3 beds | 1 bath | 110 m²</Text>
//             <Text style={styles.cardLocation}>Larnaca (City), Larnaca</Text>
//           </View>
//           <View style={styles.card}>
//             <Image
//               source={{ uri: "https://via.placeholder.com/300x200" }}
//               style={styles.cardImage}
//             />
//             <Text style={styles.cardPrice}>€130,000</Text>
//             <Text style={styles.cardDetails}>1 bed | 1 bath | 50 m²</Text>
//             <Text style={styles.cardLocation}>Lakatamia, Nicosia</Text>
//           </View>
//         </ScrollView>
//       </View>
//     </ScrollView>
//   );
// };

// export default MainPage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: "black",
//   },
//   logo: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "white",
//   },
//   menuIcon: {
//     height: 20,
//     width: 30,
//     backgroundColor: "gray",
//     borderRadius: 4,
//   },
//   banner: {
//     backgroundColor: "#1e3a8a",
//     paddingHorizontal: 16,
//     paddingVertical: 24,
//   },
//   bannerText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "white",
//   },
//   bannerImageContainer: {
//     alignItems: "flex-end",
//   },
//   bannerImage: {
//     height: 80,
//     width: 80,
//   },
//   navTabs: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 12,
//     backgroundColor: "black",
//   },
//   tab: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
//   activeTab: {
//     borderBottomWidth: 2,
//     borderBottomColor: "#2563eb",
//   },
//   tabText: {
//     color: "white",
//   },
//   filter: {
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: "black",
//   },
//   filterOptions: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 12,
//   },
//   filterButton: {
//     backgroundColor: "gray",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   filterButtonText: {
//     color: "white",
//   },
//   searchInput: {
//     backgroundColor: "#2d3748",
//     color: "white",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   filterActions: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 12,
//   },
//   actionButton: {
//     backgroundColor: "#2563eb",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   actionButtonText: {
//     color: "white",
//   },
//   latestListings: {
//     paddingHorizontal: 16,
//     marginTop: 16,
//   },
//   latestListingsHeader: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
//   showAll: {
//     color: "#3b82f6",
//     marginBottom: 12,
//   },
//   cardContainer: {
//     flexDirection: "row",
//     paddingHorizontal: 16,
//   },
//   card: {
//     backgroundColor: "#2d3748",
//     padding: 16,
//     borderRadius: 8,
//     marginRight: 16,
//     width: 200,
//   },
//   cardImage: {
//     height: 100,
//     width: "100%",
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   cardPrice: {
//     color: "white",
//     fontWeight: "bold",
//     marginBottom: 4,
//   },
//   cardDetails: {
//     color: "white",
//     marginBottom: 4,
//   },
//   cardLocation: {
//     color: "gray",
//   },
// });

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

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   ScrollView,
//   Image,
//   Alert,
//   TextInput, // Ensure TextInput is imported
// } from "react-native";
// import { router, useRouter } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import styles from "../../styles";

// // import React, { useEffect, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   StyleSheet,
// //   SafeAreaView,
// //   StatusBar,
// //   ScrollView,
// //   Image,
// //   Alert,
// // } from "react-native";
// // import { router, useRouter } from "expo-router";
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import axios from "axios";
// // import styles from "../../styles";

// // SidePanel Component for Contact Us and About Us
// const SidePanel = ({ isVisible, onClose }) => {
//   const handleLogout = async () => {
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
//               // Call backend to invalidate session (optional)
//               const token = await AsyncStorage.getItem("userToken");
//               if (token) {
//                 await axios.post(
//                   "http://192.168.50.242:5000/logout",
//                   {},
//                   {
//                     headers: { Authorization: `Bearer ${token}` },
//                   }
//                 );
//               }

//               // Clear token from AsyncStorage
//               await AsyncStorage.removeItem("userToken");

//               // Navigate to the login screen
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

//         <TouchableOpacity
//           style={localStyles.logoutButton}
//           // onPress={() => alert("About Us")}

//           // onPress={() => router.push("/screens/about_us")}
//           onPress={handleLogout}
//           // onPress={() => {
//           // handleLogout();
//           // console.log("Logout button pressed");
//           // }}
//           // onPress={() => Alert.alert("Test Alert", "This is a test")}
//         >
//           <Text style={styles.buttonText}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default function MainPage() {
// const [isSidePanelVisible, setSidePanelVisible] = useState(false);
// const [user, setUser] = useState(null);
// const router = useRouter();

// const toggleSidePanel = () => {
//   setSidePanelVisible(!isSidePanelVisible);
// };

//   return (
//     <SafeAreaView style={styles.authContainer}>
//       {/* Set StatusBar background color to match side panel */}

//       {/* adding top bar */}
//       {/* <View style={localStyles.topBar} /> */}

//       {/*  */}

//       <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

//       <Text style={localStyles.titleHome}>Welcome To Home page</Text>
//       <Text style={styles.emailText}>{user?.email}</Text>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => router.replace("/screens/DetailPage")}
//       >
//         <Text style={styles.buttonText}>Go to Detail Page</Text>
//       </TouchableOpacity>

//       {/* <Button title="Open Side Panel" onPress={toggleSidePanel} /> */}

//       <TouchableOpacity
// style={localStyles.hamburgerMenu}
// onPress={toggleSidePanel}
//       >
//         <View style={localStyles.bar} />
//         <View style={localStyles.bar} />
//         <View style={localStyles.bar} />
//       </TouchableOpacity>

// {isSidePanelVisible && (
//   <TouchableOpacity
//     style={localStyles.overlay}
//     activeOpacity={1}
//     onPress={() => setSidePanelVisible(false)}
//   >
//     <SidePanel
//       isVisible={isSidePanelVisible}
//       onClose={() => setSidePanelVisible(false)}
//     />
//   </TouchableOpacity>
// )}
//     </SafeAreaView>
//   );
// }

// const localStyles = StyleSheet.create({
//   topBar: {
//     height: 40, // Adjust the height of the top bar
//     backgroundColor: "#38bdf8", // Color for the top bar
//     width: "100%",
//     position: "absolute",
//     top: 0,
//   },
//   titleHome: {
//     color: "Black",
//     fontWeight: "bold",
//     fontSize: 20,
//     letterSpacing: 2,
//     textAlign: "center",
//   },
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
// sidePanel: {
// position: "absolute",
// right: 0,
// top: 0,
// width: "60%",
// height: "100%",
// // marginTop: 30,
// backgroundColor: "#FFFFFF", // Make side panel color match StatusBar
// shadowColor: "#000",
// shadowOffset: { width: 0, height: 2 },
// shadowOpacity: 0.8,
// shadowRadius: 2,
// elevation: 5,
// },
//   buttonContainer: {
//     flex: 1,
//     marginBottom: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   contactButton: {
//     backgroundColor: "#38bdf8",
//     // paddingTop: 6,
//     // paddingBottom: 6,
//     // paddingLeft: 20,
//     // paddingRight: 20,
//     // borderRadius: 16,
//     // marginBottom: 12,

//     width: "60%", // Width is 80% of the parent container/screen
// height: "6%", // Height is 10% of the parent container/screen
// borderRadius: 25,
// marginBottom: 12,

// justifyContent: "center", // Centers the content vertically
// alignItems: "center", // Centers the content horizontally
// position: "absolute", // Absolute positioning for placement
// bottom: "42%", // 5% distance from the bottom of the screen
// alignSelf: "center", // Horizontally center the button
//   },
//   aboutButton: {
//     backgroundColor: "#38bdf8",
//     // paddingTop: 6,
//     // paddingBottom: 6,
//     // paddingLeft: 30,
//     // paddingRight: 30,
//     // borderRadius: 16,
//     // marginBottom: 12,

//     width: "60%", // Width is 80% of the parent container/screen
//     height: "6%", // Height is 10% of the parent container/screen
// borderRadius: 25,
// marginBottom: 12,

// justifyContent: "center", // Centers the content vertically
// alignItems: "center", // Centers the content horizontally
// position: "absolute", // Absolute positioning for placement
// bottom: "50%", // 5% distance from the bottom of the screen
// alignSelf: "center", // Horizontally center the button
//   },
//   logoutButton: {
//     backgroundColor: "#38bdf8",
//     // paddingTop: 6,
//     // paddingBottom: 6,
//     // paddingLeft: 30,
//     // paddingRight: 30,

//     width: "60%", // Width is 80% of the parent container/screen
//     height: "6%", // Height is 10% of the parent container/screen
//     borderRadius: 25,
//     marginBottom: 12,

//     justifyContent: "center", // Centers the content vertically
//     alignItems: "center", // Centers the content horizontally
//     position: "absolute", // Absolute positioning for placement
//     bottom: "5%", // 5% distance from the bottom of the screen
//     alignSelf: "center", // Horizontally center the button

//     position: "absolute", // Position it absolutely
//     bottom: 50, // Distance from the bottom
//     alignSelf: "center", // Center horizontally
//   },
//   buttonText: {
//     fontSize: 20,
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   ScrollView,
//   Image,
//   Alert,
//   TextInput, // Ensure TextInput is imported
//   Dimensions
// } from "react-native";
// import { router, useRouter } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import styles from "../../styles";

// const SidePanel = ({ isVisible, onClose }) => {
//   const handleLogout = async () => {
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
//               const token = await AsyncStorage.getItem("userToken");
//               if (token) {
//                 await axios.post(
//                   "http://192.168.50.242:5000/logout",
//                   {},
//                   { headers: { Authorization: `Bearer ${token}` } }
//                 );
//               }
//               await AsyncStorage.removeItem("userToken");
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

//   return (
//     <>

//       {/* Overlay */}
//       {isVisible && (
//         <TouchableOpacity
//           style={localStyles.overlay}
//           activeOpacity={1}
//           onPress={onClose}
//         />
//       )}
//       {/* Sidebar */}
//       <View
//         style={[
//           localStyles.sidePanel,
//           { transform: [{ translateX: isVisible ? 0 : -300 }], },
//         ]}

//       >
//         <TouchableOpacity
//           style={localStyles.contactButton}
//           onPress={() => router.push("/screens/contact_us")}
//         >
//           <Text style={styles.buttonText}>Contact Us</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={localStyles.aboutButton}
//           onPress={() => router.push("/screens/about_us")}
//         >
//           <Text style={styles.buttonText}>About Us</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={localStyles.logoutButton}
//           onPress={handleLogout}
//         >
//           <Text style={styles.buttonText}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };

// export default function MainPage() {
//   const [isSidePanelVisible, setSidePanelVisible] = useState(false);
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   const toggleSidePanel = () => {
//     setSidePanelVisible(!isSidePanelVisible);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       {/* Sidebar */}
//       <SidePanel isVisible={isSidePanelVisible} onClose={() => setSidePanelVisible(false)} />

//     <ScrollView style={localStyles.container}>
//       {/* Header */}

//       {/* <View style={localStyles.header}>
//         <Text style={localStyles.logo}>Fast Home App</Text>
//         <TouchableOpacity onPress={toggleSidePanel} >
//           <View style={localStyles.menuIcon}></View>
//         </TouchableOpacity>
//       </View> */}

//       {/* <View style={localStyles.header}>
//         <TouchableOpacity onPress={toggleSidePanel}>
//           <View style={localStyles.menuIcon}></View>
//         </TouchableOpacity>
//         <Text style={localStyles.logo}>Fast Home App</Text>
//       </View> */}

// {/* <View style={localStyles.header}> */}
//       {/* <TouchableOpacity onPress={toggleSidePanel}>
//           <View style={localStyles.menuIcon}></View>
//         </TouchableOpacity>

//         {isSidePanelVisible && (
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
//       )} */}
// {/* </View> */}

//       {isSidePanelVisible && (
//         <TouchableOpacity
//           style={[localStyles.overlay,
//             { zIndex: 999 } // Ensure it's below the menu button but above other content
//           ]}
//           activeOpacity={1}
//           onPress={() => setSidePanelVisible(false)}
//         >
//           <SidePanel
//             isVisible={isSidePanelVisible}
//             onClose={() => setSidePanelVisible(false)}
//           />
//         </TouchableOpacity>
//       )}

//       {/* Banner */}

//       <View style={localStyles.banner}>

//         {/* <Text style={localStyles.bannerText}>The home of</Text>
//         <Text style={localStyles.bannerText}>real estate</Text> */}

// {/* <TouchableOpacity onPress={toggleSidePanel}>
//  */}
//  <TouchableOpacity
//     // onPress={() => {toggleSidePanel(),
//     //   console.log("Menu button pressed");
//     // } }

//     onPress={toggleSidePanel}
//     style={{
//       position: 'absolute',
//       top: 16,
//       left: 16,
//       zIndex: 100
//     }}
//   >
//           <View style={localStyles.menuIcon}></View>
//         </TouchableOpacity>

//         {/* {isSidePanelVisible && (
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
//       )} */}

//         <View style={localStyles.bannerImageContainer}>

//           <Image
//             source={{
//               uri: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             }} // Replace with actual image URL
//             style={localStyles.bannerImage}
//           />
//         </View>
//       </View>

//       {/* Navigation Tabs */}
//       <View style={localStyles.navTabs}>
//         <TouchableOpacity style={[localStyles.tab, localStyles.activeTab]}>
//           <Text style={localStyles.tabText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={localStyles.tab}>
//           <Text style={localStyles.tabText}>Land</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={localStyles.tab}>
//           <Text style={localStyles.tabText}>Services</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Filter */}
//       <View style={localStyles.filter}>
//         <View style={localStyles.filterOptions}>
//           <TouchableOpacity style={localStyles.filterButton}>
//             <Text style={localStyles.filterButtonText}>House</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={localStyles.filterButton}>
//             <Text style={localStyles.filterButtonText}>Apartment</Text>
//           </TouchableOpacity>
//         </View>
//         <TextInput
//           placeholder="Where would you like to live?"
//           placeholderTextColor="#ccc"
//           style={localStyles.searchInput}
//         />
//         <View style={localStyles.filterActions}>
//           <TouchableOpacity style={localStyles.actionButton}>
//             <Text style={localStyles.actionButtonText}>Buy</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={localStyles.actionButton}>
//             <Text style={localStyles.actionButtonText}>Rent</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Latest Listings */}
//       <View style={localStyles.latestListings}>
//         <Text style={localStyles.latestListingsHeader}>
//           Latest real estate for sale
//         </Text>
//         <TouchableOpacity>
//           <Text style={localStyles.showAll}>Show all</Text>
//         </TouchableOpacity>

//         {/* Cards */}
//         <ScrollView horizontal style={localStyles.cardContainer}>
//           <View style={localStyles.card}>
//             <Image
//               source={{ uri: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
//               style={localStyles.cardImage}
//             />
//             <Text style={localStyles.cardPrice}>€185,000</Text>
//             <Text style={localStyles.cardDetails}>
//               3 beds | 1 bath | 110 m²
//             </Text>
//             <Text style={localStyles.cardLocation}>
//               Larnaca (City), Larnaca
//             </Text>
//           </View>
//           <View style={localStyles.card}>
//             <Image
//               source={{ uri: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
//               style={localStyles.cardImage}
//             />
//             <Text style={localStyles.cardPrice}>€130,000</Text>
//             <Text style={localStyles.cardDetails}>1 bed | 1 bath | 50 m²</Text>
//             <Text style={localStyles.cardLocation}>Lakatamia, Nicosia</Text>
//           </View>
//         </ScrollView>

//         {/* Cards */}
//         <ScrollView horizontal style={localStyles.cardContainer}>
//           <View style={localStyles.card}>
//             <Image
//               source={{ uri: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
//               style={localStyles.cardImage}
//             />
//             <Text style={localStyles.cardPrice}>€185,000</Text>
//             <Text style={localStyles.cardDetails}>
//               3 beds | 1 bath | 110 m²
//             </Text>
//             <Text style={localStyles.cardLocation}>
//               Larnaca (City), Larnaca
//             </Text>
//           </View>
//           <View style={localStyles.card}>
//             <Image
//               source={{ uri: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
//               style={localStyles.cardImage}
//             />
//             <Text style={localStyles.cardPrice}>€130,000</Text>
//             <Text style={localStyles.cardDetails}>1 bed | 1 bath | 50 m²</Text>
//             <Text style={localStyles.cardLocation}>Lakatamia, Nicosia</Text>
//           </View>
//         </ScrollView>
//       </View>
//     </ScrollView>

//         </SafeAreaView>
//   );
// }

// // export default MainPage;

// const localStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//   },

//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between", // Ensures spacing between logo and icon
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: "#38bdf8",
//   },
//   logo: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "white",
//   },

//   menuIcon: {
//     width: 30,
//     height: 24,

//     backgroundColor: "black", // Replace with your desired color
//     borderRadius: 4, // Optional for rounded corners
//   },

//   banner: {
//     backgroundColor: "#1e3a8a",
//     // paddingHorizontal: 16,
//     // paddingVertical: 24,
//     position: "relative", // Ensure text and image stack properly
//   },

//   bannerImageContainer: {
//     width: "100%",
//     height: 200, // Adjust the height as needed
//     // position: "relative", // Ensure proper layering
//     position: "relative"
//   },
//   bannerImage: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 8, // Optional for rounded corners
//     // zIndex: 1,
//     // position: "absolute"
//   },

//   // menuIcon: {
//   //   width: 24,
//   //   height: 24,
//   //   backgroundColor: "white", // Replace with your desired color
//   //   borderRadius: 4, // Optional for rounded corners
//   //   position: "absolute", // Enables overlapping positioning
//   //   // top: 16,              // Distance from the top of the banner
//   //   left: 16,             // Distance from the left of the banner
//   //   zIndex: 10,           // Ensures it stays above other elements
//   //   elevation: 5,         // Additional elevation for Android
//   //   // position: "relative"
//   // },

//   // banner: {
//   //   backgroundColor: "#1e3a8a",
//   //   position: "relative", // This remains the same
//   // },
//   // menuIcon: {
//   //   width: 24,
//   //   height: 24,
//   //   backgroundColor: "white",
//   //   borderRadius: 4,
//   //   position: "absolute", // Keep absolute positioning
//   //   top: 16,
//   //   left: 16,
//   //   zIndex: 100, // Increase zIndex to ensure it's above the image
//   //   elevation: 5, // Keep for Android
//   // },
//   // bannerImageContainer: {
//   //   width: "100%",
//   //   height: 200,
//   //   position: "relative",
//   // },
//   // bannerImage: {
//   //   width: "100%",
//   //   height: "100%",
//   //   borderRadius: 8,
//   //   zIndex: 1, // Ensure this is lower than menuIcon's zIndex
//   // },

//   navTabs: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 12,
//     backgroundColor: "black",
//   },
//   tab: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
//   activeTab: {
//     borderBottomWidth: 2,
//     borderBottomColor: "#38bdf8",
//   },
//   tabText: {
//     color: "white",
//   },
//   filter: {
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: "black",
//   },
//   filterOptions: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 12,
//   },
//   filterButton: {
//     backgroundColor: "gray",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   filterButtonText: {
//     color: "white",
//   },
//   searchInput: {
//     backgroundColor: "#2d3748",
//     color: "white",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   filterActions: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 12,
//   },
//   actionButton: {
//     backgroundColor: "#38bdf8",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   actionButtonText: {
//     color: "white",
//   },
//   latestListings: {
//     paddingHorizontal: 16,
//     marginTop: 16,
//   },
//   latestListingsHeader: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
//   showAll: {
//     color: "#38bdf8",
//     marginBottom: 12,
//   },
//   cardContainer: {
//     flexDirection: "row",
//     paddingHorizontal: 16,
//     marginBottom: 16,
//   },
//   card: {
//     backgroundColor: "#2d3748",
//     padding: 16,
//     borderRadius: 8,
//     marginRight: 16,
//     width: 200,
//   },
//   cardImage: {
//     height: 100,
//     width: "100%",
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   cardPrice: {
//     color: "white",
//     fontWeight: "bold",
//     marginBottom: 4,
//   },
//   cardDetails: {
//     color: "white",
//     marginBottom: 4,
//   },
//   cardLocation: {
//     color: "gray",
//   },

//   // sidePanel: {
//   //   position: "absolute",
//   //   top: 0,
//   //   left: 0,
//   //   height: "100%",
//   //   width: 300,
//   //   backgroundColor: "white",
//   //   padding: 16,
//   //   zIndex: 2, // Ensure it's above other elements
//   //   transform: [{ translateX: -300 }], // Off-screen initially
//   //   transition: "transform 0.3s ease-in-out", // Smooth slide-in effect
//   // },

//   // sidePanel: {
//   //   position: "absolute",
//   //   top: 0,
//   //   left: 0,
//   //   height: "100%",
//   //   width: 300,
//   //   backgroundColor: "white",
//   //   padding: 16,
//   //   zIndex: 2,
//   //   transform: [{ translateX: -300 }],
//   //   transition: "transform 0.3s ease-in-out",
//   //   // Use flexbox for positioning
//   //   display: "flex",
//   //   flexDirection: "column",
//   //   justifyContent: "space-between",
//   // },

//   sidePanel: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     height: "100%",
//     width: 300,
//     backgroundColor: "white",
//     padding: 16,
//     zIndex: 2,
//     transform: [{ translateX: -300 }],
//     transition: "transform 0.3s ease-in-out",
//     // Add overflow handling to prevent scrolling
//     overflow: "hidden",
//   },

//   // sidePanel: {
//   //   position: "absolute",
//   //   top: 0,
//   //   left: 0,
//   //   height: screenHeight, // Use the screen height
//   //   width: screenWidth * 0.8, // 80% of the screen width (adjust as needed)
//   //   backgroundColor: "white",
//   //   padding: 16,
//   //   zIndex: 2,
//   //   transform: [{ translateX: -screenWidth * 0.8 }], // Initially hidden off-screen
//   //   transition: "transform 0.3s ease-in-out",
//   //   overflow: "hidden", // Prevent scrolling beyond bounds
//   // },

//   overlay: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.21)", // Dark overlay
//     zIndex: 1, // Below the side panel
//   },

//   // contactButton: {
//   //   marginBottom: 16,
//   //   padding: 12,
//   //   backgroundColor: "#2563eb",
//   //   borderRadius: 8,

//   //   // height: "6%", // Height is 10% of the parent container/screen
//   //   // borderRadius: 25,
//   //   // marginBottom: 12,

//   //   justifyContent: "center", // Centers the content vertically
//   //   alignItems: "center", // Centers the content horizontally
//   //   position: "absolute", // Absolute positioning for placement
//   //   bottom: "42%", // 5% distance from the bottom of the screen
//   //   alignSelf: "center", // Horizontally center the button

//   // },
//   // aboutButton: {
//   //   marginBottom: 16,
//   //   padding: 12,
//   //   backgroundColor: "#22c55e",
//   //   borderRadius: 8,

//   //   // borderRadius: 25,
//   //   // marginBottom: 12,

//   //   justifyContent: "center", // Centers the content vertically
//   //   alignItems: "center", // Centers the content horizontally
//   //   position: "absolute", // Absolute positioning for placement
//   //   bottom: "50%", // 5% distance from the bottom of the screen
//   //   alignSelf: "center", // Horizontally center the button
//   // },
//   // logoutButton: {
//   //   padding: 12,
//   //   backgroundColor: "#ef4444",
//   //   borderRadius: 8,
//   // justifyContent: "center", // Centers the content vertically
//   //       alignItems: "center", // Centers the content horizontally
//   //       position: "absolute", // Absolute positioning for placement
//   //       bottom: "5%", // 5% distance from the bottom of the screen
//   //       alignSelf: "center", // Horizontally center the button

//   //       position: "absolute", // Position it absolutely
//   //       bottom: 50, // Distance from the bottom
//   //       alignSelf: "center", // Center horizontally
//   // },

//   contactButton: {
//     padding: 12,
//     backgroundColor: "#2563eb",
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute", // Keep as absolute
//     // bottom: 200, // Fixed pixel value instead of percentage
//     bottom: "20%", // Fixed pixel value instead of percentage

//     alignSelf: "center",
//     width: "80%", // Optional: make button width consistent
//   },

//   aboutButton: {
//     padding: 12,
//     backgroundColor: "#22c55e",
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute", // Keep as absolute
//     // bottom: 300, // Fixed pixel value instead of percentage
//     bottom: "28%", // Fixed pixel value instead of percentage
//     alignSelf: "center",
//     width: "80%", // Optional: make button width consistent
//   },

//   logoutButton: {
//     padding: 12,
//     backgroundColor: "#ef4444",
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute", // Keep as absolute
//     // bottom: 50, // Fixed pixel value
//     bottom: "8%", // Fixed pixel value instead of percentage
//     alignSelf: "center",
//     width: "80%", // Optional: make button width consistent
//   },

// //   // Remove absolute positioning
// // contactButton: {
// //   padding: 12,
// //   backgroundColor: "#2563eb",
// //   borderRadius: 8,
// //   marginBottom: 16,
// // },

// // aboutButton: {
// //   padding: 12,
// //   backgroundColor: "#22c55e",
// //   borderRadius: 8,
// //   marginBottom: 16,
// // },

// // logoutButton: {
// //   padding: 12,
// //   backgroundColor: "#ef4444",
// //   borderRadius: 8,
// //   marginTop: "auto", // Pushes the button to the bottom
// // },

//   // logoutButton: {
//   //       backgroundColor: "#ef4444",
//   //       // paddingTop: 6,
//   //       // paddingBottom: 6,
//   //       // paddingLeft: 30,
//   //       // paddingRight: 30,

//   //       width: "60%", // Width is 80% of the parent container/screen
//   //       height: "6%", // Height is 10% of the parent container/screen
//   //       borderRadius: 25,
//   //       marginBottom: 12,

//   //       justifyContent: "center", // Centers the content vertically
//   //       alignItems: "center", // Centers the content horizontally
//   //       position: "absolute", // Absolute positioning for placement
//   //       bottom: "5%", // 5% distance from the bottom of the screen
//   //       alignSelf: "center", // Horizontally center the button

//   //       position: "absolute", // Position it absolutely
//   //       bottom: 50, // Distance from the bottom
//   //       alignSelf: "center", // Center horizontally
//   //     },
// });

// // // SidePanel Component for Contact Us and About Us
// // const SidePanel = ({ isVisible, onClose }) => {
// //   const handleLogout = async () => {
// //     Alert.alert(
// //       "Log Out",
// //       "Are you sure you want to log out?",
// //       [
// //         {
// //           text: "Cancel",
// //           onPress: () => null,
// //           style: "cancel",
// //         },
// //         {
// //           text: "Yes",
// //           onPress: async () => {
// //             try {
// //               // Call backend to invalidate session (optional)
// //               const token = await AsyncStorage.getItem("userToken");
// //               if (token) {
// //                 await axios.post(
// //                   "http://192.168.50.242:5000/logout",
// //                   {},
// //                   {
// //                     headers: { Authorization: `Bearer ${token}` },
// //                   }
// //                 );
// //               }

// //               // Clear token from AsyncStorage
// //               await AsyncStorage.removeItem("userToken");

// //               // Navigate to the login screen
// //               router.replace("/login");
// //             } catch (error) {
// //               console.error("Logout error:", error);
// //             }
// //           },
// //         },
// //       ],
// //       { cancelable: false }
// //     );
// //   };

// //   if (!isVisible) return null;

// //   return (
// //     <View style={localStyles.sidePanel}>
// //       <View style={localStyles.buttonContainer}>
// //         <TouchableOpacity
// //           style={localStyles.contactButton}
// //           // onPress={() => alert("Contact Us")}

// //           onPress={() => router.push("/screens/contact_us")}
// //         >
// //           <Text style={styles.buttonText}>Contact Us</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={localStyles.aboutButton}
// //           // onPress={() => alert("About Us")}

// //           onPress={() => router.push("/screens/about_us")}
// //         >
// //           <Text style={styles.buttonText}>About Us</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity
// //           style={localStyles.logoutButton}
// //           // onPress={() => alert("About Us")}

// //           // onPress={() => router.push("/screens/about_us")}
// //           onPress={handleLogout}
// //           // onPress={() => {
// //           // handleLogout();
// //           // console.log("Logout button pressed");
// //           // }}
// //           // onPress={() => Alert.alert("Test Alert", "This is a test")}
// //         >
// //           <Text style={styles.buttonText}>Logout</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Alert,
  TextInput, // Ensure TextInput is imported
  Dimensions,
} from "react-native";
import { router, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import styles from "../../styles";
import SidePanel from "../sidePanel/sidePanel";
import Ionicons from "@expo/vector-icons/Ionicons";

// const SidePanel = ({ isVisible, onClose }) => {
//   const handleLogout = async () => {
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
//               const token = await AsyncStorage.getItem("userToken");
//               if (token) {
//                 await axios.post(
//                   "http://192.168.50.242:5000/logout",
//                   {},
//                   { headers: { Authorization: `Bearer ${token}` } }
//                 );
//               }
//               await AsyncStorage.removeItem("userToken");
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

//   return (
//     <>
//       {/* Overlay */}
//       {isVisible && (
//         <TouchableOpacity
//           style={localStyles.overlay}
//           activeOpacity={1}
//           onPress={onClose}
//         />
//       )}
//       {/* Sidebar */}
//       <View
//         style={[
//           localStyles.sidePanel,
//           { transform: [{ translateX: isVisible ? 0 : -300 }] },
//         ]}
//       >
//         <TouchableOpacity
//           style={localStyles.contactButton}
//           onPress={() => router.push("/screens/contact_us")}
//         >
//           <Text style={styles.buttonText}>Contact Us</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={localStyles.aboutButton}
//           onPress={() => router.push("/screens/about_us")}
//         >
//           <Text style={styles.buttonText}>About Us</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={localStyles.logoutButton}
//           onPress={handleLogout}
//         >
//           <Text style={styles.buttonText}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };

export default function MainPage() {
  const [isSidePanelVisible, setSidePanelVisible] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const toggleSidePanel = () => {
    setSidePanelVisible(!isSidePanelVisible);
  };

  const [activeTab, setActiveTab] = useState("Home"); // Default active tab

  const handleTabPress = (tabName) => {
    setActiveTab(tabName); // Set the active tab
  };

  const handleShowAllPress = async () => {
    router.push("/pages/showAll");
    // router.push("/pages/temp");
    // router.replace("/pages/showAll");
  };

  const handleHomePress = async () => {
    router.push("/pages/categoryHome");
    // router.replace("/pages/showAll");
  };

  const handleApartmentPress = async () => {
    router.push("/pages/categoryApartment");
    // router.replace("/pages/showAll");
  };

  const handleSubletPress = async () => {
    router.push("/pages/categorySublet");
    // router.replace("/pages/showAll");
  };

  const handleRentAHomePress = async () => {
  // const handleRentAHomePress = () => {

    router.push("/Rent/rentAHomeForm");
    // router.replace("/Rent/rentAHomeForm");
  };

  const handleProvideServicesPress = async () => {
    // const handleProvideServicesPress = () => {
    router.push("/services/deliveryServices");
    // router.replace("/services/deliveryServices");
  };

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      try {
        // const response = await fetch("http://192.168.50.242:5000/properties");
        const response = await fetch("http://10.33.24.139:5000/properties");
        const data = await response.json();

        // console.log('Fetched properties:', data);

        if (Array.isArray(data.properties)) {
          setProperties(data.properties);
        } else {
          console.error("Expected an array of properties");
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    }

    fetchProperties();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Sidebar */}
      <SidePanel
        isVisible={isSidePanelVisible}
        onClose={() => setSidePanelVisible(false)}
      />

      <ScrollView style={localStyles.container}>
        {isSidePanelVisible && (
          <TouchableOpacity
            style={[
              localStyles.overlay,
              { zIndex: 999 }, // Ensure it's below the menu button but above other content
            ]}
            activeOpacity={1}
            onPress={() => setSidePanelVisible(false)}
          >
            <SidePanel
              isVisible={isSidePanelVisible}
              onClose={() => setSidePanelVisible(false)}
            />
          </TouchableOpacity>
        )}

        {/* Banner */}

        <View style={localStyles.banner}>
          <TouchableOpacity
            onPress={toggleSidePanel}
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              zIndex: 100,
            }}
          >
            <View style={localStyles.menuIcon}>
              <View style={localStyles.bar} />
              <View style={localStyles.bar} />
              <View style={localStyles.bar} />
            </View>
          </TouchableOpacity>

          <View style={localStyles.bannerImageContainer}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }} // Replace with actual image URL
              style={localStyles.bannerImage}
            />
          </View>
        </View>

        {/* Navigation Tabs */}
        {/* <View style={localStyles.navTabs}>
          <TouchableOpacity style={[localStyles.tab, localStyles.activeTab]}>
            <Text style={localStyles.tabText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={localStyles.tab}>
            <Text style={localStyles.tabText}>Community Center</Text>
          </TouchableOpacity>
          <TouchableOpacity style={localStyles.tab}>
            <Text style={localStyles.tabText}>Services</Text>
          </TouchableOpacity>
        </View> */}

        <View style={localStyles.navTabs}>
          <TouchableOpacity
            style={[
              localStyles.tab,
              activeTab === "Home" && localStyles.activeTab,
            ]}
            onPress={() => handleTabPress("Home")}
          >
            <Text
              style={[
                localStyles.tabText,
                activeTab === "Home" && localStyles.activeTabText,
              ]}
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              localStyles.tab,
              activeTab === "Community Center" && localStyles.activeTab,
            ]}
            onPress={() => handleTabPress("Community Center")}
          >
            {/* <Text style={localStyles.tabText}>Community Center</Text> */}

            <Text
              style={[
                localStyles.tabText,
                activeTab === "Community Center" && localStyles.activeTabText,
              ]}
            >
              Community Center
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              localStyles.tab,
              activeTab === "Services" && localStyles.activeTab,
            ]}
            onPress={() => handleTabPress("Services")}
          >
            <Text
              style={[
                localStyles.tabText,
                activeTab === "Services" && localStyles.activeTabText,
              ]}
            >
              Services
            </Text>
          </TouchableOpacity>
        </View>

        {/* Filter */}
        <View style={localStyles.filter}>
          <View style={localStyles.filterOptions}>
            {/* <TouchableOpacity
              style={localStyles.filterButton}
              onPress={handleHomePress}
            >
              <Text style={localStyles.filterButtonText}>Home</Text>
            </TouchableOpacity>


            <TouchableOpacity style={localStyles.filterButton}>
              <Text
                style={localStyles.filterButtonText}
                onPress={handleApartmentPress}
              >
                Apartment
              </Text>
            </TouchableOpacity> 
            
            <TouchableOpacity style={localStyles.filterButton}>
              <Text
                style={localStyles.filterButtonText}
                onPress={handleSubletPress}
              >
                Sublet
              </Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={localStyles.filterButton}>
              {/* <Text style={localStyles.plusButton}>+</Text> */}
              <Ionicons
                name="add-circle-outline"
                style={localStyles.plusButton}
              />
              <Text
                style={localStyles.filterButtonText}
                onPress={() => {
                  handleRentAHomePress(),
                  console.log("Rent a Home button pressed")
                }}
              >
                Add Home
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={localStyles.filterButton}>
              {/* <Text style={localStyles.plusButton}>+</Text> */}
              <Ionicons
                name="add-circle-outline"
                style={localStyles.plusButton}
              />
              <Text
                style={localStyles.filterButtonText}
                onPress={() => {
                  handleProvideServicesPress(),
                  console.log("Provide Services button pressed")
                }}
              >
                Add Service
              </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={localStyles.filterButton}>
              <Text style={localStyles.filterButtonText}>Hotel</Text>
            </TouchableOpacity> */}
          </View>
          <TextInput
            placeholder="Where would you like to live?"
            placeholderTextColor="#ccc"
            style={localStyles.searchInput}
          />
          <View style={localStyles.filterActions}>
            <TouchableOpacity style={localStyles.actionButton}>
              <Text style={localStyles.actionButtonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.actionButton}>
              <Text style={localStyles.actionButtonText}>Rent</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Latest Listings */}
        <View style={localStyles.latestListings}>
          <Text style={localStyles.latestListingsHeader}>
            Home For Rent or Sale
          </Text>
          <TouchableOpacity onPress={handleShowAllPress}>
            <Text style={localStyles.showAll}>Show all</Text>
          </TouchableOpacity>

          {/* Cards */}
          <TouchableOpacity onPress={handleHomePress}>
            <Text style={localStyles.categories}>Home</Text>
          </TouchableOpacity>

          <ScrollView horizontal style={localStyles.cardContainer}>
            {/* <Text>Property List</Text> */}
            {Array.isArray(properties) && properties.length > 0 ? (
              properties.map((property) => (
                <View key={property._id} style={localStyles.card}>
                  <Image
                    source={{ uri: property.image }}
                    style={localStyles.cardImage}
                  />
                  <Text style={localStyles.cardPrice}>
                    €{property.price.toLocaleString()}
                  </Text>
                  <Text style={localStyles.cardDetails}>
                    {property.details.beds} beds | {property.details.baths}{" "}
                    baths | {property.details.size} m²
                  </Text>
                  <Text style={localStyles.cardLocation}>
                    {property.location.city}, {property.location.region}
                  </Text>
                </View>
              ))
            ) : (
              <Text>No properties available.</Text>
            )}

            {/* <View style={localStyles.card}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                style={localStyles.cardImage}
              />
              <Text style={localStyles.cardPrice}>€185,000</Text>
              <Text style={localStyles.cardDetails}>
                3 beds | 1 bath | 110 m²
              </Text>
              <Text style={localStyles.cardLocation}>
                Larnaca (City), Larnaca
              </Text>
            </View>
            <View style={localStyles.card}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                style={localStyles.cardImage}
              />
              <Text style={localStyles.cardPrice}>€130,000</Text>
              <Text style={localStyles.cardDetails}>
                1 bed | 1 bath | 50 m²
              </Text>
              <Text style={localStyles.cardLocation}>Lakatamia, Nicosia</Text>
            </View> */}
          </ScrollView>

          {/* Cards */}

          <TouchableOpacity onPress={handleApartmentPress}>
            <Text style={localStyles.categories}>Apartment</Text>
          </TouchableOpacity>
          <ScrollView horizontal style={localStyles.cardContainer}>
            {Array.isArray(properties) && properties.length > 0 ? (
              properties.map((property) => (
                <View key={property._id} style={localStyles.card}>
                  <Image
                    source={{ uri: property.image }}
                    style={localStyles.cardImage}
                  />
                  <Text style={localStyles.cardPrice}>
                    €{property.price.toLocaleString()}
                  </Text>
                  <Text style={localStyles.cardDetails}>
                    {property.details.beds} beds | {property.details.baths}{" "}
                    baths | {property.details.size} m²
                  </Text>
                  <Text style={localStyles.cardLocation}>
                    {property.location.city}, {property.location.region}
                  </Text>
                </View>
              ))
            ) : (
              <Text>No properties available.</Text>
            )}
          </ScrollView>

          <TouchableOpacity onPress={handleSubletPress}>
            <Text style={localStyles.categories}>Sublet</Text>
          </TouchableOpacity>

          <ScrollView horizontal style={localStyles.cardContainer}>
            {Array.isArray(properties) && properties.length > 0 ? (
              properties.map((property) => (
                <View key={property._id} style={localStyles.card}>
                  <Image
                    source={{ uri: property.image }}
                    style={localStyles.cardImage}
                  />
                  <Text style={localStyles.cardPrice}>
                    €{property.price.toLocaleString()}
                  </Text>
                  <Text style={localStyles.cardDetails}>
                    {property.details.beds} beds | {property.details.baths}{" "}
                    baths | {property.details.size} m²
                  </Text>
                  <Text style={localStyles.cardLocation}>
                    {property.location.city}, {property.location.region}
                  </Text>
                </View>
              ))
            ) : (
              <Text>No properties available.</Text>
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Ensures spacing between logo and icon
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#38bdf8",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  menuIcon: {
    width: 35,
    height: 26, // Adjust to ensure the bars fit within this height
    justifyContent: "space-between", // Evenly space the bars
    alignItems: "center", // Center align the bars horizontally
    // backgroundColor: "transparent", // Optional: Transparent background
    backgroundColor: "black", // Replace with your desired color
    padding: 3,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 6,
  },

  bar: {
    width: "100%", // Make the bars span the full width of the menuIcon
    height: 3, // Thickness of the bars
    // backgroundColor: "black", // Replace with your desired color
    borderRadius: 2, // Rounded corners for the bars
    backgroundColor: "white", // Replace with your desired color
  },
  // menuIcon: {
  //   width: 30,
  //   height: 24,

  //   backgroundColor: "black", // Replace with your desired color
  //   borderRadius: 4, // Optional for rounded corners
  // },

  // bar: {
  //   width: '90%',
  //   height: 3,
  //   padding: 2,
  //   backgroundColor: "white",
  //   marginVertical: 1,
  // },

  banner: {
    backgroundColor: "#1e3a8a",
    position: "relative", // Ensure text and image stack properly
  },

  bannerImageContainer: {
    width: "100%",
    height: 200, // Adjust the height as needed
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8, // Optional for rounded corners
  },

  navTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
    backgroundColor: "black",
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 1,
    marginTop: 1,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#38bdf8",
  },
  activeTabText: {
    color: "#38bdf8",
  },
  tabText: {
    textAlign: "center",
    color: "white",
  },
  filter: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "black",
  },
  filterOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    // justifyContent: "space-around",
    marginBottom: 12,
  },
  plusButton: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 1,
  },
  filterButton: {
    // backgroundColor: "grey",
    backgroundColor: "#38bdf8",
    paddingHorizontal: 16,
    paddingVertical: 12,
    // paddingBottom: 12,
    // paddingTop: 1,

    borderRadius: 8,
    // width: 115,
    width: "49%",
    marginBottom: 1,
    marginTop: 1,
  },
  filterButtonText: {
    textAlign: "center",
    color: "white",
  },
  searchInput: {
    backgroundColor: "#2d3748",
    color: "white",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 1,
    marginTop: 1,
  },
  filterActions: {
    flexDirection: "row",
    // justifyContent: "space-around",
    justifyContent: "space-between",
    marginTop: 12,
  },
  actionButton: {
    backgroundColor: "#38bdf8",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    width: "49%",
    marginBottom: 1,
    marginTop: 1,
  },
  actionButtonText: {
    textAlign: "center",
    color: "white",
  },
  latestListings: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  latestListingsHeader: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  showAll: {
    color: "#38bdf8",
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "bold",
    // fontStyle: "italic",
  },
  categories: {
    color: "#38bdf8",
    marginBottom: 12,
  },
  cardContainer: {
    flexDirection: "row",
    // paddingHorizontal: 2,
    marginBottom: 16,
  },

  // cardContainer: {
  //   flexDirection: "row",
  //   marginBottom: 16,
  //   shadowColor: "white", // Shadow color
  //   shadowOffset: { width: 2, height: 2 }, // Horizontal shadow
  //   shadowOpacity: 0.25, // Shadow transparency
  //   shadowRadius: 3, // Blur radius
  //   elevation: 3, // Android-specific shadow
  //   // backgroundColor: "white", // Required for shadows to appear
  //   backgroundColor: "black",
  //   borderRadius: 3, // Optional: Add rounded corners
  // },

  card: {
    backgroundColor: "#2d3748",
    padding: 16,
    borderRadius: 8,
    marginRight: 16,
    width: 200,
  },
  cardImage: {
    height: 100,
    width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  cardPrice: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardDetails: {
    color: "white",
    marginBottom: 4,
  },
  cardLocation: {
    color: "gray",
  },

  sidePanel: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: 300,
    backgroundColor: "white",
    padding: 16,
    zIndex: 2,
    transform: [{ translateX: -300 }],
    transition: "transform 0.3s ease-in-out",
    // Add overflow handling to prevent scrolling
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.21)", // Dark overlay
    zIndex: 1, // Below the side panel
  },

  contactButton: {
    padding: 12,
    // backgroundColor: "#2563eb",
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Keep as absolute
    bottom: "20%", // Fixed pixel value instead of percentage
    alignSelf: "center",
    width: "80%", // Optional: make button width consistent
  },

  aboutButton: {
    padding: 12,
    // backgroundColor: "#22c55e",//38bdf8
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Keep as absolute
    bottom: "28%", // Fixed pixel value instead of percentage
    alignSelf: "center",
    width: "80%", // Optional: make button width consistent
  },

  logoutButton: {
    padding: 12,
    backgroundColor: "#ef4444",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Keep as absolute
    bottom: "8%", // Fixed pixel value instead of percentage
    alignSelf: "center",
    width: "80%", // Optional: make button width consistent
  },
});
