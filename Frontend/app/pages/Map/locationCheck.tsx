// // // // Frontend: Map Page in React Native with Expo Router
// // // import React, { useState, useEffect } from 'react';
// // // import { View, Button, StyleSheet, TextInput } from 'react-native';
// // // import MapView, { Marker } from 'react-native-maps';
// // // import axios from 'axios';

// // // const MapPage = () => {
// // //   const [coordinates, setCoordinates] = useState({ latitude: 37.78825, longitude: -122.4324 });
// // //   const [selectedLocation, setSelectedLocation] = useState(null);
// // //   const [searchText, setSearchText] = useState('');

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
// // //           params: { format: 'json', lat: latitude, lon: longitude },
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
// // //           params: { format: 'json', q: searchText },
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

// // //   const saveLocation = async () => {
// // //     if (selectedLocation) {
// // //         console.log(selectedLocation);
// // //     //   try {
// // //     //     const response = await axios.post('http://localhost:5000/api/locations', selectedLocation);
// // //     //     alert('Location saved successfully!');
// // //     //   } catch (error) {
// // //     //     alert(`Error saving location: ${error.message}`);
// // //     //   }
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
// // //         initialRegion={{
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



// // // Frontend: Map Page in React Native with Expo Router
// // import React, { useState, useEffect } from 'react';
// // import { View, Button, StyleSheet, TextInput } from 'react-native';
// // import MapView, { Marker } from 'react-native-maps';
// // import axios from 'axios';

// // const MapPage = () => {
// //   const [coordinates, setCoordinates] = useState({ latitude: 23.7544529, longitude: 90.393336 });
// //   const [selectedLocation, setSelectedLocation] = useState(null);
// //   const [searchText, setSearchText] = useState('');

// //   const onMapPress = (event) => {
// //     const { latitude, longitude } = event.nativeEvent.coordinate;
// //     setCoordinates({ latitude, longitude });
// //     fetchLocationDetails(latitude, longitude);
// //   };

// // //   const fetchLocationDetails = async (latitude, longitude) => {
// // //     try {
// // //       const response = await axios.get(
// // //         `https://nominatim.openstreetmap.org/reverse`,
// // //         {
// // //           params: { format: 'json', lat: latitude, lon: longitude },
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

// // const fetchLocationDetails = async (latitude, longitude) => {
// //     try {
// //       const response = await axios.get(
// //         `https://nominatim.openstreetmap.org/reverse`,
// //         {
// //           params: {
// //             format: 'json',
// //             lat: latitude,
// //             lon: longitude,
// //             'accept-language': 'en',  // Ensure data is in English
// //           },
// //           headers: { 'User-Agent': 'ReactNativeApp' },
// //         }
// //       );
// //       const { address } = response.data;
// //       const city = address?.city || address?.town || address?.village || 'Unknown City';
// //       const area = address?.suburb || address?.neighbourhood || 'Unknown Area';

// //       console.log({
// //         coordinates: { latitude, longitude },
// //         city,
// //         area,
// //       });
  
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
// //           params: {
// //             format: 'json',
// //             q: searchText,
// //             'accept-language': 'en',  // Ensure search results are in English
// //           },
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
  

// // //   const searchLocation = async () => {
// // //     try {
// // //       const response = await axios.get(
// // //         `https://nominatim.openstreetmap.org/search`,
// // //         {
// // //           params: { format: 'json', q: searchText },
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

// //   const saveLocation = async () => {
// //     if (selectedLocation) {
// //         console.log(selectedLocation);
// //     //   try {
// //     //     const response = await axios.post('http://localhost:5000/api/locations', selectedLocation);
// //     //     alert('Location saved successfully!');
// //     //   } catch (error) {
// //     //     alert(`Error saving location: ${error.message}`);
// //     //   }
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



// // Frontend: Map Page in React Native with Expo Router
// import React, { useState, useEffect } from 'react';
// import { View, Button, StyleSheet, TextInput } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import axios from 'axios';

// const MapPage = () => {
//   const [coordinates, setCoordinates] = useState({ latitude: 23.7544529, longitude: 90.393336 });
//   const [selectedLocation, setSelectedLocation] = useState({
//     coordinates: { latitude: 37.78825, longitude: -122.4324 },
//     city: 'San Francisco',
//     area: 'California',
//   });
//   const [searchText, setSearchText] = useState('');

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

//   const saveLocation = async () => {
//     if (selectedLocation) {
//         console.log(selectedLocation);
//     //   try {
//     //     const response = await axios.post('http://localhost:5000/api/locations', selectedLocation);
//     //     alert('Location saved successfully!');
//     //   } catch (error) {
//     //     alert(`Error saving location: ${error.message}`);
//     //   }
//     } else {
//       alert('Please select a location first');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search location..."
//         value={searchText}
//         onChangeText={setSearchText}
//       />
//       <Button title="Search" onPress={searchLocation} />
//       <MapView
//         style={styles.map}
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
//       <Button title="Save Location" onPress={saveLocation} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   map: { flex: 1 },
//   searchInput: {
//     padding: 10,
//     backgroundColor: '#fff',
//     marginTop: 50,
//   },
// });

// export default MapPage;


// Frontend: Map Page in React Native with Expo Router
import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

const INITIAL_COORDINATES = { latitude: 23.7544529, longitude: 90.393336 };

const MapPage = () => {
  const [coordinates, setCoordinates] = useState(INITIAL_COORDINATES);
  const [selectedLocation, setSelectedLocation] = useState({
    coordinates: INITIAL_COORDINATES,
    city: 'San Francisco',
    area: 'California',
  });
  const [searchText, setSearchText] = useState('');

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

        console.log({
            coordinates: { latitude, longitude },
            city,
            area,
          });
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

  const saveLocation = async () => {
    if (selectedLocation) {
        console.log(selectedLocation);
    //   try {
    //     const response = await axios.post('http://localhost:5000/api/locations', selectedLocation);
    //     alert('Location saved successfully!');
    //   } catch (error) {
    //     alert(`Error saving location: ${error.message}`);
    //   }
    } else {
      alert('Please select a location first');
    }
  };

  useEffect(() => {
    // Set initial marker when the page loads
    setSelectedLocation({
      coordinates: INITIAL_COORDINATES,
      city: 'San Francisco',
      area: 'California',
    });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search location..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Search" onPress={searchLocation} />
      <MapView
        style={styles.map}
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
      <Button title="Save Location" onPress={saveLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  searchInput: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 50,
  },
});

export default MapPage;
