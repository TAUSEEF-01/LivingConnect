// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";
// import { router } from "expo-router";

// export default function ContactUsPage() {
//   return (
//     <View style={localStyles.authContainer}>
//       <View style={localStyles.topBar} />
//       <Text style={localStyles.title}>Contact Us Page</Text>
//       <Button title="Go Back" onPress={() => router.replace('/(tabs)/mainPage')} />
//     </View>
//   );
// }


// const localStyles = StyleSheet.create({
//   authContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//   },
//   topBar: {
//     height: 40, // Adjust the height of the top bar
//     backgroundColor: "#38bdf8", // Color for the top bar
//     width: "100%",
//     position: "absolute",
//     top: 0,
//   },
//   title: {
//     color: 'Black',
//     fontWeight: 'bold',
//     fontSize: 20,
//     letterSpacing: 2,
//     textAlign: 'center',
//   },
// });






// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert } from "react-native";

// export default function ContactUsPage() {
//   // Function to handle the email intent
//   const handleEmailPress1 = () => {
//     const email = "mdtauseef.rahmang01@gmail.com"; // Replace with your contact email

//     const subject = "Customer Inquiry";
//     const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    
//     Linking.openURL(mailto).catch(() =>
//       Alert.alert("Error", "Could not open email client.")
//     );
//   };

//   const handleEmailPress2 = () => {
//     const email = "mdtauseef.rahman@gmail.com"; // Replace with your contact email
//     const subject = "Customer Inquiry";
//     const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    
//     Linking.openURL(mailto).catch(() =>
//       Alert.alert("Error", "Could not open email client.")
//     );
//   };


//   const handleEmailPress3 = () => {
//     const email = "mdtauseef.rahman01@gmail.com"; // Replace with your contact email
//     const subject = "Customer Inquiry";
//     const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    
//     Linking.openURL(mailto).catch(() =>
//       Alert.alert("Error", "Could not open email client.")
//     );
//   };

//   return (
//     <View style={localStyles.authContainer}>
//       <View style={localStyles.topBar} />
//       <Text style={localStyles.title}>Contact Us</Text>

//       <Text style={localStyles.description}>
//         Have questions? Reach out to us at:
//       </Text>
      
//         <TouchableOpacity onPress={handleEmailPress1}>
//              <Text style={localStyles.email}>mdtauseef.rahmang01@gmail.com</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleEmailPress2}>
//             <Text style={localStyles.email}>mdtauseef.rahman@gmail.com</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleEmailPress3}>
//             <Text style={localStyles.email}>mdtauseef.rahman01@gmail.com</Text>
//         </TouchableOpacity>
//     </View>
//   );
// }

// const localStyles = StyleSheet.create({
//   authContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//   },
//   topBar: {
//     height: 40,
//     backgroundColor: "#38bdf8",
//     width: "100%",
//     position: "absolute",
//     top: 0,
//   },
//   title: {
//     color: "black",
//     fontWeight: "bold",
//     fontSize: 24,
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: "gray",
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   email: {
//     color: "#38bdf8",
//     fontSize: 18,
//     fontWeight: "bold",
//     textDecorationLine: "underline",
//     marginBottom: 10,
//     marginTop: 10,
//   },
// });




import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert, Image } from "react-native";

export default function ContactUsPage() {
  // Function to handle the email intent
  const handleEmailPress1 = () => {
    const email = "mdtauseef.rahmang01@gmail.com";
    const subject = "Customer Inquiry";
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    
    Linking.openURL(mailto).catch(() =>
      Alert.alert("Error", "Could not open email client.")
    );
  };

  const handleEmailPress2 = () => {
    const email = "mdtauseef.rahman@gmail.com";
    const subject = "Customer Inquiry";
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    
    Linking.openURL(mailto).catch(() =>
      Alert.alert("Error", "Could not open email client.")
    );
  };

  const handleEmailPress3 = () => {
    const email = "mdtauseef.rahman01@gmail.com";
    const subject = "Customer Inquiry";
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    
    Linking.openURL(mailto).catch(() =>
      Alert.alert("Error", "Could not open email client.")
    );
  };


  const handleEmailPress4 = () => {
    const email = "mdtauseef.rahman02@gmail.com";
    const subject = "Customer Inquiry";
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    
    Linking.openURL(mailto).catch(() =>
      Alert.alert("Error", "Could not open email client.")
    );
  };

  return (
    <View style={localStyles.authContainer}>
      {/* <View style={localStyles.topBar} /> */}
      <Text style={localStyles.title}>Contact Us</Text>

      <Text style={localStyles.description}>
        Have questions? Reach out to us at:
      </Text>
      
      <TouchableOpacity onPress={handleEmailPress1} style={localStyles.emailContainer}>
        <Image source={require('../../assets/images/email1.jpg')} style={localStyles.emailImage} />
        <Text style={localStyles.email}>mdtauseef.rahmang01@gmail.com</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleEmailPress2} style={localStyles.emailContainer}>
        <Image source={require('../../assets/images/email2.jpg')} style={localStyles.emailImage} />

        {/* <Image source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/df2abcf3-0c0e-4b0d-bced-86c3a3d6bf8e/dg08eso-d59e1506-e048-4bc8-b2ce-6e21f13a6a2c.jpg/v1/fill/w_894,h_894,q_70,strp/itachi_uchiha_by_katimur94_dg08eso-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2RmMmFiY2YzLTBjMGUtNGIwZC1iY2VkLTg2YzNhM2Q2YmY4ZVwvZGcwOGVzby1kNTllMTUwNi1lMDQ4LTRiYzgtYjJjZS02ZTIxZjEzYTZhMmMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.VT2ogSJb9GO1UwyVZMnlLvFk7G3EEjWQgQpW7qi1lLk' }} style={localStyles.emailImage} /> */}
        
        <Text style={localStyles.email}>mdtauseef.rahman@gmail.com</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleEmailPress3} style={localStyles.emailContainer}>
        <Image source={require('../../assets/images/email3.jpg')} style={localStyles.emailImage} />
        <Text style={localStyles.email}>mdtauseef.rahman01@gmail.com</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleEmailPress4} style={localStyles.emailContainer}>
        <Image source={require('../../assets/images/email4.jpg')} style={localStyles.emailImage} />

        {/* <Image source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/df2abcf3-0c0e-4b0d-bced-86c3a3d6bf8e/dg08eso-d59e1506-e048-4bc8-b2ce-6e21f13a6a2c.jpg/v1/fill/w_894,h_894,q_70,strp/itachi_uchiha_by_katimur94_dg08eso-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2RmMmFiY2YzLTBjMGUtNGIwZC1iY2VkLTg2YzNhM2Q2YmY4ZVwvZGcwOGVzby1kNTllMTUwNi1lMDQ4LTRiYzgtYjJjZS02ZTIxZjEzYTZhMmMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.VT2ogSJb9GO1UwyVZMnlLvFk7G3EEjWQgQpW7qi1lLk' }} style={localStyles.emailImage} /> */}

        <Text style={localStyles.email}>mdtauseef.rahman02@gmail.com</Text>
      </TouchableOpacity>
    </View>
  );
}

const localStyles = StyleSheet.create({
  authContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  topBar: {
    height: 40,
    backgroundColor: "#38bdf8",
    width: "100%",
    position: "absolute",
    top: 0,
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginVertical: 10,
  },
  emailContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  emailImage: {
    width: 80, // Set to desired width
    height: 80, // Set to desired height
    borderRadius: 40, // Circular image
    marginBottom: 8,
  },
  email: {
    color: "#38bdf8",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
