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

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Switch,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

const HomeDetailsForm = () => {
  const [formData, setFormData] = useState({
    type: "rent", // rent, sale, or sublet
    rent: "10000",
    // images: [], // Will be updated to handle image uploads
    details: {
      beds: "5",
      baths: "5",
      size: "30",
      balcony: "4",
      floor: "5",
      parking: false,
      lift: false,
      gasSupply: false,
    },
    location: {
      city: "Dhaka",
      region: "Dhanmondi",
    },
  });

  const handleInputChange = (field, value, category = null) => {
    if (category) {
      setFormData((prevState) => ({
        ...prevState,
        [category]: {
          ...prevState[category],
          [field]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      // Validate required fields
      const requiredFields = [
        "type",
        "rent",
        "details.beds",
        "details.baths",
        "details.size",
        "details.balcony",
        "details.floor",
        "location.city",
        "location.region",
      ];

      for (let field of requiredFields) {
        const value = field.split(".").reduce((obj, key) => obj[key], formData);
        if (!value) {
          console.error(`Missing required field: ${field}`);
          return;
        }
      }

      // // Get user ID from AsyncStorage or whatever method you're using
      // const userId = null; // Replace with actual user ID retrieval method
      // if (!userId) {
      //   console.error('User not logged in');
      //   return;
      // }

      // Prepare payload
      const payload = {
        ...formData,
        // userId: userId
      };

      console.log("Payload:", JSON.stringify(payload));

      // Make API call using fetch
      const response = await fetch("http://192.168.50.242:5000/home-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        // Optional: Reset form or navigate
      } else {
        console.error("Failed to submit home details");
      }
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  // const [selectedType, setSelectedType] = useState(formData.type || "rent");

  // const handleTypeChange = (value) => {
  //   setSelectedType(value);
  //   handleInputChange("type", value);
  // };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("rent");

  const propertyTypes = ["rent", "sale", "sublet", "Over a Time period"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setIsOpen(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Home Details Form</Text>

      {/* Property Type Selection
      <View style={styles.typeContainer}>
        <Text>Property Type:</Text>
        <View style={styles.buttonContainer}>
          <Button 
            title="Rent" 
            onPress={() => handleInputChange('type', 'rent')}
            color={formData.type === 'rent' ? 'green' : 'gray'}
          />
          <Button 
            title="Sale" 
            onPress={() => handleInputChange('type', 'sale')}
            color={formData.type === 'sale' ? 'green' : 'gray'}
          />
          <Button 
            title="Sublet" 
            onPress={() => handleInputChange('type', 'sublet')}
            color={formData.type === 'sublet' ? 'green' : 'gray'}
          />
        </View>
      </View> */}

      {/* <View style={styles.container}>
      <Text style={styles.label}>Property Type:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedType}
          onValueChange={(value) => handleTypeChange(value)}
          style={styles.picker}
          dropdownIconColor="#000" // Customize dropdown arrow
        >
          <Picker.Item label="Rent" value="rent" />
          <Picker.Item label="Sale" value="sale" />
          <Picker.Item label="Sublet" value="sublet" />
        </Picker>
      </View>
    </View> */}

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
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Rent Input */}
      <Text style={styles.inputText}>Monthly Rent/Price:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter rent/price"
        value={formData.rent}
        onChangeText={(value) => handleInputChange("rent", value)}
      />

      {/* Property Details Section */}
      <Text style={styles.sectionTitle}>Property Details</Text>

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
        {/* <Text style={styles.inputText}>Number of Bedrooms:</Text> */}
        {/* <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Bedrooms"
        value={formData.details.beds}
        onChangeText={(value) => handleInputChange("beds", value, "details")}
      />
      <Text style={styles.inputText}>Number of Bathrooms:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Bathrooms"
        value={formData.details.baths}
        onChangeText={(value) => handleInputChange("baths", value, "details")}
      /> */}
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

      <Text style={styles.inputText}>Which Floor?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Floor Number"
        value={formData.details.floor}
        onChangeText={(value) => handleInputChange("floor", value, "details")}
      />

      {/* Switches */}
      <View style={styles.switchContainer}>
        <Text>Parking Available</Text>
        <Switch
          value={formData.details.parking}
          onValueChange={(value) =>
            handleInputChange("parking", value, "details")
          }
        />
      </View>
      <View style={styles.switchContainer}>
        <Text>Lift Available</Text>
        <Switch
          value={formData.details.lift}
          onValueChange={(value) => handleInputChange("lift", value, "details")}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text>Gas Supply</Text>
        <Switch
          value={formData.details.gasSupply}
          onValueChange={(value) =>
            handleInputChange("gasSupply", value, "details")
          }
        />
      </View>

      {/* Location Section */}
      <Text style={styles.sectionTitle}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="City"
        value={formData.location.city}
        onChangeText={(value) => handleInputChange("city", value, "location")}
      />
      <TextInput
        style={styles.input}
        placeholder="Region"
        value={formData.location.region}
        onChangeText={(value) => handleInputChange("region", value, "location")}
      />

      <Button title="Submit Home Details" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,

    width: "100%",
    marginVertical: 16,
  },

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

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },
  inputText: {
    fontSize: 15,
    fontWeight: "bold",
    // marginTop: 15,
    marginBottom: 10,
  },
  typeContainer: {
    marginBottom: 10,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  picker: {
    height: 50,
    width: "100%",
  },

  rowContainer: {
    flexDirection: "row", // Align items horizontally
    justifyContent: "space-between", // Space between items
    alignItems: "center", // Align items vertically in the center
    marginVertical: 10, // Add margin for spacing
  },
  inputWrapper: {
    flex: 1, // Take equal width
    marginHorizontal: 5, // Add horizontal spacing
  },
  // inputBox: {
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   padding: 10,
  //   borderRadius: 5,
  //   fontSize: 16,
  // },
  inputLabel: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 14,
    color: "#555",
  },
});

export default HomeDetailsForm;
