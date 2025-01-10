// import React from "react";
// import { View, Text, Image, StyleSheet, FlatList } from "react-native";
// import { router } from "expo-router";

// const teamMembers = [
//   {
//     id: "1",
//     name: "Md. Tauseef - Ur - Rahman",
//     role: "Project Lead",
//     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
//   },
//   {
//     id: "2",
//     name: "Tamzid Bin Tairq",
//     role: "Developer",
//     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
//   },
//   {
//     id: "3",
//     name: "Ashraful Alam",
//     role: "Designer",
//     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
//   },
//   {
//     id: "4",
//     name: "Sumaiya Tabassum",
//     role: "Designer",
//     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
//   },
// ];

// export default function AboutUsPage() {
//   return (
//     <View style={localStyles.authContainer}>
//       {/* <View style={localStyles.topBar} /> */}
//       <Text style={localStyles.title}>About Us</Text>

//       <FlatList
//         data={teamMembers}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={localStyles.memberContainer}>
//             <Image source={item.image} style={localStyles.memberImage} />
//             <Text style={localStyles.memberName}>{item.name}</Text>
//             <Text style={localStyles.memberRole}>{item.role}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const localStyles = StyleSheet.create({
//   authContainer: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: 60,
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
//     marginBottom: 20,
//   },
//   memberContainer: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   memberImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginBottom: 8,
//   },
//   memberName: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "black",
//   },
//   memberRole: {
//     fontSize: 16,
//     color: "gray",
//   },
// });



import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const teamMembers = [
  {
    id: "1",
    name: "Md. Tauseef - Ur - Rahman",
    role: "Student: University of Dhaka",
    image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
  },
  {
    id: "2",
    name: "Tamzid Bin Tairq",
    role: "Student: University of Dhaka",
    image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
  },
  {
    id: "3",
    name: "Ashraful Alam",
    role: "Student: University of Dhaka",
    image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
  },
  {
    id: "4",
    name: "Sumaiya Tabassum",
    role: "Student: University of Dhaka",
    image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
  },
];

export default function AboutUsPage() {
  return (
    <View style={localStyles.authContainer}>
      <View style={localStyles.topBar}>
      <Text style={localStyles.title}>About Us</Text>
      </View>

      <FlatList
        data={teamMembers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={localStyles.memberContainer}>
            <Image source={item.image} style={localStyles.memberImage} />
            <Text style={localStyles.memberName}>{item.name}</Text>
            <Text style={localStyles.memberRole}>{item.role}</Text>
          </View>
        )}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  authContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  topBar: {
    height: "7%",
    backgroundColor: '#38bdf8',
    width: '100%',
    marginTop: 28,
    marginBottom: 8,
    padding: 7,
    borderRadius: 10,
  },
  memberContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 6,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  memberImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 10,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  memberRole: {
    fontSize: 16,
    color: '#666',
  },
});

