// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   ScrollView,
//   Alert,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import * as ImageManipulator from "expo-image-manipulator";

// const HomeDetailsForm = () => {
//   const [formData, setFormData] = useState({
//     images: [], // Array to store base64 image data
//   });

//   // Handle input changes
//   const handleInputChange = (field, value) => {
//     setFormData((prevState) => ({ ...prevState, [field]: value }));
//   };

//   // Function to pick and process an image
//   const pickImage = async () => {
//     // Request media library permissions
//     const permissionResult =
//       await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (!permissionResult.granted) {
//       Alert.alert(
//         "Permission required",
//         "Please grant permission to access photos."
//       );
//       return;
//     }

//     // Open the gallery and allow selecting an image
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 0.7,
//       base64: true,
//     });

//     if (!result.canceled) {
//       // Compress and resize the image
//       const manipResult = await ImageManipulator.manipulateAsync(
//         result.assets[0].uri,
//         [{ resize: { width: 500 } }],
//         { compress: 0.7, base64: true }
//       );

//       // Add the new image (base64) to the images array
//       setFormData((prevState) => ({
//         ...prevState,
//         images: [
//           ...prevState.images,
//           `data:image/jpeg;base64,${manipResult.base64}`,
//         ],
//       }));
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.sectionTitle}>Images</Text>

//       {/* Input Field for Image URLs */}
//       {/* <TextInput
//         style={styles.input}
//         placeholder="Image URLs (comma-separated)"
//         value={formData.images.join(", ")}
//         onChangeText={(text) =>
//           handleInputChange(
//             "images",
//             text.split(",").map((url) => url.trim())
//           )
//         }
//       /> */}

//       {/* Button to Add Images */}
//       <TouchableOpacity style={styles.addButton} onPress={pickImage}>
//         <Text style={styles.buttonText}>Add Image</Text>
//       </TouchableOpacity>

//       {/* Display Selected Image Previews */}
//       <View style={styles.imageContainer}>
//         {formData.images.map((imageUri, index) => (
//           <Image
//             key={index}
//             source={{ uri: imageUri }}
//             style={styles.imagePreview}
//           />
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f9f9f9",
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   input: {
//     height: 40,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 4,
//     paddingHorizontal: 8,
//     marginBottom: 10,
//   },
//   addButton: {
//     backgroundColor: "#007BFF",
//     padding: 12,
//     borderRadius: 4,
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   imageContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     gap: 10,
//   },
//   imagePreview: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
// });

// export default HomeDetailsForm;















// // #################################################


// import React, { useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import RNPickerSelect from "react-native-picker-select";

// const RentPage = () => {
//   // State to hold the form data
//   const [formData, setFormData] = useState({
//     rentPeriod: "", // Initial state for rentPeriod
//   });

//   // Function to handle input changes
//   const handleInputChange = (key, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.pageTitle}>Rent Details</Text>

//       {/* Rent Period Input */}
//       <RentPeriodInput formData={formData} handleInputChange={handleInputChange} />

//       {/* Display Selected Value for Debugging */}
//       <Text style={styles.debugText}>Selected Rent Period: {formData.rentPeriod || "None"}</Text>
//     </View>
//   );
// };

// // RentPeriodInput Component
// const RentPeriodInput = ({ formData, handleInputChange }) => {
//   return (
//     <View style={styles.inputContainer}>
//       <Text style={styles.sectionTitle}>Rent Period</Text>
//       <RNPickerSelect
//         onValueChange={(value) => handleInputChange("rentPeriod", value)}
//         items={[
//           { label: "Daily", value: "daily" },
//           { label: "Weekly", value: "weekly" },
//           { label: "Monthly", value: "monthly" },
//           { label: "Yearly", value: "yearly" },
//         ]}
//         style={{
//           inputIOS: styles.input,
//           inputAndroid: styles.input,
//         }}
//         placeholder={{
//           label: "Select a rent period...",
//           value: null,
//           color: "#9EA0A4",
//         }}
//         value={formData.rentPeriod}
//       />
//     </View>
//   );
// };

// export default RentPage;

// const styles = StyleSheet.create({
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
//   },
//   inputContainer: {
//     marginBottom: 24,
//   },
//   input: {
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 12,
//     borderRadius: 8,
//     backgroundColor: "#f9f9f9",
//   },
//   debugText: {
//     marginTop: 16,
//     fontSize: 16,
//     color: "#333",
//   },
// });

















// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// const RentPage = () => {
//   // State to hold the form data
//   const [formData, setFormData] = useState({
//     rentPeriod: "", // Initial state for rentPeriod
//   });

//   // Function to handle input changes
//   const handleInputChange = (key, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   return (
//     <View style={stylesRadio.container}>
//       <Text style={stylesRadio.pageTitle}>Rent Details</Text>

//       {/* Rent Period Input */}
//       <RentPeriodRadio
//         formData={formData}
//         handleInputChange={handleInputChange}
//       />

//       {/* Display Selected Value for Debugging */}
//       <Text style={stylesRadio.debugText}>
//         Selected Rent Period: {formData.rentPeriod || "None"}
//       </Text>
//     </View>
//   );
// };

// // RentPeriodRadio Component
// const RentPeriodRadio = ({ formData, handleInputChange }) => {
//   const options = ["daily", "weekly", "monthly", "yearly"];

//   return (
//     <View style={stylesRadio.inputContainer}>
//       <Text style={stylesRadio.sectionTitle}>Rent Period</Text>
//       {options.map((option) => (
//         <TouchableOpacity
//           key={option}
//           style={stylesRadio.radioContainer}
//           onPress={() => handleInputChange("rentPeriod", option)}
//         >
//           <View style={stylesRadio.radioCircle}>
//             {formData.rentPeriod === option && (
//               <View style={stylesRadio.radioSelected} />
//             )}
//           </View>
//           <Text style={stylesRadio.radioLabel}>{option.charAt(0).toUpperCase() + option.slice(1)}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// export default RentPage;

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
//   },
//   inputContainer: {
//     marginBottom: 24,
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
//     color: "#333",
//   },
//   debugText: {
//     marginTop: 16,
//     fontSize: 16,
//     color: "#333",
//   },
// });





import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

const HomeDetailsForm = () => {
  const [formData, setFormData] = useState({
    images: [], // Array to store base64 image data
  });

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  // Function to pick and process an image
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

      setFormData((prevState) => ({
        ...prevState,
        images: [
          ...prevState.images,
          `data:image/jpeg;base64,${manipResult.base64}`,
        ],
      }));
    }
  };

  // Function to remove an image by index
  const removeImage = (indexToRemove) => {
    setFormData((prevState) => ({
      ...prevState,
      images: prevState.images.filter((_, index) => index !== indexToRemove),
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Images</Text>

      {/* Button to Add Images */}
      <TouchableOpacity style={styles.addButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Add Image</Text>
      </TouchableOpacity>

      {/* Display Selected Image Previews */}
      <View style={styles.imageContainer}>
        {formData.images.map((imageUri, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri: imageUri }} style={styles.imagePreview} />
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => removeImage(index)}
            >
              <Text style={styles.cancelButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  imageWrapper: {
    position: "relative",
    marginBottom: 10,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
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

export default HomeDetailsForm;
