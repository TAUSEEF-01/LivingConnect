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
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

const AllHomesPage = () => {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Used for navigation

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
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (homes.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>No homes available.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {homes.map((home) => (
        <TouchableOpacity
          key={home._id}
          style={styles.card}
          onPress={() =>
            //  router.push("/pages/HomeDetails")

            router.push({
                pathname: "/pages/HomeDetails",
                params: { homeId: home._id }, // Pass the home ID as a query parameter
              })

          } // Navigate to the details page
        >
          <Text style={styles.title}>
            {home.PropertyType} - ${home.rent} ({home.rentPeriod})
          </Text>
          <Text style={styles.subtitle}>
            {home.location.city}, {home.location.area}, {home.location.road}
          </Text>
          <ScrollView horizontal style={styles.imageScroll}>
            {home.images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.image}
              />
            ))}
          </ScrollView>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
