// // File: app/DetailPage.tsx
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";
// import styles from "../../styles";

export default function DetailPage() {
  return (
    <View style={localStyles.authContainer}>
      <View style={localStyles.topBar} />
      <Text style={localStyles.title}>Detail Page</Text>
      <Button title="Go Back" onPress={() => router.replace('/(tabs)/mainPage')} />
    </View>
  );
}


const localStyles = StyleSheet.create({
  authContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  topBar: {
    height: 40, // Adjust the height of the top bar
    backgroundColor: "#38bdf8", // Color for the top bar
    width: "100%",
    position: "absolute",
    top: 0,
  },
  title: {
    color: 'Black',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 2,
    textAlign: 'center',
  },
});
