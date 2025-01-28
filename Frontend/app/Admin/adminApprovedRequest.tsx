// // import React, { useEffect, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   ScrollView,
// //   TouchableOpacity,
// //   Alert,
// //   ActivityIndicator,
// // } from "react-native";
// // import axios from "axios";

// // const AdminApprovalPage = () => {
// //   const [forms, setForms] = useState([]); // Store all user submissions
// //   const [loading, setLoading] = useState(true);

// //   // Fetch all unverified forms from the backend
// //   const fetchSuccessTrue = async () => {
// //     try {
// //       const response = await axios.get(
// //         "https://livingconnect-backend.vercel.app/houseDetails/successFalse" // Replace with your API endpoint
// //       );
// //       setForms(response.data);
// //     } catch (error) {
// //       Alert.alert("Error", "Failed to fetch form details.");
// //       console.error(error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // // Approve form
// //   // const handleApprove = async (formId) => {
// //   //   try {
// //   //     await axios.patch(
// //   //       `https://livingconnect-backend.vercel.app/forms/approve/${formId}` // Replace with your API endpoint
// //   //     );
// //   //     Alert.alert("Success", "Form approved successfully.");
// //   //     setForms(forms.filter((form) => form.id !== formId)); // Remove approved form from the list
// //   //   } catch (error) {
// //   //     Alert.alert("Error", "Failed to approve form.");
// //   //     console.error(error);
// //   //   }
// //   // };

// //   // // Reject form
// //   // const handleReject = async (formId) => {
// //   //   try {
// //   //     await axios.delete(
// //   //       `https://livingconnect-backend.vercel.app/forms/reject/${formId}` // Replace with your API endpoint
// //   //     );
// //   //     Alert.alert("Success", "Form rejected successfully.");
// //   //     setForms(forms.filter((form) => form.id !== formId)); // Remove rejected form from the list
// //   //   } catch (error) {
// //   //     Alert.alert("Error", "Failed to reject form.");
// //   //     console.error(error);
// //   //   }
// //   // };

// //   useEffect(() => {
// //     fetchSuccessTrue();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <View style={styles.loaderContainer}>
// //         <ActivityIndicator size="large" color="#007BFF" />
// //       </View>
// //     );
// //   }

// //   if (forms.length === 0) {
// //     return (
// //       <View style={styles.noDataContainer}>
// //         <Text style={styles.noDataText}>No forms to verify.</Text>
// //       </View>
// //     );
// //   }

// //   return (
// //     <ScrollView style={styles.container}>

// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //     backgroundColor: "#f9f9f9",
// //   },
// //   loaderContainer: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   noDataContainer: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   noDataText: {
// //     fontSize: 16,
// //     color: "#555",
// //   },
// //   card: {
// //     backgroundColor: "#fff",
// //     padding: 16,
// //     borderRadius: 8,
// //     marginBottom: 16,
// //     shadowColor: "#000",
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     shadowOffset: { width: 0, height: 2 },
// //     elevation: 3,
// //   },
// //   title: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     marginBottom: 8,
// //   },
// //   details: {
// //     fontSize: 14,
// //     marginBottom: 4,
// //     color: "#555",
// //   },
// //   buttonContainer: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     marginTop: 16,
// //   },
// //   approveButton: {
// //     backgroundColor: "#4CAF50",
// //     padding: 12,
// //     borderRadius: 8,
// //     flex: 1,
// //     marginRight: 8,
// //   },
// //   rejectButton: {
// //     backgroundColor: "#F44336",
// //     padding: 12,
// //     borderRadius: 8,
// //     flex: 1,
// //     marginLeft: 8,
// //   },
// //   buttonText: {
// //     textAlign: "center",
// //     color: "#fff",
// //     fontWeight: "bold",
// //   },
// // });

// // export default AdminApprovalPage;

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

// const AdminApprovalPage = () => {
//   const [forms, setForms] = useState([]); // Store all user submissions
//   const [loading, setLoading] = useState(true);

//   // Fetch all unverified forms from the backend
//   const fetchSuccessTrue = async () => {
//     try {
//       const response = await axios.get(
//         "http://192.168.50.242:5000/houseDetails/successTrue" // Replace with your API endpoint
//       );
//       setForms(response.data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch form details.");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // useEffect(() => {
//   //   fetchSuccessTrue();
//   // }, []);

//   // Replace useEffect with useFocusEffect
//   useFocusEffect(
//     React.useCallback(() => {
//       fetchSuccessTrue();

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
//               pathname: "/Admin/approveCancel",
//               params: { homeId: form._id }, // Pass the home ID as a query parameter
//             })
//           }
//         >
//           <Text style={styles.title}>{index + 1}. Request id: </Text>
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
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import axios from "axios";
import { router, useFocusEffect } from "expo-router";

const AdminApprovalPage = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSuccessTrue = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://192.168.50.242:5000/houseDetails/successTrue"
      );
      setForms(response.data);
    } catch (error) {
      Alert.alert(
        "Error",
        "Failed to fetch form details. Please try again later.",
        [{ text: "OK", style: "default" }]
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchSuccessTrue();
      return () => {};
    }, [])
  );

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#22C55E" />
          <Text style={styles.loadingText}>Loading requests...</Text>
        </View>
      );
    }

    if (forms.length === 0) {
      return (
        <View style={styles.centerContainer}>
          <Text style={styles.noDataText}>No forms to verify</Text>
          <Text style={styles.noDataSubText}>
            New requests will appear here
          </Text>
        </View>
      );
    }

    return (
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {forms.map((form, index) => (
          <TouchableOpacity
            key={form._id}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/Admin/approveCancel",
                params: { homeId: form._id },
              })
            }
            activeOpacity={0.7}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardNumber}>Request #{index + 1}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>Pending</Text>
              </View>
            </View>
            <View style={styles.cardDivider} />
            <View style={styles.cardContent}>
              <Text style={styles.idLabel}>Request ID:</Text>
              <Text style={styles.idText}>{form._id}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Approved Requests</Text>
        <Text style={styles.headerSubtitle}>Review and Process</Text>
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
    backgroundColor: "#22C55E", // Changed to green
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
    marginBottom: 20,
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
    color: "#DCFCE7", // Adjusted for green theme
    textAlign: "center",
    marginTop: 4,
    letterSpacing: 0.5,
  },
  scrollContainer: {
    flex: 1,
    padding: 16,
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
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: "600",
    color: "#22C55E", // Changed to green
  },
  statusBadge: {
    backgroundColor: "#DCFCE7", // Changed to light green
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#86EFAC", // Changed to green border
  },
  statusText: {
    color: "#16A34A", // Changed to darker green
    fontSize: 12,
    fontWeight: "600",
  },
  cardDivider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginBottom: 12,
  },
  cardContent: {
    gap: 4,
  },
  idLabel: {
    fontSize: 14,
    color: "#64748B",
    fontWeight: "500",
  },
  idText: {
    fontSize: 14,
    color: "#334155",
    fontWeight: "400",
  },
});

export default AdminApprovalPage;
