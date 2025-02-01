// import React, { useEffect, useState } from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   SafeAreaView,
//   ActivityIndicator,
// } from "react-native";
// import MapView, { Marker } from "react-native-maps";
// import axios from "axios";
// import { router } from "expo-router";

// const FixedLocationMap = () => {
//   const [locations, setLocations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch all locations from the backend
//     const fetchLocations = async () => {
//       try {
//         const response = await axios.get(
//           "https://livingconnect-backend.vercel.app/houseDetails/locations"
//         ); // Replace with your backend URL
//         console.log("Locations:", response.data.locations);
//         setLocations(response.data.locations);
//       } catch (error) {
//         console.error("Error fetching locations:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLocations();
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.topBarText}>All Locations</Text>
//       </View>

//       {loading ? (
//         <ActivityIndicator
//           size="large"
//           color="#0000ff"
//           style={{ marginTop: 20 }}
//         />
//       ) : (
//         <MapView
//           style={styles.map}
//           initialRegion={{
//             latitude:
//               locations.length > 0
//                 ? locations[0].coordinates.latitude
//                 : 37.78825,
//             longitude:
//               locations.length > 0
//                 ? locations[0].coordinates.longitude
//                 : -122.4324,
//             latitudeDelta: 0.05,
//             longitudeDelta: 0.05,
//           }}
//         >
//           {locations.map((location) => (
//             <Marker
//               key={location._id}
//               coordinate={{
//                 latitude: location.coordinates.latitude,
//                 longitude: location.coordinates.longitude,
//               }}
//               title={
//                 `${location.area || "Unknown Area"}, ${
//                   location.city || "Unknown City"
//                 } ${"\nclick to show details"}` || "Unknown Location"
//               }
//               //   onPress={() => console.log("Marker pressed:", location)}
              // onPress={() =>
              //   router.push({
              //     pathname: "/pages/HomeInfoPage/homeDetailsShowPage",
              //     params: { homeId: location.houseId }, // Pass the home ID as a query parameter
              //   })
              // }
//             />
//           ))}
//         </MapView>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
    // flex: 1,
    // paddingTop: 8,
    // backgroundColor: "black", // "#132639",
//   },
  // header: {
  //   paddingVertical: 10,
  //   marginTop: 30,
  //   // alignContent: 'center',
  //   alignItems: "center",
  //   // height: 40,
  //   backgroundColor: "#38bdf8",
  //   width: "100%",
  // },
//   topBarText: {
//     paddingTop: 8,
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   //   header: {
//   //     padding: 16,
//   //     backgroundColor: "#fff",
//   //     borderBottomWidth: 1,
//   //     borderBottomColor: "#e0e0e0",
//   //     alignItems: "center",
//   //   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   markerTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default FixedLocationMap;




import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_COORDINATES = { latitude: 23.7544529, longitude: 90.393336 };

const MapPage = () => {
  const [coordinates, setCoordinates] = useState(INITIAL_COORDINATES);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const router = useRouter();
  const params = useLocalSearchParams();

  useEffect(() => {
    if (!selectedLocation && params.latitude && params.longitude) {
      setSelectedLocation({
        coordinates: {
          latitude: parseFloat(params.latitude),
          longitude: parseFloat(params.longitude),
        },
        city: params.city || 'Unknown City',
        area: params.area || 'Unknown Area',
      });
    }
  }, [params.latitude, params.longitude]);

  // useEffect(() => {
  //   const fetchLocations = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://livingconnect-backend.vercel.app/houseDetails/locations'
  //       );
  //       const fetchedLocations = response.data.locations;
  //       setLocations(fetchedLocations);
  //       setFilteredLocations(fetchedLocations);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching locations:', error);
  //       Alert.alert('Error', 'Failed to fetch locations. Please try again later.');
  //     }
  //   };
  //   fetchLocations();
  // }, []);


  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        
        const response = await axios.get(
          'https://livingconnect-backend.vercel.app/houseDetails/locations-otherUsers',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const fetchedLocations = response.data.locations;
        setLocations(fetchedLocations);
        setFilteredLocations(fetchedLocations);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching locations:', error);
        Alert.alert('Error', 'Failed to fetch locations. Please try again later.');
      }
    };
    fetchLocations();
  }, []);

  const onMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setCoordinates({ latitude, longitude });
    fetchLocationDetails(latitude, longitude);
  };

  const fetchLocationDetails = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
        params: { format: 'json', lat: latitude, lon: longitude, 'accept-language': 'en' },
        headers: { 'User-Agent': 'ReactNativeApp' },
      });
      const { address } = response.data;
      const city = address?.city || address?.town || address?.village || 'Unknown City';
      const area = address?.suburb || address?.neighbourhood || 'Unknown Area';

      setSelectedLocation({
        coordinates: { latitude, longitude },
        city,
        area,
      });
    } catch (error) {
      alert(`Error fetching location details: ${error.message}`);
    }
  };

  const searchLocation = async () => {
    if (!searchText.trim()) return;

    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: { format: 'json', q: searchText, 'accept-language': 'en' },
        headers: { 'User-Agent': 'ReactNativeApp' },
      });

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lon);

        setCoordinates({ latitude, longitude });
        fetchLocationDetails(latitude, longitude);
      } else {
        alert('Location not found');
      }
    } catch (error) {
      alert(`Error searching for location: ${error.message}`);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topBarText}>Map & Search Locations</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <View style={styles.searchBar}>
            <FontAwesome name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search by area or city..."
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor="#666"
            />
          </View>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={searchLocation}
            activeOpacity={0.8}
          >
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
      ) : (
        <MapView
          style={styles.map}
          region={{
            ...coordinates,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          onPress={onMapPress}
        >
          {filteredLocations.map((location) => (
            <Marker
              key={location._id}
              coordinate={{
                latitude: location.coordinates.latitude,
                longitude: location.coordinates.longitude,
              }}
              title={`${location.area || 'Unknown Area'}, ${location.city || 'Unknown City'}`}
              // onPress={() => {
              //   setCoordinates(location.coordinates);
              //   fetchLocationDetails(location.coordinates.latitude, location.coordinates.longitude);
              // }}

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
  container: { flex: 1, backgroundColor: 'black',paddingTop: 8 },
  header: {
    paddingVertical: 10,
    marginTop: 30,
    // alignContent: 'center',
    alignItems: "center",
    // height: 40,
    backgroundColor: "#38bdf8",
    width: "100%",
  },
  topBarText: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  searchContainer: { padding: 16, backgroundColor: '#fff' },
  searchInputContainer: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  searchBar: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 12, paddingHorizontal: 16, height: 50 },
  searchIcon: { marginRight: 12 },
  searchInput: { flex: 1, fontSize: 16, color: '#333' },
  searchButton: { backgroundColor: '#38bdf8', borderRadius: 12, paddingHorizontal: 20, height: 50, justifyContent: 'center', alignItems: 'center' },
  searchButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  map: { flex: 1 },
  saveButton: { backgroundColor: '#10b981', padding: 15, alignItems: 'center', margin: 16, borderRadius: 8 },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default MapPage;
