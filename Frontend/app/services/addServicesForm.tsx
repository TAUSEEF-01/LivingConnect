import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import axios from "axios";
import { router } from "expo-router";

const CreateServiceForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    description: "",
    serviceType: "",
    cost: "",
    location: {},
    images: [],
  });

  //   const handleInputChange = (path, value) => {
  //     const keys = path.split(".");
  //     setFormData((prevState) => {
  //       let newState = { ...prevState };
  //       let temp = newState;

  //       // Traverse object path
  //       for (let i = 0; i < keys.length - 1; i++) {
  //         temp[keys[i]] = { ...temp[keys[i]] };
  //         temp = temp[keys[i]];
  //       }

  //       // Assign the value
  //       temp[keys[keys.length - 1]] = value;
  //       return newState;
  //     });
  //   };

  const handleInputChange = (path, value) => {
    const keys = path.split(".");
    setFormData((prevState) => {
      let newState = { ...prevState };
      let temp = newState;

      // Traverse the object path
      for (let i = 0; i < keys.length - 1; i++) {
        temp[keys[i]] = { ...temp[keys[i]] };
        temp = temp[keys[i]];
      }

      // For location, if it's a city and areas, handle it separately
      if (keys[keys.length - 1] === "location") {
        // If the value is a city with areas, assign it properly
        if (!temp[keys[keys.length - 1]]) {
          temp[keys[keys.length - 1]] = {};
        }
        // Assuming value is an object with city name as key and areas as value
        Object.keys(value).forEach((city) => {
          temp[keys[keys.length - 1]][city] = value[city]; // Add city and areas
        });
      } else {
        // Default case for other fields
        temp[keys[keys.length - 1]] = value;
      }

      return newState;
    });
  };

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

  const handleSubmit = async () => {
    const token = await AsyncStorage.getItem("userToken");
    console.log("Payload:", JSON.stringify(formData));
    console.log(token);

    if (
      !formData.companyName ||
      !formData.serviceType ||
      !formData.cost ||
      Object.keys(formData.location).length === 0 ||
      formData.images.length === 0
    ) {
      Alert.alert("Validation Error", "All fields are required.");
      return;
    }

    try {
      const response = await axios.post(
        "https://livingconnect-backend.vercel.app/serviceDetails/services",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        console.log(formData);
        Alert.alert("Success", "Service created successfully!");
        router.replace("/pages/mainPage");
      } else {
        Alert.alert("Error", "Failed to create service.");
      }
    } catch (error) {
      console.error("Error creating service:", error);
      Alert.alert("Error", "An error occurred while submitting the form.");
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Select Service Types");

  const serviceType = ["Home Coloring", "Home Repair", "Home Shift"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    formData.serviceType = type;
    setIsOpen(false);
  };

  const [currentCity, setCurrentCity] = useState("");
  const [currentArea, setCurrentArea] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add Services Form</Text>

      <Text style={styles.sectionTitle}>Service Type</Text>

      <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
        <View style={styles.dropdownContent}>
          <Text style={styles.dropdownText}>{selectedType} </Text>
          <Text style={styles.dropdownIcon}>{isOpen ? "▲" : "▼"}</Text>
        </View>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdownMenu}>
          {serviceType.map((type) => (
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

      <Text style={styles.sectionTitle}>Company Name</Text>
      <TextInput
        style={styles.input}
        placeholder={"Enter Company Name"}
        placeholderTextColor="#666"
        value={formData.companyName}
        onChangeText={(text) => handleInputChange("companyName", text)}
      />

      <Text style={styles.sectionTitle}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder={"Short Description"}
        placeholderTextColor="#666"
        value={formData.description}
        onChangeText={(text) => handleInputChange("description", text)}
      />

      <Text style={styles.sectionTitle}>Cost</Text>
      <TextInput
        style={styles.input}
        placeholder="Cost"
        placeholderTextColor="#666" // Makes placeholder text white
        value={formData.cost.toString()} // Ensure value is a string
        keyboardType="numeric" // Only show numeric keyboard
        onChangeText={(value) => {
          const numericValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
          handleInputChange("cost", numericValue);
        }}
      />

      {/* Location */}
      {/* <Text style={styles.sectionTitle}>Location</Text>
            <TextInput
                style={styles.input}
                placeholder="Add Cities"
                placeholderTextColor="#666" // Makes placeholder text white
                value={formData.location}
                onChangeText={(text) => handleInputChange("location", text)}
            /> */}

      {/* <Text style={styles.sectionTitle}>Location</Text>
      <View style={styles.locationContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Cities"
          placeholderTextColor="#666" // Makes placeholder text white
          value={currentCity} // Temporary state for the current city input
          onChangeText={(text) => setCurrentCity(text)}
        />
        <TouchableOpacity
          style={styles.addLocationButton}
          onPress={() => {
            if (currentCity.trim() !== "") {
              handleInputChange("location", [
                ...formData.location,
                currentCity.trim(),
              ]);
              setCurrentCity(""); // Clear the input field
            }
          }}
        >
          <Text style={styles.addLocationButtonText}>Add City</Text>
        </TouchableOpacity>
      </View> */}

      <Text style={styles.sectionTitle}>Location</Text>
      <View style={styles.location}>
        {/* City Input */}
        <View style={styles.locationContainer}>
          <TextInput
            style={styles.locationInput}
            placeholder="Add City"
            placeholderTextColor="#666"
            value={currentCity}
            onChangeText={(text) => setCurrentCity(text)}
          />
          <TouchableOpacity
            style={styles.addLocationButton}
            onPress={() => {
              if (
                currentCity.trim() !== "" &&
                !formData.location[currentCity.trim()]
              ) {
                handleInputChange("location", {
                  ...formData.location,
                  [currentCity.trim()]: [],
                });
                setCurrentCity("");
                setSelectedCity(currentCity.trim());
              }
            }}
          >
            <Text style={styles.addLocationButtonText}>Add City</Text>
          </TouchableOpacity>
        </View>

        {/* Dropdown to Select City */}
        <View style={styles.dropdownCity}>
          <Text style={styles.dropdownLabel}>Select City:</Text>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => setCityDropdownOpen(!cityDropdownOpen)}
          >
            <Text style={styles.dropdownButtonText}>
              {selectedCity || "Select City"}
            </Text>
          </TouchableOpacity>
          {cityDropdownOpen && (
            <View style={styles.dropdownList}>
              {Object.keys(formData.location).map((city, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedCity(city);
                    setCityDropdownOpen(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{city}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Area Input under Selected City */}
        {selectedCity && formData.location[selectedCity] && (
          <View style={styles.locationContainer}>
            <TextInput
              style={styles.locationInput}
              placeholder={`Add Areas in ${selectedCity}`}
              placeholderTextColor="#666"
              value={currentArea}
              onChangeText={(text) => setCurrentArea(text)}
            />
            <TouchableOpacity
              style={styles.addLocationButton}
              onPress={() => {
                if (currentArea.trim() !== "") {
                  handleInputChange("location", {
                    ...formData.location,
                    [selectedCity]: [
                      ...formData.location[selectedCity],
                      currentArea.trim(),
                    ],
                  });
                  setCurrentArea("");
                }
              }}
            >
              <Text style={styles.addLocationButtonText}>Add Area</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Display Cities and Areas */}
        <View style={styles.locationList}>
          {Object.entries(formData.location).map(([city, areas], index) => (
            <View key={index} style={styles.locationItem}>
              <Text style={styles.locationText}>
                {city}:{" "}
                <Text style={styles.areaText}>
                  {areas.length > 0 ? areas.join(", ") : " No areas added"}
                </Text>
              </Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => {
                  const updatedLocation = { ...formData.location };
                  delete updatedLocation[city];
                  handleInputChange("location", updatedLocation);

                  // Reset selectedCity if it was the deleted city
                  if (selectedCity === city) {
                    setSelectedCity(null);
                  }
                }}
              >
                <Text style={styles.removeButtonText}>Remove City</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.sectionTitle}>Images</Text>
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

      <View style={styles.submitButtonView}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          {/* <Button title="Submit" style={styles.submitButton} onPress={handleSubmit} /> */}
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateServiceForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 45,
    backgroundColor: "black", // "#132639",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    // marginBottom: 15,
    textAlign: "center",
    color: "#66e0ff",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 6,
    paddingVertical: 4,
    color: "white",
    backgroundColor: "#66e0ff",
    // paddingVertical: 10,
    textAlign: "center",
    borderRadius: 8,
  },

  dropdown: {
    padding: 10,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    // borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#2d3748",
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
    fontSize: 18,
    color: "#38bdf8", //"#666",
    // marginLeft: 18,
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

  detailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Wrap to the next line
    justifyContent: "space-between", // Space between inputs
    // marginBottom: 12,
  },
  inputWrapper: {
    width: "49.5%", // Ensures 2 columns per row
    // marginBottom: 12,
    // marginTop: 5
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

  inputText: {
    fontSize: 15,
    fontWeight: "bold",
    // marginTop: 15,
    marginBottom: 10,
    color: "white",
  },

  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 10,
    backgroundColor: "#2d3748",
    paddingHorizontal: 8,
    borderRadius: 8,
    paddingVertical: 2,
    marginBottom: 5,
    borderColor: "black",
  },
  switch: {
    backgroundColor: "#2d3748",
  },
  switchLabel: {
    fontSize: 16,
    color: "white",
    marginLeft: 15,
  },
  submitButtonView: {
    marginBottom: 40,
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
  location: {
    backgroundColor: "#2d3748",
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
    borderColor: "black",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  locationInput: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: "white",
    color: "black",
    fontSize: 16,
    marginTop: 3,
    width: "75%",
  },
  addLocationButton: {
    marginLeft: 10,
    backgroundColor: "#38bdf8",
    padding: 10,
    borderRadius: 5,
  },
  addLocationButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  //   dropdown: {
  //     marginVertical: 10,
  //   },
  dropdownLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#007BFF",
    marginTop: 5,
  },

  dropdownCity: {
    marginBottom: 10,
  },
  dropdownButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
  dropdownButtonText: {
    color: "#333",
  },
  dropdownList: {
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 5,
  },
  //   dropdownItem: {
  //     padding: 10,
  //     borderBottomWidth: 1,
  //     borderBottomColor: "#ccc",
  //   },
  //   dropdownItemText: {
  //     color: "#333",
  //   },
  locationList: {
    marginTop: 20,
  },
  locationItem: {
    marginBottom: 10,
  },
  locationText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#38bdf8",
  },
  areaText: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
  },
  removeButton: {
    padding: 12,
    backgroundColor: "#FF4D4D",
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  removeButtonText: {
    color: "#fff",
    fontWeight: "bold",
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
    color: "white",
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
    marginBottom: 15,
    padding: 14,
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
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
    width: 200,
    height: 150,
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

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Create Service</Text>

//       <Text style={styles.label}>Service Type</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Service Type"
//         value={formData.serviceType}
//         onChangeText={(text) => handleInputChange("serviceType", text)}
//       />

//       <Text style={styles.label}>Cost</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Cost"
//         keyboardType="numeric"
//         value={formData.cost}
//         onChangeText={(text) => handleInputChange("cost", text)}
//       />

//       <Text style={styles.label}>Location</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Location"
//         value={formData.location}
//         onChangeText={(text) => handleInputChange("location", text)}
//       />

//       <Text style={styles.label}>Images</Text>
//       <TouchableOpacity style={styles.button} onPress={pickImage}>
//         <Text style={styles.buttonText}>Add Image</Text>
//       </TouchableOpacity>

//       <View style={styles.imageContainer}>
//         {formData.images.map((image, index) => (
//           <View key={index} style={styles.imageWrapper}>
//             <Image source={{ uri: image }} style={styles.image} />
//             <TouchableOpacity
//               style={styles.removeButton}
//               onPress={() => removeImage(index)}
//             >
//               <Text style={styles.removeButtonText}>Remove</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </View>

//       <Button title="Submit" onPress={handleSubmit} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: "#007BFF",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   imageContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   imageWrapper: {
//     position: "relative",
//     marginRight: 10,
//     marginBottom: 10,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 5,
//   },
//   removeButton: {
//     position: "absolute",
//     top: 5,
//     right: 5,
//     backgroundColor: "red",
//     borderRadius: 10,
//     padding: 5,
//   },
//   removeButtonText: {
//     color: "#fff",
//     fontSize: 12,
//   },
// });

// export default CreateServiceForm;
