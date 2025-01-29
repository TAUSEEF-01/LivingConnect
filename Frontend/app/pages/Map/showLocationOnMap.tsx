import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useLocalSearchParams } from 'expo-router';

const FixedLocationMap = () => {
  const params = useLocalSearchParams();
  
  // Get coordinates from params or use default
  const coordinates = {
    latitude: params.latitude ? parseFloat(params.latitude) : 37.78825,
    longitude: params.longitude ? parseFloat(params.longitude) : -122.4324,
    city: params.city || 'Dhaka',
    area: params.area || 'Dhanmondi',
  };

//   const locationName = params.locationName || 'Selected Location';

  return (
    <SafeAreaView style={styles.container}>
      {/* Location Header */}
      <View style={styles.header}>
        <Text style={styles.locationTitle}>{coordinates.area.toUpperCase() + ", " + coordinates.city.toUpperCase()}</Text>
        <Text style={styles.coordinates}>
          {coordinates.latitude.toFixed(6)}, {coordinates.longitude.toFixed(6)}
        </Text>
      </View>

      {/* Map with Fixed Marker */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.01, // Zoomed in more for better visibility
          longitudeDelta: 0.01,
        }}
        scrollEnabled={true}
        zoomEnabled={true}
        rotateEnabled={false}
        onPress={() => {}} // Empty handler to prevent marker movement
      >
        <Marker
          coordinate={coordinates}
          title={coordinates.area.toUpperCase() + ", " + coordinates.city.toUpperCase()}
          draggable={false}
        />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  header: {
    padding: 16,
    marginTop: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  coordinates: {
    fontSize: 14,
    color: '#666',
  },
  map: {
    flex: 1,
  },
});

export default FixedLocationMap;