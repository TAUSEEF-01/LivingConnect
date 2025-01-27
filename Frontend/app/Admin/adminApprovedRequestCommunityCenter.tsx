// // // // import React, { useEffect, useState } from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   ScrollView,
// // // //   TouchableOpacity,
// // // //   Alert,
// // // //   ActivityIndicator,
// // // // } from "react-native";
// // // // import axios from "axios";

// // // // const AdminPendingRequestPage = () => {
// // // //   const [forms, setForms] = useState([]); // Store all user submissions
// // // //   const [loading, setLoading] = useState(true);

// // // //   // Fetch all unverified forms from the backend
// // // //   const fetchSuccessFalse = async () => {
// // // //     try {
// // // //       const response = await axios.get(
// // // //         "http://192.168.50.242:5000/houseDetails/successFalse" // Replace with your API endpoint
// // // //       );
// // // //       setForms(response.data);
// // // //     } catch (error) {
// // // //       Alert.alert("Error", "Failed to fetch form details.");
// // // //       console.error(error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   // // Approve form
// // // //   // const handleApprove = async (formId) => {
// // // //   //   try {
// // // //   //     await axios.patch(
// // // //   //       `http://192.168.50.242:5000/forms/approve/${formId}` // Replace with your API endpoint
// // // //   //     );
// // // //   //     Alert.alert("Success", "Form approved successfully.");
// // // //   //     setForms(forms.filter((form) => form.id !== formId)); // Remove approved form from the list
// // // //   //   } catch (error) {
// // // //   //     Alert.alert("Error", "Failed to approve form.");
// // // //   //     console.error(error);
// // // //   //   }
// // // //   // };

// // // //   // // Reject form
// // // //   // const handleReject = async (formId) => {
// // // //   //   try {
// // // //   //     await axios.delete(
// // // //   //       `http://192.168.50.242:5000/forms/reject/${formId}` // Replace with your API endpoint
// // // //   //     );
// // // //   //     Alert.alert("Success", "Form rejected successfully.");
// // // //   //     setForms(forms.filter((form) => form.id !== formId)); // Remove rejected form from the list
// // // //   //   } catch (error) {
// // // //   //     Alert.alert("Error", "Failed to reject form.");
// // // //   //     console.error(error);
// // // //   //   }
// // // //   // };

// // // //   useEffect(() => {
// // // //     fetchSuccessFalse();
// // // //   }, []);

// // // //   if (loading) {
// // // //     return (
// // // //       <View style={styles.loaderContainer}>
// // // //         <ActivityIndicator size="large" color="#007BFF" />
// // // //       </View>
// // // //     );
// // // //   }

// // // //   if (forms.length === 0) {
// // // //     return (
// // // //       <View style={styles.noDataContainer}>
// // // //         <Text style={styles.noDataText}>No forms to verify.</Text>
// // // //       </View>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <ScrollView style={styles.container}>

// // // //     </ScrollView>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     padding: 16,
// // // //     backgroundColor: "#f9f9f9",
// // // //   },
// // // //   loaderContainer: {
// // // //     flex: 1,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
// // // //   noDataContainer: {
// // // //     flex: 1,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
// // // //   noDataText: {
// // // //     fontSize: 16,
// // // //     color: "#555",
// // // //   },
// // // //   card: {
// // // //     backgroundColor: "#fff",
// // // //     padding: 16,
// // // //     borderRadius: 8,
// // // //     marginBottom: 16,
// // // //     shadowColor: "#000",
// // // //     shadowOpacity: 0.1,
// // // //     shadowRadius: 4,
// // // //     shadowOffset: { width: 0, height: 2 },
// // // //     elevation: 3,
// // // //   },
// // // //   title: {
// // // //     fontSize: 18,
// // // //     fontWeight: "bold",
// // // //     marginBottom: 8,
// // // //   },
// // // //   details: {
// // // //     fontSize: 14,
// // // //     marginBottom: 4,
// // // //     color: "#555",
// // // //   },
// // // //   buttonContainer: {
// // // //     flexDirection: "row",
// // // //     justifyContent: "space-between",
// // // //     marginTop: 16,
// // // //   },
// // // //   approveButton: {
// // // //     backgroundColor: "#4CAF50",
// // // //     padding: 12,
// // // //     borderRadius: 8,
// // // //     flex: 1,
// // // //     marginRight: 8,
// // // //   },
// // // //   rejectButton: {
// // // //     backgroundColor: "#F44336",
// // // //     padding: 12,
// // // //     borderRadius: 8,
// // // //     flex: 1,
// // // //     marginLeft: 8,
// // // //   },
// // // //   buttonText: {
// // // //     textAlign: "center",
// // // //     color: "#fff",
// // // //     fontWeight: "bold",
// // // //   },
// // // // });

// // // // export default AdminPendingRequestPage;

// // // import React, { useEffect, useState } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   ScrollView,
// // //   TouchableOpacity,
// // //   Alert,
// // //   ActivityIndicator,
// // // } from "react-native";
// // // import axios from "axios";
// // // import { router } from "expo-router";

// // // const AdminPendingRequestPage = () => {
// // //   const [forms, setForms] = useState([]); // Store all user submissions
// // //   const [loading, setLoading] = useState(true);

// // //   // Fetch all unverified forms from the backend
// // //   const fetchSuccessFalse = async () => {
// // //     try {
// // //       const response = await axios.get(
// // //         "http://192.168.50.242:5000/houseDetails/successFalse" // Replace with your API endpoint
// // //       );
// // //       setForms(response.data);
// // //     } catch (error) {
// // //       Alert.alert("Error", "Failed to fetch form details.");
// // //       console.error(error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchSuccessFalse();
// // //   }, []);

// // //   if (loading) {
// // //     return (
// // //       <View style={styles.loaderContainer}>
// // //         <ActivityIndicator size="large" color="#007BFF" />
// // //       </View>
// // //     );
// // //   }

// // //   if (forms.length === 0) {
// // //     return (
// // //       <View style={styles.noDataContainer}>
// // //         <Text style={styles.noDataText}>No forms to verify.</Text>
// // //       </View>
// // //     );
// // //   }

// // //   return (
// // //     <ScrollView style={styles.container}>
// // //       {forms.map((form) => (
// // //         <TouchableOpacity
// // //           key={form._id}
// // //           style={styles.card}
// // //           onPress={() =>
// // //             router.push({
// // //               pathname: "/Admin/requestForm",
// // //               params: { homeId: form._id }, // Pass the home ID as a query parameter
// // //             })
// // //           }
// // //         >
// // //           <Text style={styles.title}>Form ID:</Text>
// // //           <Text style={styles.details}>{form._id}</Text>
// // //         </TouchableOpacity>
// // //       ))}
// // //     </ScrollView>

// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 16,
// // //     paddingTop: 45,
// // //     backgroundColor: "#f9f9f9",
// // //   },
// // //   loaderContainer: {
// // //     flex: 1,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // //   noDataContainer: {
// // //     flex: 1,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // //   noDataText: {
// // //     fontSize: 16,
// // //     color: "#555",
// // //   },
// // //   card: {
// // //     backgroundColor: "#fff",
// // //     padding: 16,
// // //     borderRadius: 8,
// // //     marginBottom: 16,
// // //     shadowColor: "#000",
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //     shadowOffset: { width: 0, height: 2 },
// // //     elevation: 3,
// // //   },
// // //   title: {
// // //     fontSize: 18,
// // //     fontWeight: "bold",
// // //     marginBottom: 8,
// // //   },
// // //   details: {
// // //     fontSize: 14,
// // //     color: "#555",
// // //   },
// // // });

// // // export default AdminPendingRequestPage;

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
// import { router } from "expo-router";

// const AdminPendingRequestPage = () => {
//   const [forms, setForms] = useState([]); // Store all user submissions
//   const [loading, setLoading] = useState(true);

//   // Fetch all forms where success is false
//   const fetchSuccessFalse = async () => {
//     try {
//       const response = await axios.get(
//         "http://192.168.50.242:5000/houseDetails/successFalse"
//       );
//       setForms(response.data); // Only success: false forms are returned
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch form details.");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSuccessFalse();
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
//       {forms.map((form, index) => (
//         <TouchableOpacity
//           key={form._id}
//           style={styles.card}
//           onPress={() =>
//             router.replace({
//               pathname: "/Admin/requestForm",
//               params: { homeId: form._id }, // Pass the home ID as a query parameter
//             })
//           }
//         >
//           <Text style={styles.title}>{index + 1}. Form ID:</Text>
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

// export default AdminPendingRequestPage;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import { router, useFocusEffect } from "expo-router";

const AdminPendingRequestPage = () => {
  const [forms, setForms] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchSuccessFalse = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://192.168.50.242:5000/communityDetails/successTrue"
      );
      setForms(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch form details.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Replace useEffect with useFocusEffect
  useFocusEffect(
    React.useCallback(() => {
      fetchSuccessFalse();

      // Optional: Clean up function if needed
      return () => {
        // Cleanup code here if necessary
      };
    }, []) // Empty dependency array since we want this to run on every focus
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (forms.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>No forms to verify.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        {forms.map((form, index) => (
          <TouchableOpacity
            key={form._id}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/Admin/approveCancelCommunityCenter",
                params: { communityId: form._id },
              })
            }
          >
            <Text style={styles.title}>{index + 1}. Request id: </Text>
            <Text style={styles.details}>{form._id}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // paddingTop: 45,
    backgroundColor: "#f9f9f9",
  },
  containerView: {
    marginTop: 32,
    marginBottom: 16,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  details: {
    fontSize: 14,
    color: "#555",
  },
});

export default AdminPendingRequestPage;
