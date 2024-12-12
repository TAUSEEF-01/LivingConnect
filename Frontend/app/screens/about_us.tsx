import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { router } from "expo-router";

const teamMembers = [
  {
    id: "1",
    name: "John Doe",
    role: "Project Lead",
    image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Developer",
    image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
  },
  {
    id: "3",
    name: "Alice Johnson",
    role: "Designer",
    image: require("../../assets/images/email1.jpg"), // Adjust with the actual image path
  },
];

export default function AboutUsPage() {
  return (
    <View style={localStyles.authContainer}>
      {/* <View style={localStyles.topBar} /> */}
      <Text style={localStyles.title}>About Us</Text>

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
    alignItems: "center",
    paddingTop: 60,
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
    marginBottom: 20,
  },
  memberContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  memberImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  memberRole: {
    fontSize: 16,
    color: "gray",
  },
});
