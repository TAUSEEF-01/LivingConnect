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
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch home details from the backend
  const fetchHomeDetails = async () => {
    try {
      const response = await axios.get("http://192.168.50.242:5000/houseDetails/get-homes-details/:id");
      setHomes(response.data);
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

  return (
    <ScrollView style={styles.container}>
      {homes.length > 0 ? (
        homes.map((home) => (
          <View key={home._id} style={styles.card}>
            {/* Property Type and Rent */}
            <Text style={styles.title}>
              {home.PropertyType} - ${home.rent} ({home.rentPeriod})
            </Text>
            {/* Location */}
            <Text style={styles.subtitle}>
              {home.location.city}, {home.location.area}, {home.location.road}
            </Text>
            {/* Facilities */}
            <Text style={styles.details}>
              Beds: {home.details.beds}, Baths: {home.details.baths}, Size:{" "}
              {home.details.size || "N/A"} sq.m.
            </Text>
            <Text style={styles.details}>
              Balcony: {home.details.balcony}, Floor: {home.details.floor || "N/A"}
            </Text>
            {/* Availability */}
            <Text style={styles.details}>
              Available: {new Date(home.availability.from).toLocaleDateString()}{" "}
              - {new Date(home.availability.to).toLocaleDateString()}
            </Text>
            {/* Facilities */}
            <Text style={styles.details}>
              Facilities:{" "}
              {Object.entries(home.facitlities)
                .filter(([_, value]) => value)
                .map(([key]) => key)
                .join(", ") || "None"}
            </Text>
            {/* Images */}
            <ScrollView horizontal style={styles.imageScroll}>
              {home.images.map((image, index) => (
                <Image
                  key={index}
                  source={{ uri: image }}
                  style={styles.image}
                />
              ))}
            </ScrollView>
          </View>
        ))
      ) : (
        <Text style={styles.noData}>No homes found.</Text>
      )}
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
  noData: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginTop: 20,
  },
});

export default HomeDetailsPage;
