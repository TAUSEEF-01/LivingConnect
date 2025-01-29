// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import axios from "axios";
// import { useRouter } from "expo-router";

// export default function FilterCommunityCenters() {
//   const router = useRouter();

//   const [centers, setCenters] = useState([]);
//   const [filters, setFilters] = useState({
//     city: "",
//     area: "",
//     centerType: "",
//     capacityMin: "",
//     capacityMax: "",
//     hallsMin: "",
//     hallsMax: "",
//     sizeMin: "",
//     sizeMax: "",
//     parkingMin: "",
//     priceMin: "",
//     priceMax: "",
//     kitchenArea: "",
//     diningArea: "",
//     stageArea: "",
//     airConditioned: "",
//     generator: "",
//     wifi: "",
//     sound: "",
//     lighting: "",
//     decoration: "",
//     catering: "",
//     staging: "",
//     security: "",
//   });

//   const resetFilters = () => {
//     setFilters({
//       city: "",
//       area: "",
//       centerType: "",
//       capacityMin: "",
//       capacityMax: "",
//       hallsMin: "",
//       hallsMax: "",
//       sizeMin: "",
//       sizeMax: "",
//       parkingMin: "",
//       priceMin: "",
//       priceMax: "",
//       kitchenArea: "",
//       diningArea: "",
//       stageArea: "",
//       airConditioned: "",
//       generator: "",
//       wifi: "",
//       sound: "",
//       lighting: "",
//       decoration: "",
//       catering: "",
//       staging: "",
//       security: "",
//     });
//     fetchCenters();
//   };

//   const fetchCenters = async () => {
//     try {
//       const response = await axios.get(
//         "https://livingconnect-backend.vercel.app/communityDetails/searchCenters",
//         {
//           params: filters,
//         }
//       );
//       setCenters(response.data);
//     } catch (error) {
//       console.error("Failed to fetch centers:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCenters();
//   }, []);

//   return (
//     <View>
//       <Text>Filter Community Centers</Text>

//       <TextInput
//         placeholder="City"
//         value={filters.city}
//         onChangeText={(text) => setFilters({ ...filters, city: text })}
//       />
//       <TextInput
//         placeholder="Area"
//         value={filters.area}
//         onChangeText={(text) => setFilters({ ...filters, area: text })}
//       />
//       <TextInput
//         placeholder="Center Type (wedding, birthday, etc.)"
//         value={filters.centerType}
//         onChangeText={(text) => setFilters({ ...filters, centerType: text })}
//       />

//       <TextInput
//         placeholder="Min Capacity"
//         keyboardType="numeric"
//         value={filters.capacityMin}
//         onChangeText={(text) => setFilters({ ...filters, capacityMin: text })}
//       />
//       <TextInput
//         placeholder="Max Capacity"
//         keyboardType="numeric"
//         value={filters.capacityMax}
//         onChangeText={(text) => setFilters({ ...filters, capacityMax: text })}
//       />
//       <TextInput
//         placeholder="Min Halls"
//         keyboardType="numeric"
//         value={filters.hallsMin}
//         onChangeText={(text) => setFilters({ ...filters, hallsMin: text })}
//       />
//       <TextInput
//         placeholder="Max Halls"
//         keyboardType="numeric"
//         value={filters.hallsMax}
//         onChangeText={(text) => setFilters({ ...filters, hallsMax: text })}
//       />
//       <TextInput
//         placeholder="Min Size (sq.m)"
//         keyboardType="numeric"
//         value={filters.sizeMin}
//         onChangeText={(text) => setFilters({ ...filters, sizeMin: text })}
//       />
//       <TextInput
//         placeholder="Max Size (sq.m)"
//         keyboardType="numeric"
//         value={filters.sizeMax}
//         onChangeText={(text) => setFilters({ ...filters, sizeMax: text })}
//       />
//       <TextInput
//         placeholder="Min Parking"
//         keyboardType="numeric"
//         value={filters.parkingMin}
//         onChangeText={(text) => setFilters({ ...filters, parkingMin: text })}
//       />
//       <TextInput
//         placeholder="Min Price"
//         keyboardType="numeric"
//         value={filters.priceMin}
//         onChangeText={(text) => setFilters({ ...filters, priceMin: text })}
//       />
//       <TextInput
//         placeholder="Max Price"
//         keyboardType="numeric"
//         value={filters.priceMax}
//         onChangeText={(text) => setFilters({ ...filters, priceMax: text })}
//       />

//       <TouchableOpacity onPress={fetchCenters}>
//         <Text>Search</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={resetFilters}>
//         <Text>Reset</Text>
//       </TouchableOpacity>

//       <FlatList
//         data={centers}
//         keyExtractor={(item) => item._id}
//         numColumns={2}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             key={item._id}
//             onPress={() =>
//               router.push({
//                 pathname:
//                   "/pages/CommunityCenter_InfoPage/CommunityCenterDetailsShowPage",
//                 params: { communityId: item._id },
//               })
//             }
//           >
//             {item.images.length > 0 && (
//               <Image
//                 source={{ uri: item.images[0] }}
//                 style={{ width: 150, height: 150 }}
//               />
//             )}
//             <Text>{item.name}</Text>
//             <Text>
//               {item.location.city}, {item.location.area}
//             </Text>
//             <Text>Capacity: {item.details.capacity}</Text>
//             <Text>Halls: {item.details.halls}</Text>
//             <Text>Price: ${item.price.basePrice}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     paddingTop: 45,
//     backgroundColor: "black", //"#f9f9f9",
//   },
//   filters: {
//     marginBottom: 20,
//   },
//   pageTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 7,
//     textAlign: "center",
//     color: "#66e0ff",
//   },

//   detailsContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap", // Wrap to the next line
//     justifyContent: "space-between", // Space between
//   },

//   // input: {
//   //   borderWidth: 1,
//   //   borderColor: "#ccc",
//   //   padding: 10,
//   //   marginVertical: 5,
//   //   borderRadius: 5,
//   // },

//   inputWrapper: {
//     width: "49.8%", // Ensures 2 columns per row
//   },
//   input: {
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 16,
//     backgroundColor: "#2d3748",
//     color: "white",
//     fontSize: 16,
//     marginTop: 3,
//   },

//   inputRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     // marginTop: 10,
//     width: "100%",
//   },

//   inputText: {
//     fontSize: 15,
//     fontWeight: "bold",
//     // marginTop: 15,
//     marginBottom: 10,
//     color: "white",
//   },

//   // button: {
//   //   marginTop: 10,
//   //   backgroundColor: "#007BFF",
//   //   padding: 10,
//   //   borderRadius: 5,
//   //   alignItems: "center",
//   // },
//   // buttonText: {
//   //   color: "#fff",
//   //   fontWeight: "bold",
//   // },
//   // card: {
//   //   backgroundColor: "#fff",
//   //   padding: 10,
//   //   marginVertical: 5,
//   //   borderRadius: 5,
//   //   shadowColor: "#000",
//   //   shadowOffset: { width: 0, height: 2 },
//   //   shadowOpacity: 0.1,
//   //   shadowRadius: 4,
//   //   elevation: 2,
//   // },
//   image: {
//     width: "100%",
//     height: 200,
//     borderRadius: 5,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginVertical: 5,
//   },
//   // dropdown: {
//   //   padding: 10,
//   //   borderWidth: 1,
//   //   paddingVertical: 12,
//   //   paddingHorizontal: 16,
//   //   borderRadius: 5,
//   //   backgroundColor: "#f0f0f0",
//   //   marginVertical: 5,
//   // },
//   // dropdownContent: {
//   //   flexDirection: "row",
//   //   justifyContent: "space-between",
//   //   alignItems: "center",
//   // },
//   // dropdownText: {
//   //   fontSize: 16,
//   //   color: "#333",
//   // },
//   // dropdownIcon: {
//   //   fontSize: 18,
//   //   color: "#666",
//   // },
//   // dropdownMenu: {
//   //   backgroundColor: "#f0f0f0",
//   //   borderRadius: 5,
//   //   marginTop: 8,
//   //   overflow: "hidden",
//   // },
//   // dropdownItem: {
//   //   paddingVertical: 12,
//   //   paddingHorizontal: 16,
//   // },
//   // selectedItem: {
//   //   backgroundColor: "#e0e0e0",
//   // },
//   // dropdownItemText: {
//   //   fontSize: 16,
//   //   color: "#333",
//   // },
//   // selectedItemText: {
//   //   fontWeight: "bold",
//   // },

//   dropdown: {
//     borderWidth: 1,
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     backgroundColor: "#2d3748",
//     marginTop: 3,
//   },

//   dropdownContent: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   dropdownText: {
//     fontSize: 16,
//     color: "white",
//   },
//   dropdownIcon: {
//     fontSize: 16,
//     color: "#38bdf8", //"#666",
//   },
//   dropdownMenu: {
//     backgroundColor: "#f0f0f0", // 1f2937
//     borderRadius: 8,
//     marginTop: 8,
//     overflow: "hidden",
//   },
//   dropdownItem: {
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
//   selectedItem: {
//     backgroundColor: "#38bdf8", // "#e0e0e0",
//   },
//   dropdownItemText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   selectedItemText: {
//     fontWeight: "bold",
//   },

//   // resetButton: {
//   //   backgroundColor: "red",
//   //   padding: 10,
//   //   marginTop: 10,
//   //   alignItems: "center",
//   //   borderRadius: 5,
//   // },
//   // resetButtonText: {
//   //   color: "white",
//   //   fontWeight: "bold",
//   // },

//   buttonRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 5,
//   },
//   searchButton: {
//     backgroundColor: "#38bdf8",
//     padding: 10,
//     flex: 1,
//     alignItems: "center",
//     marginRight: 5,
//     borderRadius: 8,
//   },
//   resetButton: {
//     backgroundColor: "red",
//     padding: 10,
//     flex: 1,
//     alignItems: "center",
//     // marginLeft: 5,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//   },

//   // card: {
//   //   // Add your card styles here
//   //   marginBottom: 10,
//   //   padding: 10,
//   //   backgroundColor: '#fff',
//   //   borderRadius: 8,
//   //   shadowColor: '#000',
//   //   shadowOpacity: 0.1,
//   //   shadowRadius: 10,
//   //   shadowOffset: { width: 0, height: 5 },
//   // },
//   card: {
//     backgroundColor: "#2d3748", // Light background for better contrast
//     padding: 12,
//     borderRadius: 15, // Rounded corners
//     marginBottom: 15,
//     width: "100%", // Makes the card not take full width
//     alignSelf: "center", // Center align for better appearance
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 8, // For Android shadow
//     overflow: "hidden", // Ensures smooth corners
//     borderWidth: 1,
//     //   borderColor: "#f1f1f1", // Light border for the card
//   },

//   cardImage: {
//     width: "100%",
//     height: 180, // Increased height for better visuals
//     borderRadius: 12,
//     marginBottom: 12,
//     resizeMode: "cover", // Makes sure the image fits the container
//   },
//   cardPrice: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#fff", // Darker color for better readability
//     marginBottom: 6,
//   },
//   cardDetails: {
//     fontSize: 16,
//     color: "white", // Lighter text for the details
//     marginBottom: 6,
//   },
//   cardLocation: {
//     fontSize: 14,
//     color: "#fff", // A little darker for location details
//     fontStyle: "italic", // Italic style for the location
//     fontWeight: "bold",
//   },
//   // cardImage: {
//   //   width: '100%',
//   //   height: 200,
//   //   borderRadius: 8,
//   // },
//   // cardPrice: {
//   //   fontSize: 18,
//   //   fontWeight: 'bold',
//   //   marginTop: 10,
//   // },
//   // cardDetails: {
//   //   fontSize: 14,
//   //   color: '#666',
//   //   marginTop: 5,
//   // },
//   // cardLocation: {
//   //   fontSize: 14,
//   //   color: '#666',
//   //   marginTop: 5,
//   // },
// });

// // const localStyles = StyleSheet.create({
// //   rowWrapper: {
// //     justifyContent: 'space-between', // Adjust spacing between items in a row
// //     marginBottom: 10, // Optional: Add spacing between rows
// //   },
// //   // card: {
// //     // flex: 1, // Take up equal space
// //     // margin: 5, // Add margin between cards
// //     // backgroundColor: '#fff', // Card background color
// //     // borderRadius: 10, // Rounded corners
// //     // overflow: 'hidden',
// //     // elevation: 3, // Shadow for Android
// //     // shadowColor: '#000', // Shadow for iOS
// //     // shadowOffset: { width: 0, height: 2 },
// //     // shadowOpacity: 0.25,
// //     // shadowRadius: 3.84,
// //   // },
// //   // cardImage: {
// //   //   width: '100%',
// //   //   height: 150,
// //   // },
// //   // cardPrice: {
// //   //   fontSize: 16,
// //   //   fontWeight: 'bold',
// //   //   padding: 5,
// //   // },
// //   // cardDetails: {
// //   //   fontSize: 14,
// //   //   color: '#555',
// //   //   padding: 5,
// //   // },
// //   // cardLocation: {
// //   //   fontSize: 14,
// //   //   color: '#777',
// //   //   padding: 5,
// //   // },

// // cardContainer: {
// //   flexDirection: "row",
// //   // marginBottom: 16,
// // },
// // card: {
// //   // backgroundColor: "#2d3748",
// //   // padding: 16,
// //   // borderRadius: 8,
// //   // marginRight: 16,
// //   // width: 200,

// //   flex: 1, // Take up equal space
// //   margin: 5, // Add margin between cards
// //   backgroundColor: '#2d3748', // Card background color
// //   borderRadius: 10, // Rounded corners
// //   overflow: 'hidden',
// //   elevation: 3, // Shadow for Android
// //   shadowColor: '#000', // Shadow for iOS
// //   shadowOffset: { width: 0, height: 2 },
// //   shadowOpacity: 0.25,
// //   shadowRadius: 3.84,
// // },
// // cardImage: {
// //   height: 100,
// //   width: "100%",
// //   borderRadius: 8,
// //   marginBottom: 8,
// // },
// // cardPrice: {
// //   paddingLeft: 8,
// //   paddingTop: 5,
// //   color: "white",
// //   fontWeight: "bold",
// //   marginBottom: 4,
// // },
// // cardDetails: {
// //   paddingLeft: 8,
// //   color: "white",
// //   marginBottom: 4,
// // },
// // cardLocation: {
// //   paddingLeft: 8,
// //   paddingBottom: 8,
// //   color: "gray",
// // },

// // });

// const localStyles = StyleSheet.create({
//   rowWrapper: {
//     justifyContent: "space-between", // Adjust spacing between items in a row
//     marginBottom: 10, // Optional: Add spacing between rows
//   },
//   // card: {
//   //   flex: 1, // Take up equal space
//   //   margin: 5, // Add margin between cards
//   //   backgroundColor: '#2d3748', // Card background color
//   //   borderRadius: 10, // Rounded corners
//   //   overflow: 'hidden',
//   //   elevation: 3, // Shadow for Android
//   //   shadowColor: '#000', // Shadow for iOS
//   //   shadowOffset: { width: 0, height: 2 },
//   //   shadowOpacity: 0.25,
//   //   shadowRadius: 3.84,
//   // },
//   lastOddCard: {
//     backgroundColor: "#2d3748",
//     padding: 12,
//     borderRadius: 15,
//     marginBottom: 15,
//     width: "100%",
//     alignSelf: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 8,
//     overflow: "hidden",
//     borderWidth: 1,
//     transition: "all 0.3s ease",
//   },
//   // cardImage: {
//   //   width: '100%',
//   //   height: 150,
//   // },
//   lastOddCardImage: {
//     height: 180,
//     borderRadius: 12,
//     marginBottom: 12,
//     resizeMode: "cover",
//   },
//   // cardPrice: {
//   //   paddingLeft: 8,
//   //   paddingTop: 5,
//   //   fontSize: 16,
//   //   fontWeight: 'bold',
//   //   padding: 5,
//   // },
//   lastOddCardPrice: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 6,
//   },
//   // cardDetails: {
//   //   paddingLeft: 8,
//   //   fontSize: 14,
//   //   color: '#555',
//   //   padding: 5,
//   // },
//   lastOddCardDetails: {
//     fontSize: 16,
//     color: "white",
//     marginBottom: 6,
//   },
//   // cardLocation: {
//   //   paddingLeft: 8,
//   //   fontSize: 14,
//   //   color: '#777',
//   //   padding: 5,
//   // },
//   lastOddCardLocation: {
//     fontSize: 14,
//     color: "#fff",
//     fontStyle: "italic",
//     fontWeight: "bold",
//   },

//   cardContainer: {
//     flexDirection: "row",
//     // marginBottom: 16,
//   },
//   card: {
//     // backgroundColor: "#2d3748",
//     padding: 8,
//     // borderRadius: 8,
//     // marginRight: 16,
//     // width: 200,

//     flex: 1, // Take up equal space
//     margin: 5, // Add margin between cards
//     backgroundColor: "#2d3748", // Card background color
//     borderRadius: 10, // Rounded corners
//     overflow: "hidden",
//     elevation: 3, // Shadow for Android
//     shadowColor: "#000", // Shadow for iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   cardImage: {
//     height: 100,
//     width: "100%",
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   cardPrice: {
//     // paddingLeft: 8,
//     // paddingTop: 5,
//     color: "white",
//     fontWeight: "bold",
//     marginBottom: 4,
//   },
//   cardDetails: {
//     // paddingLeft: 8,
//     color: "white",
//     marginBottom: 4,
//   },
//   cardLocation: {
//     // paddingLeft: 8,
//     paddingBottom: 8,
//     color: "gray",
//   },
// });

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

export default function FilterCommunityCenters() {
  const router = useRouter();
  const [centers, setCenters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("All Types");

  const centerTypes = [
    "Wedding Hall",
    "Birthday Center",
    "Conference Hall",
    "Multi-purpose",
  ];

  const [filters, setFilters] = useState({
    city: "",
    area: "",
    centerType: "",
    capacityMin: "",
    capacityMax: "",
    hallsMin: "",
    hallsMax: "",
    sizeMin: "",
    sizeMax: "",
    parkingMin: "",
    priceMin: "",
    priceMax: "",
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    if (type === "All Types") type = "";
    setFilters({ ...filters, centerType: type });
    setIsOpen(false);
  };

  const resetFilters = () => {
    setFilters({
      city: "",
      area: "",
      centerType: "",
      capacityMin: "",
      capacityMax: "",
      hallsMin: "",
      hallsMax: "",
      sizeMin: "",
      sizeMax: "",
      parkingMin: "",
      priceMin: "",
      priceMax: "",
    });
    setSelectedType("All Types");
    fetchCenters();
  };

  const fetchCenters = async () => {
    try {
      const response = await axios.get(
        "https://livingconnect-backend.vercel.app/communityDetails/searchCenters",
        {
          params: filters,
        }
      );
      setCenters(response.data);
    } catch (error) {
      console.error("Failed to fetch centers:", error);
    }
  };

  useEffect(() => {
    fetchCenters();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Filter Community Centers</Text>

      <View style={styles.filters}>
        <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
          <View style={styles.dropdownContent}>
            <Text style={styles.dropdownText}>{selectedType}</Text>
            <Text style={styles.dropdownIcon}>{isOpen ? "▲" : "▼"}</Text>
          </View>
        </TouchableOpacity>

        {isOpen && (
          <View style={styles.dropdownMenu}>
            {centerTypes.map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.dropdownItem,
                  selectedType === type && styles.selectedItem,
                ]}
                onPress={() => handleTypeSelect(type)}
              >
                <Text
                  style={[
                    styles.dropdownItemText,
                    selectedType === type && styles.selectedItemText,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <TextInput
          placeholder="City"
          placeholderTextColor="#666"
          style={styles.input}
          value={filters.city}
          onChangeText={(text) => setFilters({ ...filters, city: text })}
        />

        <TextInput
          placeholder="Area"
          placeholderTextColor="#666"
          style={styles.input}
          value={filters.area}
          onChangeText={(text) => setFilters({ ...filters, area: text })}
        />

        <View style={styles.inputRow}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Min Price"
              placeholderTextColor="#666"
              style={styles.input}
              keyboardType="numeric"
              value={filters.priceMin}
              onChangeText={(text) =>
                setFilters({ ...filters, priceMin: text })
              }
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Max Price"
              placeholderTextColor="#666"
              style={styles.input}
              keyboardType="numeric"
              value={filters.priceMax}
              onChangeText={(text) =>
                setFilters({ ...filters, priceMax: text })
              }
            />
          </View>
        </View>

        <View style={styles.detailsContainer}>
          {["hallsMin", "hallsMax"].map((field) => (
            <View key={field} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder={field === "hallsMin" ? "Min Halls" : "Max Halls"}
                placeholderTextColor="#666"
                keyboardType="numeric"
                value={filters[field]}
                onChangeText={(text) =>
                  setFilters({ ...filters, [field]: text })
                }
              />
            </View>
          ))}
        </View>

        <View style={styles.inputRow}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Min Size (sq.m)"
              placeholderTextColor="#666"
              style={styles.input}
              keyboardType="numeric"
              value={filters.sizeMin}
              onChangeText={(text) => setFilters({ ...filters, sizeMin: text })}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Max Size (sq.m)"
              placeholderTextColor="#666"
              style={styles.input}
              keyboardType="numeric"
              value={filters.sizeMax}
              onChangeText={(text) => setFilters({ ...filters, sizeMax: text })}
            />
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.searchButton} onPress={fetchCenters}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={centers}
        keyExtractor={(item) => item._id}
        numColumns={2}
        columnWrapperStyle={localStyles.rowWrapper}
        renderItem={({ item, index }) => {
          const isLastOddItem =
            centers.length % 2 !== 0 && index === centers.length - 1;

          return (
            <TouchableOpacity
              key={item._id}
              style={[
                localStyles.card,
                isLastOddItem && localStyles.lastOddCard,
              ]}
              onPress={() =>
                router.push({
                  pathname:
                    "/pages/CommunityCenter_InfoPage/CommunityCenterDetailsShowPage",
                  params: { communityId: item._id },
                })
              }
            >
              {item.images.length > 0 && (
                <Image
                  source={{ uri: item.images[0] }}
                  style={[
                    localStyles.cardImage,
                    isLastOddItem && localStyles.lastOddCardImage,
                  ]}
                />
              )}

              <Text
                style={[
                  localStyles.cardPrice,
                  isLastOddItem && localStyles.lastOddCardPrice,
                ]}
              >
                Tk {item.price.basePrice}
              </Text>

              <Text
                style={[
                  localStyles.cardDetails,
                  isLastOddItem && localStyles.lastOddCardDetails,
                ]}
              >
                {item.details.halls} halls | {item.details.capacity} capacity |{" "}
                {item.details.size} m²
              </Text>

              <Text
                style={[
                  localStyles.cardLocation,
                  isLastOddItem && localStyles.lastOddCardLocation,
                ]}
              >
                {item.location.city}, {item.location.area}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 45,
    backgroundColor: "black",
  },
  filters: {
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 7,
    textAlign: "center",
    color: "#66e0ff",
  },
  detailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  inputWrapper: {
    width: "49.8%",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: "#2d3748",
    color: "white",
    fontSize: 16,
    marginTop: 3,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  dropdown: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#2d3748",
    marginTop: 3,
  },
  dropdownContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownText: {
    fontSize: 16,
    color: "white",
  },
  dropdownIcon: {
    fontSize: 16,
    color: "#38bdf8",
  },
  dropdownMenu: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginTop: 8,
    overflow: "hidden",
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  selectedItem: {
    backgroundColor: "#38bdf8",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#333",
  },
  selectedItemText: {
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  searchButton: {
    backgroundColor: "#38bdf8",
    padding: 10,
    flex: 1,
    alignItems: "center",
    marginRight: 5,
    borderRadius: 8,
  },
  resetButton: {
    backgroundColor: "red",
    padding: 10,
    flex: 1,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const localStyles = StyleSheet.create({
  rowWrapper: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    padding: 8,
    flex: 1,
    margin: 5,
    backgroundColor: "#2d3748",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  lastOddCard: {
    backgroundColor: "#2d3748",
    padding: 12,
    borderRadius: 15,
    marginBottom: 15,
    width: "100%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    overflow: "hidden",
    borderWidth: 1,
  },
  cardImage: {
    height: 100,
    width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  lastOddCardImage: {
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
    resizeMode: "cover",
  },
  cardPrice: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 4,
  },
  lastOddCardPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  cardDetails: {
    color: "white",
    marginBottom: 4,
  },
  lastOddCardDetails: {
    fontSize: 16,
    color: "white",
    marginBottom: 6,
  },
  cardLocation: {
    paddingBottom: 8,
    color: "gray",
  },
  lastOddCardLocation: {
    fontSize: 14,
    color: "#fff",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
