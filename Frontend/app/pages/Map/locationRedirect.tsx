// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, Button } from 'react-native';
// // import { useRouter, useLocalSearchParams } from 'expo-router';

// // const LocationDetailsPage = () => {
// //   const [locationInfo, setLocationInfo] = useState(null);
// //   const router = useRouter();
// //   const params = useLocalSearchParams();

// //   // Function to handle opening the map
// //   const handleOpenMap = async () => {
// //     router.push('/pages/Map/locationCheck');
    
// //   };

// //   // Watch for params changes
// //   React.useEffect(() => {
// //     console.log('params', params);
// //     if (params.locationData) {
// //       try {
// //         const locationData = JSON.parse(params.locationData);
// //         setLocationInfo(locationData);
// //       } catch (error) {
// //         console.error('Error parsing location data:', error);
// //       }
// //     }
// //   }, [params]);

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Location Details</Text>
      
// //       <Button 
// //         title="Select Location on Map" 
// //         onPress={handleOpenMap}
// //       />

// //       {locationInfo ? (
// //         <View style={styles.detailsContainer}>
// //           <Text style={styles.detailTitle}>Selected Location:</Text>
// //           <Text style={styles.detailText}>
// //             City: {locationInfo.city}
// //           </Text>
// //           <Text style={styles.detailText}>
// //             Area: {locationInfo.area}
// //           </Text>
// //           <Text style={styles.detailText}>
// //             Latitude: {locationInfo.coordinates.latitude.toFixed(6)}
// //           </Text>
// //           <Text style={styles.detailText}>
// //             Longitude: {locationInfo.coordinates.longitude.toFixed(6)}
// //           </Text>
// //         </View>
// //       ) : (
// //         <Text style={styles.noLocation}>
// //           No location selected. Please select a location using the map.
// //         </Text>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     marginTop: 50,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   detailsContainer: {
// //     marginTop: 20,
// //     padding: 15,
// //     backgroundColor: '#f5f5f5',
// //     borderRadius: 8,
// //   },
// //   detailTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// //   detailText: {
// //     fontSize: 16,
// //     marginBottom: 5,
// //   },
// //   noLocation: {
// //     marginTop: 20,
// //     fontSize: 16,
// //     color: '#666',
// //     textAlign: 'center',
// //   },
// // });

// // export default LocationDetailsPage;



// import React, { useState } from 'react';
// import { View, Button, Text, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router';
// import { useLocalSearchParams } from 'expo-router';



// const LocationSelector = () => {
//   const [location, setLocation] = useState(null);
//   const router = useRouter();
//   const params = useLocalSearchParams();

//   // Update location if params are received from MapPage
//   React.useEffect(() => {
//     if (params?.latitude && params?.longitude) {
//       setLocation({
//         latitude: params.latitude,
//         longitude: params.longitude,
//         city: params.city || 'Unknown City',
//         area: params.area || 'Unknown Area',
//       });
//     }
//   }, [params]);

//   return (
//     <View style={styles.container}>
//       <Button title="Select Location" onPress={() => router.push('/pages/Map/locationCheck')} />
//       {location && (
//         <View style={styles.locationContainer}>
//           <Text>Latitude: {location.latitude}</Text>
//           <Text>Longitude: {location.longitude}</Text>
//           <Text>City: {location.city}</Text>
//           <Text>Area: {location.area}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   locationContainer: { marginTop: 20 },
// });

// export default LocationSelector;



import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const LocationSelector = () => {
  const [location, setLocation] = useState(null);
  const router = useRouter();
  const params = useLocalSearchParams();

  // ✅ Prevent infinite re-renders by updating state only if it hasn't been set
  useEffect(() => {
    if (!location && params?.latitude && params?.longitude) {
      setLocation({
        latitude: parseFloat(params.latitude),
        longitude: parseFloat(params.longitude),
        city: params.city || 'Unknown City',
        area: params.area || 'Unknown Area',
      });
    }
  }, [params]); // Run effect only when params change

  return (
    <View style={styles.container}>
      <Button title="Select Location" onPress={() => router.push('/pages/Map/locationCheck')} />
      {location && (
        <View style={styles.locationContainer}>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
          <Text>City: {location.city}</Text>
          <Text>Area: {location.area}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  locationContainer: { marginTop: 20 },
});

export default LocationSelector;
