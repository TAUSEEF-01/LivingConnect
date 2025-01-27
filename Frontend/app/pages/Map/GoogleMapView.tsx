// api --->  AlzaSyVkIhayqyPR0tMPEuqf6wfD8Nn9Im9UIEj
// api2 --> AlzaSydwd28czR0irb_qR2Zo8qzMXl1TSR6JXPB

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

export default function GoMapView() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [houseNumber, setHouseNumber] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Location Permission Required",
          "Please enable location services to use all features.",
          [{ text: "OK", style: "default" }]
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setMapRegion({
        ...mapRegion,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setSelectedLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  const handleMapPress = async (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });

    try {
      const response = await axios.get(
        `http://maps.gomaps.pro/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AlzaSydwd28czR0irb_qR2Zo8qzMXl1TSR6JXPB`
      );

      console.log("GoMaps Response:", response.data); // For debugging

      if (response.data.results && response.data.results.length > 0) {
        const result = response.data.results[0];
        const addressComponents = result.address_components;

        // Assuming GoMaps API uses similar address component types
        const cityComponent = addressComponents.find(
          (component) =>
            component.types.includes("city") ||
            component.types.includes("locality")
        );

        const areaComponent = addressComponents.find(
          (component) =>
            component.types.includes("area") ||
            component.types.includes("sublocality")
        );

        const streetComponent = addressComponents.find(
          (component) =>
            component.types.includes("street_address") ||
            component.types.includes("route")
        );

        setCity(
          cityComponent
            ? cityComponent.long_name
            : result.formatted_address.split(",")[1]?.trim() || "Not found"
        );
        setArea(
          areaComponent
            ? areaComponent.long_name
            : result.formatted_address.split(",")[0]?.trim() || "Not found"
        );
        setHouseNumber(
          streetComponent ? streetComponent.long_name : "Not found"
        );
      }
    } catch (error) {
      console.error("Error fetching location details:", error);
      setCity("Error fetching location");
      setArea("Error fetching location");
      setHouseNumber("Error fetching location");
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://maps.gomaps.pro/maps/api/geocode/json?address=${searchQuery}&key=AlzaSyVkIhayqyPR0tMPEuqf6wfD8Nn9Im9UIEj`
      );
      const geocode = response.data.results;
      if (geocode.length > 0) {
        const { lat, lng } = geocode[0].geometry.location;
        setMapRegion({ ...mapRegion, latitude: lat, longitude: lng });
        setSelectedLocation({ latitude: lat, longitude: lng });

        const addressComponents = geocode[0].address_components;
        setCity(getAddressComponent(addressComponents, "locality"));
        setArea(
          getAddressComponent(addressComponents, "sublocality") ||
            getAddressComponent(addressComponents, "neighborhood")
        );
        setHouseNumber(getAddressComponent(addressComponents, "street_number"));

        setSuggestions([]);
      } else {
        Alert.alert(
          "Location Not Found",
          "Please try a different search term."
        );
      }
    } catch (error) {
      Alert.alert("Error", "Unable to search location. Please try again.");
    }
  };

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `http://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${query}&key=AlzaSydwd28czR0irb_qR2Zo8qzMXl1TSR6JXPB`
      );
      setSuggestions(response.data.predictions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleSuggestionPress = async (placeId) => {
    try {
      const response = await axios.get(
        `http://maps.gomaps.pro/maps/api/place/details/json?placeid=${placeId}&key=AlzaSydwd28czR0irb_qR2Zo8qzMXl1TSR6JXPB`
      );
      const { lat, lng } = response.data.result.geometry.location;
      setMapRegion({ ...mapRegion, latitude: lat, longitude: lng });
      setSelectedLocation({ latitude: lat, longitude: lng });

      const addressComponents = response.data.result.address_components;
      setCity(getAddressComponent(addressComponents, "locality"));
      setArea(
        getAddressComponent(addressComponents, "sublocality") ||
          getAddressComponent(addressComponents, "neighborhood")
      );
      setHouseNumber(getAddressComponent(addressComponents, "street_number"));

      setSuggestions([]);
    } catch (error) {
      console.error("Error fetching place details:", error);
    }
  };

  const getAddressComponent = (components, type) => {
    const component = components.find((c) => c.types.includes(type));
    return component ? component.long_name : "";
  };

  const { height, width } = Dimensions.get("window");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingView}
    >
      <FlatList
        data={[{ key: "map" }]}
        renderItem={() => (
          <View style={styles.container}>
            <StatusBar barStyle="light" />

            <View style={styles.searchContainer}>
              <View style={styles.searchInputContainer}>
                <Ionicons
                  name="search"
                  size={20}
                  color="#666"
                  style={styles.searchIcon}
                />
                <TextInput
                  style={styles.searchBar}
                  placeholder="Search location..."
                  placeholderTextColor="#666"
                  value={searchQuery}
                  onChangeText={(text) => {
                    setSearchQuery(text);
                    if (text.trim()) {
                      // Only fetch suggestions if text is not empty or just whitespace
                      fetchSuggestions(text);
                    } else {
                      setSuggestions([]);
                    }
                  }}
                  onSubmitEditing={handleSearch}
                />
              </View>
              <TouchableOpacity
                style={styles.searchButton}
                onPress={handleSearch}
              >
                <Text style={styles.searchButtonText}>Search</Text>
              </TouchableOpacity>
            </View>

            {suggestions.length > 0 && searchQuery.trim() !== "" && (
              <FlatList
                data={suggestions}
                keyExtractor={(item) => item.place_id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => handleSuggestionPress(item.place_id)}
                  >
                    <Text style={styles.suggestionItem}>
                      {item.description}
                    </Text>
                  </TouchableOpacity>
                )}
                style={styles.suggestionsContainer}
              />
            )}

            <View style={styles.mapContainer}>
              <MapView
                style={{ height: height * 0.6, width: width * 0.95 }}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsCompass={true}
                // rotateEnabled={true}
                region={mapRegion}
                onRegionChangeComplete={setMapRegion}
                onPress={handleMapPress}
              >
                <Marker coordinate={selectedLocation} pinColor="#38bdf8" />
              </MapView>
            </View>

            <View style={styles.locationInfoContainer}>
              <Text style={styles.locationTitle}>Selected Location</Text>
              <View style={styles.coordinatesContainer}>
                <View style={styles.coordinateBox}>
                  <Text style={styles.coordinateLabel}>Latitude</Text>
                  <Text style={styles.coordinateValue}>
                    {selectedLocation.latitude.toFixed(6)}
                  </Text>
                </View>
                <View style={styles.coordinateBox}>
                  <Text style={styles.coordinateLabel}>Longitude</Text>
                  <Text style={styles.coordinateValue}>
                    {selectedLocation.longitude.toFixed(6)}
                  </Text>
                </View>
              </View>
              <View style={styles.additionalInfoContainer}>
                <Text style={styles.additionalInfoLabel}>City: {city}</Text>
                <Text style={styles.additionalInfoLabel}>Area: {area}</Text>
                <Text style={styles.additionalInfoLabel}>
                  House Number: {houseNumber}
                </Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.scrollContainer}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  searchContainer: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 8,
    gap: 8,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    paddingLeft: 12,
  },
  searchBar: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: "#1f2937",
  },
  searchButton: {
    backgroundColor: "#38bdf8",
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "#38bdf8",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  searchButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  suggestionsContainer: {
    maxHeight: 200,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 16,
    marginTop: 8,
    position: "absolute",
    top: 120,
    width: "90%",
    zIndex: 1,
  },
  suggestionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  mapContainer: {
    alignItems: "center",
    marginVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 0,
  },
  locationInfoContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 12,
  },
  coordinatesContainer: {
    flexDirection: "row",
    gap: 12,
  },
  coordinateBox: {
    // flex: 1,
    width: "50%",
    backgroundColor: "#f1f5f9",
    padding: 12,
    borderRadius: 8,
  },
  coordinateLabel: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 4,
  },
  coordinateValue: {
    fontSize: 16,
    color: "#0f172a",
    fontWeight: "500",
  },
  additionalInfoContainer: {
    marginTop: 12,
  },
  additionalInfoLabel: {
    fontSize: 16,
    color: "#0f172a",
    fontWeight: "500",
  },
});
