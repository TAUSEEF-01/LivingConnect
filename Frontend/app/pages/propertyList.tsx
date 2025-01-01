// // // import { useEffect, useState } from 'react';
// // // import { View, Text, Image, StyleSheet } from 'react-native';

// // // export default function PropertyList() {
// // //   const [properties, setProperties] = useState([]);

// // //   console.log(properties);

// // //   useEffect(() => {
// // //     async function fetchProperties() {
// // //       try {
// // //         const response = await fetch('http://192.168.50.242:5000/properties');
// // //         const data = await response.json();

// // //         console.log(data);

// // //         setProperties(data);
// // //       } catch (error) {
// // //         console.error('Error fetching properties:', error);
// // //       }
// // //     }

// // //     fetchProperties();
// // //   }, []);

// // //   return (
// // //     <View>
// // //         <Text>Property List</Text>
// // //       {properties.map((property) => (
// // //         <View key={property._id} style={localStyles.card}>
// // //           <Image
// // //             source={{ uri: property.image }}
// // //             style={localStyles.cardImage}
// // //           />
// // //           <Text style={localStyles.cardPrice}>€{property.price.toLocaleString()}</Text>
// // //           <Text style={localStyles.cardDetails}>
// // //             {property.details.beds} beds | {property.details.baths} baths | {property.details.size} m²
// // //           </Text>
// // //           <Text style={localStyles.cardLocation}>
// // //             {property.location.city}, {property.location.region}
// // //           </Text>
// // //         </View>
// // //       ))}
// // //     </View>
// // //   );
// // // }

// // // const localStyles = StyleSheet.create({
// // //     card: {
// // //       backgroundColor: "#2d3748",
// // //       padding: 16,
// // //       borderRadius: 8,
// // //       marginBottom: 16,
// // //       shadowColor: "#000",
// // //       shadowOffset: { width: 5, height: 5 },
// // //       shadowOpacity: 0.25,
// // //       shadowRadius: 10,
// // //       elevation: 5,
// // //     },
// // //     cardImage: {
// // //       width: '100%',
// // //       height: 150,
// // //       borderRadius: 8,
// // //       marginBottom: 8,
// // //     },
// // //     cardPrice: {
// // //       fontSize: 18,
// // //       fontWeight: "bold",
// // //       color: "#fff",
// // //       marginBottom: 4,
// // //     },
// // //     cardDetails: {
// // //       fontSize: 14,
// // //       color: "#ccc",
// // //       marginBottom: 4,
// // //     },
// // //     cardLocation: {
// // //       fontSize: 14,
// // //       color: "#aaa",
// // //     },
// // //   });

// // import { useEffect, useState } from 'react';
// // import { View, Text, Image, StyleSheet } from 'react-native';

// // export default function PropertyList() {
// //   const [properties, setProperties] = useState([]);

// //   console.log(properties);

// //   useEffect(() => {
// //     async function fetchProperties() {
// //       try {
// //         const response = await fetch('http://192.168.50.242:5000/properties');
// //         const data = await response.json();

// //         console.log('Fetched properties:', data);

// //         // Check if 'properties' exists and is an array
// //         if (Array.isArray(data.properties)) {
// //           setProperties(data.properties);
// //         } else {
// //           console.error('Expected an array of properties');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching properties:', error);
// //       }
// //     }

// //     fetchProperties();
// //   }, []);

// //   return (
// //     <View>
// //       {/* <Text>Property List</Text> */}
// //       {Array.isArray(properties) && properties.length > 0 ? (
// //         properties.map((property) => (
// //           <View key={property._id} style={localStyles.card}>
// //             <Image
// //               source={{ uri: property.image }}
// //               style={localStyles.cardImage}
// //             />
// //             <Text style={localStyles.cardPrice}>€{property.price.toLocaleString()}</Text>
// //             <Text style={localStyles.cardDetails}>
// //               {property.details.beds} beds | {property.details.baths} baths | {property.details.size} m²
// //             </Text>
// //             <Text style={localStyles.cardLocation}>
// //               {property.location.city}, {property.location.region}
// //             </Text>
// //           </View>
// //         ))
// //       ) : (
// //         <Text>No properties available.</Text>
// //       )}
// //     </View>
// //   );
// // }

// // const localStyles = StyleSheet.create({
// //   card: {
// //     backgroundColor: "#2d3748",
// //     padding: 16,
// //     borderRadius: 8,
// //     marginBottom: 16,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 5, height: 5 },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 10,
// //     elevation: 5,
// //   },
// //   cardImage: {
// //     width: '100%',
// //     height: 150,
// //     borderRadius: 8,
// //     marginBottom: 8,
// //   },
// //   cardPrice: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     color: "#fff",
// //     marginBottom: 4,
// //   },
// //   cardDetails: {
// //     fontSize: 14,
// //     color: "#ccc",
// //     marginBottom: 4,
// //   },
// //   cardLocation: {
// //     fontSize: 14,
// //     color: "#aaa",
// //   },
// // });

// import { useEffect, useState } from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// export default function PropertyList() {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     async function fetchProperties() {
//       try {
//         const response = await fetch('http://192.168.50.242:5000/properties');
//         const data = await response.json();

//         console.log('Fetched properties:', data);
//         console.log('\n\n\n');
//         // Check if 'properties' exists and is an array
//         if (Array.isArray(data.properties)) {
//             console.log('\n\n\n');
//             console.log("data.properties: \n", data.properties);
//           setProperties(data.properties);
//         } else {
//           console.error('Expected an array of properties');
//         }
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       }
//     }

//     fetchProperties();
//   }, []);

//   return (
//     <View>
//       {Array.isArray(properties) && properties.length > 0 ? (
//         properties.map((property) => (
//           <View key={property._id} style={localStyles.card}>
//             <Image
//               source={{ uri: property.image }}
//               style={localStyles.cardImage}
//             />
//             <Text style={localStyles.cardPrice}>€{property.price.toLocaleString()}</Text>
//             <Text style={localStyles.cardDetails}>
//               {property.details.beds} beds | {property.details.baths} baths | {property.details.size} m²
//             </Text>
//             <Text style={localStyles.cardLocation}>
//               {property.location.city}, {property.location.region}
//             </Text>
//           </View>
//         ))
//       ) : (
//         <Text>No properties available.</Text>
//       )}
//     </View>
//   );
// }

// const localStyles = StyleSheet.create({
//   card: {
//     backgroundColor: "#2d3748",
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 5, height: 5 },
//     shadowOpacity: 0.25,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   cardImage: {
//     width: '100%',
//     height: 150,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   cardPrice: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 4,
//   },
//   cardDetails: {
//     fontSize: 14,
//     color: "#ccc",
//     marginBottom: 4,
//   },
//   cardLocation: {
//     fontSize: 14,
//     color: "#aaa",
//   },
// });

import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch('http://192.168.50.242:5000/properties');
        // const response = await fetch("http://10.33.24.139:5000/properties");
        const data = await response.json();

        // console.log('Fetched properties:', data);

        if (Array.isArray(data.properties)) {
          setProperties(data.properties);
        } else {
          console.error("Expected an array of properties");
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    }

    fetchProperties();
  }, []);

  return (
    <ScrollView style={localStyles.pageContainer}>
      {/* <Text>Property List</Text> */}
      {Array.isArray(properties) && properties.length > 0 ? (
        properties.map((property) => (
          <View key={property._id} style={localStyles.card}>
            <Image
              source={{ uri: property.image }}
              style={localStyles.cardImage}
            />
            <Text style={localStyles.cardPrice}>
              €{property.price.toLocaleString()}
            </Text>
            <Text style={localStyles.cardDetails}>
              {property.details.beds} beds | {property.details.baths} baths |{" "}
              {property.details.size} m²
            </Text>
            <Text style={localStyles.cardLocation}>
              {property.location.city}, {property.location.region}
            </Text>
          </View>
        ))
      ) : (
        <Text>No properties available.</Text>
      )}
    </ScrollView>
  );
}

// const localStyles = StyleSheet.create({
//   card: {
//     backgroundColor: "#2d3748",
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 5, height: 5 },
//     shadowOpacity: 0.25,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   cardImage: {
//     width: '100%',
//     height: 150,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   cardPrice: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 4,
//   },
//   cardDetails: {
//     fontSize: 14,
//     color: "#ccc",
//     marginBottom: 4,
//   },
//   cardLocation: {
//     fontSize: 14,
//     color: "#aaa",
//   },
// });

const localStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "grey", // Set the background color of the entire page
    padding: 10,
  },
  card: {
    backgroundColor: "#2d3748", // Light background for better contrast
    padding: 20,
    borderRadius: 15, // Rounded corners
    marginBottom: 20,
    width: "90%", // Makes the card not take full width
    alignSelf: "center", // Center align for better appearance
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8, // For Android shadow
    overflow: "hidden", // Ensures smooth corners
    borderWidth: 1,
    //   borderColor: "#f1f1f1", // Light border for the card
    transition: "all 0.3s ease", // Smooth transition for any interaction
  },
  cardImage: {
    width: "100%",
    height: 180, // Increased height for better visuals
    borderRadius: 12,
    marginBottom: 12,
    resizeMode: "cover", // Makes sure the image fits the container
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff", // Darker color for better readability
    marginBottom: 6,
  },
  cardDetails: {
    fontSize: 16,
    color: "#fff", // Lighter text for the details
    marginBottom: 6,
  },
  cardLocation: {
    fontSize: 14,
    color: "#fff", // A little darker for location details
    fontStyle: "italic", // Italic style for the location
  },
});
