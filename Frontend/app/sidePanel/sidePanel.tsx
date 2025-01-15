import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";
import styles from "../../styles";

interface UserProfile {
  email: string;
  name: string;
  contactNumber: string;
  profileImage: string | null;
}

const SidePanel = ({ isVisible, onClose }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  // const [profile, setProfile] = useState(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserProfile();
    fetchUserDetails();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");

      if (!token) {
        throw new Error("No token found");
      }

      setLoading(true);
      const response = await axios.get(
        "https://livingconnect-backend.vercel.app/profile/get-profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // console.log("Profile data:", response.data);

      setProfile(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch profile:", err);
      setError("Failed to load profile");
      setLoading(false);
    }
  };

  const fetchUserDetails = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");

      if (token) {
        const response = await axios.get(
          "https://livingconnect-backend.vercel.app/auth/adminCheck",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setIsAdmin(response.data?.isAdmin || false);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

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
              const token = await AsyncStorage.getItem("userToken");
              if (token) {
                await axios.post(
                  "https://livingconnect-backend.vercel.app/auth/logout",
                  {},
                  { headers: { Authorization: `Bearer ${token}` } }
                );
              }
              await AsyncStorage.removeItem("userToken");
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

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#38bdf8" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <>
      {/* <StatusBar barStyle="light-content" backgroundColor="#38bdf8" /> */}

      {/* Overlay */}
      {isVisible && (
        <TouchableOpacity
          style={localStyles.overlay}
          activeOpacity={1}
          onPress={onClose}
        />
      )}
      {/* Sidebar */}
      <View
        style={[
          localStyles.sidePanel,
          { transform: [{ translateX: isVisible ? 0 : -300 }] },
        ]}
      >
        {/* Profile Section */}
        <TouchableOpacity
          style={localStyles.profileSection}
          onPress={() => router.push("/profile/showProfile")}
        >
          {/* <Image
            source={{ uri: profile?.imageUrl }}
            style={localStyles.profileImage}
          /> */}

          {/* {profile?.profileImage ? (
            <Image
              source={{ uri: profile.profileImage }}
              style={localStyles.profileImage}
              resizeMode="cover"
            />
          ) : (
            <View style={localStyles.imagePlaceholder}>
              <Text style={localStyles.placeholderText}>No Image</Text>
            </View>
          )} */}

          {profile?.profileImage ? (
            <Image
              source={{ uri: profile.profileImage }}
              style={localStyles.profileImage}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={require("../../assets/images/default-profile.png")} // Replace with your default image path
              style={localStyles.profileImage}
              resizeMode="cover"
            />
          )}

          <View style={localStyles.profileTextContainer}>
            <Text style={localStyles.profileName}>{profile?.name}</Text>
            <Text style={localStyles.profileEmail}>{profile?.email}</Text>
          </View>
        </TouchableOpacity>

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

        {/* Conditionally Render Admin Button */}
        {isAdmin && (
          <TouchableOpacity
            style={localStyles.adminButton}
            onPress={() => router.push("/Admin/adminPage")}
          >
            <Text style={localStyles.buttonText}>Admin Panel</Text>
          </TouchableOpacity>
        )}

        {/* Navigation Buttons */}
        <TouchableOpacity
          style={localStyles.contactButton}
          onPress={() => router.push("/screens/contact_us")}
        >
          <Text style={localStyles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={localStyles.aboutButton}
          onPress={() => router.push("/screens/about_us")}
        >
          <Text style={localStyles.buttonText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={localStyles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={localStyles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const localStyles = StyleSheet.create({
  // sidePanel: {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   height: "100%",
  //   width: 300,
  //   backgroundColor: "#213555", // Restore original background color
  //   padding: 20,
  //   zIndex: 2,
  //   transform: [{ translateX: -300 }],
  //   transition: "transform 0.3s ease-in-out",
  //   overflow: "hidden",
  // },
  // overlay: {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
  //   zIndex: 1,
  // },

  sidePanel: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: 300,
    backgroundColor: "#021526", //"#a9d9fc",
    padding: 16,
    marginTop: 33,
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
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#38bdf8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  profileEmail: {
    fontSize: 14,
    color: "black",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  messageButton: {
    padding: 12,
    backgroundColor: "#6EACDA",
    borderRadius: 8,
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
  manageFavButton: {
    padding: 12,
    backgroundColor: "#6EACDA",
    borderRadius: 8,
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
  adminButton: {
    padding: 12,
    backgroundColor: "#6EACDA",
    borderRadius: 8,
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
  contactButton: {
    padding: 12,
    backgroundColor: "#6EACDA",
    borderRadius: 8,
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
  aboutButton: {
    padding: 12,
    backgroundColor: "#6EACDA",
    borderRadius: 8,
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
  logoutButton: {
    padding: 12,
    backgroundColor: "#ef4444",
    borderRadius: 8,
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
});

export default SidePanel;
