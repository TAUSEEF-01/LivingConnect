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
//   const fetchSuccessTrue = async () => {
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
//     fetchSuccessTrue();
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

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { router, useFocusEffect } from "expo-router";

const AdminApprovalPage = () => {
  const [forms, setForms] = useState([]); // Store all user submissions
  const [loading, setLoading] = useState(true);

  // Fetch all unverified forms from the backend
  const fetchSuccessTrue = async () => {
    try {
      const response = await axios.get(
        "https://livingconnect-backend.vercel.app/houseDetails/successTrue" // Replace with your API endpoint
      );
      setForms(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch form details.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchSuccessTrue();
  // }, []);

  // Replace useEffect with useFocusEffect
  useFocusEffect(
    React.useCallback(() => {
      fetchSuccessTrue();

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
    <ScrollView style={styles.container}>
      {forms.map((form, index) => (
        <TouchableOpacity
          key={form._id}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: "/Admin/approveCancel",
              params: { homeId: form._id }, // Pass the home ID as a query parameter
            })
          }
        >
          <Text style={styles.title}>{index + 1}. Form ID:</Text>
          <Text style={styles.details}>{form._id}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 45,
    backgroundColor: "#f9f9f9",
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

export default AdminApprovalPage;
