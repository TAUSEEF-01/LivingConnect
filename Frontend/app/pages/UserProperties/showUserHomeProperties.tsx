// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Alert,
//   ActivityIndicator,
// } from "react-native";
// import axios from "axios";

// const AdminApprovalPage = () => {
//   const [forms, setForms] = useState([]); // Store all user submissions
//   const [loading, setLoading] = useState(true);

//   // Fetch all unverified forms from the backend
//   const fetchUserHouses = async () => {
//     try {
//       const response = await axios.get(
//         "https://livingconnect-backend.vercel.app/houseDetails/successFalse" // Replace with your API endpoint
//       );
//       setForms(response.data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch form details.");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // // Approve form
//   // const handleApprove = async (formId) => {
//   //   try {
//   //     await axios.patch(
//   //       `https://livingconnect-backend.vercel.app/forms/approve/${formId}` // Replace with your API endpoint
//   //     );
//   //     Alert.alert("Success", "Form approved successfully.");
//   //     setForms(forms.filter((form) => form.id !== formId)); // Remove approved form from the list
//   //   } catch (error) {
//   //     Alert.alert("Error", "Failed to approve form.");
//   //     console.error(error);
//   //   }
//   // };

//   // // Reject form
//   // const handleReject = async (formId) => {
//   //   try {
//   //     await axios.delete(
//   //       `https://livingconnect-backend.vercel.app/forms/reject/${formId}` // Replace with your API endpoint
//   //     );
//   //     Alert.alert("Success", "Form rejected successfully.");
//   //     setForms(forms.filter((form) => form.id !== formId)); // Remove rejected form from the list
//   //   } catch (error) {
//   //     Alert.alert("Error", "Failed to reject form.");
//   //     console.error(error);
//   //   }
//   // };

//   useEffect(() => {
//     fetchUserHouses();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#007BFF" />
//       </View>
//     );
//   }

//   if (forms.length === 0) {
//     return (
//       <View style={styles.noDataContainer}>
//         <Text style={styles.noDataText}>No forms to verify.</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>

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
//   details: {
//     fontSize: 14,
//     marginBottom: 4,
//     color: "#555",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 16,
//   },
//   approveButton: {
//     backgroundColor: "#4CAF50",
//     padding: 12,
//     borderRadius: 8,
//     flex: 1,
//     marginRight: 8,
//   },
//   rejectButton: {
//     backgroundColor: "#F44336",
//     padding: 12,
//     borderRadius: 8,
//     flex: 1,
//     marginLeft: 8,
//   },
//   buttonText: {
//     textAlign: "center",
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });

// export default AdminApprovalPage;

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Alert,
//   ActivityIndicator,
// } from "react-native";
// import axios from "axios";
// import { router, useFocusEffect } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const AdminApprovalPage = () => {
//   const [forms, setForms] = useState([]); // Store all user submissions
//   const [loading, setLoading] = useState(true);

//   // Fetch all unverified forms from the backend
//   const fetchUserHouses = async () => {
//     // try {
//     //   const response = await axios.get(
//     //     "https://livingconnect-backend.vercel.app/houseDetails/get-user-house-properties" // Replace with your API endpoint
//     //   );

//     const token = await AsyncStorage.getItem("userToken");
//     console.log(token);

//     try {
//       const response = await axios.get(
//         "https://livingconnect-backend.vercel.app/houseDetails/get-user-house-properties",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(response.data);
//       setForms(response.data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch form details.");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // useEffect(() => {
//   //   fetchUserHouses();
//   // }, []);

//   // Replace useEffect with useFocusEffect
//   useFocusEffect(
//     React.useCallback(() => {
//       fetchUserHouses();

//       // Optional: Clean up function if needed
//       return () => {
//         // Cleanup code here if necessary
//       };
//     }, []) // Empty dependency array since we want this to run on every focus
//   );

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#007BFF" />
//       </View>
//     );
//   }

//   if (forms.length === 0) {
//     return (
//       <View style={styles.noDataContainer}>
//         <Text style={styles.noDataText}>No forms to verify.</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       {forms.map((form, index) => (
//         <TouchableOpacity
//           key={form._id}
//           style={styles.card}
//           onPress={() =>
//             router.push({
//               pathname: "/Rent/editHomeDetails",
//               params: { id: form._id }, // Pass the home ID as a query parameter
//             })
//           }
//         >
//           <Text style={styles.title}>{index + 1}. My House </Text>
//           <Text style={styles.details}>{form._id}</Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     paddingTop: 45,
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
//   details: {
//     fontSize: 14,
//     color: "#555",
//   },
// });

// export default AdminApprovalPage;


import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import { router, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserPropertiesList = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserHouses = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      const response = await axios.get(
        "https://livingconnect-backend.vercel.app/houseDetails/get-user-house-properties",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setForms(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch your properties.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchUserHouses();
      return () => {};
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#38bdf8" />
      </View>
    );
  }

  const renderContent = () => {
    if (forms.length === 0) {
      return (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No properties listed yet.</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => router.push("/Rent/addHomeDetails")}
          >
            <Text style={styles.addButtonText}>Add New Property</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <ScrollView style={styles.scrollContainer}>
        {forms.map((form, index) => (
          <TouchableOpacity
            key={form._id}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/Rent/editHomeDetails",
                params: { id: form._id },
              })
            }
            activeOpacity={0.7}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Home {index + 1}</Text>
              <Text style={styles.editText}>Edit Details →</Text>
            </View>
            <View style={styles.cardDivider} />
            <Text style={styles.cardId}>ID: {form._id}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>My Homes</Text>
        <Text style={styles.headerSubtitle}>Manage Your Listed Homes</Text>
      </View>
      {renderContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    backgroundColor: "#38bdf8",
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
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFF",
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  noDataText: {
    fontSize: 18,
    color: "#64748B",
    marginBottom: 20,
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "#38bdf8",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#38bdf8",
  },
  editText: {
    fontSize: 14,
    color: "#38bdf8",
    fontWeight: "500",
  },
  cardDivider: {
    height: 1,
    backgroundColor: "#E0E7FF",
    marginBottom: 12,
  },
  cardId: {
    fontSize: 14,
    color: "#64748B",
  },
});

export default UserPropertiesList;