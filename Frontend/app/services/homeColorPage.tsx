import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "https://livingconnect-backend.vercel.app";

interface OwnerInfo {
  email: string;
  name: string;
  contactNumber: string;
}

const HomeDetailsPage = () => {
  const [ownerId, setOwnerId] = useState<string | null>(null);
  const { homeId } = useLocalSearchParams(); // Get homeId from router params
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState<OwnerInfo | null>(null);

  const makeCall = (phoneNumber) => {
    const formattedNumber =
      Platform.OS === "android"
        ? `tel:${phoneNumber}`
        : `telprompt:${phoneNumber}`;

    Linking.openURL(formattedNumber).catch((err) => {
      console.error("Error occurred while trying to make a call:", err);
    });
  };

  const fetchHomeDetails = async () => {
    try {
      if (!homeId) throw new Error("No home ID provided");
      const response = await axios.get(
        `https://livingconnect-backend.vercel.app/serviceDetails/get-all-service-details/${homeId}`
      );

      console.log("Fetched home details:", response.data);
      setHome(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch home details.");
      console.error("Error fetching home details:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken"); // Correct key here
      if (!token) throw new Error("User is not logged in");

      console.log("Retrieved token:", token);

      const response = await axios.get(`${API_URL}/profile/get-profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProfile(response.data); // Ensure this includes the `id` field
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  // Fetch owner ID based on email
  const fetchOwnerId = async (email: string) => {
    try {
      const response = await axios.get(
        `${API_URL}/houseDetails/userIdByEmail`,
        {
          params: { email },
        }
      );
      setOwnerId(response.data.userId);
    } catch (error) {
      console.error("Error fetching owner ID:", error);
    }
  };

  useEffect(() => {
    fetchHomeDetails();
    fetchProfile();
  }, []);

  useEffect(() => {
    if (home?.email) {
      console.log("Fetching owner ID for email:", home.email); // Debug email
      fetchOwnerId(home.email);
    }
  }, [home]);

  useEffect(() => {
    console.log("Fetched Owner ID:", ownerId); // Debug ownerId
  }, [ownerId]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (!home) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.errorText}>Home details not found</Text>
      </View>
    );
  }

  return (
    // <ScrollView style={styles.container}>
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <Text style={styles.title}>
          {home?.serviceType.toUpperCase() || "N/A"}
        </Text>

        <Text style={styles.titleName}>
          {home.companyName ? home.companyName : "N/A"}
        </Text>

        {/* Image Gallery */}
        <ScrollView horizontal style={styles.imageContainer}>
          {home?.images?.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />
          )) || <Text style={styles.errorText}>No images available</Text>}
        </ScrollView>

        <View>
          <Text style={styles.imageText}>
            Images ({home?.images?.length || 0})
          </Text>
        </View>

        <View style={styles.infoSection}>
          {/* Property Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.text}>
              {home.description || "Hope you like our service"}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cost</Text>
            <Text style={styles.costText}>Tk {home.cost || 0}</Text>
          </View>

          {/* Location Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Location</Text>
            {home?.location && Object.keys(home.location).length > 0 ? (
              Object.entries(home.location).map(([city, areas]) => (
                <View key={city} style={styles.cityContainer}>
                  {/* City Name */}
                  <Text style={styles.cityTitle}>{city}</Text>

                  {/* List of Areas */}
                  {Array.isArray(areas) && areas.length > 0 ? (
                    areas.map((area, index) => (
                      <Text key={index} style={styles.areaText}>
                        - {area}
                      </Text>
                    ))
                  ) : (
                    <Text style={styles.noAreaText}>No areas available</Text>
                  )}
                </View>
              ))
            ) : (
              <Text style={styles.text}>Location not available</Text>
            )}
          </View>

          {/* User info */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Info</Text>

            <Text style={styles.text}>Email: {home?.email || "N/A"}</Text>

            <Text style={styles.text}>
              Number:{" "}
              <Text style={styles.callText}>{home.contactNumber || "N/A"}</Text>
            </Text>
            <TouchableOpacity
              style={styles.callButton}
              onPress={() => makeCall(home.contactNumber || "")}
            >
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.callButton}
              onPress={() => {
                router.push({
                  pathname: "/messages/ChatMessagesScreen",
                  params: {
                    currentUserId: profile?.id || "", // Assume profile contains logged-in user info
                    recipientId: ownerId || "", // Use fetched owner ID
                  },
                });
                console.log("recipientId: ", ownerId);
                console.log("currentUserId: ", profile?.id);
              }}
            >
              <Text style={styles.buttonText}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: "#1A1A1D",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    // marginTop: 20,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#38bdf8",
    marginBottom: 12,
  },
  rent: {
    fontSize: 18,
    fontWeight: "600",
    color: "#F0BB78", // "#fa0269",
    marginBottom: 16,
  },
  costText: {
    fontSize: 18,
    lineHeight: 24,
    color: "#F0BB78", // "#fa0269",
    fontWeight: "bold",
  },
  titleName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F0BB78",
    marginBottom: 16,
    textAlign: "center",
  },
  imageContainer: {
    // alignContent: "center",
    alignSelf: "center",
    marginBottom: 8,
    flexDirection: "row",
  },
  image: {
    alignContent: "center",
    width: 350,
    height: 200,
    borderRadius: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  imageText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 14,
  },
  section: {
    // borderBottomWidth: 1,
    marginBottom: 20,
    backgroundColor: "#2d3748",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#fff",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  memberRestriction: {
    fontSize: 18,
    fontWeight: "600",
    color: "#02eefa",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: "#faf5f5",
    lineHeight: 24,
  },
  errorText: {
    fontSize: 16,
    color: "#666",
  },
  infoSection: {
    marginTop: 8,
    // marginBottom: 10,
  },

  cityContainer: {
    marginBottom: 12,
  },
  cityTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007BFF",
  },
  areaText: {
    fontSize: 14,
    color: "white",
    paddingLeft: 10,
  },
  noAreaText: {
    fontSize: 14,
    color: "#999",
    paddingLeft: 10,
    fontStyle: "italic",
  },

  callText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#02eefa",
    marginBottom: 16,
  },
  callButton: {
    // backgroundColor: "grey",
    backgroundColor: "#38bdf8",
    paddingHorizontal: 16,
    paddingVertical: 12,
    // paddingBottom: 12,
    // paddingTop: 1,

    borderRadius: 8,
    // width: 115,
    width: "100%",
    marginBottom: 1,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});

export default HomeDetailsPage;
