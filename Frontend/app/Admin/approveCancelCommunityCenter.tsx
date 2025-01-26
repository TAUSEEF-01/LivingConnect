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
  Platform,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";

const CommunityApprovedDetailsPage = ({ route }) => {
  const { communityId } = useLocalSearchParams(); // route.params; // Receive community ID from navigation

  const [community, setCommunity] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCommunityDetails = async () => {
    try {
      console.log(communityId);
      const response = await axios.get(
        `https://livingconnect-backend.vercel.app/communityDetails/get-communityCenter-details/${communityId}`
      );
      console.log("Community details response:", response.data);
      setCommunity(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch community details.");
      console.error("Error fetching community details:", error);
    } finally {
      setLoading(false);
    }
  };

  const makeCall = (phoneNumber) => {
    const formattedNumber =
      Platform.OS === "android"
        ? `tel:${phoneNumber}`
        : `telprompt:${phoneNumber}`;

    Linking.openURL(formattedNumber).catch((err) => {
      console.error("Error occurred while trying to make a call:", err);
    });
  };

  const handleAccept = async (id) => {
    try {
      const response = await axios.patch(
        `https://livingconnect-backend.vercel.app/communityDetails/cancel/${id}`
      );
      Alert.alert("Success", response.data.message);
      router.replace("/Admin/adminApprovedRequestCommunityCenter");
    } catch (error) {
      Alert.alert("Error", "Failed to accept the home.");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCommunityDetails();
  }, [communityId]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (!community) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.errorText}>Community details not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          {community.centerType ? community.centerType.toUpperCase() : "N/A"}
        </Text>

        {community.images?.length ? (
          <ScrollView horizontal style={styles.imageContainer}>
            {community.images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.image}
                resizeMode="cover"
              />
            ))}
          </ScrollView>
        ) : (
          <Text style={styles.errorText}>No images available</Text>
        )}

        <View>
          <Text style={styles.imageText}>
            Images ({community?.images?.length || 0})
          </Text>
        </View>

        {/* Basic Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details</Text>
          <Text style={styles.text}>
            Capacity: {community.details.capacity || 0} people
          </Text>
          <Text style={styles.text}>Halls: {community.details.halls || 0}</Text>
          <Text style={styles.text}>
            Size: {community.details.size || "N/A"} sq.m.
          </Text>
          <Text style={styles.text}>
            Kitchen Area: {community.details.kitchenArea ? "Yes" : "No"}
          </Text>
          <Text style={styles.text}>
            Dining Area: {community.details.diningArea ? "Yes" : "No"}
          </Text>
          <Text style={styles.text}>
            Stage Area: {community.details.stageArea ? "Yes" : "No"}
          </Text>
        </View>

        {/* Pricing */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pricing</Text>
          <Text style={styles.text}>
            Base Price: {community.price.basePrice || 0} Tk
          </Text>
          <Text style={styles.text}>
            Full Day Price: {community.price.fullDayPrice || "N/A"} Tk
          </Text>
          <Text style={styles.text}>
            Half Day Price: {community.price.halfDayPrice || "N/A"} Tk
          </Text>
          <Text style={styles.text}>
            Per Hour Price: {community.price.perHourPrice || "N/A"} Tk
          </Text>
        </View>

        {/* Location */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>
          <Text style={styles.text}>City: {community.location.city}</Text>
          <Text style={styles.text}>Area: {community.location.area}</Text>
          <Text style={styles.text}>
            Sector: {community.location.sector || "N/A"}
          </Text>
          <Text style={styles.text}>
            Road: {community.location.road || "N/A"}
          </Text>
          <Text style={styles.text}>
            Building Number: {community.location.buildingNumber || "N/A"}
          </Text>
        </View>

        {/* Facilities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Facilities</Text>
          {Object.entries(community.facilities || {}).map(([key, value]) => (
            <Text style={styles.text} key={key}>
              {key.replace(/([A-Z])/g, " $1")}: {value ? "Yes" : "No"}
            </Text>
          ))}
        </View>

        {/* Availability */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Availability</Text>
          <Text style={styles.text}>
            From:{" "}
            {new Date(community.availability.from).toLocaleDateString() ||
              "N/A"}
          </Text>
          <Text style={styles.text}>
            To:{" "}
            {new Date(community.availability.to).toLocaleDateString() || "N/A"}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Owner</Text>
          <Text style={styles.text}>Email: {community?.email || "N/A"}</Text>
          <Text style={styles.text}>
            Contact Number:{" "}
            <Text style={styles.callText}>
              {community.contactNumber || "N/A"}
            </Text>
          </Text>
          <Text style={styles.text}>
            Success:{" "}
            <Text style={styles.callText}>
              {community.success ? "True" : "False"}
            </Text>
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.callButton}
            onPress={() => makeCall(community.contactNumber || "")}
          >
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.callButton}
            onPress={() => handleAccept(community._id)}
          >
            <Text style={styles.buttonText}>Reject</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1D",
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#38bdf8",
    marginBottom: 16,
    textAlign: "center",
  },

  callButton: {
    backgroundColor: "#38bdf8",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    marginBottom: 1,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  callText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#02eefa",
    marginBottom: 16,
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
  text: {
    fontSize: 16,
    color: "#faf5f5",
    lineHeight: 24,
  },

  imageContainer: {
    // alignContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: 16,
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
  errorText: {
    fontSize: 16,
    color: "#666",
  },
});

export default CommunityApprovedDetailsPage;
