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

const CreateServiceForm = () => {
  const [formData, setFormData] = useState({
    serviceType: "",
    cost: "",
    location: "",
    images: [],
  });

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

  const handleSubmit = async () => {
    const token = await AsyncStorage.getItem("userToken");
    // if (!token) {
    //   Alert.alert("Unauthorized", "No token found. Please log in.");
    //   return;
    // }

    if (
      !formData.serviceType ||
      !formData.cost ||
      !formData.location ||
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

      if (response.status === 200) {
        console.log(formData);
        Alert.alert("Success", "Service created successfully!");
      } else {
        Alert.alert("Error", "Failed to create service.");
      }
    } catch (error) {
      console.error("Error creating service:", error);
      Alert.alert("Error", "An error occurred while submitting the form.");
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
      formData.serviceType = type;
      setIsOpen(false);
    };

    

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create Service</Text>

      <Text style={styles.label}>Service Type</Text>
      <TextInput
        style={styles.input}
        placeholder="Service Type"
        value={formData.serviceType}
        onChangeText={(text) => handleInputChange("serviceType", text)}
      />

      <Text style={styles.label}>Cost</Text>
      <TextInput
        style={styles.input}
        placeholder="Cost"
        keyboardType="numeric"
        value={formData.cost}
        onChangeText={(text) => handleInputChange("cost", text)}
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={formData.location}
        onChangeText={(text) => handleInputChange("location", text)}
      />

      <Text style={styles.label}>Images</Text>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Add Image</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {formData.images.map((image, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri: image }} style={styles.image} />
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeImage(index)}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageWrapper: {
    position: "relative",
    marginRight: 10,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  removeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 5,
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default CreateServiceForm;
