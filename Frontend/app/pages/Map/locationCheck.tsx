// // // // // // // // // Frontend: Map Page in React Native with Expo Router
// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import { View, Button, StyleSheet, TextInput } from 'react-native';
// // // // // // // // import MapView, { Marker } from 'react-native-maps';
// // // // // // // // import axios from 'axios';

// // // // // // // // const MapPage = () => {
// // // // // // // //   const [coordinates, setCoordinates] = useState({ latitude: 37.78825, longitude: -122.4324 });
// // // // // // // //   const [selectedLocation, setSelectedLocation] = useState(null);
// // // // // // // //   const [searchText, setSearchText] = useState('');

// // // // // // // //   const onMapPress = (event) => {
// // // // // // // //     const { latitude, longitude } = event.nativeEvent.coordinate;
// // // // // // // //     setCoordinates({ latitude, longitude });
// // // // // // // //     fetchLocationDetails(latitude, longitude);
// // // // // // // //   };

// // // // // // // //   const fetchLocationDetails = async (latitude, longitude) => {
// // // // // // // //     try {
// // // // // // // //       const response = await axios.get(
// // // // // // // //         `https://nominatim.openstreetmap.org/reverse`,
// // // // // // // //         {
// // // // // // // //           params: { format: 'json', lat: latitude, lon: longitude },
// // // // // // // //           headers: { 'User-Agent': 'ReactNativeApp' },
// // // // // // // //         }
// // // // // // // //       );
// // // // // // // //       const { address } = response.data;
// // // // // // // //       const city = address?.city || address?.town || address?.village || 'Unknown City';
// // // // // // // //       const area = address?.suburb || address?.neighbourhood || 'Unknown Area';

// // // // // // // //       setSelectedLocation({
// // // // // // // //         coordinates: { latitude, longitude },
// // // // // // // //         city,
// // // // // // // //         area,
// // // // // // // //       });
// // // // // // // //     } catch (error) {
// // // // // // // //       alert(`Error fetching location details: ${error.message}`);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const searchLocation = async () => {
// // // // // // // //     try {
// // // // // // // //       const response = await axios.get(
// // // // // // // //         `https://nominatim.openstreetmap.org/search`,
// // // // // // // //         {
// // // // // // // //           params: { format: 'json', q: searchText },
// // // // // // // //           headers: { 'User-Agent': 'ReactNativeApp' },
// // // // // // // //         }
// // // // // // // //       );
// // // // // // // //       if (response.data.length > 0) {
// // // // // // // //         const { lat, lon } = response.data[0];
// // // // // // // //         const latitude = parseFloat(lat);
// // // // // // // //         const longitude = parseFloat(lon);

// // // // // // // //         setCoordinates({ latitude, longitude });
// // // // // // // //         fetchLocationDetails(latitude, longitude);
// // // // // // // //       } else {
// // // // // // // //         alert('Location not found');
// // // // // // // //       }
// // // // // // // //     } catch (error) {
// // // // // // // //       alert(`Error searching for location: ${error.message}`);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const saveLocation = async () => {
// // // // // // // //     if (selectedLocation) {
// // // // // // // //         console.log(selectedLocation);
// // // // // // // //     //   try {
// // // // // // // //     //     const response = await axios.post('http://localhost:5000/api/locations', selectedLocation);
// // // // // // // //     //     alert('Location saved successfully!');
// // // // // // // //     //   } catch (error) {
// // // // // // // //     //     alert(`Error saving location: ${error.message}`);
// // // // // // // //     //   }
// // // // // // // //     } else {
// // // // // // // //       alert('Please select a location first');
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <View style={styles.container}>
// // // // // // // //       <TextInput
// // // // // // // //         style={styles.searchInput}
// // // // // // // //         placeholder="Search location..."
// // // // // // // //         value={searchText}
// // // // // // // //         onChangeText={setSearchText}
// // // // // // // //       />
// // // // // // // //       <Button title="Search" onPress={searchLocation} />
// // // // // // // //       <MapView
// // // // // // // //         style={styles.map}
// // // // // // // //         initialRegion={{
// // // // // // // //           latitude: coordinates.latitude,
// // // // // // // //           longitude: coordinates.longitude,
// // // // // // // //           latitudeDelta: 0.0922,
// // // // // // // //           longitudeDelta: 0.0421,
// // // // // // // //         }}
// // // // // // // //         onPress={onMapPress}
// // // // // // // //       >
// // // // // // // //         {selectedLocation && (
// // // // // // // //           <Marker
// // // // // // // //             coordinate={selectedLocation.coordinates}
// // // // // // // //             title={selectedLocation.city}
// // // // // // // //             description={selectedLocation.area}
// // // // // // // //           />
// // // // // // // //         )}
// // // // // // // //       </MapView>
// // // // // // // //       <Button title="Save Location" onPress={saveLocation} />
// // // // // // // //     </View>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: { flex: 1 },
// // // // // // // //   map: { flex: 1 },
// // // // // // // //   searchInput: {
// // // // // // // //     padding: 10,
// // // // // // // //     backgroundColor: '#fff',
// // // // // // // //     marginTop: 50,
// // // // // // // //   },
// // // // // // // // });

// // // // // // // // export default MapPage;



// // // // // // // // Frontend: Map Page in React Native with Expo Router
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { View, Button, StyleSheet, TextInput } from 'react-native';
// // // // // // // import MapView, { Marker } from 'react-native-maps';
// // // // // // // import axios from 'axios';

// // // // // // // const MapPage = () => {
// // // // // // //   const [coordinates, setCoordinates] = useState({ latitude: 23.7544529, longitude: 90.393336 });
// // // // // // //   const [selectedLocation, setSelectedLocation] = useState(null);
// // // // // // //   const [searchText, setSearchText] = useState('');

// // // // // // //   const onMapPress = (event) => {
// // // // // // //     const { latitude, longitude } = event.nativeEvent.coordinate;
// // // // // // //     setCoordinates({ latitude, longitude });
// // // // // // //     fetchLocationDetails(latitude, longitude);
// // // // // // //   };

// // // // // // // //   const fetchLocationDetails = async (latitude, longitude) => {
// // // // // // // //     try {
// // // // // // // //       const response = await axios.get(
// // // // // // // //         `https://nominatim.openstreetmap.org/reverse`,
// // // // // // // //         {
// // // // // // // //           params: { format: 'json', lat: latitude, lon: longitude },
// // // // // // // //           headers: { 'User-Agent': 'ReactNativeApp' },
// // // // // // // //         }
// // // // // // // //       );
// // // // // // // //       const { address } = response.data;
// // // // // // // //       const city = address?.city || address?.town || address?.village || 'Unknown City';
// // // // // // // //       const area = address?.suburb || address?.neighbourhood || 'Unknown Area';

// // // // // // // //       setSelectedLocation({
// // // // // // // //         coordinates: { latitude, longitude },
// // // // // // // //         city,
// // // // // // // //         area,
// // // // // // // //       });
// // // // // // // //     } catch (error) {
// // // // // // // //       alert(`Error fetching location details: ${error.message}`);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // const fetchLocationDetails = async (latitude, longitude) => {
// // // // // // //     try {
// // // // // // //       const response = await axios.get(
// // // // // // //         `https://nominatim.openstreetmap.org/reverse`,
// // // // // // //         {
// // // // // // //           params: {
// // // // // // //             format: 'json',
// // // // // // //             lat: latitude,
// // // // // // //             lon: longitude,
// // // // // // //             'accept-language': 'en',  // Ensure data is in English
// // // // // // //           },
// // // // // // //           headers: { 'User-Agent': 'ReactNativeApp' },
// // // // // // //         }
// // // // // // //       );
// // // // // // //       const { address } = response.data;
// // // // // // //       const city = address?.city || address?.town || address?.village || 'Unknown City';
// // // // // // //       const area = address?.suburb || address?.neighbourhood || 'Unknown Area';

// // // // // // //       console.log({
// // // // // // //         coordinates: { latitude, longitude },
// // // // // // //         city,
// // // // // // //         area,
// // // // // // //       });
  
// // // // // // //       setSelectedLocation({
// // // // // // //         coordinates: { latitude, longitude },
// // // // // // //         city,
// // // // // // //         area,
// // // // // // //       });
// // // // // // //     } catch (error) {
// // // // // // //       alert(`Error fetching location details: ${error.message}`);
// // // // // // //     }
// // // // // // //   };
  
// // // // // // //   const searchLocation = async () => {
// // // // // // //     try {
// // // // // // //       const response = await axios.get(
// // // // // // //         `https://nominatim.openstreetmap.org/search`,
// // // // // // //         {
// // // // // // //           params: {
// // // // // // //             format: 'json',
// // // // // // //             q: searchText,
// // // // // // //             'accept-language': 'en',  // Ensure search results are in English
// // // // // // //           },
// // // // // // //           headers: { 'User-Agent': 'ReactNativeApp' },
// // // // // // //         }
// // // // // // //       );
// // // // // // //       if (response.data.length > 0) {
// // // // // // //         const { lat, lon } = response.data[0];
// // // // // // //         const latitude = parseFloat(lat);
// // // // // // //         const longitude = parseFloat(lon);
  
// // // // // // //         setCoordinates({ latitude, longitude });
// // // // // // //         fetchLocationDetails(latitude, longitude);
// // // // // // //       } else {
// // // // // // //         alert('Location not found');
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       alert(`Error searching for location: ${error.message}`);
// // // // // // //     }
// // // // // // //   };
  

// // // // // // // //   const searchLocation = async () => {
// // // // // // // //     try {
// // // // // // // //       const response = await axios.get(
// // // // // // // //         `https://nominatim.openstreetmap.org/search`,
// // // // // // // //         {
// // // // // // // //           params: { format: 'json', q: searchText },
// // // // // // // //           headers: { 'User-Agent': 'ReactNativeApp' },
// // // // // // // //         }
// // // // // // // //       );
// // // // // // // //       if (response.data.length > 0) {
// // // // // // // //         const { lat, lon } = response.data[0];
// // // // // // // //         const latitude = parseFloat(lat);
// // // // // // // //         const longitude = parseFloat(lon);

// // // // // // // //         setCoordinates({ latitude, longitude });
// // // // // // // //         fetchLocationDetails(latitude, longitude);
// // // // // // // //       } else {
// // // // // // // //         alert('Location not found');
// // // // // // // //       }
// // // // // // // //     } catch (error) {
// // // // // // // //       alert(`Error searching for location: ${error.message}`);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // //   const saveLocation = async () => {
// // // // // // //     if (selectedLocation) {
// // // // // // //         console.log(selectedLocation);
// // // // // // //     //   try {
// // // // // // //     //     const response = await axios.post('http://localhost:5000/api/locations', selectedLocation);
// // // // // // //     //     alert('Location saved successfully!');
// // // // // // //     //   } catch (error) {
// // // // // // //     //     alert(`Error saving location: ${error.message}`);
// // // // // // //     //   }
// // // // // // //     } else {
// // // // // // //       alert('Please select a location first');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <View style={styles.container}>
// // // // // // //       <TextInput
// // // // // // //         style={styles.searchInput}
// // // // // // //         placeholder="Search location..."
// // // // // // //         value={searchText}
// // // // // // //         onChangeText={setSearchText}
// // // // // // //       />
// // // // // // //       <Button title="Search" onPress={searchLocation} />
// // // // // // //       <MapView
// // // // // // //         style={styles.map}
// // // // // // //         region={{
// // // // // // //           latitude: coordinates.latitude,
// // // // // // //           longitude: coordinates.longitude,
// // // // // // //           latitudeDelta: 0.0922,
// // // // // // //           longitudeDelta: 0.0421,
// // // // // // //         }}
// // // // // // //         onPress={onMapPress}
// // // // // // //       >
// // // // // // //         {selectedLocation && (
// // // // // // //           <Marker
// // // // // // //             coordinate={selectedLocation.coordinates}
// // // // // // //             title={selectedLocation.city}
// // // // // // //             description={selectedLocation.area}
// // // // // // //           />
// // // // // // //         )}
// // // // // // //       </MapView>
// // // // // // //       <Button title="Save Location" onPress={saveLocation} />
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: { flex: 1 },
// // // // // // //   map: { flex: 1 },
// // // // // // //   searchInput: {
// // // // // // //     padding: 10,
// // // // // // //     backgroundColor: '#fff',
// // // // // // //     marginTop: 50,
// // // // // // //   },
// // // // // // // });

// // // // // // // export default MapPage;



// // // // // // // Frontend: Map Page in React Native with Expo Router
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { View, Button, StyleSheet, TextInput } from 'react-native';
// // // // // // import MapView, { Marker } from 'react-native-maps';
// // // // // // import axios from 'axios';

// // // // // // const MapPage = () => {
// // // // // //   const [coordinates, setCoordinates] = useState({ latitude: 23.7544529, longitude: 90.393336 });
// // // // // //   const [selectedLocation, setSelectedLocation] = useState({
// // // // // //     coordinates: { latitude: 37.78825, longitude: -122.4324 },
// // // // // //     city: 'San Francisco',
// // // // // //     area: 'California',
// // // // // //   });
// // // // // //   const [searchText, setSearchText] = useState('');

// // // // // //   const onMapPress = (event) => {
// // // // // //     const { latitude, longitude } = event.nativeEvent.coordinate;
// // // // // //     setCoordinates({ latitude, longitude });
// // // // // //     fetchLocationDetails(latitude, longitude);
// // // // // //   };

// // // // // //   const fetchLocationDetails = async (latitude, longitude) => {
// // // // // //     try {
// // // // // //       const response = await axios.get(
// // // // // //         `https://nominatim.openstreetmap.org/reverse`,
// // // // // //         {
// // // // // //           params: { format: 'json', lat: latitude, lon: longitude, 'accept-language': 'en' },
// // // // // //           headers: { 'User-Agent': 'ReactNativeApp' },
// // // // // //         }
// // // // // //       );
// // // // // //       const { address } = response.data;
// // // // // //       const city = address?.city || address?.town || address?.village || 'Unknown City';
// // // // // //       const area = address?.suburb || address?.neighbourhood || 'Unknown Area';

// // // // // //       setSelectedLocation({
// // // // // //         coordinates: { latitude, longitude },
// // // // // //         city,
// // // // // //         area,
// // // // // //       });
// // // // // //     } catch (error) {
// // // // // //       alert(`Error fetching location details: ${error.message}`);
// // // // // //     }
// // // // // //   };

// // // // // //   const searchLocation = async () => {
// // // // // //     try {
// // // // // //       const response = await axios.get(
// // // // // //         `https://nominatim.openstreetmap.org/search`,
// // // // // //         {
// // // // // //           params: { format: 'json', q: searchText, 'accept-language': 'en' },
// // // // // //           headers: { 'User-Agent': 'ReactNativeApp' },
// // // // // //         }
// // // // // //       );
// // // // // //       if (response.data.length > 0) {
// // // // // //         const { lat, lon } = response.data[0];
// // // // // //         const latitude = parseFloat(lat);
// // // // // //         const longitude = parseFloat(lon);

// // // // // //         setCoordinates({ latitude, longitude });
// // // // // //         fetchLocationDetails(latitude, longitude);
// // // // // //       } else {
// // // // // //         alert('Location not found');
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       alert(`Error searching for location: ${error.message}`);
// // // // // //     }
// // // // // //   };

// // // // // //   const saveLocation = async () => {
// // // // // //     if (selectedLocation) {
// // // // // //         console.log(selectedLocation);
// // // // // //     //   try {
// // // // // //     //     const response = await axios.post('http://localhost:5000/api/locations', selectedLocation);
// // // // // //     //     alert('Location saved successfully!');
// // // // // //     //   } catch (error) {
// // // // // //     //     alert(`Error saving location: ${error.message}`);
// // // // // //     //   }
// // // // // //     } else {
// // // // // //       alert('Please select a location first');
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <View style={styles.container}>
// // // // // //       <TextInput
// // // // // //         style={styles.searchInput}
// // // // // //         placeholder="Search location..."
// // // // // //         value={searchText}
// // // // // //         onChangeText={setSearchText}
// // // // // //       />
// // // // // //       <Button title="Search" onPress={searchLocation} />
// // // // // //       <MapView
// // // // // //         style={styles.map}
// // // // // //         region={{
// // // // // //           latitude: coordinates.latitude,
// // // // // //           longitude: coordinates.longitude,
// // // // // //           latitudeDelta: 0.0922,
// // // // // //           longitudeDelta: 0.0421,
// // // // // //         }}
// // // // // //         onPress={onMapPress}
// // // // // //       >
// // // // // //         {selectedLocation && (
// // // // // //           <Marker
// // // // // //             coordinate={selectedLocation.coordinates}
// // // // // //             title={selectedLocation.city}
// // // // // //             description={selectedLocation.area}
// // // // // //           />
// // // // // //         )}
// // // // // //       </MapView>
// // // // // //       <Button title="Save Location" onPress={saveLocation} />
// // // // // //     </View>
// // // // // //   );
// // // // // // };

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: { flex: 1 },
// // // // // //   map: { flex: 1 },
// // // // // //   searchInput: {
// // // // // //     padding: 10,
// // // // // //     backgroundColor: '#fff',
// // // // // //     marginTop: 50,
// // // // // //   },
// // // // // // });

// // // // // // export default MapPage;


// // // // // // Frontend: Map Page in React Native with Expo Router
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { View, Button, StyleSheet, TextInput } from 'react-native';
// // // // // import MapView, { Marker } from 'react-native-maps';
// // // // // import axios from 'axios';

// // // // // const INITIAL_COORDINATES = { latitude: 23.7544529, longitude: 90.393336 };

// // // // // const MapPage = () => {
// // // // //   const [coordinates, setCoordinates] = useState(INITIAL_COORDINATES);
// // // // //   const [selectedLocation, setSelectedLocation] = useState({
// // // // //     coordinates: INITIAL_COORDINATES,
// // // // //     city: 'Dhaka',
// // // // //     area: 'Kawran Bazar',
// // // // //   });
// // // // //   const [searchText, setSearchText] = useState('');

// // // // //   const onMapPress = (event) => {
// // // // //     const { latitude, longitude } = event.nativeEvent.coordinate;
// // // // //     setCoordinates({ latitude, longitude });
// // // // //     fetchLocationDetails(latitude, longitude);
// // // // //   };

// // // // //   const fetchLocationDetails = async (latitude, longitude) => {
// // // // //     try {
// // // // //       const response = await axios.get(
// // // // //         `https://nominatim.openstreetmap.org/reverse`,
// // // // //         {
// // // // //           params: { format: 'json', lat: latitude, lon: longitude, 'accept-language': 'en' },
// // // // //           headers: { 'User-Agent': 'ReactNativeApp' },
// // // // //         }
// // // // //       );
// // // // //       const { address } = response.data;
// // // // //       const city = address?.city || address?.town || address?.village || 'Unknown City';
// // // // //       const area = address?.suburb || address?.neighbourhood || 'Unknown Area';

// // // // //         console.log({
// // // // //             coordinates: { latitude, longitude },
// // // // //             city,
// // // // //             area,
// // // // //           });
// // // // //       setSelectedLocation({
// // // // //         coordinates: { latitude, longitude },
// // // // //         city,
// // // // //         area,
// // // // //       });
// // // // //     } catch (error) {
// // // // //       alert(`Error fetching location details: ${error.message}`);
// // // // //     }
// // // // //   };

// // // // //   const searchLocation = async () => {
// // // // //     try {
// // // // //       const response = await axios.get(
// // // // //         `https://nominatim.openstreetmap.org/search`,
// // // // //         {
// // // // //           params: { format: 'json', q: searchText, 'accept-language': 'en' },
// // // // //           headers: { 'User-Agent': 'ReactNativeApp' },
// // // // //         }
// // // // //       );
// // // // //       if (response.data.length > 0) {
// // // // //         const { lat, lon } = response.data[0];
// // // // //         const latitude = parseFloat(lat);
// // // // //         const longitude = parseFloat(lon);

// // // // //         setCoordinates({ latitude, longitude });
// // // // //         fetchLocationDetails(latitude, longitude);
// // // // //       } else {
// // // // //         alert('Location not found');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       alert(`Error searching for location: ${error.message}`);
// // // // //     }
// // // // //   };

// // // // //   const saveLocation = async () => {
// // // // //     if (selectedLocation) {
// // // // //         console.log(selectedLocation);
// // // // //     //   try {
// // // // //     //     const response = await axios.post('http://localhost:5000/api/locations', selectedLocation);
// // // // //     //     alert('Location saved successfully!');
// // // // //     //   } catch (error) {
// // // // //     //     alert(`Error saving location: ${error.message}`);
// // // // //     //   }
// // // // //     } else {
// // // // //       alert('Please select a location first');
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     // Set initial marker when the page loads
// // // // //     setSelectedLocation({
// // // // //       coordinates: INITIAL_COORDINATES,
// // // // //       city: 'San Francisco',
// // // // //       area: 'California',
// // // // //     });
// // // // //   }, []);

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <TextInput
// // // // //         style={styles.searchInput}
// // // // //         placeholder="Search location..."
// // // // //         value={searchText}
// // // // //         onChangeText={setSearchText}
// // // // //       />
// // // // //       <Button title="Search" onPress={searchLocation} />
// // // // //       <MapView
// // // // //         style={styles.map}
// // // // //         region={{
// // // // //           latitude: coordinates.latitude,
// // // // //           longitude: coordinates.longitude,
// // // // //           latitudeDelta: 0.0922,
// // // // //           longitudeDelta: 0.0421,
// // // // //         }}
// // // // //         onPress={onMapPress}
// // // // //       >
// // // // //         {selectedLocation && (
// // // // //           <Marker
// // // // //             coordinate={selectedLocation.coordinates}
// // // // //             title={selectedLocation.city}
// // // // //             description={selectedLocation.area}
// // // // //           />
// // // // //         )}
// // // // //       </MapView>
// // // // //       <Button title="Save Location" onPress={saveLocation} />
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   container: { flex: 1 },
// // // // //   map: { flex: 1 },
// // // // //   searchInput: {
// // // // //     padding: 10,
// // // // //     backgroundColor: '#fff',
// // // // //     marginTop: 50,
// // // // //   },
// // // // // });

// // // // // export default MapPage;





// // // // // Map Page in React Native with Expo Router
// // // // import React, { useState, useEffect } from 'react';
// // // // import { View, Button, StyleSheet, TextInput } from 'react-native';
// // // // import MapView, { Marker } from 'react-native-maps';
// // // // import axios from 'axios';
// // // // import { useRouter, useSearchParams } from 'expo-router';

// // // // const INITIAL_COORDINATES = { latitude: 37.78825, longitude: -122.4324 };

// // // // const MapPage = () => {
// // // //   const [coordinates, setCoordinates] = useState(INITIAL_COORDINATES);
// // // // //   const [selectedLocation, setSelectedLocation] = useState({
// // // // //     coordinates: INITIAL_COORDINATES,
// // // // //     city: 'San Francisco',
// // // // //     area: 'California',
// // // // //   });

// // // //   const [selectedLocation, setSelectedLocation] = React.useState(null);
// // // //   const [searchText, setSearchText] = useState('');
// // // //   const router = useRouter();

// // // //   const onMapPress = (event) => {
// // // //     const { latitude, longitude } = event.nativeEvent.coordinate;
// // // //     setCoordinates({ latitude, longitude });
// // // //     fetchLocationDetails(latitude, longitude);
// // // //   };

// // // //   const fetchLocationDetails = async (latitude, longitude) => {
// // // //     try {
// // // //       const response = await axios.get(
// // // //         `https://nominatim.openstreetmap.org/reverse`,
// // // //         {
// // // //           params: { format: 'json', lat: latitude, lon: longitude, 'accept-language': 'en' },
// // // //           headers: { 'User-Agent': 'ReactNativeApp' },
// // // //         }
// // // //       );
// // // //       const { address } = response.data;
// // // //       const city = address?.city || address?.town || address?.village || 'Unknown City';
// // // //       const area = address?.suburb || address?.neighbourhood || 'Unknown Area';

// // // //       console.log({
// // // //         coordinates: { latitude, longitude },
// // // //         city,
// // // //         area,
// // // //       });
      
// // // //       setSelectedLocation({
// // // //         coordinates: { latitude, longitude },
// // // //         city,
// // // //         area,
// // // //       });
// // // //     } catch (error) {
// // // //       alert(`Error fetching location details: ${error.message}`);
// // // //     }
// // // //   };

// // // //   const searchLocation = async () => {
// // // //     console.log(searchText);
// // // //     try {
        
// // // //       const response = await axios.get(
// // // //         `https://nominatim.openstreetmap.org/search`,
// // // //         {
// // // //           params: { format: 'json', q: searchText, 'accept-language': 'en' },
// // // //           headers: { 'User-Agent': 'ReactNativeApp' },
// // // //         }
// // // //       );
// // // //       if (response.data.length > 0) {
// // // //         const { lat, lon } = response.data[0];
// // // //         const latitude = parseFloat(lat);
// // // //         const longitude = parseFloat(lon);

// // // //         console.log({ latitude, longitude });

// // // //         setCoordinates({ latitude, longitude });
// // // //         fetchLocationDetails(latitude, longitude);
// // // //       } else {
// // // //         alert('Location not found');
// // // //       }
// // // //     } catch (error) {
// // // //       alert(`Error searching for location: ${error.message}`);
// // // //     }
// // // //   };

// // // // //   const saveLocation = () => {
// // // // //     if (selectedLocation) {
// // // // //       router.push({
// // // // //         pathname: '/',
// // // // //         params: selectedLocation,
// // // // //       });
// // // // //     } else {
// // // // //       alert('Please select a location first');
// // // // //     }
// // // // //   };

// // // //   const saveLocation = () => {
// // // //     setSelectedLocation(selectedLocation); // Pass the selected location back
// // // //     router.back(); // Go back to the HomeDetailsForm
// // // //   };

// // // //   useEffect(() => {
// // // //     setSelectedLocation({
// // // //       coordinates: INITIAL_COORDINATES,
// // // //       city: 'San Francisco',
// // // //       area: 'California',
// // // //     });
// // // //   }, []);

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <TextInput
// // // //         style={styles.searchInput}
// // // //         placeholder="Search location..."
// // // //         value={searchText}
// // // //         onChangeText={setSearchText}
// // // //       />
// // // //       <Button title="Search" onPress={searchLocation} />
// // // //       <MapView
// // // //         style={styles.map}
// // // //         region={{
// // // //           latitude: coordinates.latitude,
// // // //           longitude: coordinates.longitude,
// // // //           latitudeDelta: 0.0922,
// // // //           longitudeDelta: 0.0421,
// // // //         }}
// // // //         onPress={onMapPress}
// // // //       >
// // // //         {selectedLocation && (
// // // //           <Marker
// // // //             coordinate={selectedLocation.coordinates}
// // // //             title={selectedLocation.city}
// // // //             description={selectedLocation.area}
// // // //           />
// // // //         )}
// // // //       </MapView>
// // // //       <Button title="Save Location" onPress={saveLocation} />
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: { flex: 1 },
// // // //   map: { flex: 1 },
// // // //   searchInput: {
// // // //     padding: 10,
// // // //     backgroundColor: '#fff',
// // // //     marginTop: 50,
// // // //   },
// // // // });

// // // // export default MapPage;



// // // // Map Page in React Native with Expo Router
// // // import React, { useState, useEffect } from 'react';
// // // import { View, Button, StyleSheet, TextInput } from 'react-native';
// // // import MapView, { Marker } from 'react-native-maps';
// // // import axios from 'axios';
// // // import { useRouter, useLocalSearchParams } from 'expo-router';

// // // const INITIAL_COORDINATES = { latitude: 37.78825, longitude: -122.4324 };

// // // const MapPage = () => {
// // //   const [coordinates, setCoordinates] = useState(INITIAL_COORDINATES);
// // //   const [selectedLocation, setSelectedLocation] = useState(null);
// // //   const [searchText, setSearchText] = useState('');
// // //   const router = useRouter();
// // //   const params = useLocalSearchParams(); // Get incoming parameters

// // //   useEffect(() => {
// // //     if (params.latitude && params.longitude) {
// // //       setCoordinates({
// // //         latitude: parseFloat(params.latitude),
// // //         longitude: parseFloat(params.longitude),
// // //       });

// // //       setSelectedLocation({
// // //         coordinates: { latitude: parseFloat(params.latitude), longitude: parseFloat(params.longitude) },
// // //         city: params.city || 'Unknown City',
// // //         area: params.area || 'Unknown Area',
// // //       });
// // //     } else {
// // //       setSelectedLocation({
// // //         coordinates: INITIAL_COORDINATES,
// // //         city: 'San Francisco',
// // //         area: 'California',
// // //       });
// // //     }
// // //   }, [params]);

// // //   const onMapPress = (event) => {
// // //     const { latitude, longitude } = event.nativeEvent.coordinate;
// // //     setCoordinates({ latitude, longitude });
// // //     fetchLocationDetails(latitude, longitude);
// // //   };

// // //   const fetchLocationDetails = async (latitude, longitude) => {
// // //     try {
// // //       const response = await axios.get(
// // //         `https://nominatim.openstreetmap.org/reverse`,
// // //         {
// // //           params: { format: 'json', lat: latitude, lon: longitude, 'accept-language': 'en' },
// // //           headers: { 'User-Agent': 'ReactNativeApp' },
// // //         }
// // //       );
// // //       const { address } = response.data;
// // //       const city = address?.city || address?.town || address?.village || 'Unknown City';
// // //       const area = address?.suburb || address?.neighbourhood || 'Unknown Area';

// // //       setSelectedLocation({
// // //         coordinates: { latitude, longitude },
// // //         city,
// // //         area,
// // //       });
// // //     } catch (error) {
// // //       alert(`Error fetching location details: ${error.message}`);
// // //     }
// // //   };

// // //   const searchLocation = async () => {
// // //     try {
// // //       const response = await axios.get(
// // //         `https://nominatim.openstreetmap.org/search`,
// // //         {
// // //           params: { format: 'json', q: searchText, 'accept-language': 'en' },
// // //           headers: { 'User-Agent': 'ReactNativeApp' },
// // //         }
// // //       );

// // //       if (response.data.length > 0) {
// // //         const { lat, lon } = response.data[0];
// // //         const latitude = parseFloat(lat);
// // //         const longitude = parseFloat(lon);

// // //         setCoordinates({ latitude, longitude });
// // //         fetchLocationDetails(latitude, longitude);
// // //       } else {
// // //         alert('Location not found');
// // //       }
// // //     } catch (error) {
// // //       alert(`Error searching for location: ${error.message}`);
// // //     }
// // //   };

// // //   const saveLocation = () => {
// // //     if (selectedLocation) {
// // //       router.push({
// // //         pathname: '/pages/Map/locationRedirect',
// // //         params: {
// // //           latitude: selectedLocation.coordinates.latitude,
// // //           longitude: selectedLocation.coordinates.longitude,
// // //           city: selectedLocation.city,
// // //           area: selectedLocation.area,
// // //         },
// // //       });
// // //     } else {
// // //       alert('Please select a location first');
// // //     }
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <TextInput
// // //         style={styles.searchInput}
// // //         placeholder="Search location..."
// // //         value={searchText}
// // //         onChangeText={setSearchText}
// // //       />
// // //       <Button title="Search" onPress={searchLocation} />
// // //       <MapView
// // //         style={styles.map}
// // //         region={{
// // //           latitude: coordinates.latitude,
// // //           longitude: coordinates.longitude,
// // //           latitudeDelta: 0.0922,
// // //           longitudeDelta: 0.0421,
// // //         }}
// // //         onPress={onMapPress}
// // //       >
// // //         {selectedLocation && (
// // //           <Marker
// // //             coordinate={selectedLocation.coordinates}
// // //             title={selectedLocation.city}
// // //             description={selectedLocation.area}
// // //           />
// // //         )}
// // //       </MapView>
// // //       <Button title="Save Location" onPress={saveLocation} />
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1 },
// // //   map: { flex: 1 },
// // //   searchInput: {
// // //     padding: 10,
// // //     backgroundColor: '#fff',
// // //     marginTop: 50,
// // //   },
// // // });

// // // export default MapPage;




// // import React, { useState, useEffect } from 'react';
// // import { View, Button, StyleSheet, TextInput } from 'react-native';
// // import MapView, { Marker } from 'react-native-maps';
// // import axios from 'axios';
// // import { useRouter, useLocalSearchParams } from 'expo-router';

// // const INITIAL_COORDINATES = { latitude: 37.78825, longitude: -122.4324 };

// // const MapPage = () => {
// //   const [coordinates, setCoordinates] = useState(INITIAL_COORDINATES);
// //   const [selectedLocation, setSelectedLocation] = useState(null);
// //   const [searchText, setSearchText] = useState('');
// //   const router = useRouter();
// //   const params = useLocalSearchParams(); // Get incoming parameters

// //   // ✅ Prevent Infinite Loop by Running Only When Necessary
// //   useEffect(() => {
// //     if (!selectedLocation && (params.latitude && params.longitude)) {
// //       setSelectedLocation({
// //         coordinates: {
// //           latitude: parseFloat(params.latitude),
// //           longitude: parseFloat(params.longitude),
// //         },
// //         city: params.city || 'Unknown City',
// //         area: params.area || 'Unknown Area',
// //       });
// //     }
// //   }, [params.latitude, params.longitude]); // Only run when params change

// //   const onMapPress = (event) => {
// //     const { latitude, longitude } = event.nativeEvent.coordinate;
// //     setCoordinates({ latitude, longitude });
// //     fetchLocationDetails(latitude, longitude);
// //   };

// //   const fetchLocationDetails = async (latitude, longitude) => {
// //     try {
// //       const response = await axios.get(
// //         `https://nominatim.openstreetmap.org/reverse`,
// //         {
// //           params: { format: 'json', lat: latitude, lon: longitude, 'accept-language': 'en' },
// //           headers: { 'User-Agent': 'ReactNativeApp' },
// //         }
// //       );
// //       const { address } = response.data;
// //       const city = address?.city || address?.town || address?.village || 'Unknown City';
// //       const area = address?.suburb || address?.neighbourhood || 'Unknown Area';

// //       setSelectedLocation({
// //         coordinates: { latitude, longitude },
// //         city,
// //         area,
// //       });
// //     } catch (error) {
// //       alert(`Error fetching location details: ${error.message}`);
// //     }
// //   };

// //   const searchLocation = async () => {
// //     try {
// //       const response = await axios.get(
// //         `https://nominatim.openstreetmap.org/search`,
// //         {
// //           params: { format: 'json', q: searchText, 'accept-language': 'en' },
// //           headers: { 'User-Agent': 'ReactNativeApp' },
// //         }
// //       );

// //       if (response.data.length > 0) {
// //         const { lat, lon } = response.data[0];
// //         const latitude = parseFloat(lat);
// //         const longitude = parseFloat(lon);

// //         setCoordinates({ latitude, longitude });
// //         fetchLocationDetails(latitude, longitude);
// //       } else {
// //         alert('Location not found');
// //       }
// //     } catch (error) {
// //       alert(`Error searching for location: ${error.message}`);
// //     }
// //   };

// //   const saveLocation = () => {
// //     if (selectedLocation) {
// //       router.push({
// //         pathname: '/Rent/rentAHomeForm',
// //         params: {
// //           latitude: selectedLocation.coordinates.latitude,
// //           longitude: selectedLocation.coordinates.longitude,
// //           city: selectedLocation.city,
// //           area: selectedLocation.area,
// //         },
// //       });
// //     } else {
// //       alert('Please select a location first');
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <TextInput
// //         style={styles.searchInput}
// //         placeholder="Search location..."
// //         value={searchText}
// //         onChangeText={setSearchText}
// //       />
// //       <Button title="Search" onPress={searchLocation} />
// //       <MapView
// //         style={styles.map}
// //         region={{
// //           latitude: coordinates.latitude,
// //           longitude: coordinates.longitude,
// //           latitudeDelta: 0.0922,
// //           longitudeDelta: 0.0421,
// //         }}
// //         onPress={onMapPress}
// //       >
// //         {selectedLocation && (
// //           <Marker
// //             coordinate={selectedLocation.coordinates}
// //             title={selectedLocation.city}
// //             description={selectedLocation.area}
// //           />
// //         )}
// //       </MapView>
// //       <Button title="Save Location" onPress={saveLocation} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1 },
// //   map: { flex: 1 },
// //   searchInput: {
// //     padding: 10,
// //     backgroundColor: '#fff',
// //     marginTop: 50,
// //   },
// // });

// // export default MapPage;




// import React, { useState, useEffect } from 'react';
// import { View, TouchableOpacity, StyleSheet, TextInput, Text, SafeAreaView } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import axios from 'axios';
// import { useRouter, useLocalSearchParams } from 'expo-router';
// import { FontAwesome } from '@expo/vector-icons';

// const INITIAL_COORDINATES = { latitude: 37.78825, longitude: -122.4324 };

// const MapPage = () => {
//   const [coordinates, setCoordinates] = useState(INITIAL_COORDINATES);
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [searchText, setSearchText] = useState('');
//   const router = useRouter();
//   const params = useLocalSearchParams();

//   useEffect(() => {
//     if (!selectedLocation && (params.latitude && params.longitude)) {
//       setSelectedLocation({
//         coordinates: {
//           latitude: parseFloat(params.latitude),
//           longitude: parseFloat(params.longitude),
//         },
//         city: params.city || 'Unknown City',
//         area: params.area || 'Unknown Area',
//       });
//     }
//   }, [params.latitude, params.longitude]);

//   const onMapPress = (event) => {
//     const { latitude, longitude } = event.nativeEvent.coordinate;
//     setCoordinates({ latitude, longitude });
//     fetchLocationDetails(latitude, longitude);
//   };

//   const fetchLocationDetails = async (latitude, longitude) => {
//     try {
//       const response = await axios.get(
//         `https://nominatim.openstreetmap.org/reverse`,
//         {
//           params: { format: 'json', lat: latitude, lon: longitude, 'accept-language': 'en' },
//           headers: { 'User-Agent': 'ReactNativeApp' },
//         }
//       );
//       const { address } = response.data;
//       const city = address?.city || address?.town || address?.village || 'Unknown City';
//       const area = address?.suburb || address?.neighbourhood || 'Unknown Area';

//       setSelectedLocation({
//         coordinates: { latitude, longitude },
//         city,
//         area,
//       });
//     } catch (error) {
//       alert(`Error fetching location details: ${error.message}`);
//     }
//   };

//   const searchLocation = async () => {
//     if (!searchText.trim()) {
//       return;
//     }
    
//     try {
//       const response = await axios.get(
//         `https://nominatim.openstreetmap.org/search`,
//         {
//           params: { format: 'json', q: searchText, 'accept-language': 'en' },
//           headers: { 'User-Agent': 'ReactNativeApp' },
//         }
//       );

//       if (response.data.length > 0) {
//         const { lat, lon } = response.data[0];
//         const latitude = parseFloat(lat);
//         const longitude = parseFloat(lon);

//         setCoordinates({ latitude, longitude });
//         fetchLocationDetails(latitude, longitude);
//       } else {
//         alert('Location not found');
//       }
//     } catch (error) {
//       alert(`Error searching for location: ${error.message}`);
//     }
//   };

//   const saveLocation = () => {
//     if (selectedLocation) {
//       router.push({
//         pathname: '/Rent/rentAHomeForm',
//         params: {
//           latitude: selectedLocation.coordinates.latitude,
//           longitude: selectedLocation.coordinates.longitude,
//           city: selectedLocation.city,
//           area: selectedLocation.area,
//         },
//       });
//     } else {
//       alert('Please select a location first');
//     }
//   };

//   const customMapStyle = [
//     {
//       featureType: 'water',
//       elementType: 'geometry',
//       stylers: [
//         {
//           color: '#e9e9e9',
//         },
//         {
//           lightness: 17,
//         },
//       ],
//     },
//     {
//       featureType: 'landscape',
//       elementType: 'geometry',
//       stylers: [
//         {
//           color: '#f5f5f5',
//         },
//         {
//           lightness: 20,
//         },
//       ],
//     },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
        // <View style={styles.topBar}><Text style={styles.topBarText}>Select Your Location</Text></View>
//       <View style={styles.searchContainer}>
//         <View style={styles.searchBar}>
//           <FontAwesome name="search" size={20} color="#666" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search location..."
//             value={searchText}
//             onChangeText={setSearchText}
//             placeholderTextColor="#666"
//             onSubmitEditing={searchLocation}
//           />
//         </View>
//       </View>

//       <MapView
//         style={styles.map}
//         customMapStyle={customMapStyle}
//         region={{
//           latitude: coordinates.latitude,
//           longitude: coordinates.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         onPress={onMapPress}
//       >
//         {selectedLocation && (
//           <Marker
//             coordinate={selectedLocation.coordinates}
//             title={selectedLocation.city}
//             description={selectedLocation.area}
//           />
//         )}
//       </MapView>

//       {selectedLocation && (
//         <View style={styles.locationInfo}>
//           <Text style={styles.locationTitle}>{selectedLocation.city}</Text>
//           <Text style={styles.locationSubtitle}>{selectedLocation.area}</Text>
//         </View>
//       )}

//       <TouchableOpacity
//         style={styles.saveButton}
//         onPress={saveLocation}
//         activeOpacity={0.8}
//       >
//         <Text style={styles.saveButtonText}>Save Location</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: '#fff',
//     // marginTop:80

//     flex: 1,
//     // flexGrow: 1,
//     // padding: 10,
//     paddingTop: 8,
//     backgroundColor: "black", // "#132639",
//     // width: "100%",
//     // marginVertical: 16,
//   },
//   topBar: {
//     marginTop: 30,
//     // alignContent: 'center',
//     alignItems: 'center',
//     height: 40,
//     backgroundColor: '#38bdf8',
//     width: '100%',
//   },
//   topBarText: {
//     paddingTop: 8,
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   searchContainer: {
//     padding: 16,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     zIndex: 1,
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     borderRadius: 12,
//     paddingHorizontal: 16,
//     height: 50,
//   },
//   searchIcon: {
//     marginRight: 12,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#333',
//   },
//   map: {
//     flex: 1,
//   },
//   locationInfo: {
//     position: 'absolute',
//     bottom: 100,
//     left: 16,
//     right: 16,
//     backgroundColor: 'rgba(255, 255, 255, 0.95)',
//     borderRadius: 12,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   locationTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   locationSubtitle: {
//     fontSize: 14,
//     color: '#666',
//   },
//   saveButton: {
//     position: 'absolute',
//     bottom: 24,
//     left: 16,
//     right: 16,
//     backgroundColor: '#007AFF',
//     borderRadius: 12,
//     padding: 16,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default MapPage;



import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Text, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const INITIAL_COORDINATES = { latitude: 23.7544529, longitude: 90.393336 };

const MapPage = () => {
  const [coordinates, setCoordinates] = useState(INITIAL_COORDINATES);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchText, setSearchText] = useState('');
  const router = useRouter();
  const params = useLocalSearchParams();

  useEffect(() => {
    if (!selectedLocation && (params.latitude && params.longitude)) {
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

  const onMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setCoordinates({ latitude, longitude });
    fetchLocationDetails(latitude, longitude);
  };

  const fetchLocationDetails = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse`,
        {
          params: { format: 'json', lat: latitude, lon: longitude, 'accept-language': 'en' },
          headers: { 'User-Agent': 'ReactNativeApp' },
        }
      );
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
    if (!searchText.trim()) {
      return;
    }
    
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search`,
        {
          params: { format: 'json', q: searchText, 'accept-language': 'en' },
          headers: { 'User-Agent': 'ReactNativeApp' },
        }
      );

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

  const saveLocation = () => {
    if (selectedLocation) {
      router.push({
        pathname: '/Rent/rentAHomeForm',
        params: {
          latitude: selectedLocation.coordinates.latitude,
          longitude: selectedLocation.coordinates.longitude,
          city: selectedLocation.city,
          area: selectedLocation.area,
        },
      });
    } else {
      alert('Please select a location first');
    }
  };

  const customMapStyle = [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e9e9e9',
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5',
        },
        {
          lightness: 20,
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topBar}><Text style={styles.topBarText}>Select Your Location</Text></View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <View style={styles.searchBar}>
            <FontAwesome name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search location..."
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor="#666"
              onSubmitEditing={searchLocation}
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

      <MapView
        style={styles.map}
        customMapStyle={customMapStyle}
        region={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={onMapPress}
      >
        {selectedLocation && (
          <Marker
            coordinate={selectedLocation.coordinates}
            title={selectedLocation.city}
            description={selectedLocation.area}
          />
        )}
      </MapView>

      {selectedLocation && (
        <View style={styles.locationInfo}>
          <Text style={styles.locationTitle}>{selectedLocation.city}</Text>
          <Text style={styles.locationSubtitle}>{selectedLocation.area}</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.saveButton}
        onPress={saveLocation}
        activeOpacity={0.8}
      >
        <Text style={styles.saveButtonText}>Save Location</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // marginTop:80
    
        flex: 1,
        // flexGrow: 1,
        // padding: 10,
        paddingTop: 8,
        backgroundColor: "black", // "#132639",
        // width: "100%",
        // marginVertical: 16,
      },
      topBar: {
        marginTop: 30,
        // alignContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#38bdf8',
        width: '100%',
      },
      topBarText: {
        paddingTop: 8,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      },
  searchContainer: {
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 1,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 50,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingHorizontal: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  map: {
    flex: 1,
  },
  locationInfo: {
    position: 'absolute',
    bottom: 100,
    left: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  locationSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  saveButton: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MapPage;