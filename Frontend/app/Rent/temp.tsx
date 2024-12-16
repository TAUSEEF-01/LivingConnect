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
//       const response = await fetch('http://192.168.50.242:5000/home-details', {
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
//       const response = await fetch('http://192.168.50.242:5000/home-details', {
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




















import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Switch,
} from "react-native";

const HomeDetailsForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    PropertyType: "",
    details: { beds: "", baths: "", size: "", balcony: "", floor: "" },
    memberRestriction: "",
    rent: "",
    // rentPeriod: "",
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

  // Improved dynamic input handler for nested keys
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
    console.log("Payload:", JSON.stringify(formData, null, 2));
    try {
      const response = await fetch("http://192.168.50.242:5000/home-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Home Details</Text>

      {/* Basic Info */}
      <TextInput
        style={styles.input}
        placeholder="User ID"
        value={formData.userId}
        onChangeText={(text) => handleInputChange("userId", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Property Type"
        value={formData.PropertyType}
        onChangeText={(text) => handleInputChange("PropertyType", text)}
      />

      {/* Home Details */}
      <Text style={styles.sectionTitle}>Details</Text>
      {["beds", "baths", "size", "balcony", "floor"].map((field) => (
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
      ))}

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
      <Text style={styles.sectionTitle}>Availability</Text>
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
      />

      {/* Images */}
      <Text style={styles.sectionTitle}>Images</Text>
      <TextInput
        style={styles.input}
        placeholder="Image URLs (comma-separated)"
        value={formData.images.join(", ")}
        onChangeText={(text) =>
          handleInputChange(
            "images",
            text.split(",").map((url) => url.trim())
          )
        }
      />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9f9f9" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  switchLabel: { fontSize: 16 },
});

export default HomeDetailsForm;
