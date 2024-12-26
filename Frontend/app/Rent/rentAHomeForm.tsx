// // import React, { useState } from 'react';
// // import { View, TextInput, Text, Button, StyleSheet, ScrollView } from 'react-native';
// // import * as ImagePicker from 'expo-image-picker';

// // const HomeDetailsForm = () => {
// //   const [userId, setUserId] = useState('');
// //   const [images, setImages] = useState([]);
// //   const [type, setType] = useState('');
// //   const [rent, setRent] = useState('');
// //   const [details, setDetails] = useState({
// //     beds: '',
// //     baths: '',
// //     size: '',
// //     balcony: '',
// //     floor: '',
// //     parking: false,
// //     lift: false,
// //     gasSupply: false,
// //   });
// //   const [location, setLocation] = useState({
// //     city: '',
// //     region: '',
// //   });

// //   const handleSelectImage = async () => {
// //     let result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //       allowsEditing: true,
// //       aspect: [4, 3],
// //       quality: 1,
// //     });

// //     if (!result.cancelled) {
// //       setImages([...images, result.uri]); // Add the selected image to the list of images
// //     }
// //   };

// //   const handleSubmit = async () => {
// //     const homeDetails = {
// //       userId,
// //       images,
// //       type,
// //       rent,
// //       details,
// //       location,
// //     };

// //     try {
// //       const response = await fetch('http://192.168.50.242:5000/updateHomeDetails', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(homeDetails),
// //       });

// //       const result = await response.json();
// //       if (response.ok) {
// //         alert('Home details updated successfully!');
// //       } else {
// //         alert(`Error: ${result.message}`);
// //       }
// //     } catch (error) {
// //       console.error('Error updating home details:', error);
// //       alert('Error updating home details!');
// //     }
// //   };

// //   return (
// //     <ScrollView style={styles.container}>
// //       <Text>Home Details Form</Text>
// // {/*
// //       <Text>User ID</Text>
// //       <TextInput style={styles.input} value={userId} onChangeText={setUserId} placeholder="Enter User ID" /> */}

// //       <Text>Type (Rent, Sale, Sublet)</Text>
// //       <TextInput style={styles.input} value={type} onChangeText={setType} placeholder="Enter Type" />

// //       <Text>Rent</Text>
// //       <TextInput style={styles.input} value={rent} onChangeText={setRent} placeholder="Enter Rent" keyboardType="numeric" />

// //       <Text>Details</Text>
// //       <TextInput style={styles.input} value={details.beds} onChangeText={(value) => setDetails({ ...details, beds: value })} placeholder="Enter Number of Beds" keyboardType="numeric" />
// //       <TextInput style={styles.input} value={details.baths} onChangeText={(value) => setDetails({ ...details, baths: value })} placeholder="Enter Number of Baths" keyboardType="numeric" />
// //       <TextInput style={styles.input} value={details.size} onChangeText={(value) => setDetails({ ...details, size: value })} placeholder="Enter Size (m²)" keyboardType="numeric" />
// //       <TextInput style={styles.input} value={details.balcony} onChangeText={(value) => setDetails({ ...details, balcony: value })} placeholder="Enter Number of Balconies" keyboardType="numeric" />
// //       <TextInput style={styles.input} value={details.floor} onChangeText={(value) => setDetails({ ...details, floor: value })} placeholder="Enter Floor Number" keyboardType="numeric" />

// //       <Text>Location</Text>
// //       <TextInput style={styles.input} value={location.city} onChangeText={(value) => setLocation({ ...location, city: value })} placeholder="Enter City" />
// //       <TextInput style={styles.input} value={location.region} onChangeText={(value) => setLocation({ ...location, region: value })} placeholder="Enter Region" />

// //       <Button title="Select Images" onPress={handleSelectImage} />
// //       <Text>Selected Images: {images.length}</Text>

// //       <Button title="Submit" onPress={handleSubmit} />
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //   },
// //   input: {
// //     borderWidth: 1,
// //     marginBottom: 10,
// //     padding: 5,
// //     fontSize: 16,
// //   },
// // });

// // export default HomeDetailsForm;

// import React, { useState } from 'react';
// import { View, TextInput, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import Modal from 'react-native-modal';

// const HomeDetailsForm = () => {
//   const [userId, setUserId] = useState('');
//   const [images, setImages] = useState([]);
//   const [type, setType] = useState('');  // This state will hold the selected type
//   const [isModalVisible, setModalVisible] = useState(false); // To manage modal visibility
//   const [rent, setRent] = useState('');
//   const [details, setDetails] = useState({
//     beds: '',
//     baths: '',
//     size: '',
//     balcony: '',
//     floor: '',
//     parking: false,
//     lift: false,
//     gasSupply: false,
//   });
//   const [location, setLocation] = useState({
//     city: '',
//     region: '',
//   });

//   const handleSelectImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setImages([...images, result.uri]); // Add the selected image to the list of images
//     }
//   };

//   const handleSubmit = async () => {
//     const homeDetails = {
//       userId,
//       images,
//       type,
//       rent,
//       details,
//       location,
//     };

//     try {
//       const response = await fetch('https://your-backend-url.com/api/updateHomeDetails', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(homeDetails),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert('Home details updated successfully!');
//       } else {
//         alert(`Error: ${result.message}`);
//       }
//     } catch (error) {
//       console.error('Error updating home details:', error);
//       alert('Error updating home details!');
//     }
//   };

//   // Function to toggle modal visibility
//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   // Function to handle type selection
//   const handleTypeSelect = (selectedType) => {
//     setType(selectedType);
//     toggleModal(); // Close modal after selecting
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text>Home Details Form</Text>

//       <Text>User ID</Text>
//       <TextInput style={styles.input} value={userId} onChangeText={setUserId} placeholder="Enter User ID" />

//       <Text>Type (Rent, Sale, Sublet)</Text>
//       <TouchableOpacity style={styles.dropdownButton} onPress={toggleModal}>
//         <Text style={styles.dropdownText}>{type || "Select Type"}</Text>
//       </TouchableOpacity>

//       {/* Modal for Type selection */}
//       <Modal
//         isVisible={isModalVisible}
//         onBackdropPress={toggleModal}
//         style={styles.modalContainer}
//       >
//         <View style={styles.modalContent}>
//           <TouchableOpacity onPress={() => handleTypeSelect('rent')}>
//             <Text style={styles.modalOption}>Rent</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleTypeSelect('sale')}>
//             <Text style={styles.modalOption}>Sale</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleTypeSelect('sublet')}>
//             <Text style={styles.modalOption}>Sublet</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>

//       <Text>Rent</Text>
//       <TextInput style={styles.input} value={rent} onChangeText={setRent} placeholder="Enter Rent" keyboardType="numeric" />

//       <Text>Details</Text>
//       <TextInput style={styles.input} value={details.beds} onChangeText={(value) => setDetails({ ...details, beds: value })} placeholder="Enter Number of Beds" keyboardType="numeric" />
//       <TextInput style={styles.input} value={details.baths} onChangeText={(value) => setDetails({ ...details, baths: value })} placeholder="Enter Number of Baths" keyboardType="numeric" />
//       <TextInput style={styles.input} value={details.size} onChangeText={(value) => setDetails({ ...details, size: value })} placeholder="Enter Size (m²)" keyboardType="numeric" />
//       <TextInput style={styles.input} value={details.balcony} onChangeText={(value) => setDetails({ ...details, balcony: value })} placeholder="Enter Number of Balconies" keyboardType="numeric" />
//       <TextInput style={styles.input} value={details.floor} onChangeText={(value) => setDetails({ ...details, floor: value })} placeholder="Enter Floor Number" keyboardType="numeric" />

//       <Text>Location</Text>
//       <TextInput style={styles.input} value={location.city} onChangeText={(value) => setLocation({ ...location, city: value })} placeholder="Enter City" />
//       <TextInput style={styles.input} value={location.region} onChangeText={(value) => setLocation({ ...location, region: value })} placeholder="Enter Region" />

//       <Button title="Select Images" onPress={handleSelectImage} />
//       <Text>Selected Images: {images.length}</Text>

//       <Button title="Submit" onPress={handleSubmit} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 5,
//     fontSize: 16,
//   },
//   dropdownButton: {
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 10,
//   },
//   dropdownText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   modalContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     width: 200,
//   },
//   modalOption: {
//     fontSize: 18,
//     padding: 10,
//   },
// });

// export default HomeDetailsForm;

// // ###############################################
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   ScrollView,
//   Switch,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";

// import { Picker } from "@react-native-picker/picker";

// const HomeDetailsForm = () => {
//   const [formData, setFormData] = useState({
//     type: "rent", // rent, sale, or sublet
//     rent: "10000",
//     // images: [], // Will be updated to handle image uploads
//     details: {
//       beds: "5",
//       baths: "5",
//       size: "30",
//       balcony: "4",
//       floor: "5",
//       parking: false,
//       lift: false,
//       gasSupply: false,
//     },
//     location: {
//       city: "Dhaka",
//       region: "Dhanmondi",
//     },
//   });

//   const handleInputChange = (field, value, category = null) => {
//     if (category) {
//       setFormData((prevState) => ({
//         ...prevState,
//         [category]: {
//           ...prevState[category],
//           [field]: value,
//         },
//       }));
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         [field]: value,
//       }));
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       // Validate required fields
//       const requiredFields = [
//         "type",
//         "rent",
//         "details.beds",
//         "details.baths",
//         "details.size",
//         "details.balcony",
//         "details.floor",
//         "location.city",
//         "location.region",
//       ];

//       for (let field of requiredFields) {
//         const value = field.split(".").reduce((obj, key) => obj[key], formData);
//         if (!value) {
//           console.error(`Missing required field: ${field}`);
//           return;
//         }
//       }

//       // // Get user ID from AsyncStorage or whatever method you're using
//       // const userId = null; // Replace with actual user ID retrieval method
//       // if (!userId) {
//       //   console.error('User not logged in');
//       //   return;
//       // }

//       // Prepare payload
//       const payload = {
//         ...formData,
//         // userId: userId
//       };

//       console.log("Payload:", JSON.stringify(payload));

//       // Make API call using fetch
//       const response = await fetch("http://192.168.50.242:5000/home-details", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log("Success:", result);
//         // Optional: Reset form or navigate
//       } else {
//         console.error("Failed to submit home details");
//       }
//     } catch (error) {
//       console.error("Submit error:", error);
//     }
//   };

//   // const [selectedType, setSelectedType] = useState(formData.type || "rent");

//   // const handleTypeChange = (value) => {
//   //   setSelectedType(value);
//   //   handleInputChange("type", value);
//   // };

//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedType, setSelectedType] = useState("rent");

//   const propertyTypes = ["rent", "sale", "sublet", "Over a Time period"];

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleTypeSelect = (type) => {
//     setSelectedType(type);
//     setIsOpen(false);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Home Details Form</Text>

//       {/* Property Type Selection
//       <View style={styles.typeContainer}>
//         <Text>Property Type:</Text>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="Rent"
//             onPress={() => handleInputChange('type', 'rent')}
//             color={formData.type === 'rent' ? 'green' : 'gray'}
//           />
//           <Button
//             title="Sale"
//             onPress={() => handleInputChange('type', 'sale')}
//             color={formData.type === 'sale' ? 'green' : 'gray'}
//           />
//           <Button
//             title="Sublet"
//             onPress={() => handleInputChange('type', 'sublet')}
//             color={formData.type === 'sublet' ? 'green' : 'gray'}
//           />
//         </View>
//       </View> */}

//       {/* <View style={styles.container}>
//       <Text style={styles.label}>Property Type:</Text>
//       <View style={styles.pickerContainer}>
//         <Picker
//           selectedValue={selectedType}
//           onValueChange={(value) => handleTypeChange(value)}
//           style={styles.picker}
//           dropdownIconColor="#000" // Customize dropdown arrow
//         >
//           <Picker.Item label="Rent" value="rent" />
//           <Picker.Item label="Sale" value="sale" />
//           <Picker.Item label="Sublet" value="sublet" />
//         </Picker>
//       </View>
//     </View> */}

//       <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
//         <Text style={styles.dropdownText}>{selectedType}</Text>
//         <Text style={styles.dropdownIcon}>{isOpen ? "▲" : "▼"}</Text>
//       </TouchableOpacity>
//       {isOpen && (
//         <View style={styles.dropdownMenu}>
//           {propertyTypes.map((type) => (
//             <TouchableOpacity
//               key={type}
//               style={[
//                 styles.dropdownItem,
//                 selectedType === type && styles.selectedItem,
//               ]}
//               onPress={() => handleTypeSelect(type)}
//             >
//               <Text
//                 style={[
//                   styles.dropdownItemText,
//                   selectedType === type && styles.selectedItemText,
//                 ]}
//               >
//                 {type}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}

//       {/* Rent Input */}
//       <Text style={styles.inputText}>Monthly Rent/Price:</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         placeholder="Enter rent/price"
//         value={formData.rent}
//         onChangeText={(value) => handleInputChange("rent", value)}
//       />

//       {/* Property Details Section */}
//       <Text style={styles.sectionTitle}>Property Details</Text>

//       <View style={styles.rowContainer}>
//         <View style={styles.inputWrapper}>
//           <Text style={styles.inputLabel}>Number of Rooms:</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             placeholder="Bedrooms"
//             value={formData.details.beds}
//             onChangeText={(value) =>
//               handleInputChange("beds", value, "details")
//             }
//           />
//         </View>

//         <View style={styles.inputWrapper}>
//           <Text style={styles.inputLabel}>Number of Bathrooms</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             placeholder="Bathrooms"
//             value={formData.details.baths}
//             onChangeText={(value) =>
//               handleInputChange("baths", value, "details")
//             }
//           />
//         </View>
//       </View>

//       <View style={styles.rowContainer}>
//         {/* <Text style={styles.inputText}>Number of Bedrooms:</Text> */}
//         {/* <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         placeholder="Bedrooms"
//         value={formData.details.beds}
//         onChangeText={(value) => handleInputChange("beds", value, "details")}
//       />
//       <Text style={styles.inputText}>Number of Bathrooms:</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         placeholder="Bathrooms"
//         value={formData.details.baths}
//         onChangeText={(value) => handleInputChange("baths", value, "details")}
//       /> */}
//         <View style={styles.inputWrapper}>
//           <Text style={styles.inputText}>Size (sq meters):</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             placeholder="Size (sq meters)"
//             value={formData.details.size}
//             onChangeText={(value) =>
//               handleInputChange("size", value, "details")
//             }
//           />
//         </View>

//         <View style={styles.inputWrapper}>
//           <Text style={styles.inputText}>Number of Balconies:</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             placeholder="Balcony Size"
//             value={formData.details.balcony}
//             onChangeText={(value) =>
//               handleInputChange("balcony", value, "details")
//             }
//           />
//         </View>
//       </View>

//       <Text style={styles.inputText}>Which Floor?</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         placeholder="Floor Number"
//         value={formData.details.floor}
//         onChangeText={(value) => handleInputChange("floor", value, "details")}
//       />

//       {/* Switches */}
//       <View style={styles.switchContainer}>
//         <Text>Parking Available</Text>
//         <Switch
//           value={formData.details.parking}
//           onValueChange={(value) =>
//             handleInputChange("parking", value, "details")
//           }
//         />
//       </View>
//       <View style={styles.switchContainer}>
//         <Text>Lift Available</Text>
//         <Switch
//           value={formData.details.lift}
//           onValueChange={(value) => handleInputChange("lift", value, "details")}
//         />
//       </View>
//       <View style={styles.switchContainer}>
//         <Text>Gas Supply</Text>
//         <Switch
//           value={formData.details.gasSupply}
//           onValueChange={(value) =>
//             handleInputChange("gasSupply", value, "details")
//           }
//         />
//       </View>

//       {/* Location Section */}
//       <Text style={styles.sectionTitle}>Location</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="City"
//         value={formData.location.city}
//         onChangeText={(value) => handleInputChange("city", value, "location")}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Region"
//         value={formData.location.region}
//         onChangeText={(value) => handleInputChange("region", value, "location")}
//       />

//       <Button title="Submit Home Details" onPress={handleSubmit} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flexGrow: 1,

//     width: "100%",
//     marginVertical: 16,
//   },

//   dropdown: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     backgroundColor: "#f0f0f0",
//     borderRadius: 8,
//   },
//   dropdownText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   dropdownIcon: {
//     fontSize: 18,
//     color: "#666",
//   },
//   dropdownMenu: {
//     backgroundColor: "#f0f0f0",
//     borderRadius: 8,
//     marginTop: 8,
//     overflow: "hidden",
//   },
//   dropdownItem: {
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
//   selectedItem: {
//     backgroundColor: "#e0e0e0",
//   },
//   dropdownItemText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   selectedItemText: {
//     fontWeight: "bold",
//   },

//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   switchContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop: 25,
//     marginBottom: 10,
//   },
//   inputText: {
//     fontSize: 15,
//     fontWeight: "bold",
//     // marginTop: 15,
//     marginBottom: 10,
//   },
//   typeContainer: {
//     marginBottom: 10,
//   },

//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   pickerContainer: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     backgroundColor: "#fff",
//     overflow: "hidden",
//   },
//   picker: {
//     height: 50,
//     width: "100%",
//   },

//   rowContainer: {
//     flexDirection: "row", // Align items horizontally
//     justifyContent: "space-between", // Space between items
//     alignItems: "center", // Align items vertically in the center
//     marginVertical: 10, // Add margin for spacing
//   },
//   inputWrapper: {
//     flex: 1, // Take equal width
//     marginHorizontal: 5, // Add horizontal spacing
//   },
//   // inputBox: {
//   //   borderWidth: 1,
//   //   borderColor: '#ccc',
//   //   padding: 10,
//   //   borderRadius: 5,
//   //   fontSize: 16,
//   // },
//   inputLabel: {
//     textAlign: "center",
//     marginTop: 5,
//     fontSize: 14,
//     color: "#555",
//   },
// });

// export default HomeDetailsForm;







import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  Platform,
  Alert,
  Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import axios from "axios";
import { router } from "expo-router";

const HomeDetailsForm = () => {
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Please grant permission to access photos."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
      base64: true,
    });

    if (!result.canceled) {
      // Compress and resize the image
      const manipResult = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 500 } }],
        { compress: 0.7, base64: true }
      );

      // Use handleInputChange to update the images array
      handleInputChange("images", [
        ...formData.images,
        `data:image/jpeg;base64,${manipResult.base64}`,
      ]);
    }
  };

  // Function to remove an image by index
  const removeImage = (indexToRemove) => {
    setFormData((prevState) => ({
      ...prevState,
      images: prevState.images.filter((_, index) => index !== indexToRemove),
    }));
  };

  // image upload end

  const [formData, setFormData] = useState({
    // userId: "",
    PropertyType: "",
    details: { beds: "", baths: "", size: "", balcony: "", floor: "" },
    memberRestriction: "",
    rent: "",
    rentPeriod: "",
    location: { city: "", area: "", sector: "", road: "", houseNumber: "" },
    facilities: {
      garage: false,
      lift: false,
      gasSupply: false,
      generator: false,
      internet: false,
      cctv: false,
      wifi: false,
    },
    availability: { from: "", to: "" },
    images: [],
  });

  // Dynamic input handler for nested keys
  const handleInputChange = (path, value) => {
    const keys = path.split(".");
    setFormData((prevState) => {
      let newState = { ...prevState };
      let temp = newState;

      // Traverse object path
      for (let i = 0; i < keys.length - 1; i++) {
        temp[keys[i]] = { ...temp[keys[i]] };
        temp = temp[keys[i]];
      }

      // Assign the value
      temp[keys[keys.length - 1]] = value;
      return newState;
    });
  };

  const handleSubmit = async () => {
    console.log("Payload:", JSON.stringify(formData));

    const token = await AsyncStorage.getItem("userToken");

    try {
      const response = await axios.post(
        "http://192.168.50.242:5000/houseDetails/home-details",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // );
      if (response.status === 200) {
        console.log("Form submitted successfully");
        Alert.alert("Form submitted successfully");
        router.replace("/pages/mainPage");
      } else {
        console.error("Submission failed");
        Alert.alert("Fill up all the fields");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Select Property Types");

  const propertyTypes = ["Rent", "Sale", "Sublet", "Over a Time period"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    formData.PropertyType = type;
    setIsOpen(false);
  };

  // calender handle function
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  const onChangeDate = (event, selectedDate, type) => {
    const currentDate = selectedDate || new Date();
    if (type === "from") {
      setShowFromPicker(Platform.OS === "ios");
      handleInputChange(
        "availability.from",
        currentDate.toISOString().split("T")[0]
      );
    } else {
      setShowToPicker(Platform.OS === "ios");
      handleInputChange(
        "availability.to",
        currentDate.toISOString().split("T")[0]
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Home Details</Text>

      <Text style={styles.sectionTitle}>Property Type</Text>
      <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
        <Text style={styles.dropdownText}>{selectedType}</Text>
        <Text style={styles.dropdownIcon}>{isOpen ? "▲" : "▼"}</Text>
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
                {/* {formData.PropertyType = type ? type : "rent"} */}
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <Text style={styles.sectionTitle}>Details</Text>
      <View style={styles.detailsContainer}>
        {["beds", "baths", "balcony", "floor"].map((field, index) => (
          <View key={field} style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              keyboardType="numeric"
              value={formData.details[field].toString()}
              onChangeText={(text) =>
                handleInputChange(
                  `details.${field}`,
                  text.replace(/[^0-9]/g, "")
                )
              }
            />
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Size (sq meters)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric" // Only show numeric keyboard
        placeholder="Size (sq meters)"
        value={formData.details["size"].toString()} // Ensure value is a string
        onChangeText={(value) => {
          const numericValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
          handleInputChange("details.size", numericValue);
        }}
      />

      <Text style={styles.sectionTitle}>Rent</Text>
      <TextInput
        style={styles.input}
        placeholder="Rent"
        value={formData.rent.toString()} // Ensure value is a string
        keyboardType="numeric" // Only show numeric keyboard
        onChangeText={(value) => {
          const numericValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
          handleInputChange("rent", numericValue);
        }}
      />

      {/* <Text style={styles.sectionTitle}>Rent Period</Text> */}
      <RentPeriodRadio
        formData={formData}
        handleInputChange={handleInputChange}
      />


      <MemberRestrictions
        formData={formData}
        handleInputChange={handleInputChange}
      />

      {/* Location */}
      <Text style={styles.sectionTitle}>Location</Text>
      {["city", "area", "sector", "road", "houseNumber"].map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={formData.location[field]}
          onChangeText={(text) => handleInputChange(`location.${field}`, text)}
        />
      ))}

      {/* Facilities */}
      <Text style={styles.sectionTitle}>Facilities</Text>
      {Object.keys(formData.facilities).map((facility) => (
        <View key={facility} style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            {facility.charAt(0).toUpperCase() + facility.slice(1)}
          </Text>
          <Switch
            value={formData.facilities[facility]}
            onValueChange={(value) =>
              handleInputChange(`facilities.${facility}`, value)
            }
          />
        </View>
      ))}

      <View>
        <Text style={stylesDate.sectionTitle}>Availability</Text>

        {/* From Date Picker */}
        <TouchableOpacity
          onPress={() => setShowFromPicker(true)}
          style={stylesDate.dateInput}
        >
          <Text style={stylesDate.dateText}>
            {formData.availability.from || "From (Select Date)"}
          </Text>
        </TouchableOpacity>
        {showFromPicker && (
          <DateTimePicker
            value={
              formData.availability.from
                ? new Date(formData.availability.from)
                : new Date()
            }
            mode="date"
            display="default"
            onChange={(event, date) => onChangeDate(event, date, "from")}
          />
        )}

        {/* To Date Picker */}
        <TouchableOpacity
          onPress={() => setShowToPicker(true)}
          style={stylesDate.dateInput}
        >
          <Text style={stylesDate.dateText}>
            {formData.availability.to || "To (Select Date)"}
          </Text>
        </TouchableOpacity>
        {showToPicker && (
          <DateTimePicker
            value={
              formData.availability.to
                ? new Date(formData.availability.to)
                : new Date()
            }
            mode="date"
            display="default"
            onChange={(event, date) => onChangeDate(event, date, "to")}
          />
        )}
      </View>

      <Text style={stylesImages.sectionTitle}>Images</Text>

      {/* Button to Add Images */}
      <TouchableOpacity style={stylesImages.addButton} onPress={pickImage}>
        <Text style={stylesImages.buttonText}>Add Image</Text>
      </TouchableOpacity>

      {/* Display Selected Image Previews */}
      <View style={stylesImages.imageContainer}>
        {formData.images.length > 0 ? (
          <ScrollView horizontal>
            {formData.images.map((image, index) => (
              <View key={index} style={stylesImages.imageWrapper}>
                {/* Image Preview */}
                <Image
                  source={{ uri: image }}
                  style={stylesImages.imagePreview}
                />

                {/* Cancel Button */}
                <TouchableOpacity
                  style={stylesImages.cancelButton}
                  onPress={() => removeImage(index)}
                >
                  <Text style={stylesImages.cancelButtonText}>X</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        ) : (
          <Text style={stylesImages.placeholderText}>
            No images uploaded yet.
          </Text>
        )}
      </View>

      {/* <View>  */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        {/* <Button title="Submit" style={styles.submitButton} onPress={handleSubmit} /> */}
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      {/* </View> */}
    </ScrollView>
  );
};

export default HomeDetailsForm;

// RentPeriodRadio Component
const RentPeriodRadio = ({ formData, handleInputChange }) => {
  const options = ["Daily", "Weekly", "Monthly", "Yearly"];

  return (
    <View style={stylesRadio.inputContainer}>
      <Text style={stylesRadio.sectionTitle}>Rent Period</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={stylesRadio.radioContainer}
          onPress={() => handleInputChange("rentPeriod", option)}
        >
          <View style={stylesRadio.radioCircle}>
            {formData.rentPeriod === option && (
              <View style={stylesRadio.radioSelected} />
            )}
          </View>
          <Text style={stylesRadio.radioLabel}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


// RentPeriodRadio Component
const MemberRestrictions = ({ formData, handleInputChange }) => {
  const options = ["No Restriction", "Only Family", "Only Male", "Only Female"];

  return (
    <View style={stylesRadio.inputContainer}>
      <Text style={stylesRadio.sectionTitle}>Member Restriction</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={stylesRadio.radioContainer}
          onPress={() => handleInputChange("memberRestriction", option)}
        >
          <View style={stylesRadio.radioCircle}>
            {formData.memberRestriction === option && (
              <View style={stylesRadio.radioSelected} />
            )}
          </View>
          <Text style={stylesRadio.radioLabel}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const stylesRadio = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  inputContainer: {
    marginBottom: 24,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#007BFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#007BFF",
  },
  radioLabel: {
    fontSize: 16,
    color: "#333",
  },
  debugText: {
    marginTop: 16,
    fontSize: 16,
    color: "#333",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexGrow: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
    // width: "100%",
    // marginVertical: 16,
  },
  // title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 12 },

  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
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
    borderRadius: 8,
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

  detailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Wrap to the next line
    justifyContent: "space-between", // Space between inputs
    marginBottom: 12,
  },
  inputWrapper: {
    width: "48%", // Ensures 2 columns per row
    marginBottom: 12,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },

  // input: {
  //   borderWidth: 1,
  //   borderColor: "#ddd",
  //   padding: 10,
  //   borderRadius: 5,
  //   marginBottom: 10,
  // },

  // rowContainer: {
  //   flexDirection: "row", // Align items horizontally
  //   justifyContent: "space-between", // Space between items
  //   alignItems: "center", // Align items vertically in the center
  //   marginVertical: 10, // Add margin for spacing
  // },
  // inputWrapper: {
  //   flex: 1, // Take equal width
  //   marginHorizontal: 5, // Add horizontal spacing
  // },
  inputText: {
    fontSize: 15,
    fontWeight: "bold",
    // marginTop: 15,
    marginBottom: 10,
  },
  // inputBox: {
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   padding: 10,
  //   borderRadius: 5,
  //   fontSize: 16,
  // },
  // inputLabel: {
  //   textAlign: "center",
  //   marginTop: 5,
  //   fontSize: 14,
  //   color: "#555",
  // },

  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
  },
  submitButton: {
    // marginTop: 20,
    marginBottom: 40,
    marginTop: 30,
    padding: 12,
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

const stylesDate = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  dateInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 12,
    justifyContent: "center",
    backgroundColor: "#fff",
    marginBottom: 12,
  },
  dateText: {
    color: "#000",
  },
});

const stylesImages = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageWrapper: {
    position: "relative",
    marginRight: 10,
  },

  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  placeholderText: {
    color: "gray",
    fontSize: 16,
  },

  cancelButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
