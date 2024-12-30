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
// //       const response = await axios.get("http://192.168.50.242:5000/houseDetails/searchHomes", {
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
// //         const response = await axios.get("http://192.168.50.242:5000/houseDetails/searchHomes", {
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
//       const response = await axios.get("http://192.168.50.242:5000/houseDetails/searchHomes", {
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
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";

export default function SearchHomes() {
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

  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Select Property Type");

  const propertyTypes = ["Rent", "Sale", "Sublet", "Over a Time period"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setFilters({ ...filters, propertyType: type });
    setIsOpen(false);
  };

  const fetchHomes = async () => {
    try {
      const response = await axios.get("http://192.168.50.242:5000/houseDetails/searchHomes", {
        params: filters,
      });
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
      {/* Filters */}
      <View style={styles.filters}>
        <TextInput
          placeholder="City"
          style={styles.input}
          value={filters.city}
          onChangeText={(text) => setFilters({ ...filters, city: text })}
        />
        <TextInput
          placeholder="Area"
          style={styles.input}
          value={filters.area}
          onChangeText={(text) => setFilters({ ...filters, area: text })}
        />
        <TextInput
          placeholder="Min Rent"
          style={styles.input}
          keyboardType="numeric"
          value={filters.rentMin}
          onChangeText={(text) => setFilters({ ...filters, rentMin: text })}
        />
        <TextInput
          placeholder="Max Rent"
          style={styles.input}
          keyboardType="numeric"
          value={filters.rentMax}
          onChangeText={(text) => setFilters({ ...filters, rentMax: text })}
        />

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
        />
        <TextInput
          placeholder="Min Size (sq.m)"
          style={styles.input}
          keyboardType="numeric"
          value={filters.sizeMin}
          onChangeText={(text) => setFilters({ ...filters, sizeMin: text })}
        />
        <TextInput
          placeholder="Max Size (sq.m)"
          style={styles.input}
          keyboardType="numeric"
          value={filters.sizeMax}
          onChangeText={(text) => setFilters({ ...filters, sizeMax: text })}
        />
        <TextInput
          placeholder="Balcony"
          style={styles.input}
          keyboardType="numeric"
          value={filters.balcony}
          onChangeText={(text) => setFilters({ ...filters, balcony: text })}
        />
        <TextInput
          placeholder="Availability To (YYYY-MM-DD)"
          style={styles.input}
          value={filters.availabilityTo}
          onChangeText={(text) => setFilters({ ...filters, availabilityTo: text })}
        />
        <TouchableOpacity style={styles.button} onPress={fetchHomes}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* List of Homes */}
      <FlatList
        data={homes}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.images[0] }} style={styles.image} />
            <Text style={styles.title}>{item.PropertyType}</Text>
            <Text>{item.location.city}, {item.location.area}</Text>
            <Text>Rent: ${item.rent} / {item.rentPeriod}</Text>
            <Text>{item.details.beds} Beds, {item.details.baths} Baths</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  filters: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
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
  dropdown: {
    padding: 10,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    marginVertical: 5,
  },
  dropdownContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  dropdownIcon: {
    fontSize: 18,
    color: "#666",
  },
  dropdownMenu: {
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginTop: 8,
    overflow: "hidden",
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  selectedItem: {
    backgroundColor: "#e0e0e0",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#333",
  },
  selectedItemText: {
    fontWeight: "bold",
  },
});
