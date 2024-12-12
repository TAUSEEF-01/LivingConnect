import { useEffect } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"; // You can use axios or any other HTTP client

export default function Index() {
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");

        if (token) {
          console.log("Token found in AsyncStorage");
          // Check the token validity using the verify endpoint
          const response = await axios.get(
            "http://192.168.50.242:5000/verify",
            {
              headers: {
                Authorization: `Bearer ${token}`, // Send token in the Authorization header
              },
            }
          );

          if (response.status === 200) {
            // Token is valid, navigate to the main page
            router.replace("/(tabs)/mainPage");
          } else {
            // Invalid token, navigate to login
            router.replace("/login");
          }
        } else {
          // No token found, navigate to login
          router.replace("/login");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        router.replace("/login");
      }
    };

    checkAuthentication();
  }, []);

  return null; // No UI as this is just a redirecting screen
}
