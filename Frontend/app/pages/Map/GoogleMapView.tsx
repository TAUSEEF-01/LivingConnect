import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity, Alert, StatusBar, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

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

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // useEffect(() => {
  //   if (!searchQuery) {
  //     setSuggestions([]); // Clear suggestions when the search query is empty
  //     return;
  //   }
  
  //   const fetchLocation = async () => {
  //     const { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       Alert.alert(
  //         'Location Permission Required',
  //         'Please enable location services to use all features.',
  //         [{ text: 'OK', style: 'default' }]
  //       );
  //       return;
  //     }
  
  //     const location = await Location.getCurrentPositionAsync({});
  //     setMapRegion({
  //       ...mapRegion,
  //       latitude: location.coords.latitude,
  //       longitude: location.coords.longitude,
  //     });
  //     setSelectedLocation({
  //       latitude: location.coords.latitude,
  //       longitude: location.coords.longitude,
  //     });
  //   };
  
  //   fetchLocation();
  // }, [searchQuery]);

  
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Location Permission Required',
          'Please enable location services to use all features.',
          [{ text: 'OK', style: 'default' }]
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

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://maps.gomaps.pro/maps/api/geocode/json?address=${searchQuery}&key=AlzaSydwd28czR0irb_qR2Zo8qzMXl1TSR6JXPB`
      );
      const geocode = response.data.results;
      if (geocode.length > 0) {
        const { lat, lng } = geocode[0].geometry.location;
        setMapRegion({ ...mapRegion, latitude: lat, longitude: lng });
        setSelectedLocation({ latitude: lat, longitude: lng });
        setSuggestions([]);
      } else {
        Alert.alert('Location Not Found', 'Please try a different search term.');
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to search location. Please try again.');
    }
  };

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
  
    try {
      const response = await axios.get(
        `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${query}&key=AlzaSydwd28czR0irb_qR2Zo8qzMXl1TSR6JXPB`
      );
      setSuggestions(response.data.predictions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSuggestionPress = async (placeId) => {
    try {
      const response = await axios.get(
        `https://maps.gomaps.pro/maps/api/place/details/json?placeid=${placeId}&key=AlzaSydwd28czR0irb_qR2Zo8qzMXl1TSR6JXPB`
      );
      const { lat, lng } = response.data.result.geometry.location;
      setMapRegion({ ...mapRegion, latitude: lat, longitude: lng });
      setSelectedLocation({ latitude: lat, longitude: lng });
      setSuggestions([]);
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  };

  const { height, width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light" />
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search location..."
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={(text) => {
                setSearchQuery(text);
                fetchSuggestions(text);
            }}
            // onChangeText={(text) => {
            //   setSearchQuery(text);
            //   if (text) {
            //     fetchSuggestions(text);
            //   } else {
            //     setSuggestions([]); // Clear suggestions for empty or whitespace-only input
            //   }
            // }}
            
            onSubmitEditing={handleSearch}
          />
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.place_id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSuggestionPress(item.place_id)}>
              <Text style={styles.suggestionItem}>{item.description}</Text>
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
          <Marker
            coordinate={selectedLocation}
            pinColor="#2563eb"
          />
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // flex: 1,
    // backgroundColor: '#f8fafc',

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    gap: 8,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
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
    color: '#1f2937',
  },
  searchButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  suggestionsContainer: {
    maxHeight: 200,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 16,
    marginTop: 8,
    position: 'absolute',
    top: 80,
    width: '90%',
    zIndex: 1,
  },
  suggestionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  mapContainer: {
    alignItems: 'center',
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 0,
  },
  locationInfoContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  coordinatesContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  coordinateBox: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 12,
    borderRadius: 8,
  },
  coordinateLabel: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  coordinateValue: {
    fontSize: 16,
    color: '#0f172a',
    fontWeight: '500',
  },
});