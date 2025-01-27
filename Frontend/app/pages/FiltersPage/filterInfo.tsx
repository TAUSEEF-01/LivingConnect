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
// //   });

// //   const fetchHomes = async () => {
// //     try {
// //       const response = await axios.get("http://192.168.0.103:5000/houseDetails/searchHomes", {
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

// // export default function SearchHomes() {
// //     const [homes, setHomes] = useState([]);
// //     const [filters, setFilters] = useState({
// //       city: "",
// //       area: "",
// //       rentMin: "",
// //       rentMax: "",
// //       propertyType: "",
// //       beds: "",
// //       baths: "",
// //       balcony: "",
// //     //   sizeMin: "",
// //     //   sizeMax: "",
// //     //   garage: false,
// //     //   lift: false,
// //     //   gasSupply: false,
// //     //   generator: false,
// //     //   internet: false,
// //     //   cctv: false,
// //     //   wifi: false,
// //     //   availableFrom: "",
// //       availableTo: "",
// //     });

// //     const fetchHomes = async () => {
// //       try {
// //         const response = await axios.get("http://192.168.0.103:5000/houseDetails/searchHomes", {
// //           params: filters,
// //         });
// //         setHomes(response.data);
// //       } catch (error) {
// //         console.error("Failed to fetch homes:", error);
// //       }
// //     };

// //     useEffect(() => {
// //       fetchHomes(); // Fetch homes on load
// //     }, []);

// //     return (
// //       <View style={styles.container}>
// //         {/* Filters */}
// //         <View style={styles.filters}>
// //           <TextInput
// //             placeholder="City"
// //             style={styles.input}
// //             value={filters.city}
// //             onChangeText={(text) => setFilters({ ...filters, city: text })}
// //           />
// //           <TextInput
// //             placeholder="Area"
// //             style={styles.input}
// //             value={filters.area}
// //             onChangeText={(text) => setFilters({ ...filters, area: text })}
// //           />
// //           <TextInput
// //             placeholder="Min Rent"
// //             style={styles.input}
// //             keyboardType="numeric"
// //             value={filters.rentMin}
// //             onChangeText={(text) => setFilters({ ...filters, rentMin: text })}
// //           />
// //           <TextInput
// //             placeholder="Max Rent"
// //             style={styles.input}
// //             keyboardType="numeric"
// //             value={filters.rentMax}
// //             onChangeText={(text) => setFilters({ ...filters, rentMax: text })}
// //           />
// //           <TextInput
// //             placeholder="Beds"
// //             style={styles.input}
// //             keyboardType="numeric"
// //             value={filters.beds}
// //             onChangeText={(text) => setFilters({ ...filters, beds: text })}
// //           />
// //           <TextInput
// //             placeholder="Baths"
// //             style={styles.input}
// //             keyboardType="numeric"
// //             value={filters.baths}
// //             onChangeText={(text) => setFilters({ ...filters, baths: text })}
// //           />
// //           <TextInput
// //             placeholder="Balcony"
// //             style={styles.input}
// //             keyboardType="numeric"
// //             value={filters.balcony}
// //             onChangeText={(text) => setFilters({ ...filters, balcony: text })}
// //           />
// //           {/* <TextInput
// //             placeholder="Available From"
// //             style={styles.input}
// //             value={filters.availableFrom}
// //             onChangeText={(text) => setFilters({ ...filters, availableFrom: text })}
// //           /> */}
// //           <TextInput
// //             placeholder="Available To"
// //             style={styles.input}
// //             value={filters.availableTo}
// //             onChangeText={(text) => setFilters({ ...filters, availableTo: text })}
// //           />

// //           {/* Facility Toggles */}
// //           {/* {["garage", "lift", "gasSupply", "generator", "internet", "cctv", "wifi"].map((facility) => (
// //             <TouchableOpacity
// //               key={facility}
// //               style={styles.toggle}
// //               onPress={() =>
// //                 setFilters({ ...filters, [facility]: !filters[facility] })
// //               }
// //             >
// //               <Text style={{ color: filters[facility] ? "green" : "red" }}>
// //                 {facility.charAt(0).toUpperCase() + facility.slice(1)}
// //               </Text>
// //             </TouchableOpacity>
// //           ))}
// //    */}
// //           <TouchableOpacity style={styles.button} onPress={fetchHomes}>
// //             <Text style={styles.buttonText}>Search</Text>
// //           </TouchableOpacity>
// //         </View>

// //         {/* List of Homes */}
// //         <FlatList
// //           data={homes}
// //           keyExtractor={(item) => item._id}
// //           renderItem={({ item }) => (
// //             <View style={styles.card}>
// //               <Image source={{ uri: item.images[0] }} style={styles.image} />
// //               <Text style={styles.title}>{item.PropertyType}</Text>
// //               <Text>{item.location.city}, {item.location.area}</Text>
// //               <Text>Rent: ${item.rent} / {item.rentPeriod}</Text>
// //               <Text>{item.details.beds} Beds, {item.details.baths} Baths</Text>
// //             </View>
// //           )}
// //         />
// //       </View>
// //     );
// //   }

// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
// import axios from "axios";

// export default function SearchHomes() {
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

//   const fetchHomes = async () => {
//     try {
//       const response = await axios.get("http://192.168.0.103:5000/houseDetails/searchHomes", {
//         params: filters,
//       });
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
//       {/* Filters */}
//       <View style={styles.filters}>
//         <TextInput
//           placeholder="City"
//           style={styles.input}
//           value={filters.city}
//           onChangeText={(text) => setFilters({ ...filters, city: text })}
//         />
//         <TextInput
//           placeholder="Area"
//           style={styles.input}
//           value={filters.area}
//           onChangeText={(text) => setFilters({ ...filters, area: text })}
//         />
//         <TextInput
//           placeholder="Min Rent"
//           style={styles.input}
//           keyboardType="numeric"
//           value={filters.rentMin}
//           onChangeText={(text) => setFilters({ ...filters, rentMin: text })}
//         />
//         <TextInput
//           placeholder="Max Rent"
//           style={styles.input}
//           keyboardType="numeric"
//           value={filters.rentMax}
//           onChangeText={(text) => setFilters({ ...filters, rentMax: text })}
//         />

//         <TextInput
//           placeholder="Property Type"
//           style={styles.input}
//           value={filters.propertyType}
//           onChangeText={(text) => setFilters({ ...filters, propertyType: text })}
//         />

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
//         />
//         <TextInput
//           placeholder="Min Size (sq.m)"
//           style={styles.input}
//           keyboardType="numeric"
//           value={filters.sizeMin}
//           onChangeText={(text) => setFilters({ ...filters, sizeMin: text })}
//         />
//         <TextInput
//           placeholder="Max Size (sq.m)"
//           style={styles.input}
//           keyboardType="numeric"
//           value={filters.sizeMax}
//           onChangeText={(text) => setFilters({ ...filters, sizeMax: text })}
//         />
//         <TextInput
//           placeholder="Balcony"
//           style={styles.input}
//           keyboardType="numeric"
//           value={filters.balcony}
//           onChangeText={(text) => setFilters({ ...filters, balcony: text })}
//         />
//         <TextInput
//           placeholder="Availability To (YYYY-MM-DD)"
//           style={styles.input}
//           value={filters.availabilityTo}
//           onChangeText={(text) => setFilters({ ...filters, availabilityTo: text })}
//         />
//         <TouchableOpacity style={styles.button} onPress={fetchHomes}>
//           <Text style={styles.buttonText}>Search</Text>
//         </TouchableOpacity>
//       </View>

//       {/* List of Homes */}
//       <FlatList
//         data={homes}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Image source={{ uri: item.images[0] }} style={styles.image} />
//             <Text style={styles.title}>{item.PropertyType}</Text>
//             <Text>{item.location.city}, {item.location.area}</Text>
//             <Text>Rent: ${item.rent} / {item.rentPeriod}</Text>
//             <Text>{item.details.beds} Beds, {item.details.baths} Baths</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#f9f9f9",
//   },
//   filters: {
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: "#007BFF",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
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
// });

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

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

export default function SearchHomes() {
  const router = useRouter();

  const [homes, setHomes] = useState([]);

  const [filters, setFilters] = useState({
    city: "",
    area: "",
    rentMin: "",
    rentMax: "",
    propertyType: "",
    beds: "",
    baths: "",
    sizeMin: "",
    sizeMax: "",
    balcony: "",
    availabilityTo: "",
  });

  const resetFilters = () => {
    setFilters({
      city: "",
      area: "",
      rentMin: "",
      rentMax: "",
      propertyType: "",
      beds: "",
      baths: "",
      sizeMin: "",
      sizeMax: "",
      balcony: "",
      availabilityTo: "",
    });
    setSelectedType("All Properties");
    fetchHomes();
    // handleTypeSelect("All Properties");
    // console.log("Filters after reset:", filters);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("All Properties");

  const propertyTypes = [
    "All Properties",
    "Rent",
    "Sale",
    "Sublet",
    "Over a Time period",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    if (type === "All Properties") type = "";
    setFilters({ ...filters, propertyType: type });
    setIsOpen(false);
  };

  const fetchHomes = async () => {
    try {
      console.log("Filters:", filters);

      const response = await axios.get(
        "http://192.168.0.103:5000/houseDetails/searchHomes",
        // "http://192.168.0.103:5000/houseDetails/searchHomes",
        {
          params: filters,
        }
      );
      setHomes(response.data);
    } catch (error) {
      console.error("Failed to fetch homes:", error);
    }
  };

  useEffect(() => {
    fetchHomes(); // Fetch homes on load
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Filter Page</Text>
      {/* Filters */}
      <View style={styles.filters}>
        <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
          <View style={styles.dropdownContent}>
            <Text style={styles.dropdownText}>{selectedType}</Text>
            <Text style={styles.dropdownIcon}>{isOpen ? "▲" : "▼"}</Text>
          </View>
        </TouchableOpacity>

        {isOpen && (
          <View style={styles.dropdownMenu}>
            {propertyTypes.map((type) => (
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
              placeholder="Min Rent"
              placeholderTextColor="#666"
              style={styles.input}
              keyboardType="numeric"
              value={filters.rentMin}
              onChangeText={(text) => setFilters({ ...filters, rentMin: text })}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Max Rent"
              placeholderTextColor="#666"
              style={styles.input}
              keyboardType="numeric"
              value={filters.rentMax}
              onChangeText={(text) => setFilters({ ...filters, rentMax: text })}
            />
          </View>
        </View>

        <View style={styles.detailsContainer}>
          {["beds", "baths"].map((field, index) => (
            <View key={field} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                placeholderTextColor="#666" // Makes placeholder text white
                keyboardType="numeric"
                value={filters[field]}
                onChangeText={(text) =>
                  setFilters({ ...filters, [field]: text })
                }
              />
            </View>
          ))}
        </View>

        {/* 
        <TextInput
          placeholder="Beds"
          style={styles.input}
          keyboardType="numeric"
          value={filters.beds}
          onChangeText={(text) => setFilters({ ...filters, beds: text })}
        />
        <TextInput
          placeholder="Baths"
          style={styles.input}
          keyboardType="numeric"
          value={filters.baths}
          onChangeText={(text) => setFilters({ ...filters, baths: text })}
        /> */}

        {/* <TextInput
          placeholder="Balcony"
          placeholderTextColor="#666"
          style={styles.input}
          keyboardType="numeric"
          value={filters.balcony}
          onChangeText={(text) => setFilters({ ...filters, balcony: text })}
        /> */}

        {/* <TextInput
          placeholder="Min Size (sq.m)"
          placeholderTextColor="#666"
          style={styles.input}
          keyboardType="numeric"
          value={filters.sizeMin}
          onChangeText={(text) => setFilters({ ...filters, sizeMin: text })}
        />
        <TextInput
          placeholder="Max Size (sq.m)"
          placeholderTextColor="#666"
          style={styles.input}
          keyboardType="numeric"
          value={filters.sizeMax}
          onChangeText={(text) => setFilters({ ...filters, sizeMax: text })}
        /> */}

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

        {/* <TextInput
          placeholder="Availability To (YYYY-MM-DD)"
          placeholderTextColor="#666"
          style={styles.input}
          value={filters.availabilityTo}
          onChangeText={(text) =>
            setFilters({ ...filters, availabilityTo: text })
          }
        /> */}

        {/* <TouchableOpacity style={styles.button} onPress={fetchHomes}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton}
          onPress={() => {
            resetFilters();
            fetchHomes();
          }}
         >
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity> */}

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.searchButton} onPress={fetchHomes}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={styles.resetButton}
            onPress={() => {
              resetFilters();
              fetchHomes();
            }}
          >
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={styles.resetButton}
            onPress={() => {
              resetFilters();
              // handleTypeSelect("All Properties");
              // fetchHomes();
            }}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* List of Homes */}
      {/* <FlatList
        data={homes}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.images[0] }} style={styles.image} />
            <Text style={styles.title}>{item.PropertyType}</Text>
            <Text>
              {item.location.city}, {item.location.area}
            </Text>
            <Text>
              Rent: ${item.rent} / {item.rentPeriod}
            </Text>
            <Text>
              {item.details.beds} Beds, {item.details.baths} Baths
            </Text>
          </View>
        )}
      /> */}

      {/* <FlatList
        data={homes}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item._id}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/pages/HomeInfoPage/homeDetailsShowPage",
                params: { homeId: item._id }, // Pass the home ID as a query parameter
              })
            } // Navigate to the details page
          >
            {item.images.length > 0 && (
              <Image
                source={{ uri: item.images[0] }} // Display the first image
                style={styles.cardImage}
              />
            )}

            <Text style={styles.cardPrice}>Tk {item.rent}</Text>

            <Text style={styles.cardDetails}>
              {item.details.beds} beds | {item.details.baths} baths |{" "}
              {item.details.size} m²
            </Text>

            <Text style={styles.cardLocation}>
              {item.location.city}, {item.location.area}
            </Text>
          </TouchableOpacity>
        )}
      /> */}

      {/* 
<FlatList
  data={homes}
  keyExtractor={(item) => item._id}
  numColumns={2} // Display two items in a row
  columnWrapperStyle={localStyles.rowWrapper} // Optional: Add spacing between rows
  renderItem={({ item }) => (
    <TouchableOpacity
      key={item._id}
      style={localStyles.card}
      onPress={() =>
        router.push({
          pathname: "/pages/HomeInfoPage/homeDetailsShowPage",
          params: { homeId: item._id }, // Pass the home ID as a query parameter
        })
      } // Navigate to the details page
    >
      {item.images.length > 0 && (
        <Image
          source={{ uri: item.images[0] }} // Display the first image
          style={localStyles.cardImage}
        />
      )}

      <Text style={localStyles.cardPrice}>Tk {item.rent}</Text>

      <Text style={localStyles.cardDetails}>
        {item.details.beds} beds | {item.details.baths} baths |{" "}
        {item.details.size} m²
      </Text>

      <Text style={localStyles.cardLocation}>
        {item.location.city}, {item.location.area}
      </Text>
    </TouchableOpacity>
  )}
/> */}

      <FlatList
        data={homes}
        keyExtractor={(item) => item._id}
        numColumns={2} // Display two items in a row
        columnWrapperStyle={localStyles.rowWrapper} // Optional: Add spacing between rows
        renderItem={({ item, index }) => {
          // Determine if the current item is the last and the total number of items is odd
          const isLastOddItem =
            homes.length % 2 !== 0 && index === homes.length - 1;

          return (
            <TouchableOpacity
              key={item._id}
              style={[
                localStyles.card,
                isLastOddItem && localStyles.lastOddCard, // Apply special styles for the last odd item
              ]}
              onPress={() =>
                router.push({
                  pathname: "/pages/HomeInfoPage/homeDetailsShowPage",
                  params: { homeId: item._id }, // Pass the home ID as a query parameter
                })
              } // Navigate to the details page
            >
              {item.images.length > 0 && (
                <Image
                  source={{ uri: item.images[0] }} // Display the first image
                  style={[
                    localStyles.cardImage,
                    isLastOddItem && localStyles.lastOddCardImage, // Style the last odd card image
                  ]}
                />
              )}

              <Text
                style={[
                  localStyles.cardPrice,
                  isLastOddItem && localStyles.lastOddCardPrice, // Style the last odd card price
                ]}
              >
                Tk {item.rent}
              </Text>

              <Text
                style={[
                  localStyles.cardDetails,
                  isLastOddItem && localStyles.lastOddCardDetails, // Style the last odd card details
                ]}
              >
                {item.details.beds} beds | {item.details.baths} baths |{" "}
                {item.details.size} m²
              </Text>

              <Text
                style={[
                  localStyles.cardLocation,
                  isLastOddItem && localStyles.lastOddCardLocation, // Style the last odd card location
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
    backgroundColor: "black", //"#f9f9f9",
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
    flexWrap: "wrap", // Wrap to the next line
    justifyContent: "space-between", // Space between
  },

  // input: {
  //   borderWidth: 1,
  //   borderColor: "#ccc",
  //   padding: 10,
  //   marginVertical: 5,
  //   borderRadius: 5,
  // },

  inputWrapper: {
    width: "49.8%", // Ensures 2 columns per row
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
    // marginTop: 10,
    width: "100%",
  },

  inputText: {
    fontSize: 15,
    fontWeight: "bold",
    // marginTop: 15,
    marginBottom: 10,
    color: "white",
  },

  // button: {
  //   marginTop: 10,
  //   backgroundColor: "#007BFF",
  //   padding: 10,
  //   borderRadius: 5,
  //   alignItems: "center",
  // },
  // buttonText: {
  //   color: "#fff",
  //   fontWeight: "bold",
  // },
  // card: {
  //   backgroundColor: "#fff",
  //   padding: 10,
  //   marginVertical: 5,
  //   borderRadius: 5,
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 4,
  //   elevation: 2,
  // },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  // dropdown: {
  //   padding: 10,
  //   borderWidth: 1,
  //   paddingVertical: 12,
  //   paddingHorizontal: 16,
  //   borderRadius: 5,
  //   backgroundColor: "#f0f0f0",
  //   marginVertical: 5,
  // },
  // dropdownContent: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  // dropdownText: {
  //   fontSize: 16,
  //   color: "#333",
  // },
  // dropdownIcon: {
  //   fontSize: 18,
  //   color: "#666",
  // },
  // dropdownMenu: {
  //   backgroundColor: "#f0f0f0",
  //   borderRadius: 5,
  //   marginTop: 8,
  //   overflow: "hidden",
  // },
  // dropdownItem: {
  //   paddingVertical: 12,
  //   paddingHorizontal: 16,
  // },
  // selectedItem: {
  //   backgroundColor: "#e0e0e0",
  // },
  // dropdownItemText: {
  //   fontSize: 16,
  //   color: "#333",
  // },
  // selectedItemText: {
  //   fontWeight: "bold",
  // },

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
    color: "#38bdf8", //"#666",
  },
  dropdownMenu: {
    backgroundColor: "#f0f0f0", // 1f2937
    borderRadius: 8,
    marginTop: 8,
    overflow: "hidden",
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  selectedItem: {
    backgroundColor: "#38bdf8", // "#e0e0e0",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#333",
  },
  selectedItemText: {
    fontWeight: "bold",
  },

  // resetButton: {
  //   backgroundColor: "red",
  //   padding: 10,
  //   marginTop: 10,
  //   alignItems: "center",
  //   borderRadius: 5,
  // },
  // resetButtonText: {
  //   color: "white",
  //   fontWeight: "bold",
  // },

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
    // marginLeft: 5,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  // card: {
  //   // Add your card styles here
  //   marginBottom: 10,
  //   padding: 10,
  //   backgroundColor: '#fff',
  //   borderRadius: 8,
  //   shadowColor: '#000',
  //   shadowOpacity: 0.1,
  //   shadowRadius: 10,
  //   shadowOffset: { width: 0, height: 5 },
  // },
  card: {
    backgroundColor: "#2d3748", // Light background for better contrast
    padding: 12,
    borderRadius: 15, // Rounded corners
    marginBottom: 15,
    width: "100%", // Makes the card not take full width
    alignSelf: "center", // Center align for better appearance
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
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
    color: "white", // Lighter text for the details
    marginBottom: 6,
  },
  cardLocation: {
    fontSize: 14,
    color: "#fff", // A little darker for location details
    fontStyle: "italic", // Italic style for the location
    fontWeight: "bold",
  },
  // cardImage: {
  //   width: '100%',
  //   height: 200,
  //   borderRadius: 8,
  // },
  // cardPrice: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   marginTop: 10,
  // },
  // cardDetails: {
  //   fontSize: 14,
  //   color: '#666',
  //   marginTop: 5,
  // },
  // cardLocation: {
  //   fontSize: 14,
  //   color: '#666',
  //   marginTop: 5,
  // },
});

// const localStyles = StyleSheet.create({
//   rowWrapper: {
//     justifyContent: 'space-between', // Adjust spacing between items in a row
//     marginBottom: 10, // Optional: Add spacing between rows
//   },
//   // card: {
//     // flex: 1, // Take up equal space
//     // margin: 5, // Add margin between cards
//     // backgroundColor: '#fff', // Card background color
//     // borderRadius: 10, // Rounded corners
//     // overflow: 'hidden',
//     // elevation: 3, // Shadow for Android
//     // shadowColor: '#000', // Shadow for iOS
//     // shadowOffset: { width: 0, height: 2 },
//     // shadowOpacity: 0.25,
//     // shadowRadius: 3.84,
//   // },
//   // cardImage: {
//   //   width: '100%',
//   //   height: 150,
//   // },
//   // cardPrice: {
//   //   fontSize: 16,
//   //   fontWeight: 'bold',
//   //   padding: 5,
//   // },
//   // cardDetails: {
//   //   fontSize: 14,
//   //   color: '#555',
//   //   padding: 5,
//   // },
//   // cardLocation: {
//   //   fontSize: 14,
//   //   color: '#777',
//   //   padding: 5,
//   // },

// cardContainer: {
//   flexDirection: "row",
//   // marginBottom: 16,
// },
// card: {
//   // backgroundColor: "#2d3748",
//   // padding: 16,
//   // borderRadius: 8,
//   // marginRight: 16,
//   // width: 200,

//   flex: 1, // Take up equal space
//   margin: 5, // Add margin between cards
//   backgroundColor: '#2d3748', // Card background color
//   borderRadius: 10, // Rounded corners
//   overflow: 'hidden',
//   elevation: 3, // Shadow for Android
//   shadowColor: '#000', // Shadow for iOS
//   shadowOffset: { width: 0, height: 2 },
//   shadowOpacity: 0.25,
//   shadowRadius: 3.84,
// },
// cardImage: {
//   height: 100,
//   width: "100%",
//   borderRadius: 8,
//   marginBottom: 8,
// },
// cardPrice: {
//   paddingLeft: 8,
//   paddingTop: 5,
//   color: "white",
//   fontWeight: "bold",
//   marginBottom: 4,
// },
// cardDetails: {
//   paddingLeft: 8,
//   color: "white",
//   marginBottom: 4,
// },
// cardLocation: {
//   paddingLeft: 8,
//   paddingBottom: 8,
//   color: "gray",
// },

// });

const localStyles = StyleSheet.create({
  rowWrapper: {
    justifyContent: "space-between", // Adjust spacing between items in a row
    marginBottom: 10, // Optional: Add spacing between rows
  },
  // card: {
  //   flex: 1, // Take up equal space
  //   margin: 5, // Add margin between cards
  //   backgroundColor: '#2d3748', // Card background color
  //   borderRadius: 10, // Rounded corners
  //   overflow: 'hidden',
  //   elevation: 3, // Shadow for Android
  //   shadowColor: '#000', // Shadow for iOS
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  // },
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
    transition: "all 0.3s ease",
  },
  // cardImage: {
  //   width: '100%',
  //   height: 150,
  // },
  lastOddCardImage: {
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
    resizeMode: "cover",
  },
  // cardPrice: {
  //   paddingLeft: 8,
  //   paddingTop: 5,
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   padding: 5,
  // },
  lastOddCardPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  // cardDetails: {
  //   paddingLeft: 8,
  //   fontSize: 14,
  //   color: '#555',
  //   padding: 5,
  // },
  lastOddCardDetails: {
    fontSize: 16,
    color: "white",
    marginBottom: 6,
  },
  // cardLocation: {
  //   paddingLeft: 8,
  //   fontSize: 14,
  //   color: '#777',
  //   padding: 5,
  // },
  lastOddCardLocation: {
    fontSize: 14,
    color: "#fff",
    fontStyle: "italic",
    fontWeight: "bold",
  },

  cardContainer: {
    flexDirection: "row",
    // marginBottom: 16,
  },
  card: {
    // backgroundColor: "#2d3748",
    padding: 8,
    // borderRadius: 8,
    // marginRight: 16,
    // width: 200,

    flex: 1, // Take up equal space
    margin: 5, // Add margin between cards
    backgroundColor: "#2d3748", // Card background color
    borderRadius: 10, // Rounded corners
    overflow: "hidden",
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardImage: {
    height: 100,
    width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  cardPrice: {
    // paddingLeft: 8,
    // paddingTop: 5,
    color: "white",
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardDetails: {
    // paddingLeft: 8,
    color: "white",
    marginBottom: 4,
  },
  cardLocation: {
    // paddingLeft: 8,
    paddingBottom: 8,
    color: "gray",
  },
});
