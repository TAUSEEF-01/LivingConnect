// // // import React, { useState, useEffect } from "react";
// // // import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
// // // import axios from "axios";

// // // export default function SearchHomes() {
// // //   const [homes, setHomes] = useState([]);
// // //   const [filters, setFilters] = useState({
// // //     city: "",
// // //     area: "",
// // //     rentMin: "",
// // //     rentMax: "",
// // //     propertyType: "",
// // //   });

// // //   const fetchHomes = async () => {
// // //     try {
// // //       const response = await axios.get("https://livingconnect-backend.vercel.app/houseDetails/searchHomes", {
// // //         params: filters,
// // //       });
// // //       setHomes(response.data);
// // //     } catch (error) {
// // //       console.error("Failed to fetch homes:", error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchHomes(); // Fetch homes on load
// // //   }, []);

// // //   return (
// // //     <View style={styles.container}>
// // //       {/* Filters */}
// // //       <View style={styles.filters}>
// // //         <TextInput
// // //           placeholder="City"
// // //           style={styles.input}
// // //           value={filters.city}
// // //           onChangeText={(text) => setFilters({ ...filters, city: text })}
// // //         />
// // //         <TextInput
// // //           placeholder="Area"
// // //           style={styles.input}
// // //           value={filters.area}
// // //           onChangeText={(text) => setFilters({ ...filters, area: text })}
// // //         />
// // //         <TextInput
// // //           placeholder="Min Rent"
// // //           style={styles.input}
// // //           keyboardType="numeric"
// // //           value={filters.rentMin}
// // //           onChangeText={(text) => setFilters({ ...filters, rentMin: text })}
// // //         />
// // //         <TextInput
// // //           placeholder="Max Rent"
// // //           style={styles.input}
// // //           keyboardType="numeric"
// // //           value={filters.rentMax}
// // //           onChangeText={(text) => setFilters({ ...filters, rentMax: text })}
// // //         />
// // //         <TextInput
// // //           placeholder="Property Type"
// // //           style={styles.input}
// // //           value={filters.propertyType}
// // //           onChangeText={(text) => setFilters({ ...filters, propertyType: text })}
// // //         />
// // //         <TouchableOpacity style={styles.button} onPress={fetchHomes}>
// // //           <Text style={styles.buttonText}>Search</Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //       {/* List of Homes */}
// // //       <FlatList
// // //         data={homes}
// // //         keyExtractor={(item) => item._id}
// // //         renderItem={({ item }) => (
// // //           <View style={styles.card}>
// // //             <Image source={{ uri: item.images[0] }} style={styles.image} />
// // //             <Text style={styles.title}>{item.PropertyType}</Text>
// // //             <Text>{item.location.city}, {item.location.area}</Text>
// // //             <Text>Rent: ${item.rent} / {item.rentPeriod}</Text>
// // //             <Text>{item.details.beds} Beds, {item.details.baths} Baths</Text>
// // //           </View>
// // //         )}
// // //       />
// // //     </View>
// // //   );
// // // }

// // // export default function SearchHomes() {
// // //     const [homes, setHomes] = useState([]);
// // //     const [filters, setFilters] = useState({
// // //       city: "",
// // //       area: "",
// // //       rentMin: "",
// // //       rentMax: "",
// // //       propertyType: "",
// // //       beds: "",
// // //       baths: "",
// // //       balcony: "",
// // //     //   sizeMin: "",
// // //     //   sizeMax: "",
// // //     //   garage: false,
// // //     //   lift: false,
// // //     //   gasSupply: false,
// // //     //   generator: false,
// // //     //   internet: false,
// // //     //   cctv: false,
// // //     //   wifi: false,
// // //     //   availableFrom: "",
// // //       availableTo: "",
// // //     });

// // //     const fetchHomes = async () => {
// // //       try {
// // //         const response = await axios.get("https://livingconnect-backend.vercel.app/houseDetails/searchHomes", {
// // //           params: filters,
// // //         });
// // //         setHomes(response.data);
// // //       } catch (error) {
// // //         console.error("Failed to fetch homes:", error);
// // //       }
// // //     };

// // //     useEffect(() => {
// // //       fetchHomes(); // Fetch homes on load
// // //     }, []);

// // //     return (
// // //       <View style={styles.container}>
// // //         {/* Filters */}
// // //         <View style={styles.filters}>
// // //           <TextInput
// // //             placeholder="City"
// // //             style={styles.input}
// // //             value={filters.city}
// // //             onChangeText={(text) => setFilters({ ...filters, city: text })}
// // //           />
// // //           <TextInput
// // //             placeholder="Area"
// // //             style={styles.input}
// // //             value={filters.area}
// // //             onChangeText={(text) => setFilters({ ...filters, area: text })}
// // //           />
// // //           <TextInput
// // //             placeholder="Min Rent"
// // //             style={styles.input}
// // //             keyboardType="numeric"
// // //             value={filters.rentMin}
// // //             onChangeText={(text) => setFilters({ ...filters, rentMin: text })}
// // //           />
// // //           <TextInput
// // //             placeholder="Max Rent"
// // //             style={styles.input}
// // //             keyboardType="numeric"
// // //             value={filters.rentMax}
// // //             onChangeText={(text) => setFilters({ ...filters, rentMax: text })}
// // //           />
// // //           <TextInput
// // //             placeholder="Beds"
// // //             style={styles.input}
// // //             keyboardType="numeric"
// // //             value={filters.beds}
// // //             onChangeText={(text) => setFilters({ ...filters, beds: text })}
// // //           />
// // //           <TextInput
// // //             placeholder="Baths"
// // //             style={styles.input}
// // //             keyboardType="numeric"
// // //             value={filters.baths}
// // //             onChangeText={(text) => setFilters({ ...filters, baths: text })}
// // //           />
// // //           <TextInput
// // //             placeholder="Balcony"
// // //             style={styles.input}
// // //             keyboardType="numeric"
// // //             value={filters.balcony}
// // //             onChangeText={(text) => setFilters({ ...filters, balcony: text })}
// // //           />
// // //           {/* <TextInput
// // //             placeholder="Available From"
// // //             style={styles.input}
// // //             value={filters.availableFrom}
// // //             onChangeText={(text) => setFilters({ ...filters, availableFrom: text })}
// // //           /> */}
// // //           <TextInput
// // //             placeholder="Available To"
// // //             style={styles.input}
// // //             value={filters.availableTo}
// // //             onChangeText={(text) => setFilters({ ...filters, availableTo: text })}
// // //           />

// // //           {/* Facility Toggles */}
// // //           {/* {["garage", "lift", "gasSupply", "generator", "internet", "cctv", "wifi"].map((facility) => (
// // //             <TouchableOpacity
// // //               key={facility}
// // //               style={styles.toggle}
// // //               onPress={() =>
// // //                 setFilters({ ...filters, [facility]: !filters[facility] })
// // //               }
// // //             >
// // //               <Text style={{ color: filters[facility] ? "green" : "red" }}>
// // //                 {facility.charAt(0).toUpperCase() + facility.slice(1)}
// // //               </Text>
// // //             </TouchableOpacity>
// // //           ))}
// // //    */}
// // //           <TouchableOpacity style={styles.button} onPress={fetchHomes}>
// // //             <Text style={styles.buttonText}>Search</Text>
// // //           </TouchableOpacity>
// // //         </View>

// // //         {/* List of Homes */}
// // //         <FlatList
// // //           data={homes}
// // //           keyExtractor={(item) => item._id}
// // //           renderItem={({ item }) => (
// // //             <View style={styles.card}>
// // //               <Image source={{ uri: item.images[0] }} style={styles.image} />
// // //               <Text style={styles.title}>{item.PropertyType}</Text>
// // //               <Text>{item.location.city}, {item.location.area}</Text>
// // //               <Text>Rent: ${item.rent} / {item.rentPeriod}</Text>
// // //               <Text>{item.details.beds} Beds, {item.details.baths} Baths</Text>
// // //             </View>
// // //           )}
// // //         />
// // //       </View>
// // //     );
// // //   }

// // import React, { useState, useEffect } from "react";
// // import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
// // import axios from "axios";

// // export default function SearchHomes() {
// //   const [homes, setHomes] = useState([]);
// //   const [filters, setFilters] = useState({
// //     city: "",
// //     area: "",
// //     rentMin: "",
// //     rentMax: "",
// //     propertyType: "",
// //     beds: "",
// //     baths: "",
// //     sizeMin: "",
// //     sizeMax: "",
// //     balcony: "",
// //     availabilityTo: "",
// //   });

// //   const fetchHomes = async () => {
// //     try {
// //       const response = await axios.get("https://livingconnect-backend.vercel.app/houseDetails/searchHomes", {
// //         params: filters,
// //       });
// //       setHomes(response.data);
// //     } catch (error) {
// //       console.error("Failed to fetch homes:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchHomes(); // Fetch homes on load
// //   }, []);

// //   return (
// //     <View style={styles.container}>
// //       {/* Filters */}
// //       <View style={styles.filters}>
// //         <TextInput
// //           placeholder="City"
// //           style={styles.input}
// //           value={filters.city}
// //           onChangeText={(text) => setFilters({ ...filters, city: text })}
// //         />
// //         <TextInput
// //           placeholder="Area"
// //           style={styles.input}
// //           value={filters.area}
// //           onChangeText={(text) => setFilters({ ...filters, area: text })}
// //         />
// //         <TextInput
// //           placeholder="Min Rent"
// //           style={styles.input}
// //           keyboardType="numeric"
// //           value={filters.rentMin}
// //           onChangeText={(text) => setFilters({ ...filters, rentMin: text })}
// //         />
// //         <TextInput
// //           placeholder="Max Rent"
// //           style={styles.input}
// //           keyboardType="numeric"
// //           value={filters.rentMax}
// //           onChangeText={(text) => setFilters({ ...filters, rentMax: text })}
// //         />

// //         <TextInput
// //           placeholder="Property Type"
// //           style={styles.input}
// //           value={filters.propertyType}
// //           onChangeText={(text) => setFilters({ ...filters, propertyType: text })}
// //         />

// //         <TextInput
// //           placeholder="Beds"
// //           style={styles.input}
// //           keyboardType="numeric"
// //           value={filters.beds}
// //           onChangeText={(text) => setFilters({ ...filters, beds: text })}
// //         />
// //         <TextInput
// //           placeholder="Baths"
// //           style={styles.input}
// //           keyboardType="numeric"
// //           value={filters.baths}
// //           onChangeText={(text) => setFilters({ ...filters, baths: text })}
// //         />
// //         <TextInput
// //           placeholder="Min Size (sq.m)"
// //           style={styles.input}
// //           keyboardType="numeric"
// //           value={filters.sizeMin}
// //           onChangeText={(text) => setFilters({ ...filters, sizeMin: text })}
// //         />
// //         <TextInput
// //           placeholder="Max Size (sq.m)"
// //           style={styles.input}
// //           keyboardType="numeric"
// //           value={filters.sizeMax}
// //           onChangeText={(text) => setFilters({ ...filters, sizeMax: text })}
// //         />
// //         <TextInput
// //           placeholder="Balcony"
// //           style={styles.input}
// //           keyboardType="numeric"
// //           value={filters.balcony}
// //           onChangeText={(text) => setFilters({ ...filters, balcony: text })}
// //         />
// //         <TextInput
// //           placeholder="Availability To (YYYY-MM-DD)"
// //           style={styles.input}
// //           value={filters.availabilityTo}
// //           onChangeText={(text) => setFilters({ ...filters, availabilityTo: text })}
// //         />
// //         <TouchableOpacity style={styles.button} onPress={fetchHomes}>
// //           <Text style={styles.buttonText}>Search</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {/* List of Homes */}
// //       <FlatList
// //         data={homes}
// //         keyExtractor={(item) => item._id}
// //         renderItem={({ item }) => (
// //           <View style={styles.card}>
// //             <Image source={{ uri: item.images[0] }} style={styles.image} />
// //             <Text style={styles.title}>{item.PropertyType}</Text>
// //             <Text>{item.location.city}, {item.location.area}</Text>
// //             <Text>Rent: ${item.rent} / {item.rentPeriod}</Text>
// //             <Text>{item.details.beds} Beds, {item.details.baths} Baths</Text>
// //           </View>
// //         )}
// //       />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 10,
// //     backgroundColor: "#f9f9f9",
// //   },
// //   filters: {
// //     marginBottom: 20,
// //   },
// //   input: {
// //     borderWidth: 1,
// //     borderColor: "#ccc",
// //     padding: 10,
// //     marginVertical: 5,
// //     borderRadius: 5,
// //   },
// //   button: {
// //     backgroundColor: "#007BFF",
// //     padding: 10,
// //     borderRadius: 5,
// //     alignItems: "center",
// //   },
// //   buttonText: {
// //     color: "#fff",
// //     fontWeight: "bold",
// //   },
// //   card: {
// //     backgroundColor: "#fff",
// //     padding: 10,
// //     marginVertical: 5,
// //     borderRadius: 5,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 2,
// //   },
// //   image: {
// //     width: "100%",
// //     height: 200,
// //     borderRadius: 5,
// //   },
// //   title: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     marginVertical: 5,
// //   },
// // });

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 10,
// // //     backgroundColor: "#f9f9f9",
// // //   },
// // //   filters: {
// // //     marginBottom: 20,
// // //   },
// // //   input: {
// // //     borderWidth: 1,
// // //     borderColor: "#ccc",
// // //     padding: 10,
// // //     marginVertical: 5,
// // //     borderRadius: 5,
// // //   },
// // //   button: {
// // //     backgroundColor: "#007BFF",
// // //     padding: 10,
// // //     borderRadius: 5,
// // //     alignItems: "center",
// // //   },
// // //   buttonText: {
// // //     color: "#fff",
// // //     fontWeight: "bold",
// // //   },
// // //   card: {
// // //     backgroundColor: "#fff",
// // //     padding: 10,
// // //     marginVertical: 5,
// // //     borderRadius: 5,
// // //     shadowColor: "#000",
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //     elevation: 2,
// // //   },
// // //   image: {
// // //     width: "100%",
// // //     height: 200,
// // //     borderRadius: 5,
// // //   },
// // //   title: {
// // //     fontSize: 18,
// // //     fontWeight: "bold",
// // //     marginVertical: 5,
// // //   },
// // // });

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import axios from "axios";
// import { useRouter } from "expo-router";

// export default function SearchHomes() {
//   const router = useRouter();

//   const [homes, setHomes] = useState([]);

//   const [filters, setFilters] = useState({
//     city: "",
//     area: "",
//     rentMin: "",
//     rentMax: "",
//     propertyType: "",
//     beds: "",
//     baths: "",
//     sizeMin: "",
//     sizeMax: "",
//     balcony: "",
//     availabilityTo: "",
//   });

//   const resetFilters = () => {
//     setFilters({
//       city: "",
//       area: "",
//       rentMin: "",
//       rentMax: "",
//       propertyType: "",
//       beds: "",
//       baths: "",
//       sizeMin: "",
//       sizeMax: "",
//       balcony: "",
//       availabilityTo: "",
//     });
//     setSelectedType("All Properties");
//     fetchHomes();
//     // handleTypeSelect("All Properties");
//     // console.log("Filters after reset:", filters);
//   };

//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedType, setSelectedType] = useState("All Properties");

//   const propertyTypes = [
//     "All Properties",
//     "Rent",
//     "Sale",
//     "Sublet",
//     "Over a Time period",
//   ];

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleTypeSelect = (type) => {
//     setSelectedType(type);
//     if (type === "All Properties") type = "";
//     setFilters({ ...filters, propertyType: type });
//     setIsOpen(false);
//   };

//   const fetchHomes = async () => {
//     try {
//       console.log("Filters:", filters);

//       const response = await axios.get(
//         "https://livingconnect-backend.vercel.app/houseDetails/searchHomes",
//         // "https://livingconnect-backend.vercel.app/houseDetails/searchHomes",
//         {
//           params: filters,
//         }
//       );
//       setHomes(response.data);
//     } catch (error) {
//       console.error("Failed to fetch homes:", error);
//     }
//   };

//   useEffect(() => {
//     fetchHomes(); // Fetch homes on load
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.pageTitle}>Filter Page</Text>
//       {/* Filters */}
//       <View style={styles.filters}>
//         <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
//           <View style={styles.dropdownContent}>
//             <Text style={styles.dropdownText}>{selectedType}</Text>
//             <Text style={styles.dropdownIcon}>{isOpen ? "▲" : "▼"}</Text>
//           </View>
//         </TouchableOpacity>

//         {isOpen && (
//           <View style={styles.dropdownMenu}>
//             {propertyTypes.map((type) => (
//               <TouchableOpacity
//                 key={type}
//                 style={[
//                   styles.dropdownItem,
//                   selectedType === type && styles.selectedItem,
//                 ]}
//                 onPress={() => handleTypeSelect(type)}
//               >
//                 <Text
//                   style={[
//                     styles.dropdownItemText,
//                     selectedType === type && styles.selectedItemText,
//                   ]}
//                 >
//                   {type}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}

//         <TextInput
//           placeholder="City"
//           placeholderTextColor="#666"
//           style={styles.input}
//           value={filters.city}
//           onChangeText={(text) => setFilters({ ...filters, city: text })}
//         />
//         <TextInput
//           placeholder="Area"
//           placeholderTextColor="#666"
//           style={styles.input}
//           value={filters.area}
//           onChangeText={(text) => setFilters({ ...filters, area: text })}
//         />

//         <View style={styles.inputRow}>
//           <View style={styles.inputWrapper}>
//             <TextInput
//               placeholder="Min Rent"
//               placeholderTextColor="#666"
//               style={styles.input}
//               keyboardType="numeric"
//               value={filters.rentMin}
//               onChangeText={(text) => setFilters({ ...filters, rentMin: text })}
//             />
//           </View>
//           <View style={styles.inputWrapper}>
//             <TextInput
//               placeholder="Max Rent"
//               placeholderTextColor="#666"
//               style={styles.input}
//               keyboardType="numeric"
//               value={filters.rentMax}
//               onChangeText={(text) => setFilters({ ...filters, rentMax: text })}
//             />
//           </View>
//         </View>

//         <View style={styles.detailsContainer}>
//           {["beds", "baths"].map((field, index) => (
//             <View key={field} style={styles.inputWrapper}>
//               <TextInput
//                 style={styles.input}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 placeholderTextColor="#666" // Makes placeholder text white
//                 keyboardType="numeric"
//                 value={filters[field]}
//                 onChangeText={(text) =>
//                   setFilters({ ...filters, [field]: text })
//                 }
//               />
//             </View>
//           ))}
//         </View>

//         {/*
//         <TextInput
//           placeholder="Beds"
//           style={styles.input}
//           keyboardType="numeric"
//           value={filters.beds}
//           onChangeText={(text) => setFilters({ ...filters, beds: text })}
//         />
//         <TextInput
//           placeholder="Baths"
//           style={styles.input}
//           keyboardType="numeric"
//           value={filters.baths}
//           onChangeText={(text) => setFilters({ ...filters, baths: text })}
//         /> */}

//         {/* <TextInput
//           placeholder="Balcony"
//           placeholderTextColor="#666"
//           style={styles.input}
//           keyboardType="numeric"
//           value={filters.balcony}
//           onChangeText={(text) => setFilters({ ...filters, balcony: text })}
//         /> */}

//         {/* <TextInput
//           placeholder="Min Size (sq.m)"
//           placeholderTextColor="#666"
//           style={styles.input}
//           keyboardType="numeric"
//           value={filters.sizeMin}
//           onChangeText={(text) => setFilters({ ...filters, sizeMin: text })}
//         />
//         <TextInput
//           placeholder="Max Size (sq.m)"
//           placeholderTextColor="#666"
//           style={styles.input}
//           keyboardType="numeric"
//           value={filters.sizeMax}
//           onChangeText={(text) => setFilters({ ...filters, sizeMax: text })}
//         /> */}

//         <View style={styles.inputRow}>
//           <View style={styles.inputWrapper}>
//             <TextInput
//               placeholder="Min Size (sq.m)"
//               placeholderTextColor="#666"
//               style={styles.input}
//               keyboardType="numeric"
//               value={filters.sizeMin}
//               onChangeText={(text) => setFilters({ ...filters, sizeMin: text })}
//             />
//           </View>
//           <View style={styles.inputWrapper}>
//             <TextInput
//               placeholder="Max Size (sq.m)"
//               placeholderTextColor="#666"
//               style={styles.input}
//               keyboardType="numeric"
//               value={filters.sizeMax}
//               onChangeText={(text) => setFilters({ ...filters, sizeMax: text })}
//             />
//           </View>
//         </View>

//         {/* <TextInput
//           placeholder="Availability To (YYYY-MM-DD)"
//           placeholderTextColor="#666"
//           style={styles.input}
//           value={filters.availabilityTo}
//           onChangeText={(text) =>
//             setFilters({ ...filters, availabilityTo: text })
//           }
//         /> */}

//         {/* <TouchableOpacity style={styles.button} onPress={fetchHomes}>
//           <Text style={styles.buttonText}>Search</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.resetButton}
//           onPress={() => {
//             resetFilters();
//             fetchHomes();
//           }}
//          >
//           <Text style={styles.resetButtonText}>Reset</Text>
//         </TouchableOpacity> */}

//         <View style={styles.buttonRow}>
//           <TouchableOpacity style={styles.searchButton} onPress={fetchHomes}>
//             <Text style={styles.buttonText}>Search</Text>
//           </TouchableOpacity>

//           {/* <TouchableOpacity
//             style={styles.resetButton}
//             onPress={() => {
//               resetFilters();
//               fetchHomes();
//             }}
//           >
//             <Text style={styles.resetButtonText}>Reset</Text>
//           </TouchableOpacity> */}

//           <TouchableOpacity
//             style={styles.resetButton}
//             onPress={() => {
//               resetFilters();
//               // handleTypeSelect("All Properties");
//               // fetchHomes();
//             }}
//           >
//             <Text style={styles.buttonText}>Reset</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* List of Homes */}
//       {/* <FlatList
//         data={homes}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Image source={{ uri: item.images[0] }} style={styles.image} />
//             <Text style={styles.title}>{item.PropertyType}</Text>
//             <Text>
//               {item.location.city}, {item.location.area}
//             </Text>
//             <Text>
//               Rent: ${item.rent} / {item.rentPeriod}
//             </Text>
//             <Text>
//               {item.details.beds} Beds, {item.details.baths} Baths
//             </Text>
//           </View>
//         )}
//       /> */}

//       {/* <FlatList
//         data={homes}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             key={item._id}
//             style={styles.card}
//             onPress={() =>
//               router.push({
//                 pathname: "/pages/HomeInfoPage/homeDetailsShowPage",
//                 params: { homeId: item._id }, // Pass the home ID as a query parameter
//               })
//             } // Navigate to the details page
//           >
//             {item.images.length > 0 && (
//               <Image
//                 source={{ uri: item.images[0] }} // Display the first image
//                 style={styles.cardImage}
//               />
//             )}

//             <Text style={styles.cardPrice}>Tk {item.rent}</Text>

//             <Text style={styles.cardDetails}>
//               {item.details.beds} beds | {item.details.baths} baths |{" "}
//               {item.details.size} m²
//             </Text>

//             <Text style={styles.cardLocation}>
//               {item.location.city}, {item.location.area}
//             </Text>
//           </TouchableOpacity>
//         )}
//       /> */}

//       {/*
// <FlatList
//   data={homes}
//   keyExtractor={(item) => item._id}
//   numColumns={2} // Display two items in a row
//   columnWrapperStyle={localStyles.rowWrapper} // Optional: Add spacing between rows
//   renderItem={({ item }) => (
//     <TouchableOpacity
//       key={item._id}
//       style={localStyles.card}
//       onPress={() =>
//         router.push({
//           pathname: "/pages/HomeInfoPage/homeDetailsShowPage",
//           params: { homeId: item._id }, // Pass the home ID as a query parameter
//         })
//       } // Navigate to the details page
//     >
//       {item.images.length > 0 && (
//         <Image
//           source={{ uri: item.images[0] }} // Display the first image
//           style={localStyles.cardImage}
//         />
//       )}

//       <Text style={localStyles.cardPrice}>Tk {item.rent}</Text>

//       <Text style={localStyles.cardDetails}>
//         {item.details.beds} beds | {item.details.baths} baths |{" "}
//         {item.details.size} m²
//       </Text>

//       <Text style={localStyles.cardLocation}>
//         {item.location.city}, {item.location.area}
//       </Text>
//     </TouchableOpacity>
//   )}
// /> */}

//       <FlatList
//         data={homes}
//         keyExtractor={(item) => item._id}
//         numColumns={2} // Display two items in a row
//         columnWrapperStyle={localStyles.rowWrapper} // Optional: Add spacing between rows
//         renderItem={({ item, index }) => {
//           // Determine if the current item is the last and the total number of items is odd
//           const isLastOddItem =
//             homes.length % 2 !== 0 && index === homes.length - 1;

//           return (
//             <TouchableOpacity
//               key={item._id}
//               style={[
//                 localStyles.card,
//                 isLastOddItem && localStyles.lastOddCard, // Apply special styles for the last odd item
//               ]}
//               onPress={() =>
//                 router.push({
//                   pathname: "/pages/HomeInfoPage/homeDetailsShowPage",
//                   params: { homeId: item._id }, // Pass the home ID as a query parameter
//                 })
//               } // Navigate to the details page
//             >
//               {item.images.length > 0 && (
//                 <Image
//                   source={{ uri: item.images[0] }} // Display the first image
//                   style={[
//                     localStyles.cardImage,
//                     isLastOddItem && localStyles.lastOddCardImage, // Style the last odd card image
//                   ]}
//                 />
//               )}

//               <Text
//                 style={[
//                   localStyles.cardPrice,
//                   isLastOddItem && localStyles.lastOddCardPrice, // Style the last odd card price
//                 ]}
//               >
//                 Tk {item.rent}
//               </Text>

//               <Text
//                 style={[
//                   localStyles.cardDetails,
//                   isLastOddItem && localStyles.lastOddCardDetails, // Style the last odd card details
//                 ]}
//               >
//                 {item.details.beds} beds | {item.details.baths} baths |{" "}
//                 {item.details.size} m²
//               </Text>

//               <Text
//                 style={[
//                   localStyles.cardLocation,
//                   isLastOddItem && localStyles.lastOddCardLocation, // Style the last odd card location
//                 ]}
//               >
//                 {item.location.city}, {item.location.area}
//               </Text>
//             </TouchableOpacity>
//           );
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     paddingTop: 45,
//     backgroundColor: "black",
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
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },

//   inputWrapper: {
//     width: "49.8%",
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
//     width: "100%",
//   },

//   inputText: {
//     fontSize: 15,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "white",
//   },

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
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//   },

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

// });

// const localStyles = StyleSheet.create({
//   rowWrapper: {
//     justifyContent: "space-between", // Adjust spacing between items in a row
//     marginBottom: 10, // Optional: Add spacing between rows
//   },

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
//   },
//   lastOddCardImage: {
//     height: 180,
//     borderRadius: 12,
//     marginBottom: 12,
//     resizeMode: "cover",
//   },

//   lastOddCardPrice: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 6,
//   },

//   lastOddCardDetails: {
//     fontSize: 16,
//     color: "white",
//     marginBottom: 6,
//   },

//   lastOddCardLocation: {
//     fontSize: 14,
//     color: "#fff",
//     fontStyle: "italic",
//     fontWeight: "bold",
//   },

//   cardContainer: {
//     flexDirection: "row",
//   },
//   card: {
//     padding: 8,
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
//     color: "white",
//     fontWeight: "bold",
//     marginBottom: 4,
//   },
//   cardDetails: {
//     color: "white",
//     marginBottom: 4,
//   },
//   cardLocation: {
//     paddingBottom: 8,
//     color: "gray",
//   },
// });

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  TextInput,
  StatusBar,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

import SidePanel from "../sidePanel/sidePanel";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AllHomesPage = () => {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Used for navigation

  const [isSidePanelVisible, setSidePanelVisible] = useState(false);

  const toggleSidePanel = () => {
    setSidePanelVisible(!isSidePanelVisible);
  };

  const fetchAllHomeDetails = async () => {
    try {
      console.log("Fetching all home repair details...");
      const token = await AsyncStorage.getItem("userToken");
      const response = await axios.get(
        "https://livingconnect-backend.vercel.app/serviceDetails/get-all-service-details-houseRepair-otherUsers",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setHomes(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch all House Repair details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllHomeDetails();
  }, []);

  if (loading) {
    return (
      <View style={localStyles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (homes.length === 0) {
    return (
      <View style={localStyles.noDataContainer}>
        <Text style={localStyles.noDataText}>No Services available.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "black", paddingVertical: 0 }}
    >
      <View style={localStyles.statusBarWrapper}>
        <StatusBar
          barStyle="light-content" // Light content for white text/icons on a dark background
          backgroundColor="black" // Transparent background for the StatusBar
          translucent={true} // Make it overlay the screen content
        />
      </View>

      {/* Sidebar */}
      <SidePanel
        isVisible={isSidePanelVisible}
        onClose={() => setSidePanelVisible(false)}
      />

      <ScrollView style={styles.container}>
        {isSidePanelVisible && (
          <TouchableOpacity
            style={[
              styles.overlay,
              { zIndex: 999 }, // Ensure it's below the menu button but above other content
            ]}
            activeOpacity={1}
            onPress={() => setSidePanelVisible(false)}
          >
            <SidePanel
              isVisible={isSidePanelVisible}
              onClose={() => setSidePanelVisible(false)}
            />
          </TouchableOpacity>
        )}

        {/* Banner */}

        <View style={styles.banner}>
          <TouchableOpacity
            onPress={toggleSidePanel}
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              zIndex: 100,
            }}
          >
            <View style={styles.menuIcon}>
              <View style={styles.bar} />
              <View style={styles.bar} />
              <View style={styles.bar} />
            </View>
          </TouchableOpacity>

          <View style={styles.bannerImageContainer}>
            <Image
              source={require("../../assets/images/repair-page.jpg")}
              // source={{
              //   // uri: "http://images.pexels.com/photos/6045328/pexels-photo-6045328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              // }} // Replace with actual image URL
              style={styles.bannerImage}
            />
          </View>
        </View>

        <View style={styles.container}>
          {/* Filters and Sorting */}
          {/* <View style={styles.filterContainer}>
            <TouchableOpacity
              style={styles.filterButtonSecondary}
              onPress={() => router.push("/pages/FiltersPage/filterInfo")}
            >
              <Text style={styles.filterButtonText}>Show filters</Text>
            </TouchableOpacity>
          </View> */}

          <ScrollView style={styles.scrollContainer}>
            {homes.map((home) => (
              <TouchableOpacity
                key={home._id}
                style={styles.card}
                onPress={() =>
                  router.push({
                    pathname: "/services/homeRepairPage",
                    params: { homeId: home._id }, // Pass the home ID as a query parameter
                  })
                } // Navigate to the details page
              >
                {home.images.length > 0 && (
                  <Image
                    source={{ uri: home.images[0] }} // Display the first image
                    style={styles.cardImage}
                  />
                )}

                <Text style={styles.cardDetails}>{home.companyName}</Text>

                <Text style={styles.cardPrice}>Tk {home.cost}</Text>

                <Text style={styles.cardLocation}>
                  {home.location && Object.keys(home.location).length > 0
                    ? `${Object.keys(home.location).join(", ")}`
                    : "Location not available"}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    padding: 16,
    backgroundColor: "black",
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
  },

  menuIcon: {
    width: 35,
    height: 26, // Adjust to ensure the bars fit within this height
    justifyContent: "space-between", // Evenly space the bars
    alignItems: "center", // Center align the bars horizontally
    // backgroundColor: "transparent", // Optional: Transparent background
    backgroundColor: "black", // Replace with your desired color
    padding: 3,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 6,
  },

  bar: {
    width: "100%", // Make the bars span the full width of the menuIcon
    height: 3, // Thickness of the bars
    // backgroundColor: "black", // Replace with your desired color
    borderRadius: 2, // Rounded corners for the bars
    backgroundColor: "white", // Replace with your desired color
  },

  banner: {
    backgroundColor: "#1e3a8a",
    position: "relative", // Ensure text and image stack properly
  },

  bannerImageContainer: {
    width: "100%",
    height: 200, // Adjust the height as needed
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8, // Optional for rounded corners
  },

  input: {
    // backgroundColor: "#1f2937",
    // color: "white",
    // padding: 12,
    // borderRadius: 8,

    backgroundColor: "#2d3748",
    color: "white",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    // marginBottom: 1,
    // marginTop: 1
  },

  filterContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    // marginTop: 8,
  },
  filterRowSort: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 12,
  },
  filterButtonPrimary: {
    backgroundColor: "#38bdf8",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    width: "49%",
  },
  filterButtonSecondary: {
    backgroundColor: "#38bdf8",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    width: "100%",
  },
  filterButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  sortText: {
    color: "white",
    fontSize: 14,
  },
  sortButton: {
    borderWidth: 1,
    borderColor: "#38bdf8",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  scrollContainer: {
    padding: 16,
  },

  //   cardImage: {
  //     height: 160,
  //     width: "100%",
  //   },
  //   cardContent: {
  //     padding: 16,
  //   },
  //   cardTitle: {
  //     color: "white",
  //     fontSize: 18,
  //     fontWeight: "bold",
  //   },
  //   cardSubText: {
  //     color: "#9ca3af",
  //     fontSize: 14,
  //     marginTop: 4,
  //   },
  //   cardFooter: {
  //     color: "#6b7280",
  //     fontSize: 12,
  //     marginTop: 8,
  //   },

  //   pageContainer: {
  //     flex: 1,
  //     backgroundColor: "grey", // Set the background color of the entire page
  //     padding: 10,
  //   },
  card: {
    backgroundColor: "#2d3748", // Light background for better contrast
    padding: 12,
    borderRadius: 15, // Rounded corners
    marginBottom: 15,
    width: "100%", // Makes the card not take full width
    alignSelf: "center", // Center align for better appearance
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8, // For Android shadow
    overflow: "hidden", // Ensures smooth corners
    borderWidth: 1,
    //   borderColor: "#f1f1f1", // Light border for the card
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
    fontSize: 20,
    color: "#38bdf8", // Lighter text for the details
    marginBottom: 6,
    fontWeight: "bold",
  },
  cardLocation: {
    fontSize: 16,
    color: "#fff", // A little darker for location details
    fontStyle: "italic", // Italic style for the location
    fontWeight: "bold",
  },

  sidePanel: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: 300,
    backgroundColor: "white",
    padding: 16,
    zIndex: 2,
    transform: [{ translateX: -300 }],
    // Add overflow handling to prevent scrolling
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.21)", // Dark overlay
    zIndex: 1, // Below the side panel
  },

  contactButton: {
    padding: 12,
    // backgroundColor: "#2563eb",
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Keep as absolute
    bottom: "20%", // Fixed pixel value instead of percentage
    alignSelf: "center",
    width: "80%", // Optional: make button width consistent
  },

  aboutButton: {
    padding: 12,
    // backgroundColor: "#22c55e",//38bdf8
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Keep as absolute
    bottom: "28%", // Fixed pixel value instead of percentage
    alignSelf: "center",
    width: "80%", // Optional: make button width consistent
  },

  logoutButton: {
    padding: 12,
    backgroundColor: "#ef4444",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Keep as absolute
    bottom: "8%", // Fixed pixel value instead of percentage
    alignSelf: "center",
    width: "80%", // Optional: make button width consistent
  },

  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  statusBarWrapper: {
    marginBottom: 33, // Adjust the bottom margin as needed
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  imageScroll: {
    marginTop: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 16,
    color: "#555",
  },
});

export default AllHomesPage;
