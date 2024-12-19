import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import axios from "axios";

const HomeDetailsPage = () => {
  const [home, setHome] = useState(null); // To store the single home object
  const [loading, setLoading] = useState(true);

  // Fetch home details from the backend
  const fetchHomeDetails = async () => {
    try {
      const response = await axios.get(
        "http://192.168.50.242:5000/houseDetails/get-homes-details/67641be675a585b5610f677c"
      );
      console.log(response.data); // Log response to verify structure
      setHome(response.data); // Set the home data
    } catch (error) {
      Alert.alert("Error", "Failed to fetch home details.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeDetails();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (!home) {
    return (
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>No home details found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        {/* Property Type and Rent */}
        <Text style={styles.title}>
          {home.PropertyType} - ${home.rent} ({home.rentPeriod})
        </Text>
        {/* Location */}
        <Text style={styles.subtitle}>
          {home.location.city}, {home.location.area}, {home.location.road}
        </Text>
        {/* Details */}
        <Text style={styles.details}>
          Beds: {home.details.beds}, Baths: {home.details.baths}, Size:{" "}
          {home.details.size || "N/A"} sq.m.
        </Text>
        <Text style={styles.details}>
          Balcony: {home.details.balcony}, Floor:{" "}
          {home.details.floor || "N/A"}
        </Text>
        {/* Availability */}
        <Text style={styles.details}>
          Available:{" "}
          {new Date(home.availability.from).toLocaleDateString()} -{" "}
          {new Date(home.availability.to).toLocaleDateString()}
        </Text>
        {/* Facilities */}
        <Text style={styles.details}>
          Member Restriction: {home.memberRestriction || "None"}
        </Text>
        {/* Images */}
        <ScrollView horizontal style={styles.imageScroll}>
          {home.images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }} // Replace `image` with full URL if needed
              style={styles.image}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 16,
    color: "#555",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    marginBottom: 4,
  },
  imageScroll: {
    marginTop: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
});

export default HomeDetailsPage;
