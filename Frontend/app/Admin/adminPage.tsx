// import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { router } from 'expo-router'

// const adminPage = () => {
//   return (
//     <SafeAreaView style={localStyles.container}>
//         <View style={localStyles.headerContainer}>
//         <Text style={localStyles.headerText}>Admin Panel</Text>
//       </View>

//         <TouchableOpacity
//             style={localStyles.pendingButton}
//             onPress={() => router.push("/Admin/adminPendingRequest")}
//         >
//             <Text style={localStyles.buttonText}>Pending requests Home</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//             style={localStyles.approvedButton}
//             onPress={() => router.push("/Admin/adminApprovedRequest")}
//         >
//             <Text style={localStyles.buttonText}>Approved requests Home</Text>
//         </TouchableOpacity>


//         <TouchableOpacity
//             style={localStyles.pendingCommunityButton}
//             onPress={() => router.push("/Admin/adminPendingRequestCommunityCenter")}
//         >
//             <Text style={localStyles.buttonText}>Pending requests Community Center</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//             style={localStyles.approvedCommunityButton}
//             onPress={() => router.push("/Admin/adminApprovedRequestCommunityCenter")}
//         >
//             <Text style={localStyles.buttonText}>Approved requests Community Center</Text>
//         </TouchableOpacity>
        
//     </SafeAreaView>
//   )
// }

// export default adminPage

// const localStyles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#f0f4f8",
//         padding: 20,
//         justifyContent: "center",
//     },
//     buttonText: {
//       fontSize: 20,
//       color: "white",
//       fontWeight: "bold",
//       textAlign: "center",
//     },
//     pendingButton: {
//       padding: 15,
//       backgroundColor: "#1e3a8a",
//       borderRadius: 10,
//       justifyContent: "center",
//       alignItems: "center",
//       marginBottom: 20,
//       width: "100%",
//       borderColor: "black",
//       borderWidth: 1,
//       shadowColor: "#000",
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.25,
//       shadowRadius: 3.84,
//       elevation: 5,
//     },
//     approvedButton: {
//       padding: 15,
//       backgroundColor: "#1e3a8a",
//       borderRadius: 10,
//       justifyContent: "center",
//       alignItems: "center",
//       width: "100%",
//       borderColor: "black",
//       borderWidth: 1,
//       shadowColor: "#000",
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.25,
//       shadowRadius: 3.84,
//       elevation: 5,
//       marginBottom: 20,
//     },
//     pendingCommunityButton:{
//       padding: 15,
//       // paddingVertical: 15,
//       // paddingHorizontal: 8,
//       backgroundColor: "#1e3a8a",
//       borderRadius: 10,
//       justifyContent: "center",
//       alignItems: "center",
//       marginBottom: 20,
//       width: "100%",
//       borderColor: "black",
//       borderWidth: 1,
//       shadowColor: "#000",
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.25,
//       shadowRadius: 3.84,
//       elevation: 5,
//     },
//     approvedCommunityButton:{
//       padding: 15,
//       backgroundColor: "#1e3a8a",
//       borderRadius: 10,
//       justifyContent: "center",
//       alignItems: "center",
//       width: "100%",
//       borderColor: "black",
//       borderWidth: 1,
//       shadowColor: "#000",
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.25,
//       shadowRadius: 3.84,
//       elevation: 5,
//     },
//      headerContainer: {
//     width: '100%',
//     padding: 20,
//     paddingTop: 40,
//     marginBottom: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderBottomLeftRadius: 15,
//     borderBottomRightRadius: 15,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   headerText: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     letterSpacing: 1,
//     textTransform: 'uppercase',
//   },
// });


import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import { router } from 'expo-router';

const AdminPage = () => {
  const renderButton = (title: string, onPress: () => void, isPending: boolean) => (
    <TouchableOpacity
      style={[
        styles.button,
        isPending ? styles.pendingButton : styles.approvedButton,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Admin Panel</Text>
        <Text style={styles.headerSubtitle}>Manage Requests</Text>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Home</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.buttonGroup}>
          {renderButton(
            'Pending Requests',
            () => router.push("/Admin/adminPendingRequest"),
            true
          )}
          {renderButton(
            'Approved Requests',
            () => router.push("/Admin/adminApprovedRequest"),
            false
          )}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Community Center</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.buttonGroup}>
          {renderButton(
            'Pending Requests',
            () => router.push("/Admin/adminPendingRequestCommunityCenter"),
            true
          )}
          {renderButton(
            'Approved Requests',
            () => router.push("/Admin/adminApprovedRequestCommunityCenter"),
            false
          )}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.buttonGroup}>
          {renderButton(
            'Pending Requests',
            () => router.push("/Admin/adminPendingRequestService"),
            true
          )}
          {renderButton(
            'Approved Requests',
            () => router.push("/Admin/adminApprovedRequestService"),
            false
          )}
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    backgroundColor: '#38bdf8',
    padding: 24,
    paddingTop: Platform.OS === 'ios' ? 20 : 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#E0E7FF',
    textAlign: 'center',
    marginTop: 4,
    letterSpacing: 0.5,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#38bdf8',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  divider: {
    height: 2,
    backgroundColor: '#E0E7FF',
    width: '100%',
    borderRadius: 1,
  },
  buttonGroup: {
    gap: 12,
  },
  button: {
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
  },
  pendingButton: {
    backgroundColor: '#38bdf8',
    borderColor: '#38bdf8',
  },
  approvedButton: {
    backgroundColor:  '#10B981',//"#48A6A7",//
    borderColor: '#059669',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
});

export default AdminPage;