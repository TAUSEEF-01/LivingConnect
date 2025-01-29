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
import WebView from "react-native-webview";

const CommunityCenterForm = () => {
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
    name: "",
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
    console.log("Payload:", JSON.stringify(formData));

    const token = await AsyncStorage.getItem("userToken");

    try {
      const response = await axios.post(
        "https://livingconnect-backend.vercel.app/communityDetails/add-community-center",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Form submitted successfully");
        Alert.alert(
          "Form submitted successfully. The admins will review your request."
        );
        router.replace("/pages/mainPage");
      } else {
        console.error("Submission failed");
        Alert.alert("Fill up all the fields");
      }
    } catch (error) {
      console.error("Error:", error);
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

  const [location, setLocation] = useState(null);
  const params = useLocalSearchParams();

  // // ✅ Prevent infinite re-renders by updating state only if it hasn't been set
  // useEffect(() => {
  //   if (!location && params?.latitude && params?.longitude) {
  //     setLocation({
  //       latitude: parseFloat(params.latitude),
  //       longitude: parseFloat(params.longitude),
  //       city: params.city || 'Unknown City',
  //       area: params.area || 'Unknown Area',
  //     });
  //     console.log("location", location);
  //     handleInputChange("location", location);
  //   }
  // }, [params]); // Run effect only when params change

  // ✅ Prevent infinite loop by using a functional update
  useEffect(() => {
    if (params?.latitude && params?.longitude) {
      setLocation(
        (prev) =>
          prev || {
            // Only update if location is still null
            latitude: parseFloat(params.latitude),
            longitude: parseFloat(params.longitude),
            city: params.city || "Unknown City",
            area: params.area || "Unknown Area",
          }
      );
    }
  }, [params]); // Runs only when params change

  // ✅ Ensure handleInputChange runs AFTER location updates
  useEffect(() => {
    if (location) {
      console.log("location", location);
      handleInputChange("location", location);
    }
  }, [location]); // Runs only when location updates

  const [showWebView, setShowWebView] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState("");

  const API_URL = Platform.select({
    ios: "https://livingconnect-backend.vercel.app",
    android: "https://livingconnect-backend.vercel.app",
  });

  const handlePayment = async () => {
    try {
      const response = await fetch(
        "https://livingconnect-backend.vercel.app/init",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.url) {
        setPaymentUrl(data.url);
        setShowWebView(true);
      } else {
        Alert.alert("Error", "Payment URL not found in response");
      }
    } catch (error) {
      Alert.alert("Error", "Connection failed. Please try again.");
      console.error("Error fetching payment URL:", error);
    }
  };

  const handleNavigationStateChange = (navState) => {
    const { url } = navState;
    if (url.includes("/success")) {
      setShowWebView(false);
      Alert.alert("Success", "Payment successful!");
    } else if (url.includes("/fail")) {
      setShowWebView(false);
      Alert.alert("Failed", "Payment failed");
    } else if (url.includes("/cancel")) {
      setShowWebView(false);
      Alert.alert("Cancelled", "Payment cancelled");
    }
  };

  if (showWebView && paymentUrl) {
    return (
      <WebView
        style={{ flex: 1, marginTop: 30 }}
        source={{ uri: paymentUrl }}
        onNavigationStateChange={handleNavigationStateChange}
      />
    );
  }

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

      {/* <Text style={styles.sectionTitle}>Location</Text>
      {["city", "area", "sector", "road", "buildingNumber"].map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          placeholderTextColor="#666"
          value={formData.location[field]}
          onChangeText={(text) => handleInputChange(`location.${field}`, text)}
        />
      ))} */}

      <Text style={styles.sectionTitle}>Location</Text>

      {/* <Button title="Select Location on Map" onPress={() => router.push('/pages/Map/locationCheck')} /> */}
      <TouchableOpacity
        style={styles.locationButton}
        onPress={() => router.push("/pages/Map/locationInputCommunityCenter")}
      >
        <Text style={styles.buttonText}>Select Location on Map</Text>
      </TouchableOpacity>
      {location && (
        <View style={styles.locationDetails}>
          <Text style={styles.locationText}>Latitude: {location.latitude}</Text>
          <Text style={styles.locationText}>
            Longitude: {location.longitude}
          </Text>
          <Text style={styles.locationText}>City: {location.city}</Text>
          <Text style={styles.locationText}>Area: {location.area}</Text>
        </View>
      )}

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

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
          <Text style={styles.buttonText}>Payment</Text>
        </TouchableOpacity>

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
  buttonView: {
    marginBottom: 70,
    marginTop: 20,
  },
  paymentButton: {
    // marginTop: 20,
    marginBottom: 10,
    // marginTop: 30,
    padding: 12,
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  submitButton: {
    // marginTop: 20,
    // marginBottom: 40,
    // marginTop: 30,
    padding: 12,
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  locationButton: {
    marginBottom: 5,
    padding: 12,
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  locationDetails: {
    backgroundColor: "#2d3748",
    paddingHorizontal: 8,
    borderRadius: 8,
    padding: 8,
    paddingLeft: 16,
    marginBottom: 5,
    borderColor: "black",
  },
  locationText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
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
