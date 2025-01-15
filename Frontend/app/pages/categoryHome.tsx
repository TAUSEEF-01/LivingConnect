// import { useEffect, useState } from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

// import SidePanel from '../sidePanel/sidePanel';
// import { useRouter } from 'expo-router';

// export default function CategoryHome() {
//   const [properties, setProperties] = useState([]);

//   const [isSidePanelVisible, setSidePanelVisible] = useState(false);
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   const toggleSidePanel = () => {
//     setSidePanelVisible(!isSidePanelVisible);
//   };

//   useEffect(() => {
//     async function fetchProperties() {
//       try {
//         const response = await fetch('https://livingconnect-backend.vercel.app/properties');
//         const data = await response.json();

//         // console.log('Fetched properties:', data);

//         if (Array.isArray(data.properties)) {
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
//     <SafeAreaView style={{ flex: 1 }}>
//       <SidePanel
//         isVisible={isSidePanelVisible}
//         onClose={() => setSidePanelVisible(false)}
//       />

//     <ScrollView style={localStyles.pageContainer}>
//     {isSidePanelVisible && (
//           <TouchableOpacity
//             style={[
//                 localStyles.overlay,
//               { zIndex: 999 }, // Ensure it's below the menu button but above other content
//             ]}
//             activeOpacity={1}
//             onPress={() => setSidePanelVisible(false)}
//           >
//             <SidePanel
//               isVisible={isSidePanelVisible}
//               onClose={() => setSidePanelVisible(false)}
//             />
//           </TouchableOpacity>
//         )}

//         <View style={localStyles.banner}>
//           <TouchableOpacity
//             onPress={toggleSidePanel}
//             style={{
//               position: "absolute",
//               top: 16,
//               left: 16,
//               zIndex: 100,
//             }}
//           >
//             <View style={localStyles.menuIcon}>
//               <View style={localStyles.bar} />
//               <View style={localStyles.bar} />
//               <View style={localStyles.bar} />
//             </View>
//           </TouchableOpacity>

//           <View style={localStyles.bannerImageContainer}>
//             <Image
//               source={{
//                 uri: "https://images.pexels.com/photos/6045328/pexels-photo-6045328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//               }} // Replace with actual image URL
//               style={localStyles.bannerImage}
//             />
//           </View>

//       {/* <Text>Property List</Text> */}
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
//           </View>

//     </ScrollView>

//     </SafeAreaView>
//   );
// }

// const localStyles = StyleSheet.create({
//     pageContainer: {
//         flex: 1,
//         backgroundColor: 'grey', // Set the background color of the entire page
//         padding: 10,
//       },
//     card: {
//       backgroundColor: "#2d3748", // Light background for better contrast
//       padding: 20,
//       borderRadius: 15, // Rounded corners
//       marginBottom: 20,
//       width: '90%', // Makes the card not take full width
//       alignSelf: 'center', // Center align for better appearance
//       shadowColor: "#000",
//       shadowOffset: { width: 0, height: 4 },
//       shadowOpacity: 0.2,
//       shadowRadius: 10,
//       elevation: 8, // For Android shadow
//       overflow: 'hidden', // Ensures smooth corners
//       borderWidth: 1,
//     //   borderColor: "#f1f1f1", // Light border for the card
//       transition: "all 0.3s ease", // Smooth transition for any interaction
//     },
//     cardImage: {
//       width: '100%',
//       height: 180, // Increased height for better visuals
//       borderRadius: 12,
//       marginBottom: 12,
//       resizeMode: 'cover', // Makes sure the image fits the container
//     },
//     cardPrice: {
//       fontSize: 20,
//       fontWeight: "bold",
//       color: "#fff", // Darker color for better readability
//       marginBottom: 6,
//     },
//     cardDetails: {
//       fontSize: 16,
//       color: "#fff", // Lighter text for the details
//       marginBottom: 6,
//     },
//     cardLocation: {
//       fontSize: 14,
//       color: "#fff", // A little darker for location details
//       fontStyle: 'italic', // Italic style for the location
//     },

//     menuIcon: {
//         width: 35,
//         height: 26, // Adjust to ensure the bars fit within this height
//         justifyContent: "space-between", // Evenly space the bars
//         alignItems: "center", // Center align the bars horizontally
//         // backgroundColor: "transparent", // Optional: Transparent background
//         backgroundColor: "black", // Replace with your desired color
//         padding: 3,
//         borderColor: "black",
//         borderWidth: 2,
//         borderRadius: 6,
//       },

//       bar: {
//         width: "100%", // Make the bars span the full width of the menuIcon
//         height: 3, // Thickness of the bars
//         // backgroundColor: "black", // Replace with your desired color
//         borderRadius: 2, // Rounded corners for the bars
//         backgroundColor: "white", // Replace with your desired color
//       },

//       banner: {
//         backgroundColor: "#1e3a8a",
//         position: "relative", // Ensure text and image stack properly
//       },

//       bannerImageContainer: {
//         width: "100%",
//         height: 200, // Adjust the height as needed
//         position: "relative",
//       },
//       bannerImage: {
//         width: "100%",
//         height: "100%",
//         borderRadius: 8, // Optional for rounded corners
//       },

//       overlay: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: "rgba(0, 0, 0, 0.21)", // Dark overlay
//         zIndex: 1, // Below the side panel
//       },
//   });

// import React, { useState } from 'react';
// import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const MainPage = () => {
//   const [filters, setFilters] = useState({
//     type: 'All',
//     bedroomsMin: '',
//     bedroomsMax: '',
//     bathroomsMin: '',
//     bathroomsMax: '',
//     priceMin: '',
//     priceMax: '',
//   });

//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     // Replace with your API endpoint or database query logic
//     const response = await fetch('https://your-api-endpoint.com/search', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(filters),
//     });

//     const data = await response.json();
//     setResults(data);
//   };

//   const handleResetFilters = () => {
//     setFilters({
//       type: 'All',
//       bedroomsMin: '',
//       bedroomsMax: '',
//       bathroomsMin: '',
//       bathroomsMax: '',
//       priceMin: '',
//       priceMax: '',
//     });
//   };

//   return (
//     <View style={styles.container}>
//       {/* Filters Section */}
//       <View style={styles.filtersSection}>
//         <TouchableOpacity style={styles.resetButton} onPress={handleResetFilters}>
//           <Text style={styles.resetButtonText}>Reset filters</Text>
//         </TouchableOpacity>

//         {/* Type Filter */}
//         <View style={styles.filterRow}>
//           <Text style={styles.filterLabel}>Type</Text>
//           <Picker
//             selectedValue={filters.type}
//             style={styles.picker}
//             onValueChange={(itemValue) => setFilters({ ...filters, type: itemValue })}
//           >
//             <Picker.Item label="All" value="All" />
//             <Picker.Item label="House" value="House" />
//             <Picker.Item label="Apartment" value="Apartment" />
//           </Picker>
//         </View>

//         {/* Bedrooms Filter */}
//         <View style={styles.filterRow}>
//           <Text style={styles.filterLabel}>Bedrooms</Text>
//           <TextInput
//             style={styles.filterInput}
//             placeholder="Min"
//             keyboardType="numeric"
//             value={filters.bedroomsMin}
//             onChangeText={(text) => setFilters({ ...filters, bedroomsMin: text })}
//           />
//           <TextInput
//             style={styles.filterInput}
//             placeholder="Max"
//             keyboardType="numeric"
//             value={filters.bedroomsMax}
//             onChangeText={(text) => setFilters({ ...filters, bedroomsMax: text })}
//           />
//         </View>

//         {/* Bathrooms Filter */}
//         <View style={styles.filterRow}>
//           <Text style={styles.filterLabel}>Bathrooms</Text>
//           <TextInput
//             style={styles.filterInput}
//             placeholder="Min"
//             keyboardType="numeric"
//             value={filters.bathroomsMin}
//             onChangeText={(text) => setFilters({ ...filters, bathroomsMin: text })}
//           />
//           <TextInput
//             style={styles.filterInput}
//             placeholder="Max"
//             keyboardType="numeric"
//             value={filters.bathroomsMax}
//             onChangeText={(text) => setFilters({ ...filters, bathroomsMax: text })}
//           />
//         </View>

//         {/* Price Filter */}
//         <View style={styles.filterRow}>
//           <Text style={styles.filterLabel}>Price</Text>
//           <TextInput
//             style={styles.filterInput}
//             placeholder="Min"
//             keyboardType="numeric"
//             value={filters.priceMin}
//             onChangeText={(text) => setFilters({ ...filters, priceMin: text })}
//           />
//           <TextInput
//             style={styles.filterInput}
//             placeholder="Max"
//             keyboardType="numeric"
//             value={filters.priceMax}
//             onChangeText={(text) => setFilters({ ...filters, priceMax: text })}
//           />
//         </View>

//         {/* Search Button */}
//         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//           <Text style={styles.searchButtonText}>Search</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Results Section */}
//       <ScrollView style={styles.resultsSection}>
//         {results.map((result, index) => (
//           <View key={index} style={styles.card}>
//             <Image
//               source={{ uri: result.image }}
//               style={styles.cardImage}
//             />
//             <View style={styles.cardContent}>
//               <Text style={styles.cardTitle}>{result.price}</Text>
//               <Text style={styles.cardSubText}>{result.details}</Text>
//               <Text style={styles.cardSubText}>{result.location}</Text>
//               <Text style={styles.cardFooter}>{result.presenter}</Text>
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   filtersSection: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#1f2937',
//   },
//   resetButton: {
//     alignSelf: 'flex-end',
//     marginBottom: 16,
//   },
//   resetButtonText: {
//     color: '#3b82f6',
//     fontSize: 14,
//   },
//   filterRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   filterLabel: {
//     color: 'white',
//     fontSize: 14,
//     flex: 1,
//   },
//   picker: {
//     flex: 1,
//     color: 'white',
//   },
//   filterInput: {
//     backgroundColor: '#1f2937',
//     color: 'white',
//     padding: 8,
//     borderRadius: 4,
//     marginHorizontal: 4,
//     flex: 1,
//   },
//   searchButton: {
//     backgroundColor: '#3b82f6',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   searchButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   resultsSection: {
//     padding: 16,
//   },
//   card: {
//     backgroundColor: '#1f2937',
//     borderRadius: 8,
//     marginBottom: 16,
//     overflow: 'hidden',
//   },
//   cardImage: {
//     height: 160,
//     width: '100%',
//   },
//   cardContent: {
//     padding: 16,
//   },
//   cardTitle: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   cardSubText: {
//     color: '#9ca3af',
//     fontSize: 14,
//     marginTop: 4,
//   },
//   cardFooter: {
//     color: '#6b7280',
//     fontSize: 12,
//     marginTop: 8,
//   },
// });

// export default MainPage;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const MainPage = () => {
  const [filters, setFilters] = useState({
    type: "All",
    bedroomsMin: "",
    bedroomsMax: "",
    bathroomsMin: "",
    bathroomsMax: "",
    priceMin: "",
    priceMax: "",
  });

  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    console.log("Filters:", filters);

    // Replace with your API endpoint or database query logic
    const response = await fetch("https://livingconnect-backend.vercel.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
    });

    const data = await response.json();
    setResults(data);
  };

  const handleResetFilters = () => {
    setFilters({
      type: "All",
      bedroomsMin: "",
      bedroomsMax: "",
      bathroomsMin: "",
      bathroomsMax: "",
      priceMin: "",
      priceMax: "",
    });
  };

  return (
    <View style={styles.container}>
      {/* Filters Section */}
      <View style={styles.filtersSection}>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleResetFilters}
        >
          <Text style={styles.resetButtonText}>Reset filters</Text>
        </TouchableOpacity>

        {/* Type Filter */}
        <View style={styles.filterRow}>
          <Text style={styles.filterLabel}>Type</Text>
          <Picker
            selectedValue={filters.type}
            style={styles.picker}
            onValueChange={(itemValue) =>
              setFilters({ ...filters, type: itemValue })
            }
          >
            <Picker.Item label="All" value="All" />
            <Picker.Item label="House" value="House" />
            <Picker.Item label="Apartment" value="Apartment" />
          </Picker>
        </View>

        {/* Bedrooms Filter */}
        <View style={styles.filterRow}>
          <Text style={styles.filterLabel}>Bedrooms</Text>
          <TextInput
            style={styles.filterInput}
            placeholder="Min"
            keyboardType="numeric"
            value={filters.bedroomsMin}
            onChangeText={(text) =>
              setFilters({ ...filters, bedroomsMin: text })
            }
          />
          <TextInput
            style={styles.filterInput}
            placeholder="Max"
            keyboardType="numeric"
            value={filters.bedroomsMax}
            onChangeText={(text) =>
              setFilters({ ...filters, bedroomsMax: text })
            }
          />
        </View>

        {/* Bathrooms Filter */}
        <View style={styles.filterRow}>
          <Text style={styles.filterLabel}>Bathrooms</Text>
          <TextInput
            style={styles.filterInput}
            placeholder="Min"
            keyboardType="numeric"
            value={filters.bathroomsMin}
            onChangeText={(text) =>
              setFilters({ ...filters, bathroomsMin: text })
            }
          />
          <TextInput
            style={styles.filterInput}
            placeholder="Max"
            keyboardType="numeric"
            value={filters.bathroomsMax}
            onChangeText={(text) =>
              setFilters({ ...filters, bathroomsMax: text })
            }
          />
        </View>

        {/* Price Filter */}
        <View style={styles.filterRow}>
          <Text style={styles.filterLabel}>Price</Text>
          <TextInput
            style={styles.filterInput}
            placeholder="Min"
            keyboardType="numeric"
            value={filters.priceMin}
            onChangeText={(text) => setFilters({ ...filters, priceMin: text })}
          />
          <TextInput
            style={styles.filterInput}
            placeholder="Max"
            keyboardType="numeric"
            value={filters.priceMax}
            onChangeText={(text) => setFilters({ ...filters, priceMax: text })}
          />
        </View>

        {/* Search Button */}
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Results Section */}
      <ScrollView style={styles.resultsSection}>
        {results.map((result, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: result.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{result.price}</Text>
              <Text style={styles.cardSubText}>{result.details}</Text>
              <Text style={styles.cardSubText}>{result.location}</Text>
              <Text style={styles.cardFooter}>{result.presenter}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  filtersSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
  },
  resetButton: {
    alignSelf: "flex-end",
    marginBottom: 16,
  },
  resetButtonText: {
    color: "#3b82f6",
    fontSize: 14,
  },
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  filterLabel: {
    color: "white",
    fontSize: 14,
    flex: 1,
  },
  picker: {
    flex: 1,
    color: "white",
  },
  filterInput: {
    backgroundColor: "#1f2937",
    color: "white",
    padding: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    flex: 1,
  },
  searchButton: {
    backgroundColor: "#3b82f6",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  searchButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultsSection: {
    padding: 16,
  },
  card: {
    backgroundColor: "#1f2937",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },
  cardImage: {
    height: 160,
    width: "100%",
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSubText: {
    color: "#9ca3af",
    fontSize: 14,
    marginTop: 4,
  },
  cardFooter: {
    color: "#6b7280",
    fontSize: 12,
    marginTop: 8,
  },
});

export default MainPage;
