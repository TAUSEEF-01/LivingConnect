import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";

interface Location {
  location: {
    latitude: number;
    longitude: number;
    area?: string;
    city?: string;
  };
}

const HomesMap = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all locations from the backend
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get("http://192.168.0.103:5000/homes/locations"); // Replace with your backend URL
        setLocations(response.data); // Save locations to state
      } catch (error) {
        console.error("Error fetching locations:", error);
        Alert.alert("Error", "Failed to fetch locations");
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 23.810331, // Default map center
            longitude: 90.412521,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: parseFloat(location.location.latitude),
                longitude: parseFloat(location.location.longitude),
              }}
              title={location.location.area || "Unknown Area"}
              description={location.location.city || "Unknown City"}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default HomesMap;
