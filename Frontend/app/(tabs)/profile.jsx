import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import styles from "../../styles";

export default function Profile() {
  const [userEmail, setUserEmail] = React.useState("");

  React.useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        // console.log(token);
        // if (!token) {
        //   router.replace("/login");
        //   return;
        // }

        // Fetch user data
        const response = await axios.get(
          "https://livingconnect-backend.vercel.app/auth/verify",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // console.log(response);

        const data = await response.data;

        // console.log(data.user.email);

        // if (response.status === 200) {
        setUserEmail(data.user.email); // Update with user email from backend
        // } else {
        //   router.replace("/login");
        // }
      } catch (err) {
        console.error("Error fetching user data:", err);
        // router.replace("/login");
      }
    };

    fetchUserEmail();
  }, []);

  const handleLogout = async () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            try {
              // Call backend to invalidate session (optional)
              const token = await AsyncStorage.getItem("userToken");
              if (token) {
                await axios.post(
                  "https://livingconnect-backend.vercel.app/auth/logout",
                  {},
                  {
                    headers: { Authorization: `Bearer ${token}` },
                  }
                );
              }

              // Clear token from AsyncStorage
              await AsyncStorage.removeItem("userToken");

              // Navigate to the login screen
              router.replace("/login");
            } catch (error) {
              console.error("Logout error:", error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.titleHome}>Logout from your account?</Text>
      <Text style={styles.emailText}>{userEmail || "Loading..."}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
