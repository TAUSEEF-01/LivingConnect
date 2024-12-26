// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Image, ActivityIndicator, Alert, ScrollView } from "react-native";
// import axios from "axios";

// const HomeDetailsPage = ({ route }) => {
//   const { homeId } = route.params;
//   const [home, setHome] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchHomeDetails = async () => {
//     try {
//       const response = await axios.get(
//         `http://192.168.50.242:5000/houseDetails/get-homes-details/${homeId}`
//       );
//       setHome(response.data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch home details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchHomeDetails();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#007BFF" />
//       </View>
//     );
//   }

//   if (!home) {
//     return (
//       <View style={styles.noDataContainer}>
//         <Text style={styles.noDataText}>Home details not available.</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{home.PropertyType}</Text>
//       <Text style={styles.subtitle}>
//         Rent: ${home.rent} ({home.rentPeriod})
//       </Text>
//       <Text style={styles.details}>
//         Location: {home.location.city}, {home.location.area}, {home.location.road}
//       </Text>
//       <Text style={styles.details}>
//         Beds: {home.details.beds}, Baths: {home.details.baths}, Balcony:{" "}
//         {home.details.balcony}, Size: {home.details.size} sq.m.
//       </Text>
//       <ScrollView horizontal style={styles.imageScroll}>
//         {home.images.map((image, index) => (
//           <Image
//             key={index}
//             source={{ uri: image }}
//             style={styles.image}
//           />
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   // Your styles here
// });

// export default HomeDetailsPage;










// // #########################################################################
// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, Alert } from "react-native";
// import axios from "axios";
// import { useSearchParams } from "expo-router";

// const HomeDetailsPage = () => {
//   const { homeId } = useSearchParams(); // Get the dynamic home ID
//   const [home, setHome] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchHomeDetails = async () => {
//     try {
//       const response = await axios.get(
//         `http://192.168.50.242:5000/houseDetails/get-homes-details/${homeId}`
//       );
//       setHome(response.data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch home details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchHomeDetails();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#007BFF" />
//       </View>
//     );
//   }

//   if (!home) {
//     return (
//       <View style={styles.noDataContainer}>
//         <Text style={styles.noDataText}>Home details not available.</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>{home.PropertyType}</Text>
//       <Text style={styles.subtitle}>
//         Rent: ${home.rent} ({home.rentPeriod})
//       </Text>
//       <Text style={styles.details}>
//         Location: {home.location.city}, {home.location.area}, {home.location.road}
//       </Text>
//       <Text style={styles.details}>
//         Beds: {home.details.beds}, Baths: {home.details.baths}, Balcony: {home.details.balcony}, Size: {home.details.size} sq.m.
//       </Text>
//       <ScrollView horizontal style={styles.imageScroll}>
//         {home.images.map((image, index) => (
//           <Image
//             key={index}
//             source={{ uri: image }}
//             style={styles.image}
//           />
//         ))}
//       </ScrollView>
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
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: "#555",
//     marginBottom: 8,
//   },
//   details: {
//     fontSize: 16,
//     marginBottom: 4,
//   },
//   imageScroll: {
//     marginTop: 8,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 8,
//     marginRight: 8,
//   },
//   noDataContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   noDataText: {
//     fontSize: 18,
//     color: "#555",
//   },
// });

// export default HomeDetailsPage;







// #########################################################################


// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   Image,
//   ActivityIndicator,
//   Alert,
// } from "react-native";
// import axios from "axios";

// const HomeDetailsPage = () => {
//   const [home, setHome] = useState(null); // To store the single home object
//   const [loading, setLoading] = useState(true);

//   // Fetch home details from the backend
//   const fetchHomeDetails = async () => {
//     try {
//       const response = await axios.get(
//         "http://192.168.50.242:5000/houseDetails/get-homes-details/67641be675a585b5610f677c"
//       );
//       console.log(response.data); // Log response to verify structure
//       setHome(response.data); // Set the home data
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch home details.");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchHomeDetails();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#007BFF" />
//       </View>
//     );
//   }

//   if (!home) {
//     return (
//       <View style={styles.noDataContainer}>
//         <Text style={styles.noDataText}>No home details found.</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.card}>
//         {/* Property Type and Rent */}
//         <Text style={styles.title}>
//           {home.PropertyType} - ${home.rent} ({home.rentPeriod})
//         </Text>
//         {/* Location */}
//         <Text style={styles.subtitle}>
//           {home.location.city}, {home.location.area}, {home.location.road}
//         </Text>
//         {/* Details */}
//         <Text style={styles.details}>
//           Beds: {home.details.beds}, Baths: {home.details.baths}, Size:{" "}
//           {home.details.size || "N/A"} sq.m.
//         </Text>
//         <Text style={styles.details}>
//           Balcony: {home.details.balcony}, Floor:{" "}
//           {home.details.floor || "N/A"}
//         </Text>
//         {/* Availability */}
//         <Text style={styles.details}>
//           Available:{" "}
//           {new Date(home.availability.from).toLocaleDateString()} -{" "}
//           {new Date(home.availability.to).toLocaleDateString()}
//         </Text>
//         {/* Facilities */}
//         <Text style={styles.details}>
//           Member Restriction: {home.memberRestriction || "None"}
//         </Text>
//         {/* Images */}
//         <ScrollView horizontal style={styles.imageScroll}>
//           {home.images.map((image, index) => (
//             <Image
//               key={index}
//               source={{ uri: image }} // Replace `image` with full URL if needed
//               style={styles.image}
//             />
//           ))}
//         </ScrollView>
//       </View>
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

// export default HomeDetailsPage;










// // 33333333333333333333333333333333333333333333333333333333333333333333333333333333333333

// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, Alert } from "react-native";
// import { useLocalSearchParams } from "expo-router";
// import axios from "axios";

// const HomeDetailsPage = () => {
//   const { homeId } = useLocalSearchParams(); // Changed from useSearchParams to useLocalSearchParams
//   const [home, setHome] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchHomeDetails = async () => {
//     try {
//       const response = await axios.get(`http://192.168.50.242:5000/houseDetails/get-homes-details/${homeId}`);
//       setHome(response.data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch home details.");
//       console.error("Error fetching home details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (homeId) {
//       fetchHomeDetails();
//     } else {
//       setLoading(false);
//       Alert.alert("Error", "No home ID provided");
//     }
//   }, [homeId]);

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#007BFF" />
//       </View>
//     );
//   }

//   if (!home) {
//     return (
//       <View style={styles.loaderContainer}>
//         <Text style={styles.errorText}>Home details not found</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>{home.PropertyType}</Text>
//       <Text style={styles.details}>
//         Rent: ${home.rent} ({home.rentPeriod})
//       </Text>
//       <ScrollView horizontal style={styles.imageContainer}>
//         {home.images.map((image, index) => (
//           <Image 
//             key={index} 
//             source={{ uri: image }} 
//             style={styles.image}
//             resizeMode="cover"
//           />
//         ))}
//       </ScrollView>
      
//       <View style={styles.locationContainer}>
//         <Text style={styles.sectionTitle}>Location</Text>
//         <Text style={styles.locationText}>
//           {home.location?.city}, {home.location?.area}, {home.location?.road}
//         </Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//     color: '#333',
//   },
//   details: {
//     fontSize: 18,
//     marginBottom: 16,
//     color: '#666',
//   },
//   imageContainer: {
//     marginBottom: 20,
//   },
//   image: {
//     width: 300,
//     height: 200,
//     marginRight: 12,
//     borderRadius: 8,
//   },
//   locationContainer: {
//     marginTop: 20,
//     padding: 16,
//     backgroundColor: '#f8f8f8',
//     borderRadius: 8,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginBottom: 8,
//     color: '#333',
//   },
//   locationText: {
//     fontSize: 16,
//     color: '#666',
//     lineHeight: 24,
//   },
//   errorText: {
//     fontSize: 16,
//     color: '#666',
//   },
// });

// export default HomeDetailsPage;


import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";

const HomeDetailsPage = () => {
  const { homeId } = useLocalSearchParams(); // Get homeId from router params
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchHomeDetails = async () => {
    try {
      if (!homeId) throw new Error("No home ID provided");
      const response = await axios.get(
        `http://192.168.50.242:5000/houseDetails/get-homes-details/${homeId}`
      );
      setHome(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch home details.");
      console.error("Error fetching home details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeDetails();
  }, [homeId]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (!home) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.errorText}>Home details not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>{home?.PropertyType || "N/A"}</Text>
      <Text style={styles.rent}>
        Rent: ${home?.rent || 0} ({home?.rentPeriod || "N/A"})
      </Text>

      {/* Image Gallery */}
      <ScrollView horizontal style={styles.imageContainer}>
        {home?.images?.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        )) || (
          <Text style={styles.errorText}>No images available</Text>
        )}
      </ScrollView>

      {/* Location Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.text}>
          {home?.location?.city || "N/A"}, {home?.location?.area || "N/A"}
        </Text>
        <Text style={styles.text}>
          Road: {home?.location?.road || "N/A"}, House:{" "}
          {home?.location?.houseNumber || "N/A"}
        </Text>
      </View>

      {/* Property Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Property Details</Text>
        <Text style={styles.text}>Beds: {home?.details?.beds || 0}</Text>
        <Text style={styles.text}>Baths: {home?.details?.baths || 0}</Text>
        <Text style={styles.text}>
          Size: {home?.details?.size || "N/A"} sq.m.
        </Text>
        <Text style={styles.text}>
          Balcony: {home?.details?.balcony || 0}, Floor:{" "}
          {home?.details?.floor || "N/A"}
        </Text>
      </View>

      {/* Facilities */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Facilities</Text>
        <Text style={styles.text}>
          {Object.entries(home?.facitlities || {})
            .filter(([_, value]) => value)
            .map(([key]) => key.replace(/([A-Z])/g, " $1"))
            .join(", ") || "None"}
        </Text>
      </View>

      {/* Availability */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Availability</Text>
        <Text style={styles.text}>
          From:{" "}
          {home?.availability?.from
            ? new Date(home.availability.from).toLocaleDateString()
            : "N/A"}
        </Text>
        <Text style={styles.text}>
          To:{" "}
          {home?.availability?.to
            ? new Date(home.availability.to).toLocaleDateString()
            : "N/A"}
        </Text>
      </View>
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  rent: {
    fontSize: 18,
    fontWeight: "600",
    color: "#007BFF",
    marginBottom: 16,
  },
  imageContainer: {
    marginBottom: 20,
    flexDirection: "row",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  errorText: {
    fontSize: 16,
    color: "#666",
  },
});

export default HomeDetailsPage;
