// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Alert,
//   ActivityIndicator,
//   Platform,
//   StatusBar,
//   SafeAreaView,
// } from "react-native";
// import axios from "axios";
// import { router, useFocusEffect } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const UserServicesList = () => {
//   const [forms, setForms] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchUserHouses = async () => {
//     try {
//       const token = await AsyncStorage.getItem("userToken");
//       const response = await axios.get(
//         "https://livingconnect-backend.vercel.app/serviceDetails/get-user-services-properties",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       setForms(response.data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch your properties.");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useFocusEffect(
//     React.useCallback(() => {
//       fetchUserHouses();
//       return () => {};
//     }, [])
//   );

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#38bdf8" />
//       </View>
//     );
//   }

//   const renderContent = () => {
//     if (forms.length === 0) {
//       return (
//         <View style={styles.noDataContainer}>
//           <Text style={styles.noDataText}>No forms to verify.</Text>
//         </View>
//       );
//     }

//     return (
//       <ScrollView style={styles.scrollContainer}>
//         {forms.map((form, index) => (
//           <TouchableOpacity
//             key={form._id}
//             style={styles.card}
//             onPress={() =>
//               router.push({
//                 pathname: "/services/editServicesFrom",
//                 params: { id: form._id },
//               })
//             }
//             activeOpacity={0.7}
//           >
//             <View style={styles.cardHeader}>
//               <Text style={styles.cardTitle}>Services {index + 1}</Text>
//               <Text style={styles.editText}>Edit Details →</Text>
//             </View>
//             <View style={styles.cardDivider} />
//             <Text style={styles.cardId}>ID: {form._id}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.headerContainer}>
//         <Text style={styles.headerTitle}>My Services</Text>
//         <Text style={styles.headerSubtitle}>Manage Your Listed Services</Text>
//       </View>
//       {renderContent()}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F8FAFF",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
//   headerContainer: {
//     backgroundColor: "#38bdf8",
//     padding: 24,
//     paddingTop: Platform.OS === "ios" ? 20 : 40,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     elevation: 8,
//   },
//   headerTitle: {
//     fontSize: 28,
//     fontWeight: "700",
//     color: "#FFFFFF",
//     textAlign: "center",
//     letterSpacing: 0.5,
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: "#E0E7FF",
//     textAlign: "center",
//     marginTop: 4,
//     letterSpacing: 0.5,
//   },
//   scrollContainer: {
//     flex: 1,
//     padding: 20,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F8FAFF",
//   },
//   noDataContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   noDataText: {
//     fontSize: 18,
//     color: "#64748B",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   addButton: {
//     backgroundColor: "#38bdf8",
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 12,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   addButtonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   card: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 16,
//     marginBottom: 16,
//     padding: 16,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   cardHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#38bdf8",
//   },
//   editText: {
//     fontSize: 14,
//     color: "#38bdf8",
//     fontWeight: "500",
//   },
//   cardDivider: {
//     height: 1,
//     backgroundColor: "#E0E7FF",
//     marginBottom: 12,
//   },
//   cardId: {
//     fontSize: 14,
//     color: "#64748B",
//   },
// });

// export default UserServicesList;














import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  TextInput,
  StatusBar,
  Platform,
} from "react-native";
import axios from "axios";
import { useFocusEffect, useRouter } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";

const AllHomesPage = () => {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Used for navigation

  const [isSidePanelVisible, setSidePanelVisible] = useState(false);

  const toggleSidePanel = () => {
    setSidePanelVisible(!isSidePanelVisible);
  };

  const fetchAllHomeDetails = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      const response = await axios.get(
        "https://livingconnect-backend.vercel.app/serviceDetails/get-user-services-properties",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setHomes(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch all home details.");
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchAllHomeDetails();
      return () => {};
    }, [])
  );

  // if (loading) {
  //   return (
  //     <View style={localStyles.loaderContainer}>
  //       <ActivityIndicator size="large" color="#007BFF" />
  //     </View>
  //   );
  // }

  // if (homes.length === 0) {
  //   return (
  //     <View style={localStyles.noDataContainer}>
  //       <Text style={localStyles.noDataText}>
  //         No Community Center available.
  //       </Text>
  //     </View>
  //   );
  // }

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#22C55E" />
        <Text style={styles.loadingText}>Loading requests...</Text>
      </View>
    );
  }

  if (homes.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.noDataText}>No forms to verify</Text>
        <Text style={styles.noDataSubText}>New requests will appear here</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>My Services</Text>
        <Text style={styles.headerSubtitle}>Manage Your Listed Services</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {homes.map((home, index) => (
          <TouchableOpacity
            key={home._id}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/services/editServicesFrom",
                params: { id: home._id }, // Pass the home ID as a query parameter
              })
            } // Navigate to the details page
          >
            <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Service {index + 1}</Text>
                          <Text style={styles.editText}>Service Details →</Text>
                          </View>

            {home.images.length > 0 && (
              <Image
                source={{ uri: home.images[0] }} // Display the first image
                style={styles.cardImage}
              />
            )}

            <Text style={styles.cardDetails}>{home.companyName}</Text>

            <Text style={styles.cardPrice}>Tk {home.cost}</Text>

            <Text style={styles.cardLocation}>
              {home.location && Object.keys(home.location).length > 0
                ? `${Object.keys(home.location).join(", ")}`
                : "Location not available"}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A5BFCC", // "#F8FAFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    padding: 16,
    backgroundColor: "black",
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
  },
  headerContainer: {
    backgroundColor: "#48A6A7",
    padding: 24,
    paddingTop: Platform.OS === "ios" ? 20 : 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#E0E7FF",
    textAlign: "center",
    marginTop: 4,
    letterSpacing: 0.5,
  },

  idLabel: {
    fontSize: 20,
    color: "white",
    // fontWeight: "500",
    fontWeight: "bold",
  },
  idText: {
    fontSize: 14,
    color: "white",
    fontWeight: "400",
    marginBottom: 10,
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

  input: {
    backgroundColor: "#2d3748",
    color: "white",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },

  filterContainer: {
    marginTop: 8,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    // marginTop: 8,
  },
  filterRowSort: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 12,
  },
  filterButtonPrimary: {
    backgroundColor: "#38bdf8",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    width: "49%",
  },
  filterButtonSecondary: {
    backgroundColor: "#38bdf8",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    width: "49%",
  },
  filterButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  sortText: {
    color: "white",
    fontSize: 14,
  },
  sortButton: {
    borderWidth: 1,
    borderColor: "#38bdf8",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  scrollContainer: {
    padding: 16,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#2d3748", // Light background for better contrast
    padding: 12,
    borderRadius: 15, // Rounded corners
    marginBottom: 15,
    width: "100%", // Makes the card not take full width
    alignSelf: "center", // Center align for better appearance
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8, // For Android shadow
    overflow: "hidden", // Ensures smooth corners
    borderWidth: 1,
    //   borderColor: "#f1f1f1", // Light border for the card
  },
  cardImage: {
    width: "100%",
    height: 180, // Increased height for better visuals
    borderRadius: 12,
    marginBottom: 12,
    resizeMode: "cover", // Makes sure the image fits the container
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff", // Darker color for better readability
    marginBottom: 6,
  },
  cardDetails: {
    fontSize: 16,
    color: "white", // Lighter text for the details
    marginBottom: 6,
  },
  cardLocation: {
    fontSize: 14,
    color: "#fff", // A little darker for location details
    fontStyle: "italic", // Italic style for the location
    fontWeight: "bold",
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
    // backgroundColor: "#38bdf8",
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

  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#64748B",
    fontWeight: "500",
  },
  noDataText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#64748B",
    marginBottom: 8,
  },
  noDataSubText: {
    fontSize: 14,
    color: "#94A3B8",
    textAlign: "center",
  },


  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#38bdf8",
  },
  editText: {
    fontSize: 16,
    color: "#38bdf8",
    fontWeight: "500",
  },
});

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  statusBarWrapper: {
    marginBottom: 33, // Adjust the bottom margin as needed
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  imageScroll: {
    marginTop: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 16,
    color: "#555",
  },
});

export default AllHomesPage;
