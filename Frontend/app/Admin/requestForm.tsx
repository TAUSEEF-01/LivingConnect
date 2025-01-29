// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   ActivityIndicator,
//   Alert,
//   TouchableOpacity,
//   Linking,
//   Platform,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { router, useLocalSearchParams } from "expo-router";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// interface OwnerInfo {
//   email: string;
//   name: string;
//   contactNumber: string;
// }

// const FormVerifyPage = () => {
//   const { homeId } = useLocalSearchParams(); // Get homeId from router params
//   const [home, setHome] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [profile, setProfile] = useState<OwnerInfo | null>(null);

//   const makeCall = (phoneNumber) => {
//     const formattedNumber =
//       Platform.OS === "android"
//         ? `tel:${phoneNumber}`
//         : `telprompt:${phoneNumber}`;

//     Linking.openURL(formattedNumber).catch((err) => {
//       console.error("Error occurred while trying to make a call:", err);
//     });
//   };

//   const fetchHomeDetails = async () => {
//     try {
//       if (!homeId) throw new Error("No home ID provided");
//       const response = await axios.get(
//         `https://livingconnect-backend.vercel.app/houseDetails/get-homes-details/${homeId}`
//         // `https://livingconnect-backend.vercel.app/houseDetails/get-homes-details/${homeId}`
//       );

//     //   console.log("Fetched home details:", response.data);
//       // console.log("fnc1");
//       setHome(response.data);
//       // fetchUserProfile();
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch home details.");
//       console.error("Error fetching home details:", error);
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
//       <View style={styles.loaderContainer}>
//         <Text style={styles.errorText}>Home details not found</Text>
//       </View>
//     );
//   }

//   const handleAccept = async (id) => {
//     try {
//       const response = await axios.patch(
//         `https://livingconnect-backend.vercel.app/houseDetails/accept/${id}`
//       );
//       Alert.alert("Success", response.data.message);
//       // Optionally, update your UI to reflect the change
//     } catch (error) {
//       Alert.alert("Error", "Failed to accept the home.");
//       console.error(error);
//     }
//   };

//   return (
//     // <ScrollView style={styles.container}>
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         {/* Header */}
//         <Text style={styles.title}>
//           {home?.PropertyType.toUpperCase() || "N/A"}
//         </Text>
//         <Text style={styles.rent}>
//           Rent: {home?.rent || 0} Tk ({home?.rentPeriod || "N/A"})
//         </Text>

//         {/* Image Gallery */}
//         <ScrollView horizontal style={styles.imageContainer}>
//           {home?.images?.map((image, index) => (
//             <Image
//               key={index}
//               source={{ uri: image }}
//               style={styles.image}
//               resizeMode="cover"
//             />
//           )) || <Text style={styles.errorText}>No images available</Text>}
//         </ScrollView>

//         <View>
//           <Text style={styles.imageText}>
//             Images ({home?.images?.length || 0})
//           </Text>
//         </View>

//         <View style={styles.infoSection}>
//           {/* Location Details */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Location</Text>
//             <Text style={styles.text}>
//               {home?.location?.city || "N/A"}, {home?.location?.area || "N/A"}
//             </Text>
//             <Text style={styles.text}>
//               Road: {home?.location?.road || "N/A"}, House:{" "}
//               {home?.location?.houseNumber || "N/A"}
//             </Text>
//           </View>

//           {/* Property Details */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Property Details</Text>
//             <Text style={styles.text}>Beds: {home?.details?.beds || 0}</Text>
//             <Text style={styles.text}>Baths: {home?.details?.baths || 0}</Text>
//             <Text style={styles.text}>
//               Size: {home?.details?.size || "N/A"} sq.m.
//             </Text>
//             <Text style={styles.text}>
//               Balcony: {home?.details?.balcony || 0}
//             </Text>
//             <Text style={styles.text}>
//               Floor: {home?.details?.floor || "N/A"}
//             </Text>
//           </View>

//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Member Restrictions</Text>
//             <Text style={styles.memberRestriction}>
//               {home?.memberRestriction || "N/A"}
//             </Text>
//           </View>

//           {/* Facilities */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Facilities</Text>
//             {/* <Text style={styles.text}>
//           {Object.entries(home?.facilities || {})
//             .filter(([_, value]) => value)
//             .map(([key]) => key.replace(/([A-Z])/g, " $1"))
//             .join("\n") || "None"}
//         </Text> */}

//             <Text style={styles.text}>
//               {Object.entries(home?.facilities || {})
//                 .map(
//                   ([key, value]) =>
//                     `${key.replace(/([A-Z])/g, " $1")}: ${value ? "Yes" : "No"}`
//                 )
//                 .join("\n") || "None"}
//             </Text>
//           </View>

//           {/* Availability */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Availability</Text>
//             <Text style={styles.text}>
//               Post Date:{" "}
//               {home?.availability?.from
//                 ? new Date(home.availability.from).toLocaleDateString()
//                 : "N/A"}
//             </Text>
//             <Text style={styles.text}>
//               Available From:{" "}
//               {home?.availability?.to
//                 ? new Date(home.availability.to).toLocaleDateString()
//                 : "N/A"}
//             </Text>
//           </View>

//           {/* User info */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Owner</Text>
//             {/* <Text style={styles.text}> */}
//             {/* {profile?.email || "N/A"} */}
//             {/* Email: {home.email || "N/A"} */}
//             {/* </Text> */}

//             {/* <Text style={styles.text}>
//               Email: {home.email || "N/A"}
//             </Text> */}

//             <Text style={styles.text}>Email: {home?.email || "N/A"}</Text>

//             <Text style={styles.text}>
//               Contact Number:{" "}
//               <Text style={styles.callText}>{home.contactNumber || "N/A"}</Text>
//             </Text>

//             <Text style={styles.text}>
//               Success:{" "}
//               <Text style={styles.callText}>{home.success ? "True" : "False"}</Text>
//             </Text>

//             <TouchableOpacity
//               style={styles.callButton}
//               // onPress={()=> router.push("/messages/CallerDialScreen")}
//               onPress={() => makeCall(home.contactNumber || "")}
//             >
//               <Text style={styles.buttonText}>Call</Text>
//             </TouchableOpacity>

//             -<TouchableOpacity
//               style={styles.callButton}
//               onPress={() => {
//                 handleAccept(home._id); // Call the function to accept
//                 router.replace("/Admin/adminPendingRequest"); // Navigate to the page
//               }}

//             >
//               <Text style={styles.buttonText}>Accept</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // padding: 16,
//     paddingVertical: 16,
//     paddingHorizontal: 10,
//     backgroundColor: "#1A1A1D",
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     // marginTop: 20,
//     textAlign: "center",
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#38bdf8",
//     marginBottom: 12,
//   },
//   rent: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#F0BB78", // "#fa0269",
//     marginBottom: 16,
//   },
//   imageContainer: {
//     // alignContent: "center",
//     alignSelf: "center",
//     marginBottom: 8,
//     flexDirection: "row",
//   },
//   image: {
//     alignContent: "center",
//     width: 350,
//     height: 200,
//     borderRadius: 8,
//     marginRight: 12,
//     borderWidth: 1,
//     borderColor: "#ddd",
//   },
//   imageText: {
//     textAlign: "center",
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 14,
//   },
//   section: {
//     // borderBottomWidth: 1,
//     marginBottom: 20,
//     backgroundColor: "#2d3748",
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: "#fff",
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//     elevation: 3,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 8,
//   },
//   memberRestriction: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#02eefa",
//     marginBottom: 16,
//   },
//   text: {
//     fontSize: 16,
//     color: "#faf5f5",
//     lineHeight: 24,
//   },
//   errorText: {
//     fontSize: 16,
//     color: "#666",
//   },
//   infoSection: {
//     marginTop: 8,
//     // marginBottom: 10,
//   },
//   callText: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#02eefa",
//     marginBottom: 16,
//   },
//   callButton: {
//     // backgroundColor: "grey",
//     backgroundColor: "#38bdf8",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     // paddingBottom: 12,
//     // paddingTop: 1,

//     borderRadius: 8,
//     // width: 115,
//     width: "100%",
//     marginBottom: 1,
//     marginTop: 10,
//   },
//   buttonText: {
//     textAlign: "center",
//     color: "white",
//   },
// });

// export default FormVerifyPage;

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
  Linking,
  Platform,
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

const FormVerifyPage = () => {
  const { homeId } = useLocalSearchParams();
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<OwnerInfo | null>(null);

  const makeCall = (phoneNumber) => {
    const formattedNumber =
      Platform.OS === "android"
        ? `tel:${phoneNumber}`
        : `telprompt:${phoneNumber}`;

    Linking.openURL(formattedNumber).catch((err) => {
      console.error("Error occurred while trying to make a call:", err);
    });
  };

  const fetchHomeDetails = async () => {
    try {
      if (!homeId) throw new Error("No home ID provided");
      const response = await axios.get(
        `https://livingconnect-backend.vercel.app/houseDetails/get-homes-details/${homeId}`
      );
      console.log("Fetched home details:", response.data);
      setHome(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch home details.");
      console.error("Error fetching home details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (id) => {
    try {
      const response = await axios.patch(
        `https://livingconnect-backend.vercel.app/houseDetails/accept/${id}`
      );
      Alert.alert("Success", response.data.message);
      // router.replace("/Admin/adminPendingRequest");
      router.back();
    } catch (error) {
      Alert.alert("Error", "Failed to accept the home.");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHomeDetails();
  }, []);

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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          {home?.PropertyType?.toUpperCase() || "N/A"}
        </Text>
        <Text style={styles.rent}>
          Rent: {home?.rent || 0} Tk ({home?.rentPeriod || "N/A"})
        </Text>

        <ScrollView horizontal style={styles.imageContainer}>
          {home?.images?.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />
          )) || (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>No images available</Text>
            </View>
          )}
        </ScrollView>

        <View>
          <Text style={styles.imageText}>
            Images ({home?.images?.length || 0})
          </Text>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Location</Text>
            <Text style={styles.text}>
              {home?.location?.city || "N/A"}, {home?.location?.area || "N/A"}
            </Text>
            <Text style={styles.text}>
              Road: {home?.location?.road || "N/A"}, House:{" "}
              {home?.location?.houseNumber || "N/A"}
            </Text>

            <TouchableOpacity
              style={styles.callButton}
              onPress={() => {
                router.push({
                  pathname: "/pages/Map/showLocationOnMap",
                  params: {
                    latitude: home.location.latitude,
                    longitude: home.location.longitude,
                    // locationName: 'My Location'
                    city: home.location.city,
                    area: home.location.area,
                  },
                });
                // console.log("recipientId: ", ownerId);
                // console.log("currentUserId: ", profile?.id);
              }}
            >
              <Text style={styles.buttonText}>Show location on map</Text>
            </TouchableOpacity>
          </View>

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

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Facilities</Text>
            <Text style={styles.text}>
              {Object.entries(home?.facilities || {})
                .map(
                  ([key, value]) =>
                    `${key.replace(/([A-Z])/g, " $1")}: ${value ? "Yes" : "No"}`
                )
                .join("\n") || "None"}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Availability</Text>
            <Text style={styles.text}>
              Post Date:{" "}
              {home?.availability?.from
                ? new Date(home.availability.from).toLocaleDateString()
                : "N/A"}
            </Text>
            <Text style={styles.text}>
              Available From:{" "}
              {home?.availability?.to
                ? new Date(home.availability.to).toLocaleDateString()
                : "N/A"}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Owner</Text>
            <Text style={styles.text}>Email: {home?.email || "N/A"}</Text>
            <Text style={styles.text}>
              Contact Number:{" "}
              <Text style={styles.callText}>{home.contactNumber || "N/A"}</Text>
            </Text>
            <Text style={styles.text}>
              Success:{" "}
              <Text style={styles.callText}>
                {home.success ? "True" : "False"}
              </Text>
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.callButton}
                onPress={() => makeCall(home.contactNumber || "")}
              >
                <Text style={styles.buttonText}>Call</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.callButton}
                onPress={() => handleAccept(home._id)}
              >
                <Text style={styles.buttonText}>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   paddingVertical: 16,
  //   paddingHorizontal: 10,
  //   backgroundColor: "#1A1A1D",
  // },
  // loaderContainer: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // title: {
  //   textAlign: "center",
  //   fontSize: 28,
  //   fontWeight: "bold",
  //   color: "#38bdf8",
  //   marginBottom: 12,
  // },
  // rent: {
  //   fontSize: 18,
  //   fontWeight: "600",
  //   color: "#F0BB78",
  //   marginBottom: 16,
  // },
  // imageContainer: {
  //   alignSelf: "center",
  //   marginBottom: 8,
  //   flexDirection: "row",
  // },
  // image: {
  //   alignContent: "center",
  //   width: 350,
  //   height: 200,
  //   borderRadius: 8,
  //   marginRight: 12,
  //   borderWidth: 1,
  //   borderColor: "#ddd",
  // },
  // errorContainer: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: 350,
  //   height: 200,
  // },
  // imageText: {
  //   textAlign: "center",
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   color: "#fff",
  //   marginBottom: 14,
  // },
  // section: {
  //   marginBottom: 20,
  //   backgroundColor: "#2d3748",
  //   padding: 16,
  //   borderRadius: 8,
  //   shadowColor: "#fff",
  //   shadowOpacity: 0.1,
  //   shadowRadius: 4,
  //   shadowOffset: { width: 0, height: 2 },
  //   elevation: 3,
  // },
  // sectionTitle: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   color: "#fff",
  //   marginBottom: 8,
  // },
  // memberRestriction: {
  //   fontSize: 18,
  //   fontWeight: "600",
  //   color: "#02eefa",
  //   marginBottom: 16,
  // },
  // text: {
  //   fontSize: 16,
  //   color: "#faf5f5",
  //   lineHeight: 24,
  // },
  // errorText: {
  //   fontSize: 16,
  //   color: "#666",
  // },
  // infoSection: {
  //   marginTop: 8,
  // },
  // callText: {
  //   fontSize: 18,
  //   fontWeight: "600",
  //   color: "#02eefa",
  //   marginBottom: 16,
  // },
  // buttonContainer: {
  //   gap: 10,
  // },
  // callButton: {
  //   backgroundColor: "#38bdf8",
  //   paddingHorizontal: 16,
  //   paddingVertical: 12,
  //   borderRadius: 8,
  //   width: "100%",
  //   marginTop: 10,
  // },
  // buttonText: {
  //   textAlign: "center",
  //   color: "white",
  // },

  container: {
    flex: 1,
    // padding: 16,
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: "#1A1A1D",
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
    color: "#F0BB78", // "#fa0269",
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

export default FormVerifyPage;
