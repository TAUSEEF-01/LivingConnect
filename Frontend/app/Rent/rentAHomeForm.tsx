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
import MapView , { Marker } from "react-native-maps";

const HomeDetailsForm = () => {
  const pickImage = async () => {
    // <-- tamzid
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
    PropertyType: "",
    details: { beds: "", baths: "", size: "", balcony: "", floor: "" },
    memberRestriction: "",
    rent: "",
    rentPeriod: "",
    location: { latitude: 0, longitude: 0, area: "" , city: "" },
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
    console.log("Token:", token);
    try {
      const response = await axios.post(
        "http://192.168.0.103:5000/houseDetails/home-details", //192.168.192.42
        // "http://192.168.0.103:5000/houseDetails/home-details", //192.168.192.42
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
    const [locationDetails, setLocationDetails] = useState({
      latitude: 23.8103,
      longitude: 90.4125,
      area: "",
      city: "",
    });
    interface LocationAddress {
      neighbourhood?: string;
      suburb?: string;
      city?: string;
      municipality?: string;
      state?: string;
      postcode?: string;
      country?: string;
    }
    interface NominatimResponse {
      place_id: number;
      lat: string;
      lon: string;
      display_name: string;
      address: LocationAddress;
    }
    const handleMapPress = async (event: { nativeEvent: { coordinate: { latitude: number; longitude: number } } }) => {
      const { latitude, longitude } = event.nativeEvent.coordinate;
      console.log("Map Pressed:", latitude, longitude);
    
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=en`,
          {
            headers: {
              "User-Agent": "LivingConnect (nafim1703@gmail.com)", // Replace with your app name and email
            },
          }
        );
    
        // Check for response status
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("Reverse Geocoding Response:", response);
        // Parse the JSON response
        const data = await response.json();
        console.log("Reverse Geocoding Response:", data);
    
        // Update state with location details
        setLocationDetails({
          latitude,
          longitude,
          area: (data.address.neighbourhood || data.address.suburb || "unknown area").toLowerCase(),
      city: (data.address.city || data.address.municipality || "unknown city").toLowerCase(),
        });
      } catch (error) {
        console.error("Error fetching location details:", error);
      }
      formData.location = locationDetails;
    };
    

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Home Details Form</Text>

      <Text style={styles.sectionTitle}>Property Type</Text>

      <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
        <View style={styles.dropdownContent}>
          <Text style={styles.dropdownText}>{selectedType} </Text>
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
              placeholderTextColor="#666" // Makes placeholder text white
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
        placeholderTextColor="#666" // Makes placeholder text white
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
        placeholderTextColor="#666" // Makes placeholder text white
        value={formData.rent.toString()} // Ensure value is a string
        keyboardType="numeric" // Only show numeric keyboard
        onChangeText={(value) => {
          const numericValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
          handleInputChange("rent", numericValue);
        }}
      />

      {/* <Text style={styles.sectionTitle}>Rent Period</Text> */}
      <Text style={styles.sectionTitle}>Rent Period</Text>
      <RentPeriodRadio
        formData={formData}
        handleInputChange={handleInputChange}
      />

      <Text style={styles.sectionTitle}>Member Restriction</Text>
      <MemberRestrictions
        formData={formData}
        handleInputChange={handleInputChange}
      />

      {/* Location */}
      <Text style={styles.sectionTitle}>Location</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 23.8103,
          longitude: 90.4125,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}
      >
        <Marker
          coordinate={{
            latitude: locationDetails.latitude,
            longitude: locationDetails.longitude,
          }}
        />
      </MapView>
      <View style={styles.details}>
        <Text>Latitude: {locationDetails.latitude}</Text>
        <Text>Longitude: {locationDetails.longitude}</Text>
        <Text>Area: {locationDetails.area}</Text>
        <Text>City: {locationDetails.city}</Text>
      </View>
      {/* Facilities */}
      <Text style={styles.sectionTitle}>Facilities</Text>
      {Object.keys(formData.facilities).map((facility) => (
        <View key={facility} style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            {facility.charAt(0).toUpperCase() + facility.slice(1)}
          </Text>
          <Switch
            style={styles.switch}
            value={formData.facilities[facility]}
            onValueChange={(value) =>
              handleInputChange(`facilities.${facility}`, value)
            }
          />
        </View>
      ))}

      <Text style={styles.sectionTitle}>Availability</Text>
      <View>
        {/* From Date Picker */}
        <TouchableOpacity
          onPress={() => setShowFromPicker(true)}
          style={stylesDate.dateInput}
        >
          <Text style={stylesDate.dateText}>
            {formData.availability.from || "Post Date (Select Date)"}
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
            {formData.availability.to || "Available From (Select Date)"}
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
      {/* <Text style={stylesRadio.sectionTitle}>Rent Period</Text> */}
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
      {/* <Text style={stylesRadio.sectionTitle}>Member Restriction</Text> */}
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

// const stylesRadio = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 16,
//   },
//   pageTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 8,
//     color: "white"
//   },
//   inputContainer: {
//     marginBottom: 24,
//     flexDirection: "row",
//     flexWrap: "wrap", // Wrap to the next line
//     justifyContent: "space-between", // Space between
//   },
//   radioContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   radioCircle: {
//     height: 20,
//     width: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: "#007BFF",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 10,
//   },
//   radioSelected: {
//     height: 10,
//     width: 10,
//     borderRadius: 5,
//     backgroundColor: "#007BFF",
//   },
//   radioLabel: {
//     fontSize: 16,
//     color: "white",
//   },
//   debugText: {
//     marginTop: 16,
//     fontSize: 16,
//     color: "#333",
//   },
// });

const stylesRadio = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   padding: 16,

  //   // paddingHorizontal: 30
  // },
  // pageTitle: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   // marginBottom: 16,
  // },
  // sectionTitle: {

  //   fontSize: 18,
  //   fontWeight: "600",
  //   marginBottom: 8,
  //   color: "white"
  // },
  inputContainer: {
    // marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#2d3748",

    // marginBottom: 24,
    flexDirection: "row",
    flexWrap: "wrap", // Wrap to the next line
    justifyContent: "space-between", // Space between
    borderRadius: 8,
    borderColor: "#ccc",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5,
    width: "48%",
    // paddingHorizontal: 10,
    // marginLeft: 15,
    // marginRight: 15
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
    color: "white",
  },
  debugText: {
    marginTop: 16,
    fontSize: 16,
    color: "#333",
  },
});

const styles = StyleSheet.create({
  details: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  map: {
    flex: 1,
    height: 400,
    width: "100%",
  },
  container: {
    flex: 1,
    // flexGrow: 1,
    padding: 10,
    paddingTop: 45,
    backgroundColor: "black", // "#132639",
    // width: "100%",
    // marginVertical: 16,
  },
  // title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
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

  // dropdown: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // paddingVertical: 12,
  // paddingHorizontal: 16,
  //   backgroundColor: "#2d3748",
  //   borderRadius: 8,
  // },
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
    // height: 40,
    // padding: 10,
    // paddingVertical: 12,
    // paddingHorizontal: 16,
    borderWidth: 1,
    // borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: "#2d3748",
    color: "white",
    fontSize: 16,
    marginTop: 3,
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
    color: "white",
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
    // marginBottom: 10,
    backgroundColor: "#2d3748",
    paddingHorizontal: 8,
    borderRadius: 8,
    paddingVertical: 2,
    marginBottom: 5,
    borderColor: "black",
  },
  // switch:{
  //   backgroundColor: "#2d3748",
  // },
  switchLabel: {
    fontSize: 16,
    color: "white",
    marginLeft: 15,
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
    color: "white",
    // paddingVertical: 12,
  },
  dateInput: {
    // height: 40,
    borderWidth: 1,
    // borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 18,
    justifyContent: "center",
    backgroundColor: "#2d3748",
    marginBottom: 3,
    borderColor: "black",
  },
  dateText: {
    fontSize: 16,
    color: "#02eefa",
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
    // backgroundColor: "#38bdf8",
    // padding: 12,
    // borderRadius: 4,
    // alignItems: "center",
    // marginBottom: 16,
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
