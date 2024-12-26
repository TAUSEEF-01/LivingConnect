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

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface OwnerInfo {
  email: string;
  name: string;
  contactNumber: string;
}


const HomeDetailsPage = () => {
  const { homeId } = useLocalSearchParams(); // Get homeId from router params
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState<OwnerInfo | null>(null);

  // useEffect(() => {
  //   async function fetchHomeDetails() {


  const fetchHomeDetails = async () => {

    try {
      if (!homeId) throw new Error("No home ID provided");
      const response = await axios.get(
        `http://192.168.50.242:5000/houseDetails/get-homes-details/${homeId}`
      );

      // console.log("Fetched home details:", response.data);
      // console.log("fnc1");
      setHome(response.data);
      // fetchUserProfile();
    } catch (error) {
      Alert.alert("Error", "Failed to fetch home details.");
      console.error("Error fetching home details:", error);
    } finally {
      setLoading(false);
    }
  };
    // }

  useEffect(() => {
    fetchHomeDetails();
    // fetchUserProfile();
  // }, [homeId]);
    }, []);


  
  
  // // useEffect(() => {
  //   // async function fetchUserProfile() {

  // const fetchUserProfile = async () => {
  //   console.log("fetchUserProfile userId: ", home.userId);
  //   // if(!home.userId) return;

  //   try {
  //     if (!home.userId) throw new Error("No User ID provided");
  //     // console.log("fnc2");
  //     // console.log("fetchUserProfile userId: ", home.userId);

  //     // setLoading(true);
  //     // const response = await axios.get(
  //     //   "http://192.168.50.242:5000/profile/getUserInfo/id",
  //     //   {
  //     //     params: { userId: home?.userId }, // Pass userId as a query parameter
  //     //   }
  //     //   // {
  //     //     // headers: {
  //     //     //   Authorization: `Bearer ${token}`,
  //     //     //   "Content-Type": "application/json",
  //     //     // },
  //     //     // {
  //     //     //   "userId": home?.userId,
  //     //     // },
  //     //     // {
  //     //     //   headers: {
  //     //     //     // Add headers if required
  //     //     //     // Authorization: `Bearer ${token}`,
  //     //     //     "Content-Type": "application/json",
  //     //     //   },
  //     //     // },
  //     //   // }
  //     // );

  //     // const response = await axios.get(
  //     //   "http://192.168.50.242:5000/profile/getUserInfo/id",
  //     //   {
  //     //     params: { userId: home.userId }, // Pass userId as a query parameter
  //     //   }
  //     // );

  //     const response = await axios.get(
  //       `http://192.168.50.242:5000/profile/getUserInfo/${home.userId}`
  //     );

  //     console.log(response.data);

  //     setProfile(response.data);
  //     // setLoading(false);
  //   } catch (err) {
  //     console.error("Failed to fetch profile:", err);
  //     setLoading(false);
  //   }
  // };
  // // }

  // useEffect(() => {
  //   fetchUserProfile();
  // }, []);


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
    // <ScrollView style={styles.container}>
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <Text style={styles.title}>
          {home?.PropertyType.toUpperCase() || "N/A"}
        </Text>
        <Text style={styles.rent}>
          Rent: {home?.rent || 0} Tk ({home?.rentPeriod || "N/A"})
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
          )) || <Text style={styles.errorText}>No images available</Text>}
        </ScrollView>

        <View>
          <Text style={styles.imageText}>
            Images ({home?.images?.length || 0})
          </Text>
        </View>

        <View style={styles.infoSection}>
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
              Balcony: {home?.details?.balcony || 0}
            </Text>
            <Text style={styles.text}>
              Floor: {home?.details?.floor || "N/A"}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Member Restrictions</Text>
            <Text style={styles.memberRestriction}>
              {home?.memberRestriction || "N/A"}
            </Text>
          </View>

          {/* Facilities */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Facilities</Text>
            {/* <Text style={styles.text}>
          {Object.entries(home?.facitlities || {})
            .filter(([_, value]) => value)
            .map(([key]) => key.replace(/([A-Z])/g, " $1"))
            .join("\n") || "None"}
        </Text> */}

            <Text style={styles.text}>
              {Object.entries(home?.facitlities || {})
                .map(
                  ([key, value]) =>
                    `${key.replace(/([A-Z])/g, " $1")}: ${value ? "Yes" : "No"}`
                )
                .join("\n") || "None"}
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

          {/* User info */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Owner</Text>
            {/* <Text style={styles.text}> */}
              {/* {profile?.email || "N/A"} */}
              {/* Email: {home.email || "N/A"} */}
            {/* </Text> */}

            {/* <Text style={styles.text}>
              Email: {home.email || "N/A"}
            </Text> */}


            {/* <Text style={styles.text}>
              Contact Number: {home.contactNumber || "N/A"}
            </Text> */}

            <Text style={styles.text}>
              Contact Number: <Text style={styles.callText}>{home.contactNumber || "N/A"}</Text>
            </Text>
            <TouchableOpacity
                style={styles.callButton}
                onPress={()=> router.push("/screens/contact_us")}
            >
                <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>
            
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: "black",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    // marginTop: 20,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#38bdf8",
    marginBottom: 12,
  },
  rent: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fa0269",
    marginBottom: 16,
  },
  imageContainer: {
    // alignContent: "center",
    alignSelf: "center",
    marginBottom: 8,
    flexDirection: "row",
  },
  image: {
    alignContent: "center",
    width: 350,
    height: 200,
    borderRadius: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  imageText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 14,
  },
  section: {
    // borderBottomWidth: 1,
    marginBottom: 20,
    backgroundColor: "#2d3748",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#fff",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  memberRestriction: {
    fontSize: 18,
    fontWeight: "600",
    color: "#02eefa",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: "#faf5f5",
    lineHeight: 24,
  },
  errorText: {
    fontSize: 16,
    color: "#666",
  },
  infoSection: {
    marginTop: 8,
    // marginBottom: 10,
  },
  callText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#02eefa",
    marginBottom: 16,
  },
  callButton: {
    // backgroundColor: "grey",
    backgroundColor: "#38bdf8",
    paddingHorizontal: 16,
    paddingVertical: 12,
    // paddingBottom: 12,
    // paddingTop: 1,

    borderRadius: 8,
    // width: 115,
    width: "100%",
    marginBottom: 1,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});

export default HomeDetailsPage;
