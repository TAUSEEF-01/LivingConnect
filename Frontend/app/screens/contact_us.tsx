// import React from "react";
// import { View, Text, Image, StyleSheet, FlatList, StatusBar, TouchableOpacity, Linking, Alert } from "react-native";

// const contactDetails = [
//   {
//     id: "1",
//     name: "Md. Tauseef - Ur - Rahman",
//     role: "Project Lead",
//     email: "mdtauseef.rahmang01@gmail.com",
//     phone: "+1234567890",
//     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
//   },
//   {
//     id: "2",
//     name: "Tamzid Bin Tariq",
//     role: "Developer",
//     email: "mdtauseef.rahman@gmail.com",
//     phone: "+1234567891",
//     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
//   },
//   {
//     id: "3",
//     name: "Ashraful Alam",
//     role: "Designer",
//     email: "mdtauseef.rahman01@gmail.com",
//     phone: "+1234567892",
//     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
//   },
//   {
//     id: "4",
//     name: "Sumaiya Tabassum",
//     role: "Designer",
//     email: "mdtauseef.rahman02@gmail.com",
//     phone: "+1234567893",
//     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
//   },
// ];

// const handleEmailPress = (email) => {
//   const subject = "Customer Inquiry";
//   const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
//   Linking.openURL(mailto).catch(() =>
//     Alert.alert("Error", "Could not open email client.")
//   );
// };

// export default function ContactUsPage() {
//   return (
//     <View style={localStyles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#38bdf8" />
//       <View style={localStyles.topBar}>
//         <Text style={localStyles.title}>Contact Us</Text>
//       </View>

//       <FlatList
//         data={contactDetails}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={localStyles.memberContainer}>
//             <Image source={item.image} style={localStyles.memberImage} />
//             <Text style={localStyles.memberName}>{item.name}</Text>
//             {/* <Text style={localStyles.memberRole}>{item.role}</Text> */}
//             <TouchableOpacity onPress={() => handleEmailPress(item.email)}>
//               <Text style={localStyles.memberEmail}>{item.email}</Text>
//             </TouchableOpacity>
//             {/* <Text style={localStyles.memberPhone}>{item.phone}</Text> */}
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const localStyles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: "#f0f4f8",
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//   },
//   topBar: {
//     height: "7%",
//     backgroundColor: '#38bdf8',
//     width: '100%',
//     marginTop: 28,
//     marginBottom: 8,
//     padding: 7,
//     borderRadius: 10,
//   },
//   // topBar: {
//   //   height: "7%",
//   //   backgroundColor: "#38bdf8",
//   //   width: "100%",
//   //   marginTop: 28,
//   //   marginBottom: 8,
//   //   padding: 7,
//   //   borderRadius: 10,
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   // },
//   // title: {
//   //   color: "white",
//   //   fontWeight: "bold",
//   //   fontSize: 28,
//   // },
//   // memberContainer: {
//   //   alignItems: "center",
//   //   marginBottom: 20,
//   //   backgroundColor: "#fff",
//   //   padding: 20,
//   //   borderRadius: 10,
//   //   shadowColor: "#000",
//   //   shadowOpacity: 0.1,
//   //   shadowRadius: 4,
//   //   shadowOffset: { width: 0, height: 2 },
//   //   elevation: 3,
//   //   width: "90%",
//   //   alignSelf: "center",
//   // },

//   memberContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 16,
//     marginVertical: 6,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: 5 },
//   },
//   memberImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 8,
//   },
//   memberName: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   memberRole: {
//     fontSize: 16,
//     color: "#666",
//   },
//   memberEmail: {
//     fontSize: 16,
//     color: "#38bdf8",
//     marginTop: 4,
//     textDecorationLine: "underline",
//   },
//   memberPhone: {
//     fontSize: 14,
//     color: "#666",
//     marginTop: 2,
//   },
// });

import React from "react";
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  FlatList, 
  StatusBar, 
  TouchableOpacity, 
  Linking, 
  Alert,
  SafeAreaView,
  Platform 
} from "react-native";

const contactDetails = [
  {
    id: "1",
    name: "Md. Tauseef - Ur - Rahman",
    role: "Project Lead",
    email: "mdtauseef.rahmang01@gmail.com",
    phone: "+1234567890",
    image: require("../../assets/images/email1.jpg"),
  },
  {
    id: "2",
    name: "Tamzid Bin Tariq",
    role: "Developer",
    email: "tamzidbintariq@gmail.com",
    phone: "+1234567891",
    image: require("../../assets/images/email1.jpg"),
  },
  {
    id: "3",
    name: "Ashraful Alam",
    role: "Designer",
    email: "mdtauseef.rahman01@gmail.com",
    phone: "+1234567892",
    image: require("../../assets/images/email1.jpg"),
  },
  {
    id: "4",
    name: "Sumaiya Tabassum",
    role: "Designer",
    email: "mdtauseef.rahman02@gmail.com",
    phone: "+1234567893",
    image: require("../../assets/images/email1.jpg"),
  },
];

const handleEmailPress = (email) => {
  const subject = "Customer Inquiry";
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  Linking.openURL(mailto).catch(() =>
    Alert.alert("Error", "Could not open email client.")
  );
};

export default function ContactUsPage() {
  const renderContactCard = ({ item }) => (
    <View style={styles.contactCard}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.memberImage} />
        <View style={styles.imageBorder} />
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.memberName}>{item.name}</Text>
        <Text style={styles.memberRole}>{item.role}</Text>
        <TouchableOpacity 
          style={styles.emailButton}
          onPress={() => handleEmailPress(item.email)}
        >
          <Text style={styles.emailButtonText}>Send Email</Text>
        </TouchableOpacity>
        <Text style={styles.memberEmail}>{item.email}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#38bdf8" />
      
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Contact Us</Text>
          <Text style={styles.headerSubtitle}>Get in Touch</Text>
        </View>
      </View>

      <FlatList
        data={contactDetails}
        keyExtractor={(item) => item.id}
        renderItem={renderContactCard}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    backgroundColor: '#38bdf8',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 24,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: 24,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#E0E7FF',
    marginTop: 4,
    letterSpacing: 0.5,
  },
  listContainer: {
    padding: 16,
    paddingBottom: 24,
  },
  contactCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(229, 229, 229, 0.5)',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  memberImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E7FF',
  },
  imageBorder: {
    position: 'absolute',
    top: -3,
    left: -3,
    right: -3,
    bottom: -3,
    borderRadius: 53,
    borderWidth: 3,
    borderColor: '#38bdf8',
    opacity: 0.2,
  },
  contactInfo: {
    alignItems: 'center',
    width: '100%',
  },
  memberName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#38bdf8',
    marginBottom: 4,
    letterSpacing: 0.3,
  },
  memberRole: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 12,
    letterSpacing: 0.2,
  },
  emailButton: {
    backgroundColor: '#38bdf8',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  emailButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  memberEmail: {
    fontSize: 14,
    color: '#6B7280',
    letterSpacing: 0.2,
  },
});