// import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import { router } from "expo-router";
// import styles from "../../styles";

// const SidePanel = ({ isVisible, onClose }) => {
//   const handleLogout = async () => {
// Alert.alert(
//   "Log Out",
//   "Are you sure you want to log out?",
//   [
//     {
//       text: "Cancel",
//       onPress: () => null,
//       style: "cancel",
//     },
//     {
//       text: "Yes",
//       onPress: async () => {
//         try {
//           const token = await AsyncStorage.getItem("userToken");
//           if (token) {
//             await axios.post(
//               "https://livingconnect-backend.vercel.app/logout",
//               {},
//               { headers: { Authorization: `Bearer ${token}` } }
//             );
//           }
//           await AsyncStorage.removeItem("userToken");
//           router.replace("/login");
//         } catch (error) {
//           console.error("Logout error:", error);
//         }
//       },
//     },
//   ],
//   { cancelable: false }
// );
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

// const localStyles = StyleSheet.create({
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

//   overlay: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.21)", // Dark overlay
//     zIndex: 1, // Below the side panel
//   },

//   contactButton: {
//     padding: 12,
//     // backgroundColor: "#38bdf8",
//     backgroundColor: "#38bdf8",
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute", // Keep as absolute
//     bottom: "20%", // Fixed pixel value instead of percentage
//     alignSelf: "center",
//     width: "80%", // Optional: make button width consistent
//   },

//   aboutButton: {
//     padding: 12,
//     // backgroundColor: "#22c55e",//38bdf8
//     backgroundColor: "#38bdf8",
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute", // Keep as absolute
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
//     bottom: "8%", // Fixed pixel value instead of percentage
//     alignSelf: "center",
//     width: "80%", // Optional: make button width consistent
//   },
// });

// export default SidePanel;

import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";
import styles from "../../styles";

const SidePanel = ({ isVisible, onClose, userName = "User" }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");

        if (token) {
          const response = await axios.get(
            "https://livingconnect-backend.vercel.app/auth/adminCheck",
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setIsAdmin(response.data?.isAdmin || false);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = async () => {
    // Alert.alert(
    //   "Log Out",
    //   "Are you sure you want to log out?",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => null,
    //       style: "cancel",
    //     },
    //     {
    //       text: "Yes",
    //       onPress: async () => {
    //         try {
    //           const keys = await AsyncStorage.getAllKeys();
    //            console.log("AsyncStorage keys:", keys); // Logs all keys in AsyncStorage

    //           const token = await AsyncStorage.getItem("userToken");
    //           if (token) {
    //             await axios.post(
    //               "https://livingconnect-backend.vercel.app/logout",
    //               //   {},
    //               { headers: { Authorization: `Bearer ${token}` } }
    //             );
    //           }
    //           await AsyncStorage.removeItem("userToken");

    //           router.replace("/login");
    //         } catch (error) {
    //           console.error("Logout error:", error);
    //         }
    //       },
    //     },
    //   ],
    //   { cancelable: false }
    // );

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
              const token = await AsyncStorage.getItem("userToken");
              if (token) {
                await axios.post(
                  "https://livingconnect-backend.vercel.app/auth/logout",
                  // "https://livingconnect-backend.vercel.app/auth/logout",
                  {},
                  { headers: { Authorization: `Bearer ${token}` } }
                );
              }
              await AsyncStorage.removeItem("userToken");
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
    <>
      {/* Overlay */}
      {isVisible && (
        <TouchableOpacity
          style={localStyles.overlay}
          activeOpacity={1}
          onPress={onClose}
        />
      )}
      {/* Sidebar */}
      <View
        style={[
          localStyles.sidePanel,
          { transform: [{ translateX: isVisible ? 0 : -300 }] },
        ]}
      >
        {/* Profile Section */}
        {/* <View style={localStyles.profileSection}>
          <View style={localStyles.profileCircle}>
            <Text style={localStyles.profileInitial}>
              {userName.charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={localStyles.profileName}>Profile</Text>
        </View> */}

        <TouchableOpacity
          style={localStyles.profileSection}
          onPress={() => router.push("/profile/showProfile")} // Adjust the path as per your routing setup
        >
          <View style={localStyles.profileCircle}>
            <Text style={localStyles.profileInitial}>
              {userName.charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={localStyles.profileName}> Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={localStyles.messageButton}
          onPress={() => router.push("/messages/ChatsScreen")}
        >
          <Text style={localStyles.buttonText}>Message History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={localStyles.manageFavButton}
          onPress={() => router.push("/screens/contact_us")}
        >
          <Text style={localStyles.buttonText}>Manage Favorite</Text>
        </TouchableOpacity>

        {/* Conditionally Render Admin Button */}
        {isAdmin && (
          <TouchableOpacity
            style={localStyles.adminButton}
            onPress={() => router.push("/pages/Admin/adminPage")}
          >
            <Text style={localStyles.buttonText}>Admin Panel</Text>
          </TouchableOpacity>
        )}

        {/* <TouchableOpacity
          style={localStyles.rentAHome}
          onPress={() => router.push("/Rent/rentAHomeForm")}
          // onPress={() => router.push("/Rent/temp")}
          // onPress={() => router.push("/Rent/testImageUpload")}
        >
          <Text style={localStyles.buttonText}>Rent A Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={localStyles.provideServices}
          // onPress={() => router.push("/services/deliveryServices")}
          // onPress={() => router.push("/Rent/rentAHomeForm")}
          onPress={() => router.push("/pages/HomeInfoPage/homeDetailsShowPage")}
          // onPress={() => router.push("/Rent/testImageUpload")}
        >
          <Text style={localStyles.buttonText}>Provide Services</Text>
        </TouchableOpacity> */}

        {/* Navigation Buttons */}
        <TouchableOpacity
          style={localStyles.contactButton}
          onPress={() => router.push("/screens/contact_us")}
        >
          <Text style={localStyles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={localStyles.aboutButton}
          onPress={() => router.push("/screens/about_us")}
        >
          <Text style={localStyles.buttonText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={localStyles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={localStyles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const localStyles = StyleSheet.create({
  sidePanel: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: 300,
    backgroundColor: "black", //"#a9d9fc",
    // padding: 16,
    zIndex: 2,
    border: "1px solid #ccc",
    transform: [{ translateX: -300 }],
    transition: "transform 0.3s ease-in-out",
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(61, 61, 61, 0.08)", // "rgba(54, 54, 54, 0.1)",
    zIndex: 1,
  },

  //   profileSection: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //     marginBottom: 24,
  //     marginTop: 15,
  //     marginLeft: 20,
  //   },
  // profileSection: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //     marginBottom: 24,
  //     marginTop: 15,
  //     marginLeft: 20,
  //     borderColor: "black", // Border color
  //     borderWidth: 2,       // Border width
  //     borderRadius: 8,      // Optional: Add rounded corners
  //     padding: 10,          // Add padding inside the bordered area
  //     backgroundColor: "#38bdf8"
  //   },

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 15,
    marginLeft: 12,
    marginRight: 12,
    borderColor: "black", // Border color
    borderWidth: 2, // Border width
    borderRadius: 8, // Optional: Add rounded corners
    padding: 10, // Add padding inside the bordered area
    backgroundColor: "#38bdf8",

    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // For Android shadow support
  },

  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#0a0a0a", //"#38bdf8", // Accent color
    justifyContent: "center",
    alignItems: "center",
  },

  profileInitial: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  profileName: {
    marginLeft: 30,
    fontSize: 24,
    fontWeight: "bold",
    color: "Black",
  },

  buttonText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },

  rentAHome: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    marginTop: 60,
    marginLeft: 12,
    marginRight: 12,
    borderColor: "black", // Border color
    borderWidth: 2, // Border width
    borderRadius: 8, // Optional: Add rounded corners
    padding: 16, // Add padding inside the bordered area
    backgroundColor: "#8beef0",

    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // For Android shadow support
  },

  provideServices: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    marginLeft: 12,
    marginRight: 12,
    borderColor: "black", // Border color
    borderWidth: 2, // Border width
    borderRadius: 8, // Optional: Add rounded corners
    padding: 16, // Add padding inside the bordered area
    backgroundColor: "#8beef0",

    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // For Android shadow support
  },

  // padding: 12,
  // backgroundColor: "#8beef0",
  // // borderRadius: 8,
  // justifyContent: "center",
  // alignItems: "center",
  // position: "absolute",
  // bottom: "70%",
  // // width: "100%",         // Fill the entire width of the sidebar
  // borderColor: "black",  // Border color
  // borderWidth: 2,        // Border width
  // marginLeft: 12,
  // marginRight: 12,

  // // Shadow properties
  // shadowColor: "#000", // Shadow color
  // shadowOffset: { width: 0, height: 2 }, // Shadow position
  // shadowOpacity: 0.25, // Shadow transparency
  // shadowRadius: 3.84,  // Shadow blur radius
  // elevation: 5,        // For Android shadow support
  //   },

  //   rentAHome: {
  //     padding: 12,
  //     backgroundColor: "#8beef0",
  //     borderRadius: 8,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     position: "absolute",
  //     bottom: "70%",
  //     alignSelf: "center",
  //     width: "80%",
  //     borderColor: "black", // Border color
  //     borderWidth: 2,       // Border width

  //     // Shadow properties
  //     shadowColor: "#000", // Shadow color
  //     shadowOffset: { width: 0, height: 2 }, // Shadow position
  //     shadowOpacity: 0.25, // Shadow transparency
  //     shadowRadius: 3.84,  // Shadow blur radius
  //     elevation: 5,        // For Android shadow support
  //   },

  //   contactButton: {
  //     padding: 12,
  //     backgroundColor: "#38bdf8",
  //     borderRadius: 8,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     position: "absolute",
  //     bottom: "20%",
  //     alignSelf: "center",
  //     width: "80%",
  //     borderColor: "black", // Border color
  //     borderWidth: 2,       // Border width
  //     // borderRadius: 8,      // Optional: Add rounded corners
  //   },

  //   aboutButton: {
  //     padding: 12,
  //     backgroundColor: "#38bdf8",
  //     borderRadius: 8,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     position: "absolute",
  //     bottom: "28%",
  //     alignSelf: "center",
  //     width: "80%",
  //     borderColor: "black", // Border color
  //     borderWidth: 2,       // Border width

  //   },

  aboutButton: {
    padding: 12,
    backgroundColor: "#38bdf8", //8b97f0
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "28%",
    alignSelf: "center",
    width: "90%",
    borderColor: "black", // Border color
    borderWidth: 2, // Border width

    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // For Android shadow support
  },

  contactButton: {
    padding: 12,
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "21%",
    alignSelf: "center",
    width: "90%",
    borderColor: "black", // Border color
    borderWidth: 2, // Border width

    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // For Android shadow support
  },

  messageButton: {
    padding: 12,
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "82%",
    alignSelf: "center",
    width: "90%",
    borderColor: "black", // Border color
    borderWidth: 2, // Border width

    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // For Android shadow support
  },

  manageFavButton: {
    padding: 12,
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "75%",
    alignSelf: "center",
    width: "90%",
    borderColor: "black", // Border color
    borderWidth: 2, // Border width

    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // For Android shadow support
  },

  adminButton: {
    padding: 12,
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "68%",
    alignSelf: "center",
    width: "90%",
    borderColor: "black", // Border color
    borderWidth: 2, // Border width

    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // For Android shadow support
  },

  logoutButton: {
    padding: 12,
    backgroundColor: "red", //"#ef4444",
    // backgroundColor: "#ef4444",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "8%",
    alignSelf: "center",
    width: "90%",

    borderColor: "black", // Border color
    borderWidth: 2, // Border width

    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // For Android shadow support
  },

  //   logoutButton: {
  //     padding: 12,
  //     backgroundColor: "#ef4444",
  //     borderRadius: 8,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     position: "absolute",
  //     bottom: "8%",
  //     alignSelf: "center",
  //     width: "80%",

  //     borderColor: "black", // Border color
  //     borderWidth: 2,       // Border width
  //   },
});

export default SidePanel;

/*


const [isSidePanelVisible, setSidePanelVisible] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const toggleSidePanel = () => {
    setSidePanelVisible(!isSidePanelVisible);
  };




    <SafeAreaView style={{ flex: 1 }}>
      <SidePanel
        isVisible={isSidePanelVisible}
        onClose={() => setSidePanelVisible(false)}
      />

      <ScrollView style={styles.container}>
        {isSidePanelVisible && (
          <TouchableOpacity
            style={[
              styles.overlay,
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

        <View style={styles.banner}>
          <TouchableOpacity
            onPress={toggleSidePanel}
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              zIndex: 100,
            }}
          >
            <View style={styles.menuIcon}>
              <View style={styles.bar} />
              <View style={styles.bar} />
              <View style={styles.bar} />
            </View>
          </TouchableOpacity>

          <View style={styles.bannerImageContainer}>
            <Image
              source={{
                uri: "http://images.pexels.com/photos/6045328/pexels-photo-6045328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }} // Replace with actual image URL
              style={styles.bannerImage}
            />
          </View>



        </View>
      </ScrollView>
    </SafeAreaView>





*/

/*

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

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.21)", // Dark overlay
    zIndex: 1, // Below the side panel
  },


*/
