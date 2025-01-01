import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const adminPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
            style={localStyles.messageButton}
            onPress={() => router.push("/messages/ChatsScreen")}
        >
            <Text style={localStyles.buttonText}>Message History</Text>
        </TouchableOpacity>
                
        <TouchableOpacity
            style={localStyles.manageFavButton}
            onPress={() => router.push("/screens/contact_us")}
        >
            <Text style={localStyles.buttonText}>Manage Favorite</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={localStyles.adminButton}
            onPress={() => router.push("/pages/Admin/adminPage")}
            >
            <Text style={localStyles.buttonText}>Admin Panel</Text>
        </TouchableOpacity>
        
    </SafeAreaView>
  )
}

export default adminPage


const localStyles = StyleSheet.create({
    sidePanel: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: 300,
      backgroundColor: "black", //"#a9d9fc",
      // padding: 16,
      zIndex: 2,
      border: "1px solid #ccc",
      transform: [{ translateX: -300 }],
      transition: "transform 0.3s ease-in-out",
      overflow: "hidden",
    },
  
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(61, 61, 61, 0.08)", // "rgba(54, 54, 54, 0.1)",
      zIndex: 1,
    },
  
    profileSection: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 24,
      marginTop: 15,
      marginLeft: 12,
      marginRight: 12,
      borderColor: "black", // Border color
      borderWidth: 2, // Border width
      borderRadius: 8, // Optional: Add rounded corners
      padding: 10, // Add padding inside the bordered area
      backgroundColor: "#38bdf8",
  
      // Shadow properties
      shadowColor: "#000", // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow position
      shadowOpacity: 0.25, // Shadow transparency
      shadowRadius: 3.84, // Shadow blur radius
      elevation: 5, // For Android shadow support
    },
  
    profileCircle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: "#0a0a0a", //"#38bdf8", // Accent color
      justifyContent: "center",
      alignItems: "center",
    },
  
    profileInitial: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
    },
  
    profileName: {
      marginLeft: 30,
      fontSize: 24,
      fontWeight: "bold",
      color: "Black",
    },
  
    buttonText: {
      fontSize: 20,
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
    },
  
    rentAHome: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
      marginTop: 60,
      marginLeft: 12,
      marginRight: 12,
      borderColor: "black", // Border color
      borderWidth: 2, // Border width
      borderRadius: 8, // Optional: Add rounded corners
      padding: 16, // Add padding inside the bordered area
      backgroundColor: "#8beef0",
  
      // Shadow properties
      shadowColor: "#000", // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow position
      shadowOpacity: 0.25, // Shadow transparency
      shadowRadius: 3.84, // Shadow blur radius
      elevation: 5, // For Android shadow support
    },
  
    provideServices: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 24,
      marginLeft: 12,
      marginRight: 12,
      borderColor: "black", // Border color
      borderWidth: 2, // Border width
      borderRadius: 8, // Optional: Add rounded corners
      padding: 16, // Add padding inside the bordered area
      backgroundColor: "#8beef0",
  
      // Shadow properties
      shadowColor: "#000", // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow position
      shadowOpacity: 0.25, // Shadow transparency
      shadowRadius: 3.84, // Shadow blur radius
      elevation: 5, // For Android shadow support
    },
  
    aboutButton: {
      padding: 12,
      backgroundColor: "#38bdf8", //8b97f0
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: "28%",
      alignSelf: "center",
      width: "90%",
      borderColor: "black", // Border color
      borderWidth: 2, // Border width
  
      // Shadow properties
      shadowColor: "#000", // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow position
      shadowOpacity: 0.25, // Shadow transparency
      shadowRadius: 3.84, // Shadow blur radius
      elevation: 5, // For Android shadow support
    },
  
    contactButton: {
      padding: 12,
      backgroundColor: "#38bdf8",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: "21%",
      alignSelf: "center",
      width: "90%",
      borderColor: "black", // Border color
      borderWidth: 2, // Border width
  
      // Shadow properties
      shadowColor: "#000", // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow position
      shadowOpacity: 0.25, // Shadow transparency
      shadowRadius: 3.84, // Shadow blur radius
      elevation: 5, // For Android shadow support
    },
  
    messageButton: {
      padding: 12,
      backgroundColor: "#38bdf8",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: "82%",
      alignSelf: "center",
      width: "90%",
      borderColor: "black", // Border color
      borderWidth: 2, // Border width
  
      // Shadow properties
      shadowColor: "#000", // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow position
      shadowOpacity: 0.25, // Shadow transparency
      shadowRadius: 3.84, // Shadow blur radius
      elevation: 5, // For Android shadow support
    },
  
    manageFavButton: {
      padding: 12,
      backgroundColor: "#38bdf8",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: "75%",
      alignSelf: "center",
      width: "90%",
      borderColor: "black", // Border color
      borderWidth: 2, // Border width
  
      // Shadow properties
      shadowColor: "#000", // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow position
      shadowOpacity: 0.25, // Shadow transparency
      shadowRadius: 3.84, // Shadow blur radius
      elevation: 5, // For Android shadow support
    },
  
    adminButton:{
      padding: 12,
      backgroundColor: "#38bdf8",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: "68%",
      alignSelf: "center",
      width: "90%",
      borderColor: "black", // Border color
      borderWidth: 2, // Border width
  
      // Shadow properties
      shadowColor: "#000", // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow position
      shadowOpacity: 0.25, // Shadow transparency
      shadowRadius: 3.84, // Shadow blur radius
      elevation: 5, // For Android shadow support
    },
  
    logoutButton: {
      padding: 12,
      backgroundColor: "red", //"#ef4444",
      // backgroundColor: "#ef4444",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: "8%",
      alignSelf: "center",
      width: "90%",
  
      borderColor: "black", // Border color
      borderWidth: 2, // Border width
  
      // Shadow properties
      shadowColor: "#000", // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow position
      shadowOpacity: 0.25, // Shadow transparency
      shadowRadius: 3.84, // Shadow blur radius
      elevation: 5, // For Android shadow support
    },

  });
  