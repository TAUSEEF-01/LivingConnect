import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
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
import { router, useLocalSearchParams } from "expo-router";

const CommunityCenterForm = () => {
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);

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
      const manipResult = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 500 } }],
        { compress: 0.7, base64: true }
      );

      handleInputChange("images", [
        ...formData.images,
        `data:image/jpeg;base64,${manipResult.base64}`,
      ]);
    }
  };

  const removeImage = (indexToRemove) => {
    setFormData((prevState) => ({
      ...prevState,
      images: prevState.images.filter((_, index) => index !== indexToRemove),
    }));
  };

  const [formData, setFormData] = useState({
    centerType: "",
    name: "",
    details: {
      capacity: "",
      halls: "",
      size: "",
      parking: "",
      kitchenArea: false,
      diningArea: false,
      stageArea: false,
    },
    // restrictions: {
    //   noiseRestriction: false,
    //   timeRestriction: "",
    //   foodRestriction: false,
    //   decorationRestriction: false,
    // },
    price: {
      basePrice: "",
      fullDayPrice: "",
      halfDayPrice: "",
      perHourPrice: "",
    },
    location: {
      city: "",
      area: "",
      sector: "",
      road: "",
      buildingNumber: "",
    },

    facilities: {
      airConditioned: false,
      generator: false,
      wifi: false,
      sound: false,
      lighting: false,
      decoration: false,
      catering: false,
      staging: false,
      security: false,
    },
    // availability: {
    //   regularHours: {
    //     open: "",
    //     close: "",
    //   },
    //   bookedDates: [],
    // },
    availability: { from: "", to: "" },
    images: [],
  });

  const centerTypes = [
    "Wedding Hall",
    "Birthday Center",
    "Conference Hall",
    "Multi-purpose",
  ];

  useEffect(() => {
    const fetchHomeDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://livingconnect-backend.vercel.app/communityDetails/get-communityCenter-details/${id}`
        );

        if (response.data) {
          // Ensure all required properties exist
          const data = {
            ...formData, // Keep default structure
            ...response.data, // Overlay with received data
            details: {
              ...formData.details,
              ...(response.data.details || {}),
            },
            price: {
              ...formData.price,
              ...(response.data.price || {}),
            },
            location: {
              ...formData.location,
              ...(response.data.location || {}),
            },
            facilities: {
              ...formData.facilities,
              ...(response.data.facilities || {}),
            },
            availability: {
              ...formData.availability,
              ...(response.data.availability || {}),
            },
          };
          setFormData(data);
        }
      } catch (error) {
        console.error("Error fetching home details:", error);
        Alert.alert("Error", "Failed to load home details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchHomeDetails();
    }
  }, [id]);

  const handleInputChange = (path, value) => {
    const keys = path.split(".");
    setFormData((prevState) => {
      let newState = { ...prevState };
      let temp = newState;

      for (let i = 0; i < keys.length - 1; i++) {
        temp[keys[i]] = { ...temp[keys[i]] };
        temp = temp[keys[i]];
      }

      temp[keys[keys.length - 1]] = value;
      return newState;
    });
  };

  const handleSubmit = async () => {
    try {
      // Remove _id field from formData to avoid MongoDB conflicts
      const { _id, __v, ...updateData } = formData;

      console.log("Updating home with ID:", id);
      console.log("Update data:", updateData);

      const url = `https://livingconnect-backend.vercel.app/communityDetails/update-CommunityCenter/${id}`;
      // console.log("Request URL:", url);

      const response = await axios({
        method: "PATCH",
        url,
        data: updateData,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        validateStatus: (status) => {
          return status < 500; // Resolve only if status code is less than 500
        },
      });

      console.log("Response:", response.data); // Add this for debugging

      if (response.status === 200) {
        Alert.alert("Success", "Information Updated successfully");
        router.back();
      } else {
        throw new Error(response.data?.message || "Update failed");
      }
    } catch (error) {
      console.error("Error updating details:", error);
      const errorMessage = error.response?.data?.message || error.message;
      Alert.alert("Error", `Failed to update details: ${errorMessage}`);
    }
  };

  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedType, setSelectedType] = useState("Select Property Types");

  // const propertyTypes = ["Rent", "Sale", "Sublet", "Over a Time period"];

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleTypeSelect = (type) => {
  //   setSelectedType(type);
  //   formData.PropertyType = type;
  //   setIsOpen(false);
  // };

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
      <Text style={styles.title}>Add Community Center</Text>

      <Text style={styles.sectionTitle}>Center Type</Text>
      <View style={styles.typeContainer}>
        {centerTypes.map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.typeButton,
              formData.centerType === type && styles.selectedType,
            ]}
            onPress={() => handleInputChange("centerType", type)}
          >
            <Text style={styles.typeText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Community Center Name</Text>
      <TextInput
        style={styles.input}
        placeholder={"Enter Community Center Name"}
        placeholderTextColor="#666"
        value={formData.name}
        onChangeText={(text) => handleInputChange("name", text)}
      />

      <Text style={styles.sectionTitle}>Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Capacity (people)"
        keyboardType="numeric"
        placeholderTextColor="#666"
        value={formData.details.capacity}
        onChangeText={(value) => handleInputChange("details.capacity", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Halls"
        keyboardType="numeric"
        placeholderTextColor="#666"
        value={formData.details.halls}
        onChangeText={(value) => handleInputChange("details.halls", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Size (sq meters)"
        keyboardType="numeric"
        placeholderTextColor="#666"
        value={formData.details.size}
        onChangeText={(value) => handleInputChange("details.size", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Parking"
        keyboardType="numeric"
        placeholderTextColor="#666"
        value={formData.details.parking}
        onChangeText={(value) => handleInputChange("details.parking", value)}
      />

      {/* <View style={styles.detailsContainer}> */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Kitchen Area</Text>
        <Switch
          value={formData.details.kitchenArea}
          onValueChange={(value) =>
            handleInputChange("details.kitchenArea", value)
          }
        />
      </View>
      {/* </View> */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Dining Area</Text>
        <Switch
          value={formData.details.diningArea}
          onValueChange={(value) =>
            handleInputChange("details.diningArea", value)
          }
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Stage Area</Text>
        <Switch
          value={formData.details.stageArea}
          onValueChange={(value) =>
            handleInputChange("details.stageArea", value)
          }
        />
      </View>

      <Text style={styles.sectionTitle}>Pricing</Text>
      {/* <View style={styles.priceContainer}> */}
      <TextInput
        style={styles.input}
        placeholder="Base Price"
        keyboardType="numeric"
        placeholderTextColor="#666"
        value={formData.price.basePrice}
        onChangeText={(value) => handleInputChange("price.basePrice", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Full Day Price"
        keyboardType="numeric"
        placeholderTextColor="#666"
        value={formData.price.fullDayPrice}
        onChangeText={(value) => handleInputChange("price.fullDayPrice", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Half Day Price"
        keyboardType="numeric"
        placeholderTextColor="#666"
        value={formData.price.halfDayPrice}
        onChangeText={(value) => handleInputChange("price.halfDayPrice", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Per Hour Price"
        keyboardType="numeric"
        placeholderTextColor="#666"
        value={formData.price.perHourPrice}
        onChangeText={(value) => handleInputChange("price.perHourPrice", value)}
      />
      {/* </View> */}

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

      <Text style={styles.sectionTitle}>Location</Text>
      {["city", "area", "sector", "road", "buildingNumber"].map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          placeholderTextColor="#666"
          value={formData.location[field]}
          onChangeText={(text) => handleInputChange(`location.${field}`, text)}
        />
      ))}

      <Text style={styles.sectionTitle}>Availability</Text>
      <View>
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
      <TouchableOpacity style={stylesImages.addButton} onPress={pickImage}>
        <Text style={stylesImages.buttonText}>Add Image</Text>
      </TouchableOpacity>

      <View style={stylesImages.imageContainer}>
        {formData.images.length > 0 ? (
          <ScrollView horizontal>
            {formData.images.map((image, index) => (
              <View key={index} style={stylesImages.imageWrapper}>
                <Image
                  source={{ uri: image }}
                  style={stylesImages.imagePreview}
                />
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
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 45,
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
    textAlign: "center",
    borderRadius: 8,
  },
  typeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 8,
  },
  typeButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#2d3748",
    width: "48%",
  },
  selectedType: {
    backgroundColor: "#38bdf8",
  },
  typeText: {
    color: "white",
    textAlign: "center",
  },
  detailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  inputWrapper: {
    width: "49.5%",
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
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2d3748",
    // paddingHorizontal: 8,
    borderRadius: 8,
    // paddingVertical: 2,
    marginTop: 5,
    // marginBottom: 5,
    borderColor: "black",
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
  dateInput: {
    borderWidth: 1,
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

export default CommunityCenterForm;
