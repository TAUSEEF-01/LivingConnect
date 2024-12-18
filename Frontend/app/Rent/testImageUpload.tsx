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







import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const RentPeriodInput = ({ formData, handleInputChange }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Rent Period</Text>
      <RNPickerSelect
        onValueChange={(value) => handleInputChange("rentPeriod", value)}
        items={[
          { label: "Daily", value: "daily" },
          { label: "Weekly", value: "weekly" },
          { label: "Monthly", value: "monthly" },
          { label: "Yearly", value: "yearly" },
        ]}
        style={{
          inputIOS: styles.input,
          inputAndroid: styles.input,
        }}
        placeholder={{
          label: "Select a rent period...",
          value: null,
          color: "#9EA0A4",
        }}
        value={formData.rentPeriod}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
  },
});

export default RentPeriodInput;
