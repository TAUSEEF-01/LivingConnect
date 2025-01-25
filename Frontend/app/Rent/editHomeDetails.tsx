import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  Platform,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import axios from "axios";

const EditHomeDetails = () => {
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    PropertyType: "",
    details: {
      beds: "",
      baths: "",
      size: "",
      balcony: "",
      floor: "",
    },
    memberRestriction: "",
    rent: "",
    rentPeriod: "",
    location: {
      city: "",
      area: "",
      sector: "",
      road: "",
      houseNumber: "",
    },
    facilities: {
      garage: false,
      lift: false,
      gasSupply: false,
      generator: false,
      internet: false,
      cctv: false,
      wifi: false,
    },
    availability: {
      from: "",
      to: "",
    },
    images: [],
  });

  useEffect(() => {
    const fetchHomeDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://192.168.50.242:5000/houseDetails/get-homes-details/${id}`
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
      const newState = { ...prevState };
      let current = newState;

      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
          current[keys[i]] = {};
        }
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]] = value;
      return newState;
    });
  };

  const handleSubmit = async () => {
    try {
      // Remove _id field from formData to avoid MongoDB conflicts
      const { _id, __v, ...updateData } = formData;

      console.log("Updating home with ID:", id);
      console.log("Update data:", updateData);

      const url = `http://192.168.50.242:5000/houseDetails/update-home/${id}`;
      console.log("Request URL:", url);

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
        Alert.alert("Success", "Home details updated successfully");
        router.back();
      } else {
        throw new Error(response.data?.message || "Update failed");
      }
    } catch (error) {
      console.error("Error updating home details:", error);
      const errorMessage = error.response?.data?.message || error.message;
      Alert.alert("Error", `Failed to update home details: ${errorMessage}`);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#38bdf8" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Edit Home Details</Text>

      {/* Property Type */}
      <Text style={styles.sectionTitle}>Property Type</Text>
      <TextInput
        style={styles.input}
        value={formData.PropertyType}
        onChangeText={(value) => handleInputChange("PropertyType", value)}
      />

      {/* Rent */}
      <Text style={styles.sectionTitle}>Rent</Text>
      <TextInput
        style={styles.input}
        value={formData.rent?.toString() || ""}
        onChangeText={(value) => handleInputChange("rent", value)}
        keyboardType="numeric"
      />

      {/* Details */}
      <Text style={styles.sectionTitle}>Details</Text>
      <View style={styles.detailsContainer}>
        {["beds", "baths", "size", "balcony", "floor"].map((field) => (
          <View key={field} style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={formData.details?.[field]?.toString() || ""}
              onChangeText={(value) =>
                handleInputChange(`details.${field}`, value)
              }
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              keyboardType="numeric"
            />
          </View>
        ))}
      </View>

      {/* Location */}
      <Text style={styles.sectionTitle}>Location</Text>
      {Object.keys(formData.location || {}).map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          value={formData.location[field]?.toString() || ""}
          onChangeText={(value) =>
            handleInputChange(`location.${field}`, value)
          }
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
        />
      ))}

      {/* Facilities */}
      <Text style={styles.sectionTitle}>Facilities</Text>
      {Object.keys(formData.facilities || {}).map((facility) => (
        <View key={facility} style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            {facility.charAt(0).toUpperCase() + facility.slice(1)}
          </Text>
          <Switch
            value={!!formData.facilities[facility]}
            onValueChange={(value) =>
              handleInputChange(`facilities.${facility}`, value)
            }
          />
        </View>
      ))}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Update Home Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
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
    padding: 10,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2d3748",
    paddingHorizontal: 8,
    borderRadius: 8,
    paddingVertical: 2,
    marginBottom: 5,
  },
  switchLabel: {
    fontSize: 16,
    color: "white",
    marginLeft: 15,
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

export default EditHomeDetails;
