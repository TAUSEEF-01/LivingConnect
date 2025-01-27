// import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { router } from 'expo-router'

// const adminPage = () => {
//   return (
//     <SafeAreaView style={localStyles.container}>
//         <TouchableOpacity
//             style={localStyles.pendingButton}
//             onPress={() => router.push("/pages/UserProperties/showUserHomeProperties")}
//         >
//             <Text style={localStyles.buttonText}>Home</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//             style={localStyles.approvedButton}
//             onPress={() => router.push("/pages/UserProperties/showUserCommunityCenters")}
//         >
//             <Text style={localStyles.buttonText}>Community Center</Text>
//         </TouchableOpacity>


//         <TouchableOpacity
//             style={localStyles.pendingCommunityButton}
//             onPress={() => router.push("/pages/UserProperties/showUserServices")}
//         >
//             <Text style={localStyles.buttonText}>Services</Text>
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

const UserPropertiesPage = () => {
  const renderButton = (title: string, onPress: () => void) => (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>My Properties</Text>
        <Text style={styles.headerSubtitle}>Manage Your Listings</Text>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Home Properties</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.buttonGroup}>
          {renderButton('View Home Properties', () => 
            router.push("/pages/UserProperties/showUserHomeProperties")
          )}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Community Centers</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.buttonGroup}>
          {renderButton('View Community Centers', () => 
            router.push("/pages/UserProperties/showUserCommunityCenters")
          )}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.buttonGroup}>
          {renderButton('View Services', () => 
            router.push("/pages/UserProperties/showUserServices")
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
    backgroundColor: '#38bdf8',
    borderWidth: 1,
    borderColor: '#38bdf8',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
});

export default UserPropertiesPage;