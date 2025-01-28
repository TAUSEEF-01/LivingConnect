import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";

interface Home {
  location: {
    latitude: number;
    longitude: number;
    area: string;
    city: string;
  };
}

const HomesMap = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 23.810331,
    longitude: 90.412521,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  const [homes, setHomes] = useState<Home[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const response = await axios.get("http://192.168.0.103:5000/api/homes");
        setHomes(response.data);
      } catch (error) {
        console.error("Error fetching homes:", error);
        Alert.alert("Error", "Failed to fetch homes");
      } finally {
        setLoading(false);
      }
    };

    fetchHomes();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={currentLocation}>
        {homes.map((home, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: home.location.latitude,
              longitude: home.location.longitude,
            }}
            title={home.location.area}
            description={home.location.city}
          />
        ))}
      </MapView>
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
