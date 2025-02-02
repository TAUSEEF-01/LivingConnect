// // import React from "react";
// // import { View, Text, Image, StyleSheet, FlatList } from "react-native";
// // import { router } from "expo-router";

// // const teamMembers = [
// //   {
// //     id: "1",
// //     name: "Md. Tauseef - Ur - Rahman",
// //     role: "Project Lead",
// //     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
// //   },
// //   {
// //     id: "2",
// //     name: "Tamzid Bin Tairq",
// //     role: "Developer",
// //     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
// //   },
// //   {
// //     id: "3",
// //     name: "Ashraful Alam",
// //     role: "Designer",
// //     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
// //   },
// //   {
// //     id: "4",
// //     name: "Sumaiya Tabassum",
// //     role: "Designer",
// //     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
// //   },
// // ];

// // export default function AboutUsPage() {
// //   return (
// //     <View style={localStyles.authContainer}>
// //       {/* <View style={localStyles.topBar} /> */}
// //       <Text style={localStyles.title}>About Us</Text>

// //       <FlatList
// //         data={teamMembers}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item }) => (
// //           <View style={localStyles.memberContainer}>
// //             <Image source={item.image} style={localStyles.memberImage} />
// //             <Text style={localStyles.memberName}>{item.name}</Text>
// //             <Text style={localStyles.memberRole}>{item.role}</Text>
// //           </View>
// //         )}
// //       />
// //     </View>
// //   );
// // }

// // const localStyles = StyleSheet.create({
// //   authContainer: {
// //     flex: 1,
// //     alignItems: "center",
// //     paddingTop: 60,
// //     backgroundColor: "white",
// //   },
// //   topBar: {
// //     height: 40,
// //     backgroundColor: "#38bdf8",
// //     width: "100%",
// //     position: "absolute",
// //     top: 0,
// //   },
// //   title: {
// //     color: "black",
// //     fontWeight: "bold",
// //     fontSize: 24,
// //     marginBottom: 20,
// //   },
// //   memberContainer: {
// //     alignItems: "center",
// //     marginBottom: 20,
// //   },
// //   memberImage: {
// //     width: 80,
// //     height: 80,
// //     borderRadius: 40,
// //     marginBottom: 8,
// //   },
// //   memberName: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     color: "black",
// //   },
// //   memberRole: {
// //     fontSize: 16,
// //     color: "gray",
// //   },
// // });



// // import React from 'react';
// // import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

// // const teamMembers = [
// //   {
// //     id: "1",
// //     name: "Md. Tauseef - Ur - Rahman",
// //     role: "Student: University of Dhaka",
// //     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
// //   },
// //   {
// //     id: "2",
// //     name: "Tamzid Bin Tariq",
// //     role: "Student: University of Dhaka",
// //     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
// //   },
// //   {
// //     id: "3",
// //     name: "Ashraful Alam",
// //     role: "Student: University of Dhaka",
// //     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
// //   },
// //   {
// //     id: "4",
// //     name: "Sumaiya Tabassum",
// //     role: "Student: University of Dhaka",
// //     image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
// //   },
// // ];

// // export default function AboutUsPage() {
// //   return (
// //     <View style={localStyles.authContainer}>
// //       <View style={localStyles.topBar}>
// //       <Text style={localStyles.title}>About Us</Text>
// //       </View>

// //       <FlatList
// //         data={teamMembers}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item }) => (
// //           <View style={localStyles.memberContainer}>
// //             <Image source={item.image} style={localStyles.memberImage} />
// //             <Text style={localStyles.memberName}>{item.name}</Text>
// //             <Text style={localStyles.memberRole}>{item.role}</Text>
// //           </View>
// //         )}
// //       />
// //     </View>
// //   );
// // }

// // const localStyles = StyleSheet.create({
// //   authContainer: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //     padding: 16,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     color: '#333',
// //     textAlign: 'center',
// //   },
// //   topBar: {
// //     height: "7%",
// //     backgroundColor: '#38bdf8',
// //     width: '100%',
// //     marginTop: 28,
// //     marginBottom: 8,
// //     padding: 7,
// //     borderRadius: 10,
// //   },
// //   memberContainer: {
// //     backgroundColor: '#fff',
// //     borderRadius: 10,
// //     padding: 16,
// //     marginVertical: 6,
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOpacity: 0.1,
// //     shadowRadius: 10,
// //     shadowOffset: { width: 0, height: 5 },
// //   },
// //   memberImage: {
// //     width: 90,
// //     height: 90,
// //     borderRadius: 50,
// //     marginBottom: 10,
// //   },
// //   memberName: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#333',
// //     marginBottom: 5,
// //   },
// //   memberRole: {
// //     fontSize: 16,
// //     color: '#666',
// //   },
// // });

// import React from 'react';
// import { View, Text, Image, FlatList, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

// const teamMembers = [
//   {
//     id: "1",
//     name: "Md. Tauseef - Ur - Rahman",
//     role: "Student: University of Dhaka",
//     image: require("../../assets/images/email1.jpg"),
//   },
//   {
//     id: "2",
//     name: "Tamzid Bin Tariq",
//     role: "Student: University of Dhaka",
//     image: require("../../assets/images/email1.jpg"),
//   },
//   {
//     id: "3",
//     name: "Ashraful Alam",
//     role: "Student: University of Dhaka",
//     image: require("../../assets/images/email1.jpg"),
//   },
//   {
//     id: "4",
//     name: "Sumaiya Tabassum",
//     role: "Student: University of Dhaka",
//     image: require("../../assets/images/email1.jpg"),
//   },
// ];

// export default function AboutUsPage() {
//   const renderTeamMember = ({ item }) => (
//     <View style={styles.memberContainer}>
//       <View style={styles.imageContainer}>
//         <Image source={item.image} style={styles.memberImage} />
//         <View style={styles.imageBorder} />
//       </View>
//       <View style={styles.memberInfo}>
//         <Text style={styles.memberName}>{item.name}</Text>
//         <Text style={styles.memberRole}>{item.role}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.headerContainer}>
//         <View style={styles.headerContent}>
//           <Text style={styles.headerTitle}>About Us</Text>
//           <Text style={styles.headerSubtitle}>Meet Our Team</Text>
//         </View>
//       </View>

//       <FlatList
//         data={teamMembers}
//         keyExtractor={(item) => item.id}
//         renderItem={renderTeamMember}
//         contentContainerStyle={styles.listContainer}
//         showsVerticalScrollIndicator={false}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8FAFF',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
//   headerContainer: {
//     backgroundColor: '#38bdf8',
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     paddingVertical: 24,
//     paddingHorizontal: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     elevation: 8,
//     marginBottom: 24,
//   },
//   headerContent: {
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     letterSpacing: 0.5,
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#E0E7FF',
//     marginTop: 4,
//     letterSpacing: 0.5,
//   },
//   listContainer: {
//     padding: 16,
//     paddingBottom: 24,
//   },
//   memberContainer: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     marginBottom: 16,
//     padding: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.08,
//     shadowRadius: 4,
//     elevation: 3,
//     borderWidth: 1,
//     borderColor: 'rgba(229, 229, 229, 0.5)',
//   },
//   imageContainer: {
//     position: 'relative',
//     marginRight: 16,
//   },
//   memberImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#E0E7FF',
//   },
//   imageBorder: {
//     position: 'absolute',
//     top: -3,
//     left: -3,
//     right: -3,
//     bottom: -3,
//     borderRadius: 43,
//     borderWidth: 3,
//     borderColor: '#38bdf8',
//     opacity: 0.2,
//   },
//   memberInfo: {
//     flex: 1,
//   },
//   memberName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#38bdf8',
//     marginBottom: 4,
//     letterSpacing: 0.3,
//   },
//   memberRole: {
//     fontSize: 14,
//     color: '#6B7280',
//     letterSpacing: 0.2,
//   },
// });



import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

const teamMembers = [
  {
    id: "1",
    name: "Md. Tauseef - Ur - Rahman",
    role: "Student: University of Dhaka",
    image: require("../../assets/images/email1.jpg"), // Ensure this path is correct
  },
  {
    id: "2",
    name: "Tamzid Bin Tariq",
    role: "Student: University of Dhaka",
    image: require("../../assets/images/email1.jpg"), // Ensure this path is correct
  },
  {
    id: "3",
    name: "Ashraful Alam",
    role: "Student: University of Dhaka",
    image: require("../../assets/images/email1.jpg"), // Ensure this path is correct
  },
  {
    id: "4",
    name: "Sumaiya Tabassum",
    role: "Student: University of Dhaka",
    image: require("../../assets/images/email1.jpg"), // Ensure this path is correct
  },
];

// Log the image paths to verify they are correct
teamMembers.forEach((member, index) => {
  console.log(`Team member ${index + 1} image path:`, member.image);
});

export default function AboutUsPage() {
  const renderTeamMember = ({ item }) => {
    console.log(`Rendering team member: ${item.name}`); // Debugging log
    return (
      <View style={styles.memberContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.memberImage} />
          <View style={styles.imageBorder} />
        </View>
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>{item.name}</Text>
          <Text style={styles.memberRole}>{item.role}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#38bdf8" />
      
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>About Us</Text>
          <Text style={styles.headerSubtitle}>Meet Our Team</Text>
        </View>
      </View>

      <FlatList
        data={teamMembers}
        keyExtractor={(item) => item.id}
        renderItem={renderTeamMember}
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
  memberContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    padding: 20,
    flexDirection: 'row',
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
    marginRight: 16,
  },
  memberImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E0E7FF',
  },
  imageBorder: {
    position: 'absolute',
    top: -3,
    left: -3,
    right: -3,
    bottom: -3,
    borderRadius: 43,
    borderWidth: 3,
    borderColor: '#38bdf8',
    opacity: 0.2,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#38bdf8',
    marginBottom: 4,
    letterSpacing: 0.3,
  },
  memberRole: {
    fontSize: 14,
    color: '#6B7280',
    letterSpacing: 0.2,
  },
});