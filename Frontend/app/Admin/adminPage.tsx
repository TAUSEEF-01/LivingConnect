import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const adminPage = () => {
  return (
    <SafeAreaView style={localStyles.container}>
        <TouchableOpacity
            style={localStyles.pendingButton}
            onPress={() => router.push("/Admin/adminPendingRequest")}
        >
            <Text style={localStyles.buttonText}>Pending requests Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={localStyles.approvedButton}
            onPress={() => router.push("/Admin/adminApprovedRequest")}
        >
            <Text style={localStyles.buttonText}>Approved requests Home</Text>
        </TouchableOpacity>


        <TouchableOpacity
            style={localStyles.pendingButton}
            onPress={() => router.push("/Admin/adminPendingRequestCommunityCenter")}
        >
            <Text style={localStyles.buttonText}>Pending requests Community Center</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={localStyles.approvedButton}
            onPress={() => router.push("/Admin/adminApprovedRequestCommunityCenter")}
        >
            <Text style={localStyles.buttonText}>Approved requests Community Center</Text>
        </TouchableOpacity>
        
    </SafeAreaView>
  )
}

export default adminPage

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f4f8",
        padding: 20,
        justifyContent: "center",
    },
    buttonText: {
      fontSize: 20,
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    pendingButton: {
      padding: 15,
      backgroundColor: "#1e3a8a",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      width: "100%",
      borderColor: "black",
      borderWidth: 1,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    approvedButton: {
      padding: 15,
      backgroundColor: "#1e3a8a",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      borderColor: "black",
      borderWidth: 1,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
});


