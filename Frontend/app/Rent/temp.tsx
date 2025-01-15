// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

// const HomeDetailsForm = () => {
//   const [formData, setFormData] = useState({
//     userId: '',
//     PropertyType: '',
//     details: {
//       beds: 0,
//       baths: 0,
//       size: 0,
//       balcony: 0,
//       floor: 0,
//     },
//     memberRestriction: '',
//     rent: 0,
//     rentPeriod: '',
//     location: {
//       city: '',
//       area: '',
//       sector: '',
//       road: '',
//       houseNumber: '',
//     },
//     facitlities: {
//       garage: false,
//       lift: false,
//       gasSupply: false,
//       generator: false,
//       internet: false,
//       cctv: false,
//       wifi: false,
//     },
//     availability: {
//       from: '',
//       to: '',
//     },
//     images: [],
//   });

//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleSubmit = async () => {
//     try {
//       // Validate required fields
//       const requiredFields = [
//         'userId',
//         'PropertyType',
//         'details.beds',
//         'details.baths',
//         'details.size',
//         'details.balcony',
//         'details.floor',
//         'location.city',
//         'location.area',
//         'rent',
//         'rentPeriod',
//         'availability.from',
//         'availability.to',
//         'images',
//       ];

//       for (let field of requiredFields) {
//         const value = field.split('.').reduce((obj, key) => obj[key], formData);
//         if (!value) {
//           console.error(`Missing required field: ${field}`);
//           return;
//         }
//       }

//       // Prepare payload
//       const payload = {
//         ...formData,
//       };

//       console.log('Payload:', JSON.stringify(payload));

//       // Make API call using fetch
//       const response = await fetch('https://livingconnect-backend.vercel.app/home-details', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Success:', result);
//         // Optional: Reset form or navigate
//       } else {
//         console.error('Failed to submit home details');
//       }
//     } catch (error) {
//       console.error('Submit error:', error);
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Home Details</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="User ID"
//         value={formData.userId}
//         onChangeText={(text) => handleInputChange('userId', text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Property Type"
//         value={formData.PropertyType}
//         onChangeText={(text) => handleInputChange('PropertyType', text)}
//       />

//       {/* Add more input fields for the remaining form data */}

//       <Button title="Submit" onPress={handleSubmit} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     paddingHorizontal: 12,
//     marginBottom: 12,
//   },
// });

// export default HomeDetailsForm;

// // #####################################################################

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

// const HomeDetailsForm = () => {
//   const [formData, setFormData] = useState({
//     userId: '',
//     PropertyType: '',
//     details: {
//       beds: 0,
//       baths: 0,
//       size: 0,
//       balcony: 0,
//       floor: 0,
//     },
//     memberRestriction: '',
//     rent: 0,
//     rentPeriod: '',
//     location: {
//       city: '',
//       area: '',
//       sector: '',
//       road: '',
//       houseNumber: '',
//     },
//     facitlities: {
//       garage: false,
//       lift: false,
//       gasSupply: false,
//       generator: false,
//       internet: false,
//       cctv: false,
//       wifi: false,
//     },
//     availability: {
//       from: '',
//       to: '',
//     },
//     images: [],
//   });

//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleSubmit = async () => {
//     try {
//       // Validate required fields
//       const requiredFields = [
//         'userId',
//         'PropertyType',
//         'details.beds',
//         'details.baths',
//         'details.size',
//         'details.balcony',
//         'details.floor',
//         'memberRestriction',
//         'rent',
//         'rentPeriod',
//         'location.city',
//         'location.area',
//         'location.sector',
//         'location.road',
//         'location.houseNumber',
//         'facitlities.garage',
//         'facitlities.lift',
//         'facitlities.gasSupply',
//         'facitlities.generator',
//         'facitlities.internet',
//         'facitlities.cctv',
//         'facitlities.wifi',
//         'availability.from',
//         'availability.to',
//         'images',
//       ];

//       for (let field of requiredFields) {
//         const value = field.split('.').reduce((obj, key) => obj[key], formData);
//         if (!value && value !== false) {
//           console.error(`Missing required field: ${field}`);
//           return;
//         }
//       }

//       // Prepare payload
//       const payload = {
//         ...formData,
//       };

//       console.log('Payload:', JSON.stringify(payload));

//       // Make API call using fetch
//       const response = await fetch('https://livingconnect-backend.vercel.app/home-details', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Success:', result);
//         // Optional: Reset form or navigate
//       } else {
//         console.error('Failed to submit home details');
//       }
//     } catch (error) {
//       console.error('Submit error:', error);
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Home Details</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="User ID"
//         value={formData.userId}
//         onChangeText={(text) => handleInputChange('userId', text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Property Type"
//         value={formData.PropertyType}
//         onChangeText={(text) => handleInputChange('PropertyType', text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Bedrooms"
//         value={formData.details.beds.toString()}
//         onChangeText={(text) => handleInputChange('details.beds', parseInt(text))}
//         keyboardType="numeric"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Bathrooms"
//         value={formData.details.baths.toString()}
//         onChangeText={(text) => handleInputChange('details.baths', parseInt(text))}
//         keyboardType="numeric"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Size (sq. m)"
//         value={formData.details.size.toString()}
//         onChangeText={(text) => handleInputChange('details.size', parseInt(text))}
//         keyboardType="numeric"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Balcony"
//         value={formData.details.balcony.toString()}
//         onChangeText={(text) => handleInputChange('details.balcony', parseInt(text))}
//         keyboardType="numeric"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Floor"
//         value={formData.details.floor.toString()}
//         onChangeText={(text) => handleInputChange('details.floor', parseInt(text))}
//         keyboardType="numeric"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Member Restriction"
//         value={formData.memberRestriction}
//         onChangeText={(text) => handleInputChange('memberRestriction', text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Rent"
//         value={formData.rent.toString()}
//         onChangeText={(text) => handleInputChange('rent', parseFloat(text))}
//         keyboardType="numeric"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Rent Period"
//         value={formData.rentPeriod}
//         onChangeText={(text) => handleInputChange('rentPeriod', text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="City"
//         value={formData.location.city}
//         onChangeText={(text) => handleInputChange('location.city', text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Area"
//         value={formData.location.area}
//         onChangeText={(text) => handleInputChange('location.area', text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Sector"
//         value={formData.location.sector}
//         onChangeText={(text) => handleInputChange('location.sector', text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Road"
//         value={formData.location.road}
//         onChangeText={(text) => handleInputChange('location.road', text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="House Number"
//         value={formData.location.houseNumber}
//         onChangeText={(text) => handleInputChange('location.houseNumber', text)}
//       />

//       <View style={styles.facilitiesContainer}>
//         <Text style={styles.facilitiesLabel}>Facilities:</Text>
//         <View style={styles.facilitiesRow}>
//           <View style={styles.facilitiesCheckbox}>
//             <Text>Garage</Text>
//             <TextInput
//               style={styles.facilitiesInput}
//               placeholder="Garage"
//               value={formData.facitlities.garage.toString()}
//               onChangeText={(text) => handleInputChange('facitlities.garage', text === 'true')}
//             />
//           </View>
//           <View style={styles.facilitiesCheckbox}>
//             <Text>Lift</Text>
//             <TextInput
//               style={styles.facilitiesInput}
//               placeholder="Lift"
//               value={formData.facitlities.lift.toString()}
//               onChangeText={(text) => handleInputChange('facitlities.lift', text === 'true')}
//             />
//           </View>
//         </View>
//         <View style={styles.facilitiesRow}>
//           <View style={styles.facilitiesCheckbox}>
//             <Text>Gas Supply</Text>
//             <TextInput
//               style={styles.facilitiesInput}
//               placeholder="Gas Supply"
//               value={formData.facitlities.gasSupply.toString()}
//               onChangeText={(text) => handleInputChange('facitlities.gasSupply', text === 'true')}
//             />
//           </View>
//           <View style={styles.facilitiesCheckbox}>
//             <Text>Generator</Text>
//             <TextInput
//               style={styles.facilitiesInput}
//               placeholder="Generator"
//               value={formData.facitlities.generator.toString()}
//               onChangeText={(text) => handleInputChange('facitlities.generator', text === 'true')}
//             />
//           </View>
//         </View>
//         <View style={styles.facilitiesRow}>
//           <View style={styles.facilitiesCheckbox}>
//             <Text>Internet</Text>
//             <TextInput
//               style={styles.facilitiesInput}
//               placeholder="Internet"
//               value={formData.facitlities.internet.toString()}
//               onChangeText={(text) => handleInputChange('facitlities.internet', text === 'true')}
//             />
//           </View>
//           <View style={styles.facilitiesCheckbox}>
//             <Text>CCTV</Text>
//             <TextInput
//               style={styles.facilitiesInput}
//               placeholder="CCTV"
//               value={formData.facitlities.cctv.toString()}
//               onChangeText={(text) => handleInputChange('facitlities.cctv', text === 'true')}
//             />
//           </View>
//         </View>
//         <View style={styles.facilitiesRow}>
//           <View style={styles.facilitiesCheckbox}>
//             <Text>WiFi</Text>
//             <TextInput
//               style={styles.facilitiesInput}
//               placeholder="WiFi"
//               value={formData.facitlities.wifi.toString()}
//               onChangeText={(text) => handleInputChange('facitlities.wifi', text === 'true')}
//             />
//           </View>
//         </View>
//       </View>

//       <TextInput
//         style={styles.input}
//         placeholder="Availability From"
//         value={formData.availability.from}
//         onChangeText={(text) => handleInputChange('availability.from', text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Availability To"
//         value={formData.availability.to}
//         onChangeText={(text) => handleInputChange('availability.to', text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Images (comma-separated URLs)"
//         value={formData.images.join(', ')}
//         onChangeText={(text) => handleInputChange('images', text.split(',').map((url) => url.trim()))}
//       />

//       <Button title="Submit" onPress={handleSubmit} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     paddingHorizontal: 12,
//     marginBottom: 12,
//   },
//   facilitiesContainer: {
//     marginBottom: 12,
//   },
//   facilitiesLabel: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   facilitiesRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//   },
//   facilitiesCheckbox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   facilitiesInput: {
//     width: 50,
//     height: 30,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     marginLeft: 8,
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

  // // Improved dynamic input handler for nested keys
  // const handleInputChange = (path, value) => {
  //   const keys = path.split(".");
  //   setFormData((prevState) => {
  //     let newState = { ...prevState };
  //     let temp = newState;

  //     // Traverse object path
  //     for (let i = 0; i < keys.length - 1; i++) {
  //       temp[keys[i]] = { ...temp[keys[i]] };
  //       temp = temp[keys[i]];
  //     }

  //     // Assign the value
  //     temp[keys[keys.length - 1]] = value;
  //     return newState;
  //   });
  // };

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
      // const response1 = await fetch("https://livingconnect-backend.vercel.app/home-details", {
      //   method: "POST",
      //   headers: {
      //     // "Content-Type": "application/json"
      //     Authorization: `Bearer ${token}`,
      //   },
      //   body: JSON.stringify(formData),
      // },

      const response = await axios.post(
        "https://livingconnect-backend.vercel.app/houseDetails/home-details",
        // "https://livingconnect-backend.vercel.app/houseDetails/home-details",
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
        router.replace("/pages/mainPage");
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Select Property Types");

  const propertyTypes = ["rent", "sale", "sublet", "Over a Time period"];

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

      {/* Basic Info */}
      {/* <TextInput
        style={styles.input}
        placeholder="User ID"
        value={formData.userId}
        onChangeText={(text) => handleInputChange("userId", text)}
      /> */}

      {/* <TextInput
        style={styles.input}
        placeholder="Property Type"
        value={formData.PropertyType}
        onChangeText={(text) => handleInputChange("PropertyType", text)}
      /> */}
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

      {/* Home Details */}
      {/* <Text style={styles.sectionTitle}>Details</Text> */}
      {/* {["beds", "baths", "size", "balcony", "floor"].map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          keyboardType="numeric"
          value={formData.details[field].toString()}
          onChangeText={(text) =>
            handleInputChange(`details.${field}`, text.replace(/[^0-9]/g, ""))
          }
        />
      ))} */}

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
        // value={formData.details.size}
        // onChangeText={(value) =>

        value={formData.details["size"].toString()} // Ensure value is a string
        onChangeText={
          (value) => {
            const numericValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
            handleInputChange("details.size", numericValue);
          }

          // handleInputChange("size", numericValue, "details")}
        }
      />

      {/* #################################### */}
      {/* 

      <View style={styles.rowContainer}>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputLabel}>Number of Rooms:</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Bedrooms"
                  value={formData.details.beds}
                  onChangeText={(value) =>
                    handleInputChange("beds", value, "details")
                  }
                />
              </View>
      
              <View style={styles.inputWrapper}>
                <Text style={styles.inputLabel}>Number of Bathrooms</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Bathrooms"
                  value={formData.details.baths}
                  onChangeText={(value) =>
                    handleInputChange("baths", value, "details")
                  }
                />
              </View>
            </View>

      <View style={styles.rowContainer}>
              
              <View style={styles.inputWrapper}>
                <Text style={styles.inputText}>Size (sq meters):</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Size (sq meters)"
                  value={formData.details.size}
                  onChangeText={(value) =>
                    handleInputChange("size", value, "details")
                  }
                />
              </View>
      
              <View style={styles.inputWrapper}>
                <Text style={styles.inputText}>Number of Balconies:</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Balcony Size"
                  value={formData.details.balcony}
                  onChangeText={(value) =>
                    handleInputChange("balcony", value, "details")
                  }
                />
              </View>
            </View>
 */}

      {/* #################################### */}

      {/* <Text style={styles.sectionTitle}>Rent</Text>
<TextInput
        style={styles.input}
        placeholder="Rent"
        value={formData.rent}
        onChangeText={(value) => handleInputChange("PropertyType", value)}
      /> */}

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

      {/* Display Selected Value for Debugging
            <Text style={stylesRadio.debugText}>
              Selected Rent Period: {formData.rentPeriod || "None"}
            </Text> */}

      {/* 
<Text style={styles.sectionTitle}>Rent Period</Text>
<TextInput
        style={styles.input}
        placeholder="Rent Period"
        value={formData.rentPeriod}
        onChangeText={(text) => handleInputChange("PropertyType", month)}
      /> */}

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

      {/* Availability */}
      {/* <Text style={styles.sectionTitle}>Availability</Text>
      <TextInput
        style={styles.input}
        placeholder="From (e.g., 2024-01-01)"
        value={formData.availability.from}
        onChangeText={(text) => handleInputChange("availability.from", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="To (e.g., 2024-12-31)"
        value={formData.availability.to}
        onChangeText={(text) => handleInputChange("availability.to", text)}
      /> */}

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

      {/* Images */}
      {/* <Text style={styles.sectionTitle}>Images</Text> */}
      {/* <TouchableOpacity onPress={pickImage}>
                {profileImage ? (
                  <Image source={{ uri: profileImage }} style={styles.profileImage} />
                ) : (
                  <View style={styles.imagePlaceholder}>
                    <Text style={styles.imagePlaceholderText}>Pick an Image</Text>
                  </View>
                )}
              </TouchableOpacity> */}

      {/* <TextInput
        style={styles.input}
        placeholder="Image URLs (comma-separated)"
        value={formData.images.join(", ")}
        onChangeText={(text) =>
          handleInputChange(
            "images",
            text.split(",").map((url) => url.trim())
          )
        }
      /> */}

      <Text style={stylesImages.sectionTitle}>Images</Text>

      {/* Input Field for Image URLs */}
      {/* <TextInput
        style={stylesImages.input}
        placeholder="Image URLs (comma-separated)"
        value={formData.images.join(", ")}
        onChangeText={(text) =>
          handleInputChange(
            "images",
            text.split(",").map((url) => url.trim())
          )
        }
      /> */}

      {/* <TextInput
  style={styles.input}
  placeholder="Image URLs (comma-separated)"
  value={formData.images.join(", ")}
  onChangeText={(text) =>
    setFormData((prevState) => ({
      ...prevState,
      images: text.split(",").map((url) => url.trim()),
    }))
  }
/> */}

      {/* Button to Add Images */}
      <TouchableOpacity style={stylesImages.addButton} onPress={pickImage}>
        <Text style={stylesImages.buttonText}>Add Image</Text>
      </TouchableOpacity>

      {/* Display Selected Image Previews */}
      {/* <View style={stylesImages.imageContainer}>
        {formData.images.map((imageUri, index) => (
          <Image
            key={index}
            source={{ uri: imageUri }}
            style={stylesImages.imagePreview}
          />
        ))}
      </View> */}

      {/* <View style={stylesImages.imageContainer}>
  {formData.images.length > 0 ? (
    <ScrollView horizontal>
      {formData.images.map((image, index) => (
        <><Image
          key={index}
          source={{ uri: image }}
          // style={stylesImages.uploadedImage} />
          style={stylesImages.imagePreview} />
          
          <TouchableOpacity
            style={stylesImages.cancelButton}
            onPress={() => removeImage(index)}
          >
            <Text style={stylesImages.cancelButtonText}>X</Text>
          </TouchableOpacity></>
      ))}
    </ScrollView>
  ) : (
    <Text style={stylesImages.placeholderText}>No images uploaded yet.</Text>
  )}
</View> */}

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

// RentPeriodRadio Component
const RentPeriodRadio = ({ formData, handleInputChange }) => {
  const options = ["daily", "weekly", "monthly", "yearly"];

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

export default HomeDetailsForm;

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
