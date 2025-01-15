
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
// // // // // import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// // // // // import * as Location from 'expo-location';

// // // // // export default function GoogleMapView() {
// // // // //   const [mapRegion, setMapRegion] = useState({
// // // // //     latitude: 37.7749,
// // // // //     longitude: -122.4194,
// // // // //     latitudeDelta: 0.0922,
// // // // //     longitudeDelta: 0.0421,
// // // // //   });

// // // // //   const [selectedLocation, setSelectedLocation] = useState({
// // // // //     latitude: 37.7749,
// // // // //     longitude: -122.4194,
// // // // //   });

// // // // //   const [searchQuery, setSearchQuery] = useState('');

// // // // //   useEffect(() => {
// // // // //     (async () => {
// // // // //       let { status } = await Location.requestForegroundPermissionsAsync();
// // // // //       if (status !== 'granted') {
// // // // //         Alert.alert('Permission required', 'Please grant permission to access location services.');
// // // // //       }
// // // // //     })();
// // // // //   }, []);

// // // // //   const handleMapPress = (event) => {
// // // // //     const { latitude, longitude } = event.nativeEvent.coordinate;
// // // // //     setSelectedLocation({ latitude, longitude });
// // // // //   };

// // // // //   const handleSearch = async () => {
// // // // //     try {
// // // // //       const geocode = await Location.geocodeAsync(searchQuery);
// // // // //       if (geocode.length > 0) {
// // // // //         const { latitude, longitude } = geocode[0];
// // // // //         setMapRegion({
// // // // //           ...mapRegion,
// // // // //           latitude,
// // // // //           longitude,
// // // // //         });
// // // // //         setSelectedLocation({ latitude, longitude });
// // // // //       } else {
// // // // //         alert('Location not found');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Error searching location:', error);
// // // // //       alert('Error searching location');
// // // // //     }
// // // // //   };

// // // // //   const screenHeight = Dimensions.get('screen').height;
// // // // //   const screenWidth = Dimensions.get('screen').width;

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <TextInput
// // // // //         style={styles.searchBar}
// // // // //         placeholder="Search location"
// // // // //         value={searchQuery}
// // // // //         onChangeText={setSearchQuery}
// // // // //       />
// // // // //       <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
// // // // //         <Text style={styles.searchButtonText}>Search</Text>
// // // // //       </TouchableOpacity>
// // // // //       <MapView
// // // // //         style={styles.map}
// // // // //         provider={PROVIDER_GOOGLE}
// // // // //         showsUserLocation={true}
// // // // //         region={mapRegion}
// // // // //         onRegionChangeComplete={(region) => setMapRegion(region)}
// // // // //         onPress={handleMapPress}
// // // // //       >
// // // // //         <Marker coordinate={selectedLocation} />
// // // // //       </MapView>
// // // // //       <View style={styles.inputContainer}>
// // // // //         <Text style={styles.label}>Selected Location:</Text>
// // // // //         <TextInput
// // // // //           style={styles.input}
// // // // //           value={`Latitude: ${selectedLocation.latitude}, Longitude: ${selectedLocation.longitude}`}
// // // // //           editable={false}
// // // // //         />
// // // // //       </View>
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: '#f8fafc',
// // // // //     alignItems: 'center',
// // // // //     paddingTop: 20,
// // // // //   },
// // // // //   searchBar: {
// // // // //     width: '90%',
// // // // //     padding: 12,
// // // // //     borderWidth: 1,
// // // // //     borderColor: '#e2e8f0',
// // // // //     borderRadius: 12,
// // // // //     backgroundColor: '#fff',
// // // // //     shadowColor: '#000',
// // // // //     shadowOpacity: 0.1,
// // // // //     shadowRadius: 4,
// // // // //     elevation: 3,
// // // // //     marginBottom: 10,
// // // // //   },
// // // // //   searchButton: {
// // // // //     backgroundColor: '#2563eb',
// // // // //     paddingVertical: 12,
// // // // //     paddingHorizontal: 20,
// // // // //     borderRadius: 12,
// // // // //     shadowColor: '#000',
// // // // //     shadowOpacity: 0.2,
// // // // //     shadowRadius: 4,
// // // // //     elevation: 3,
// // // // //     marginBottom: 20,
// // // // //   },
// // // // //   searchButtonText: {
// // // // //     color: '#fff',
// // // // //     fontWeight: '600',
// // // // //     textAlign: 'center',
// // // // //     fontSize: 16,
// // // // //   },
// // // // //   map: {
// // // // //     height: Dimensions.get('screen').height * 0.5,
// // // // //     width: '90%',
// // // // //     borderRadius: 12,
// // // // //     overflow: 'hidden',
// // // // //     shadowColor: '#000',
// // // // //     shadowOpacity: 0.15,
// // // // //     shadowRadius: 5,
// // // // //     elevation: 5,
// // // // //     marginBottom: 20,
// // // // //   },
// // // // //   inputContainer: {
// // // // //     width: '90%',
// // // // //     padding: 20,
// // // // //     borderRadius: 12,
// // // // //     backgroundColor: '#fff',
// // // // //     shadowColor: '#000',
// // // // //     shadowOpacity: 0.15,
// // // // //     shadowRadius: 5,
// // // // //     elevation: 5,
// // // // //   },
// // // // //   label: {
// // // // //     fontSize: 16,
// // // // //     fontWeight: '700',
// // // // //     color: '#1e293b',
// // // // //     marginBottom: 8,
// // // // //   },
// // // // //   input: {
// // // // //     padding: 12,
// // // // //     borderWidth: 1,
// // // // //     borderColor: '#e2e8f0',
// // // // //     borderRadius: 8,
// // // // //     backgroundColor: '#f1f5f9',
// // // // //     color: '#1e293b',
// // // // //   },
// // // // // });




// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
// // // // // import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// // // // // import * as Location from 'expo-location';

// // // // // export default function GoogleMapView() {
// // // // //   const [mapRegion, setMapRegion] = useState({
// // // // //     latitude: 37.7749,
// // // // //     longitude: -122.4194,
// // // // //     latitudeDelta: 0.0922,
// // // // //     longitudeDelta: 0.0421,
// // // // //   });

// // // // //   const [selectedLocation, setSelectedLocation] = useState({
// // // // //     latitude: 37.7749,
// // // // //     longitude: -122.4194,
// // // // //   });

// // // // //   const [searchQuery, setSearchQuery] = useState('');

// // // // //   useEffect(() => {
// // // // //     (async () => {
// // // // //       let { status } = await Location.requestForegroundPermissionsAsync();
// // // // //       if (status !== 'granted') {
// // // // //         Alert.alert('Permission required', 'Please grant permission to access location services.');
// // // // //       }
// // // // //     })();
// // // // //   }, []);

// // // // //   const handleMapPress = (event) => {
// // // // //     const { latitude, longitude } = event.nativeEvent.coordinate;
// // // // //     setSelectedLocation({ latitude, longitude });
// // // // //   };

// // // // //   const handleSearch = async () => {
// // // // //     try {
// // // // //       const geocode = await Location.geocodeAsync(searchQuery);
// // // // //       if (geocode.length > 0) {
// // // // //         const { latitude, longitude } = geocode[0];
// // // // //         setMapRegion({
// // // // //           ...mapRegion,
// // // // //           latitude,
// // // // //           longitude,
// // // // //         });
// // // // //         setSelectedLocation({ latitude, longitude });
// // // // //       } else {
// // // // //         Alert.alert('Location not found', 'Please try a different search query.');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Error searching location:', error);
// // // // //       Alert.alert('Error', 'An error occurred while searching for the location.');
// // // // //     }
// // // // //   };

// // // // //   const screenHeight = Dimensions.get('screen').height;
// // // // //   const screenWidth = Dimensions.get('screen').width;

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <View style={styles.searchContainer}>
// // // // //         <TextInput
// // // // //           style={styles.searchBar}
// // // // //           placeholder="Search location"
// // // // //           value={searchQuery}
// // // // //           onChangeText={setSearchQuery}
// // // // //           placeholderTextColor="#999"
// // // // //         />
// // // // //         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
// // // // //           <Text style={styles.searchButtonText}>Search</Text>
// // // // //         </TouchableOpacity>
// // // // //       </View>
// // // // //       <MapView
// // // // //         style={styles.map}
// // // // //         provider={PROVIDER_GOOGLE}
// // // // //         showsUserLocation={true}
// // // // //         region={mapRegion}
// // // // //         onRegionChangeComplete={(region) => setMapRegion(region)}
// // // // //         onPress={handleMapPress}
// // // // //       >
// // // // //         <Marker coordinate={selectedLocation} />
// // // // //       </MapView>
// // // // //       <View style={styles.inputContainer}>
// // // // //         <Text style={styles.label}>Selected Location:</Text>
// // // // //         <TextInput
// // // // //           style={styles.input}
// // // // //           value={`Latitude: ${selectedLocation.latitude.toFixed(4)}, Longitude: ${selectedLocation.longitude.toFixed(4)}`}
// // // // //           editable={false}
// // // // //         />
// // // // //       </View>
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: '#f0f0f0',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'flex-start',
// // // // //     paddingTop: 40,
// // // // //   },
// // // // //   searchContainer: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: 20,
// // // // //     width: '90%',
// // // // //   },
// // // // //   searchBar: {
// // // // //     flex: 1,
// // // // //     height: 50,
// // // // //     backgroundColor: '#fff',
// // // // //     paddingHorizontal: 15,
// // // // //     borderRadius: 25,
// // // // //     fontSize: 16,
// // // // //     shadowColor: '#000',
// // // // //     shadowOffset: { width: 0, height: 2 },
// // // // //     shadowOpacity: 0.1,
// // // // //     shadowRadius: 4,
// // // // //     elevation: 3,
// // // // //   },
// // // // //   searchButton: {
// // // // //     marginLeft: 10,
// // // // //     backgroundColor: '#4a90e2',
// // // // //     paddingVertical: 12,
// // // // //     paddingHorizontal: 20,
// // // // //     borderRadius: 25,
// // // // //     shadowColor: '#000',
// // // // //     shadowOffset: { width: 0, height: 2 },
// // // // //     shadowOpacity: 0.1,
// // // // //     shadowRadius: 4,
// // // // //     elevation: 3,
// // // // //   },
// // // // //   searchButtonText: {
// // // // //     color: '#fff',
// // // // //     fontSize: 16,
// // // // //     fontWeight: 'bold',
// // // // //   },
// // // // //   map: {
// // // // //     height: Dimensions.get('screen').height * 0.5,
// // // // //     width: Dimensions.get('screen').width * 0.9,
// // // // //     borderRadius: 15,
// // // // //     overflow: 'hidden',
// // // // //     marginBottom: 20,
// // // // //   },
// // // // //   inputContainer: {
// // // // //     width: '90%',
// // // // //     backgroundColor: '#fff',
// // // // //     borderRadius: 15,
// // // // //     padding: 15,
// // // // //     shadowColor: '#000',
// // // // //     shadowOffset: { width: 0, height: 2 },
// // // // //     shadowOpacity: 0.1,
// // // // //     shadowRadius: 4,
// // // // //     elevation: 3,
// // // // //   },
// // // // //   label: {
// // // // //     fontSize: 16,
// // // // //     fontWeight: 'bold',
// // // // //     marginBottom: 5,
// // // // //     color: '#333',
// // // // //   },
// // // // //   input: {
// // // // //     backgroundColor: '#f9f9f9',
// // // // //     borderRadius: 10,
// // // // //     padding: 10,
// // // // //     fontSize: 14,
// // // // //     color: '#333',
// // // // //   },
// // // // // });


// // // // import React, { useState, useEffect } from 'react';
// // // // import { View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
// // // // import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// // // // import * as Location from 'expo-location';

// // // // export default function GoogleMapView() {
// // // //   const [mapRegion, setMapRegion] = useState({
// // // //     latitude: 37.7749,
// // // //     longitude: -122.4194,
// // // //     latitudeDelta: 0.0922,
// // // //     longitudeDelta: 0.0421,
// // // //   });

// // // //   const [selectedLocation, setSelectedLocation] = useState({
// // // //     latitude: 37.7749,
// // // //     longitude: -122.4194,
// // // //   });

// // // //   const [searchQuery, setSearchQuery] = useState('');

// // // //   useEffect(() => {
// // // //     (async () => {
// // // //       let { status } = await Location.requestForegroundPermissionsAsync();
// // // //       if (status !== 'granted') {
// // // //         Alert.alert('Permission required', 'Please grant permission to access location services.');
// // // //       }
// // // //     })();
// // // //   }, []);

// // // //   const handleMapPress = (event) => {
// // // //     const { latitude, longitude } = event.nativeEvent.coordinate;
// // // //     setSelectedLocation({ latitude, longitude });
// // // //   };

// // // //   const handleSearch = async () => {
// // // //     try {
// // // //       const geocode = await Location.geocodeAsync(searchQuery);
// // // //       if (geocode.length > 0) {
// // // //         const { latitude, longitude } = geocode[0];
// // // //         setMapRegion({
// // // //           ...mapRegion,
// // // //           latitude,
// // // //           longitude,
// // // //         });
// // // //         setSelectedLocation({ latitude, longitude });
// // // //       } else {
// // // //         alert('Location not found');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error searching location:', error);
// // // //       alert('Error searching location');
// // // //     }
// // // //   };

// // // //   const screenHeight = Dimensions.get('screen').height;
// // // //   const screenWidth = Dimensions.get('screen').width;

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <TextInput
// // // //         style={styles.searchBar}
// // // //         placeholder="Search location"
// // // //         value={searchQuery}
// // // //         onChangeText={setSearchQuery}
// // // //       />
// // // //       <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
// // // //         <Text style={styles.searchButtonText}>Search</Text>
// // // //       </TouchableOpacity>
// // // //       <MapView
// // // //         style={{
// // // //           height: screenHeight * 0.5,
// // // //           width: screenWidth * 0.9,
// // // //         }}
// // // //         provider={PROVIDER_GOOGLE}
// // // //         showsUserLocation={true}
// // // //         region={mapRegion}
// // // //         onRegionChangeComplete={(region) => setMapRegion(region)}
// // // //         onPress={handleMapPress}
// // // //       >
// // // //         <Marker coordinate={selectedLocation} />
// // // //       </MapView>
// // // //       <View style={styles.inputContainer}>
// // // //         <Text style={styles.label}>Selected Location:</Text>
// // // //         <TextInput
// // // //           style={styles.input}
// // // //           value={`Latitude: ${selectedLocation.latitude}, Longitude: ${selectedLocation.longitude}`}
// // // //           editable={false}
// // // //         />
// // // //       </View>
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     marginTop: 20,
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //   },
// // // //   searchBar: {
// // // //     width: '90%',
// // // //     padding: 10,
// // // //     borderWidth: 1,
// // // //     borderColor: '#ccc',
// // // //     borderRadius: 8,
// // // //     backgroundColor: '#fff',
// // // //     marginBottom: 10,
// // // //   },
// // // //   searchButton: {
// // // //     backgroundColor: '#38bdf8',
// // // //     padding: 10,
// // // //     borderRadius: 8,
// // // //     marginBottom: 20,
// // // //   },
// // // //   searchButtonText: {
// // // //     color: '#fff',
// // // //     fontWeight: 'bold',
// // // //     textAlign: 'center',
// // // //   },
// // // //   inputContainer: {
// // // //     marginTop: 20,
// // // //     width: '90%',
// // // //     alignItems: 'center',
// // // //   },
// // // //   label: {
// // // //     fontSize: 16,
// // // //     fontWeight: 'bold',
// // // //     marginBottom: 8,
// // // //   },
// // // //   input: {
// // // //     width: '100%',
// // // //     padding: 10,
// // // //     borderWidth: 1,
// // // //     borderColor: '#ccc',
// // // //     borderRadius: 8,
// // // //     backgroundColor: '#fff',
// // // //   },
// // // // });



// // // import React, { useState, useEffect } from 'react';
// // // import { View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity, Alert, StatusBar } from 'react-native';
// // // import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// // // import * as Location from 'expo-location';
// // // import { Ionicons } from '@expo/vector-icons';

// // // export default function GoogleMapView() {
// // //   const [mapRegion, setMapRegion] = useState({
// // //     latitude: 37.7749,
// // //     longitude: -122.4194,
// // //     latitudeDelta: 0.0922,
// // //     longitudeDelta: 0.0421,
// // //   });
  
// // //   const [selectedLocation, setSelectedLocation] = useState({
// // //     latitude: 37.7749,
// // //     longitude: -122.4194,
// // //   });
  
// // //   const [searchQuery, setSearchQuery] = useState('');

// // //   useEffect(() => {
// // //     (async () => {
// // //       let { status } = await Location.requestForegroundPermissionsAsync();
// // //       if (status !== 'granted') {
// // //         Alert.alert(
// // //           'Location Permission Required',
// // //           'Please enable location services to use all features.',
// // //           [{ text: 'OK', style: 'default' }]
// // //         );
// // //       }
// // //     })();
// // //   }, []);

// // //   const handleMapPress = (event) => {
// // //     const { latitude, longitude } = event.nativeEvent.coordinate;
// // //     setSelectedLocation({ latitude, longitude });
// // //   };

// // //   const handleSearch = async () => {
// // //     try {
// // //       const geocode = await Location.geocodeAsync(searchQuery);
// // //       if (geocode.length > 0) {
// // //         const { latitude, longitude } = geocode[0];
// // //         setMapRegion({ ...mapRegion, latitude, longitude });
// // //         setSelectedLocation({ latitude, longitude });
// // //       } else {
// // //         Alert.alert('Location Not Found', 'Please try a different search term.');
// // //       }
// // //     } catch (error) {
// // //       Alert.alert('Error', 'Unable to search location. Please try again.');
// // //     }
// // //   };

// // //   const { height, width } = Dimensions.get('window');

// // //   return (
// // //     <View style={styles.container}>
// // //       <StatusBar barStyle="dark-content" />
      
// // //       <View style={styles.searchContainer}>
// // //         <View style={styles.searchInputContainer}>
// // //           <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
// // //           <TextInput
// // //             style={styles.searchBar}
// // //             placeholder="Search location..."
// // //             placeholderTextColor="#666"
// // //             value={searchQuery}
// // //             onChangeText={setSearchQuery}
// // //             onSubmitEditing={handleSearch}
// // //           />
// // //         </View>
// // //         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
// // //           <Text style={styles.searchButtonText}>Search</Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //       <View style={styles.mapContainer}>
// // //         <MapView
// // //           style={{ height: height * 0.6, width: width * 0.95 }}
// // //           provider={PROVIDER_GOOGLE}
// // //           showsUserLocation={true}
// // //           showsMyLocationButton={true}
// // //           showsCompass={true}
// // //           region={mapRegion}
// // //           onRegionChangeComplete={setMapRegion}
// // //           onPress={handleMapPress}
// // //         >
// // //           <Marker
// // //             coordinate={selectedLocation}
// // //             pinColor="#2563eb"
// // //           />
// // //         </MapView>
// // //       </View>

// // //       <View style={styles.locationInfoContainer}>
// // //         <Text style={styles.locationTitle}>Selected Location</Text>
// // //         <View style={styles.coordinatesContainer}>
// // //           <View style={styles.coordinateBox}>
// // //             <Text style={styles.coordinateLabel}>Latitude</Text>
// // //             <Text style={styles.coordinateValue}>
// // //               {selectedLocation.latitude.toFixed(6)}
// // //             </Text>
// // //           </View>
// // //           <View style={styles.coordinateBox}>
// // //             <Text style={styles.coordinateLabel}>Longitude</Text>
// // //             <Text style={styles.coordinateValue}>
// // //               {selectedLocation.longitude.toFixed(6)}
// // //             </Text>
// // //           </View>
// // //         </View>
// // //       </View>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#f8fafc',
// // //   },
// // //   searchContainer: {
// // //     flexDirection: 'row',
// // //     paddingHorizontal: 16,
// // //     paddingTop: 16,
// // //     paddingBottom: 8,
// // //     gap: 8,
// // //   },
// // //   searchInputContainer: {
// // //     flex: 1,
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: 'white',
// // //     borderRadius: 12,
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //     elevation: 3,
// // //   },
// // //   searchIcon: {
// // //     paddingLeft: 12,
// // //   },
// // //   searchBar: {
// // //     flex: 1,
// // //     padding: 12,
// // //     fontSize: 16,
// // //     color: '#1f2937',
// // //   },
// // //   searchButton: {
// // //     backgroundColor: '#2563eb',
// // //     paddingHorizontal: 20,
// // //     justifyContent: 'center',
// // //     borderRadius: 12,
// // //     shadowColor: '#2563eb',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.2,
// // //     shadowRadius: 4,
// // //     elevation: 3,
// // //   },
// // //   searchButtonText: {
// // //     color: 'white',
// // //     fontSize: 16,
// // //     fontWeight: '600',
// // //   },
// // //   mapContainer: {
// // //     alignItems: 'center',
// // //     marginVertical: 16,
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //     elevation: 3,
// // //   },
// // //   locationInfoContainer: {
// // //     margin: 16,
// // //     padding: 16,
// // //     backgroundColor: 'white',
// // //     borderRadius: 12,
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //     elevation: 3,
// // //   },
// // //   locationTitle: {
// // //     fontSize: 18,
// // //     fontWeight: '600',
// // //     color: '#1f2937',
// // //     marginBottom: 12,
// // //   },
// // //   coordinatesContainer: {
// // //     flexDirection: 'row',
// // //     gap: 12,
// // //   },
// // //   coordinateBox: {
// // //     flex: 1,
// // //     backgroundColor: '#f1f5f9',
// // //     padding: 12,
// // //     borderRadius: 8,
// // //   },
// // //   coordinateLabel: {
// // //     fontSize: 14,
// // //     color: '#64748b',
// // //     marginBottom: 4,
// // //   },
// // //   coordinateValue: {
// // //     fontSize: 16,
// // //     color: '#0f172a',
// // //     fontWeight: '500',
// // //   },
// // // });






// // // import React, { useState, useEffect } from 'react';
// // // import { View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity, Alert, StatusBar, FlatList } from 'react-native';
// // // import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// // // import * as Location from 'expo-location';
// // // import { Ionicons } from '@expo/vector-icons';
// // // import axios from 'axios';

// // // export default function GoogleMapView() {
// // //   const [mapRegion, setMapRegion] = useState({
// // //     latitude: 37.7749,
// // //     longitude: -122.4194,
// // //     latitudeDelta: 0.0922,
// // //     longitudeDelta: 0.0421,
// // //   });

// // //   const [selectedLocation, setSelectedLocation] = useState({
// // //     latitude: 37.7749,
// // //     longitude: -122.4194,
// // //   });

// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const [suggestions, setSuggestions] = useState([]);

// // //   useEffect(() => {
// // //     (async () => {
// // //       let { status } = await Location.requestForegroundPermissionsAsync();
// // //       if (status !== 'granted') {
// // //         Alert.alert(
// // //           'Location Permission Required',
// // //           'Please enable location services to use all features.',
// // //           [{ text: 'OK', style: 'default' }]
// // //         );
// // //         return;
// // //       }

// // //       const location = await Location.getCurrentPositionAsync({});
// // //       setMapRegion({
// // //         ...mapRegion,
// // //         latitude: location.coords.latitude,
// // //         longitude: location.coords.longitude,
// // //       });
// // //       setSelectedLocation({
// // //         latitude: location.coords.latitude,
// // //         longitude: location.coords.longitude,
// // //       });
// // //     })();
// // //   }, []);

// // //   const handleMapPress = (event) => {
// // //     const { latitude, longitude } = event.nativeEvent.coordinate;
// // //     setSelectedLocation({ latitude, longitude });
// // //   };

// // //   const handleSearch = async () => {
// // //     try {
// // //       const geocode = await Location.geocodeAsync(searchQuery);
// // //       if (geocode.length > 0) {
// // //         const { latitude, longitude } = geocode[0];
// // //         setMapRegion({ ...mapRegion, latitude, longitude });
// // //         setSelectedLocation({ latitude, longitude });
// // //         setSuggestions([]);
// // //       } else {
// // //         Alert.alert('Location Not Found', 'Please try a different search term.');
// // //       }
// // //     } catch (error) {
// // //       Alert.alert('Error', 'Unable to search location. Please try again.');
// // //     }
// // //   };

// // //   const fetchSuggestions = async (query) => {
// // //     try {
// // //       const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=AIzaSyD5lBtXgJGmF963hHCbXiWNG3G0VPYSzU4`);
// // //       setSuggestions(response.data.predictions);
// // //     } catch (error) {
// // //       console.error('Error fetching suggestions:', error);
// // //     }
// // //   };

// // //   const handleSuggestionPress = async (placeId) => {
// // //     try {
// // //       const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyD5lBtXgJGmF963hHCbXiWNG3G0VPYSzU4`);
// // //       const { lat, lng } = response.data.result.geometry.location;
// // //       setMapRegion({ ...mapRegion, latitude: lat, longitude: lng });
// // //       setSelectedLocation({ latitude: lat, longitude: lng });
// // //       setSuggestions([]);
// // //     } catch (error) {
// // //       console.error('Error fetching place details:', error);
// // //     }
// // //   };

// // //   const { height, width } = Dimensions.get('window');

// // //   return (
// // //     <View style={styles.container}>
// // //       <StatusBar barStyle="dark-content" />
      
// // //       <View style={styles.searchContainer}>
// // //         <View style={styles.searchInputContainer}>
// // //           <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
// // //           <TextInput
// // //             style={styles.searchBar}
// // //             placeholder="Search location..."
// // //             placeholderTextColor="#666"
// // //             value={searchQuery}
// // //             onChangeText={(text) => {
// // //               setSearchQuery(text);
// // //               fetchSuggestions(text);
// // //             }}
// // //             onSubmitEditing={handleSearch}
// // //           />
// // //         </View>
// // //         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
// // //           <Text style={styles.searchButtonText}>Search</Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //       {suggestions.length > 0 && (
// // //         <FlatList
// // //           data={suggestions}
// // //           keyExtractor={(item) => item.place_id}
// // //           renderItem={({ item }) => (
// // //             <TouchableOpacity onPress={() => handleSuggestionPress(item.place_id)}>
// // //               <Text style={styles.suggestionItem}>{item.description}</Text>
// // //             </TouchableOpacity>
// // //           )}
// // //           style={styles.suggestionsContainer}
// // //         />
// // //       )}

// // //       <View style={styles.mapContainer}>
// // //         <MapView
// // //           style={{ height: height * 0.6, width: width * 0.95 }}
// // //           provider={PROVIDER_GOOGLE}
// // //           showsUserLocation={true}
// // //           showsMyLocationButton={true}
// // //           showsCompass={true}
// // //           // rotateEnabled={true}
// // //           region={mapRegion}
// // //           onRegionChangeComplete={setMapRegion}
// // //           onPress={handleMapPress}
// // //         >
// // //           <Marker
// // //             coordinate={selectedLocation}
// // //             pinColor="#2563eb"
// // //           />
// // //         </MapView>
// // //       </View>

// // //       <View style={styles.locationInfoContainer}>
// // //         <Text style={styles.locationTitle}>Selected Location</Text>
// // //         <View style={styles.coordinatesContainer}>
// // //           <View style={styles.coordinateBox}>
// // //             <Text style={styles.coordinateLabel}>Latitude</Text>
// // //             <Text style={styles.coordinateValue}>
// // //               {selectedLocation.latitude.toFixed(6)}
// // //             </Text>
// // //           </View>
// // //           <View style={styles.coordinateBox}>
// // //             <Text style={styles.coordinateLabel}>Longitude</Text>
// // //             <Text style={styles.coordinateValue}>
// // //               {selectedLocation.longitude.toFixed(6)}
// // //             </Text>
// // //           </View>
// // //         </View>
// // //       </View>
// // //     </View>
// // //   );
// // // }


// // import React, { useState, useEffect } from 'react';
// // import { View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity, Alert, StatusBar, FlatList } from 'react-native';
// // import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// // import * as Location from 'expo-location';
// // import { Ionicons } from '@expo/vector-icons';
// // import axios from 'axios';

// // export default function GoogleMapView() {
// //   const [mapRegion, setMapRegion] = useState({
// //     latitude: 37.7749,
// //     longitude: -122.4194,
// //     latitudeDelta: 0.0922,
// //     longitudeDelta: 0.0421,
// //   });

// //   const [selectedLocation, setSelectedLocation] = useState({
// //     latitude: 37.7749,
// //     longitude: -122.4194,
// //   });

// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [suggestions, setSuggestions] = useState([]);

// //   useEffect(() => {
// //     (async () => {
// //       const { status } = await Location.requestForegroundPermissionsAsync();
// //       if (status !== 'granted') {
// //         Alert.alert(
// //           'Location Permission Required',
// //           'Please enable location services to use all features.',
// //           [{ text: 'OK', style: 'default' }]
// //         );
// //         return;
// //       }

// //       const location = await Location.getCurrentPositionAsync({});
// //       setMapRegion({
// //         ...mapRegion,
// //         latitude: location.coords.latitude,
// //         longitude: location.coords.longitude,
// //       });
// //       setSelectedLocation({
// //         latitude: location.coords.latitude,
// //         longitude: location.coords.longitude,
// //       });
// //     })();
// //   }, []);

// //   const handleMapPress = (event) => {
// //     const { latitude, longitude } = event.nativeEvent.coordinate;
// //     setSelectedLocation({ latitude, longitude });
// //   };

// //   const handleSearch = async () => {
// //     try {
// //       const geocode = await Location.geocodeAsync(searchQuery);
// //       if (geocode.length > 0) {
// //         const { latitude, longitude } = geocode[0];
// //         setMapRegion({ ...mapRegion, latitude, longitude });
// //         setSelectedLocation({ latitude, longitude });
// //         setSuggestions([]);
// //       } else {
// //         Alert.alert('Location Not Found', 'Please try a different search term.');
// //       }
// //     } catch (error) {
// //       Alert.alert('Error', 'Unable to search location. Please try again.');
// //     }
// //   };

// //   // const fetchSuggestions = async (query) => {
// //   //   try {
// //   //     const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=AIzaSyD5lBtXgJGmF963hHCbXiWNG3G0VPYSzU4`);
// //   //     setSuggestions(response.data.predictions);
// //   //   } catch (error) {
// //   //     console.error('Error fetching suggestions:', error);
// //   //   }
// //   // };


// //   const fetchSuggestions = async (query) => {
// //     if (!query) {
// //       setSuggestions([]);
// //       return;
// //     }
  
// //     try {
// //       const response = await axios.get(
// //         `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=AIzaSyD5lBtXgJGmF963hHCbXiWNG3G0VPYSzU4`
// //       );
  
// //       if (response.data.status === 'OK') {
// //         setSuggestions(response.data.predictions);
// //       } else {
// //         console.error('Google Places API error:', response.data.status);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching suggestions:', error);
// //     }
// //   };
  

// //   // const handleSuggestionPress = async (placeId) => {
// //   //   try {
// //   //     const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyD5lBtXgJGmF963hHCbXiWNG3G0VPYSzU4`);
// //   //     const { lat, lng } = response.data.result.geometry.location;
// //   //     setMapRegion({ ...mapRegion, latitude: lat, longitude: lng });
// //   //     setSelectedLocation({ latitude: lat, longitude: lng });
// //   //     setSuggestions([]);
// //   //   } catch (error) {
// //   //     console.error('Error fetching place details:', error);
// //   //   }
// //   // };


// //   const handleSuggestionPress = async (placeId) => {
// //     try {
// //       const response = await axios.get(
// //         `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=AIzaSyD5lBtXgJGmF963hHCbXiWNG3G0VPYSzU4`
// //       );
  
// //       if (response.data.status === 'OK') {
// //         const { lat, lng } = response.data.result.geometry.location;
// //         setMapRegion({ ...mapRegion, latitude: lat, longitude: lng });
// //         setSelectedLocation({ latitude: lat, longitude: lng });
// //         setSuggestions([]);
// //       } else {
// //         console.error('Place Details API error:', response.data.status);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching place details:', error);
// //     }
// //   };
  

// //   const { height, width } = Dimensions.get('window');

// //   return (
// //     <View style={styles.container}>
// //       <StatusBar barStyle="dark-content" />
      
// //       <View style={styles.searchContainer}>
// //         <View style={styles.searchInputContainer}>
// //           <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
// //           <TextInput
// //             style={styles.searchBar}
// //             placeholder="Search location..."
// //             placeholderTextColor="#666"
// //             value={searchQuery}
// //             onChangeText={(text) => {
// //               setSearchQuery(text);
// //               fetchSuggestions(text);
// //             }}
// //             onSubmitEditing={handleSearch}
// //           />
// //         </View>
// //         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
// //           <Text style={styles.searchButtonText}>Search</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {suggestions.length > 0 && (
// //         <FlatList
// //           data={suggestions}
// //           keyExtractor={(item) => item.place_id}
// //           renderItem={({ item }) => (
// //             <TouchableOpacity onPress={() => handleSuggestionPress(item.place_id)}>
// //               <Text style={styles.suggestionItem}>{item.description}</Text>
// //             </TouchableOpacity>
// //           )}
// //           style={styles.suggestionsContainer}
// //         />
// //       )}

// //       <View style={styles.mapContainer}>
// //         {/* <MapView
// //           style={{ height: height * 0.6, width: width * 0.95 }}
// //           provider={PROVIDER_GOOGLE}
// //           showsUserLocation={true}
// //           showsMyLocationButton={true}
// //           showsCompass={true}
// //           rotateEnabled={true}
// //           region={mapRegion}
// //           onRegionChangeComplete={setMapRegion}
// //           onPress={handleMapPress}
// //         > */}
// //         <MapView
// //           style={{ height: height * 0.6, width: width * 0.95 }}
// //           provider={PROVIDER_GOOGLE}
// //           showsUserLocation={true}
// //           showsMyLocationButton={true}
// //           showsCompass={true}
// //           rotateEnabled={true} // Ensure this is set
// //           region={mapRegion}
// //           onRegionChangeComplete={setMapRegion}
// //           onPress={handleMapPress}
// //         >

// //           <Marker
// //             coordinate={selectedLocation}
// //             pinColor="#2563eb"
// //           />
// //         </MapView>
// //       </View>

// //       <View style={styles.locationInfoContainer}>
// //         <Text style={styles.locationTitle}>Selected Location</Text>
// //         <View style={styles.coordinatesContainer}>
// //           <View style={styles.coordinateBox}>
// //             <Text style={styles.coordinateLabel}>Latitude</Text>
// //             <Text style={styles.coordinateValue}>
// //               {selectedLocation.latitude.toFixed(6)}
// //             </Text>
// //           </View>
// //           <View style={styles.coordinateBox}>
// //             <Text style={styles.coordinateLabel}>Longitude</Text>
// //             <Text style={styles.coordinateValue}>
// //               {selectedLocation.longitude.toFixed(6)}
// //             </Text>
// //           </View>
// //         </View>
// //       </View>
// //     </View>
// //   );
// // }


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f8fafc',
// //   },
// //   searchContainer: {
// //     flexDirection: 'row',
// //     paddingHorizontal: 16,
// //     paddingTop: 16,
// //     paddingBottom: 8,
// //     gap: 8,
// //   },
// //   searchInputContainer: {
// //     flex: 1,
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: 'white',
// //     borderRadius: 12,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 3,
// //   },
// //   searchIcon: {
// //     paddingLeft: 12,
// //   },
// //   searchBar: {
// //     flex: 1,
// //     padding: 12,
// //     fontSize: 16,
// //     color: '#1f2937',
// //   },
// //   searchButton: {
// //     backgroundColor: '#2563eb',
// //     paddingHorizontal: 20,
// //     justifyContent: 'center',
// //     borderRadius: 12,
// //     shadowColor: '#2563eb',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 4,
// //     elevation: 3,
// //   },
// //   searchButtonText: {
// //     color: 'white',
// //     fontSize: 16,
// //     fontWeight: '600',
// //   },
// //   suggestionsContainer: {
// //     maxHeight: 200,
// //     backgroundColor: 'white',
// //     borderRadius: 12,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 3,
// //     marginHorizontal: 16,
// //     marginTop: 8,
// //   },
// //   suggestionItem: {
// //     padding: 12,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#e2e8f0',
// //   },
// //   mapContainer: {
// //     alignItems: 'center',
// //     marginVertical: 16,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 3,
// //   },
// //   locationInfoContainer: {
// //     margin: 16,
// //     padding: 16,
// //     backgroundColor: 'white',
// //     borderRadius: 12,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 3,
// //   },
// //   locationTitle: {
// //     fontSize: 18,
// //     fontWeight: '600',
// //     color: '#1f2937',
// //     marginBottom: 12,
// //   },
// //   coordinatesContainer: {
// //     flexDirection: 'row',
// //     gap: 12,
// //   },
// //   coordinateBox: {
// //     flex: 1,
// //     backgroundColor: '#f1f5f9',
// //     padding: 12,
// //     borderRadius: 8,
// //   },
// //   coordinateLabel: {
// //     fontSize: 14,
// //     color: '#64748b',
// //     marginBottom: 4,
// //   },
// //   coordinateValue: {
// //     fontSize: 16,
// //     color: '#0f172a',
// //     fontWeight: '500',
// //   },
// // });









// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity, Alert, StatusBar, FlatList } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';
// import { Ionicons } from '@expo/vector-icons';
// import axios from 'axios';

// export default function GoMapView() {
//   const [mapRegion, setMapRegion] = useState({
//     latitude: 37.7749,
//     longitude: -122.4194,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   const [selectedLocation, setSelectedLocation] = useState({
//     latitude: 37.7749,
//     longitude: -122.4194,
//   });

//   const [searchQuery, setSearchQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     if (!searchQuery) {
//       setSuggestions([]); // Clear suggestions when the search query is empty
//       return;
//     }
  
//     const fetchLocation = async () => {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert(
//           'Location Permission Required',
//           'Please enable location services to use all features.',
//           [{ text: 'OK', style: 'default' }]
//         );
//         return;
//       }
  
//       const location = await Location.getCurrentPositionAsync({});
//       setMapRegion({
//         ...mapRegion,
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });
//       setSelectedLocation({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });
//     };
  
//     fetchLocation();
//   }, [searchQuery]);

  
//   // useEffect(() => {
//   //   (async () => {
//   //     const { status } = await Location.requestForegroundPermissionsAsync();
//   //     if (status !== 'granted') {
//   //       Alert.alert(
//   //         'Location Permission Required',
//   //         'Please enable location services to use all features.',
//   //         [{ text: 'OK', style: 'default' }]
//   //       );
//   //       return;
//   //     }

//   //     const location = await Location.getCurrentPositionAsync({});
//   //     setMapRegion({
//   //       ...mapRegion,
//   //       latitude: location.coords.latitude,
//   //       longitude: location.coords.longitude,
//   //     });
//   //     setSelectedLocation({
//   //       latitude: location.coords.latitude,
//   //       longitude: location.coords.longitude,
//   //     });
//   //   })();
//   // }, []);

//   const handleMapPress = (event) => {
//     const { latitude, longitude } = event.nativeEvent.coordinate;
//     setSelectedLocation({ latitude, longitude });
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(
//         `https://maps.gomaps.pro/maps/api/geocode/json?address=${searchQuery}&key=AlzaSydwd28czR0irb_qR2Zo8qzMXl1TSR6JXPB`
//       );
//       const geocode = response.data.results;
//       if (geocode.length > 0) {
//         const { lat, lng } = geocode[0].geometry.location;
//         setMapRegion({ ...mapRegion, latitude: lat, longitude: lng });
//         setSelectedLocation({ latitude: lat, longitude: lng });
//         setSuggestions([]);
//       } else {
//         Alert.alert('Location Not Found', 'Please try a different search term.');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Unable to search location. Please try again.');
//     }
//   };

//   const fetchSuggestions = async (query) => {
//     if (!query) {
//       setSuggestions([]);
//       return;
//     }
  
//     try {
//       const response = await axios.get(
//         `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${query}&key=AlzaSydwd28czR0irb_qR2Zo8qzMXl1TSR6JXPB`
//       );
//       setSuggestions(response.data.predictions);
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//     }
//   };

//   const handleSuggestionPress = async (placeId) => {
//     try {
//       const response = await axios.get(
//         `https://maps.gomaps.pro/maps/api/place/details/json?placeid=${placeId}&key=AlzaSydwd28czR0irb_qR2Zo8qzMXl1TSR6JXPB`
//       );
//       const { lat, lng } = response.data.result.geometry.location;
//       setMapRegion({ ...mapRegion, latitude: lat, longitude: lng });
//       setSelectedLocation({ latitude: lat, longitude: lng });
//       setSuggestions([]);
//     } catch (error) {
//       console.error('Error fetching place details:', error);
//     }
//   };

//   const { height, width } = Dimensions.get('window');

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light" />
      
//       <View style={styles.searchContainer}>
//         <View style={styles.searchInputContainer}>
//           <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchBar}
//             placeholder="Search location..."
//             placeholderTextColor="#666"
//             value={searchQuery}
//             onChangeText={(text) => {
//                 setSearchQuery(text);
//                 fetchSuggestions(text);
//             }}
//             // onChangeText={(text) => {
//             //   setSearchQuery(text);
//             //   if (text) {
//             //     fetchSuggestions(text);
//             //   } else {
//             //     setSuggestions([]); // Clear suggestions for empty or whitespace-only input
//             //   }
//             // }}
            
//             onSubmitEditing={handleSearch}
//           />
//         </View>
//         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//           <Text style={styles.searchButtonText}>Search</Text>
//         </TouchableOpacity>
//       </View>

//       {suggestions.length > 0 && (
//         <FlatList
//           data={suggestions}
//           keyExtractor={(item) => item.place_id}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => handleSuggestionPress(item.place_id)}>
//               <Text style={styles.suggestionItem}>{item.description}</Text>
//             </TouchableOpacity>
//           )}
//           style={styles.suggestionsContainer}
//         />
//       )}

//       <View style={styles.mapContainer}>
//         <MapView
//           style={{ height: height * 0.6, width: width * 0.95 }}
//           showsUserLocation={true}
//           showsMyLocationButton={true}
//           showsCompass={true}
//           // rotateEnabled={true}
//           region={mapRegion}
//           onRegionChangeComplete={setMapRegion}
//           onPress={handleMapPress}
//         >
//           <Marker
//             coordinate={selectedLocation}
//             pinColor="#2563eb"
//           />
//         </MapView>
//       </View>

//       <View style={styles.locationInfoContainer}>
//         <Text style={styles.locationTitle}>Selected Location</Text>
//         <View style={styles.coordinatesContainer}>
//           <View style={styles.coordinateBox}>
//             <Text style={styles.coordinateLabel}>Latitude</Text>
//             <Text style={styles.coordinateValue}>
//               {selectedLocation.latitude.toFixed(6)}
//             </Text>
//           </View>
//           <View style={styles.coordinateBox}>
//             <Text style={styles.coordinateLabel}>Longitude</Text>
//             <Text style={styles.coordinateValue}>
//               {selectedLocation.longitude.toFixed(6)}
//             </Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,
//     backgroundColor: '#f8fafc',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//     paddingTop: 16,
//     paddingBottom: 8,
//     gap: 8,
//   },
//   searchInputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   searchIcon: {
//     paddingLeft: 12,
//   },
//   searchBar: {
//     flex: 1,
//     padding: 12,
//     fontSize: 16,
//     color: '#1f2937',
//   },
//   searchButton: {
//     backgroundColor: '#2563eb',
//     paddingHorizontal: 20,
//     justifyContent: 'center',
//     borderRadius: 12,
//     shadowColor: '#2563eb',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   searchButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   suggestionsContainer: {
//     maxHeight: 200,
//     backgroundColor: 'white',
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     marginHorizontal: 16,
//     marginTop: 8,
//     position: 'absolute',
//     top: 80,
//     width: '90%',
//     zIndex: 1,
//   },
//   suggestionItem: {
//     padding: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e2e8f0',
//   },
//   mapContainer: {
//     alignItems: 'center',
//     marginVertical: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     zIndex: 0,
//   },
//   locationInfoContainer: {
//     margin: 16,
//     padding: 16,
//     backgroundColor: 'white',
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   locationTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#1f2937',
//     marginBottom: 12,
//   },
//   coordinatesContainer: {
//     flexDirection: 'row',
//     gap: 12,
//   },
//   coordinateBox: {
//     flex: 1,
//     backgroundColor: '#f1f5f9',
//     padding: 12,
//     borderRadius: 8,
//   },
//   coordinateLabel: {
//     fontSize: 14,
//     color: '#64748b',
//     marginBottom: 4,
//   },
//   coordinateValue: {
//     fontSize: 16,
//     color: '#0f172a',
//     fontWeight: '500',
//   },
// });









import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity, Alert, StatusBar, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}
    >
      <FlatList
        data={[{ key: 'map' }]}
        renderItem={() => (
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
                    if (text.trim()) {  // Only fetch suggestions if text is not empty or just whitespace
                      fetchSuggestions(text);
                    } else {
                      setSuggestions([]);
                    }
                  }}
                  onSubmitEditing={handleSearch}
                />
              </View>
              <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                <Text style={styles.searchButtonText}>Search</Text>
              </TouchableOpacity>
            </View>

            {suggestions.length > 0 && searchQuery.trim() !== '' && (
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  searchContainer: {
    flexDirection: 'row',
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
    top: 120,
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