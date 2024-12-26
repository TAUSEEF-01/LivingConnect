// // import React, { useEffect, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   ScrollView,
// //   StyleSheet,
// //   Image,
// //   ActivityIndicator,
// //   Alert,
// // } from "react-native";
// // import axios from "axios";

// // const AllHomesPage = () => {
// //   const [homes, setHomes] = useState([]); // State to hold home details
// //   const [loading, setLoading] = useState(true);

// //   // Fetch all home details from the backend
// //   const fetchAllHomeDetails = async () => {
// //     try {
// //       const response = await axios.get(
// //         "http://192.168.50.242:5000/houseDetails/get-all-Homes-details"
// //       );
// //       setHomes(response.data);
// //       console.log(response.data); // Log data for debugging
// //     } catch (error) {
// //       Alert.alert("Error", "Failed to fetch all home details.");
// //       console.error(error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchAllHomeDetails();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <View style={styles.loaderContainer}>
// //         <ActivityIndicator size="large" color="#007BFF" />
// //       </View>
// //     );
// //   }

// //   if (homes.length === 0) {
// //     return (
// //       <View style={styles.noDataContainer}>
// //         <Text style={styles.noDataText}>No homes available.</Text>
// //       </View>
// //     );
// //   }

// //   return (
// //     <ScrollView style={styles.container}>
// //       {homes.map((home) => (
// //         <View key={home._id} style={styles.card}>
// //           {/* Property Type and Rent */}
// //           <Text style={styles.title}>
// //             {home.PropertyType} - ${home.rent} ({home.rentPeriod})
// //           </Text>
// //           {/* Location */}
// //           <Text style={styles.subtitle}>
// //             {home.location.city}, {home.location.area}, {home.location.road}
// //           </Text>
// //           {/* Details */}
// //           <Text style={styles.details}>
// //             Beds: {home.details.beds}, Baths: {home.details.baths}, Size:{" "}
// //             {home.details.size || "N/A"} sq.m.
// //           </Text>
// //           <Text style={styles.details}>
// //             Balcony: {home.details.balcony}, Floor:{" "}
// //             {home.details.floor || "N/A"}
// //           </Text>
// //           {/* Availability */}
// //           <Text style={styles.details}>
// //             Available:{" "}
// //             {new Date(home.availability.from).toLocaleDateString()} -{" "}
// //             {new Date(home.availability.to).toLocaleDateString()}
// //           </Text>
// //           {/* Facilities */}
// //           <Text style={styles.details}>
// //             Facilities:{" "}
// //             {Object.entries(home.facitlities || {})
// //               .filter(([_, value]) => value)
// //               .map(([key]) => key)
// //               .join(", ") || "None"}
// //           </Text>
// //           {/* Images */}
// //           <ScrollView horizontal style={styles.imageScroll}>
// //             {home.images.map((image, index) => (
// //               <Image
// //                 key={index}
// //                 source={{ uri: image }} // Replace `image` with full URL if needed
// //                 style={styles.image}
// //               />
// //             ))}
// //           </ScrollView>
// //         </View>
// //       ))}
// //     </ScrollView>
// //   );
// // };

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ActivityIndicator,
//   Alert,
// } from "react-native";
// import axios from "axios";
// import { router } from "expo-router";

// const AllHomesPage = ({ navigation }) => {
//   const [homes, setHomes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchAllHomeDetails = async () => {
//     try {
//       const response = await axios.get(
//         "http://192.168.50.242:5000/houseDetails/get-all-Homes-details"
//       );
//       setHomes(response.data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch all home details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllHomeDetails();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#007BFF" />
//       </View>
//     );
//   }

//   if (homes.length === 0) {
//     return (
//       <View style={styles.noDataContainer}>
//         <Text style={styles.noDataText}>No homes available.</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       {homes.map((home) => (
//         <TouchableOpacity
//           key={home._id}
//           style={styles.card}
//           onPress={() =>
//             // navigation.navigate("", { homeId: home._id })
//             router.push("/pages/HomeDetails", { homeId: home._id })

//         }
//         >
//           <Text style={styles.title}>
//             {home.PropertyType} - ${home.rent} ({home.rentPeriod})
//           </Text>
//           <Text style={styles.subtitle}>
//             {home.location.city}, {home.location.area}, {home.location.road}
//           </Text>
//           <ScrollView horizontal style={styles.imageScroll}>
//             {home.images.map((image, index) => (
//               <Image
//                 key={index}
//                 source={{ uri: image }}
//                 style={styles.image}
//               />
//             ))}
//           </ScrollView>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f9f9f9",
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   noDataContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   noDataText: {
//     fontSize: 16,
//     color: "#555",
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//     elevation: 3,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#555",
//     marginBottom: 8,
//   },
//   details: {
//     fontSize: 14,
//     marginBottom: 4,
//   },
//   imageScroll: {
//     marginTop: 8,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginRight: 8,
//   },
// });

// export default AllHomesPage;

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
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

import SidePanel from "../sidePanel/sidePanel";

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
      const response = await axios.get(
        "http://192.168.50.242:5000/houseDetails/get-all-Homes-details"
      );
      setHomes(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch all home details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllHomeDetails();
  }, []);

  if (loading) {
    return (
      <View style={localStyles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (homes.length === 0) {
    return (
      <View style={localStyles.noDataContainer}>
        <Text style={localStyles.noDataText}>No homes available.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Sidebar */}
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

        {/* Banner */}

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
                uri: "https://images.pexels.com/photos/6045328/pexels-photo-6045328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }} // Replace with actual image URL
              style={styles.bannerImage}
            />
          </View>
        </View>

        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TextInput
              style={styles.input}
              placeholder="Where would you like to live?"
              placeholderTextColor="gray"
            />
          </View>

          {/* Filters and Sorting */}
          <View style={styles.filterContainer}>
            <View style={styles.filterRow}>
              <TouchableOpacity style={styles.filterButtonPrimary}>
                <Text style={styles.filterButtonText}>Show map</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButtonSecondary}>
                <Text style={styles.filterButtonText}>Show filters</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.filterRowSort}>
              <Text style={styles.sortText}>Sort by</Text>
              <TouchableOpacity style={styles.sortButton}>
                <Text style={styles.filterButtonText}>Newest listings</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView style={styles.scrollContainer}>
            {/* <ScrollView style={localStyles.container}> */}
            {homes.map((home) => (
              <TouchableOpacity
                key={home._id}
                style={styles.card}
                onPress={() =>
                  router.push({
                    pathname: "/pages/HomeDetails",
                    params: { homeId: home._id }, // Pass the home ID as a query parameter
                  })
                } // Navigate to the details page
              >
                {/* <Text style={localStyles.title}>
                  {home.PropertyType} - ${home.rent} ({home.rentPeriod})
                </Text>
                <Text style={localStyles.subtitle}>
                  {home.location.city}, {home.location.area},{" "}
                  {home.location.road}
                </Text>
                <ScrollView horizontal style={localStyles.imageScroll}>
                  {/* {home.images.map((image, index) => (
                    <Image
                      key={index}
                      source={{ uri: image }}
                      style={localStyles.image}
                    />
                  ))} */}

                  {home.images.length > 0 && (
                    <Image
                      source={{ uri: home.images[0] }} // Display the first image
                      // style={localStyles.image}

                      style={styles.cardImage}
                    />
                  )} 

                  <Text style={styles.cardPrice}>
                    €{home.rent}
                  </Text>


                  <Text style={styles.cardDetails}>
                    {home.details.beds} beds | {home.details.baths}{" "}
                    baths | {home.details.size} m²
                  </Text>
                  
                  <Text style={styles.cardLocation}>
                    {home.location.city}, {home.location.area}
                  </Text>
                  
                {/* </ScrollView> */}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    padding: 16,
    backgroundColor: "black",
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
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
    // backgroundColor: "#1f2937",
    // color: "white",
    // padding: 12,
    // borderRadius: 8,

    backgroundColor: "#2d3748",
    color: "white",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    // marginBottom: 1,
    // marginTop: 1
  },

  filterContainer: {
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
  },

  //   cardImage: {
  //     height: 160,
  //     width: "100%",
  //   },
  //   cardContent: {
  //     padding: 16,
  //   },
  //   cardTitle: {
  //     color: "white",
  //     fontSize: 18,
  //     fontWeight: "bold",
  //   },
  //   cardSubText: {
  //     color: "#9ca3af",
  //     fontSize: 14,
  //     marginTop: 4,
  //   },
  //   cardFooter: {
  //     color: "#6b7280",
  //     fontSize: 12,
  //     marginTop: 8,
  //   },

  //   pageContainer: {
  //     flex: 1,
  //     backgroundColor: "grey", // Set the background color of the entire page
  //     padding: 10,
  //   },
  card: {
    backgroundColor: "#2d3748", // Light background for better contrast
    padding: 20,
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
    transition: "all 0.3s ease", // Smooth transition for any interaction
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
    color: "#white", // Lighter text for the details
    marginBottom: 6,
  },
  cardLocation: {
    fontSize: 14,
    color: "#fff", // A little darker for location details
    fontStyle: "italic", // Italic style for the location
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

  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
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
