import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import { router } from "expo-router";

const FixedLocationMap = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all locations from the backend
    const fetchLocations = async () => {
      try {
        const response = await axios.get(
          "https://livingconnect-backend.vercel.app/houseDetails/locations"
        ); // Replace with your backend URL
        console.log("Locations:", response.data.locations);
        setLocations(response.data.locations);
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topBarText}>All Locations</Text>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ marginTop: 20 }}
        />
      ) : (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude:
              locations.length > 0
                ? locations[0].coordinates.latitude
                : 37.78825,
            longitude:
              locations.length > 0
                ? locations[0].coordinates.longitude
                : -122.4324,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          {locations.map((location) => (
            <Marker
              key={location._id}
              coordinate={{
                latitude: location.coordinates.latitude,
                longitude: location.coordinates.longitude,
              }}
              title={
                `${location.area || "Unknown Area"}, ${
                  location.city || "Unknown City"
                } ${"\nclick to show details"}` || "Unknown Location"
              }
              //   onPress={() => console.log("Marker pressed:", location)}
              onPress={() =>
                router.push({
                  pathname: "/pages/HomeInfoPage/homeDetailsShowPage",
                  params: { homeId: location.houseId }, // Pass the home ID as a query parameter
                })
              }
            />
          ))}
        </MapView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    backgroundColor: "black", // "#132639",
  },
  header: {
    paddingVertical: 10,
    marginTop: 30,
    // alignContent: 'center',
    alignItems: "center",
    // height: 40,
    backgroundColor: "#38bdf8",
    width: "100%",
  },
  topBarText: {
    paddingTop: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  //   header: {
  //     padding: 16,
  //     backgroundColor: "#fff",
  //     borderBottomWidth: 1,
  //     borderBottomColor: "#e0e0e0",
  //     alignItems: "center",
  //   },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  markerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  map: {
    flex: 1,
  },
});

export default FixedLocationMap;
