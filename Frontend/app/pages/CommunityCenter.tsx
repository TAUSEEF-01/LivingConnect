import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Alert,
  TextInput, // Ensure TextInput is imported
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { router, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import styles from "../../styles";
import SidePanel from "../sidePanel/sidePanel";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CommunityCenter() {
  const [isSidePanelVisible, setSidePanelVisible] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const toggleSidePanel = () => {
    setSidePanelVisible(!isSidePanelVisible);
  };

  const [activeTab, setActiveTab] = useState("Home"); // Default active tab

  const handleTabPress = (tabName) => {
    setActiveTab(tabName); // Set the active tab
  };

  const handleShowAllPress = async () => {
    router.push("/pages/showAll");
    // router.push("/pages/temp");
    // router.replace("/pages/showAll");
  };

  const handleHomePress = async () => {
    router.push("/pages/categoryHome");
    // router.replace("/pages/showAll");
  };

  const handleApartmentPress = async () => {
    router.push("/pages/categoryApartment");
    // router.replace("/pages/showAll");
  };

  const handleSubletPress = async () => {
    router.push("/pages/categorySublet");
    // router.replace("/pages/showAll");
  };

  const handleRentAHomePress = async () => {
    // const handleRentAHomePress = () => {

    router.push("/Rent/rentAHomeForm");
    // router.replace("/Rent/rentAHomeForm");
  };

  const handleProvideServicesPress = async () => {
    // const handleProvideServicesPress = () => {
    router.push("/services/deliveryServices");
    // router.replace("/services/deliveryServices");
  };

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch("http://192.168.50.242:5000/properties");
        // const response = await fetch("http://192.168.50.242:5000/properties");
        const data = await response.json();

        // console.log('Fetched properties:', data);

        if (Array.isArray(data.properties)) {
          setProperties(data.properties);
        } else {
          console.error("Expected an array of properties");
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    }

    fetchProperties();
  }, []);

  const [homes, setHomes] = useState([]);
  const fetchAllHomeDetails = async () => {
    try {
      const response = await axios.get(
        "http://192.168.50.242:5000/houseDetails/get-all-Homes-details"
        // "http://192.168.50.242:5000/houseDetails/get-all-Homes-details"
      );
      setHomes(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch all home details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllHomeDetails();
  }, []);

  if (loading) {
    return (
      <View style={localStyles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} /> */}

      <View style={localStyles.statusBarWrapper}>
        <StatusBar
          barStyle="light-content" // Light content for white text/icons on a dark background
          backgroundColor="black" // Transparent background for the StatusBar
          translucent={true} // Make it overlay the screen content
        />
      </View>

      {/* <StatusBar style="light" /> */}
      {/* <View style={localStyles.topBar} /> */}
      {/* Sidebar */}
      <SidePanel
        isVisible={isSidePanelVisible}
        onClose={() => setSidePanelVisible(false)}
      />

      <ScrollView style={localStyles.container}>
        {isSidePanelVisible && (
          <TouchableOpacity
            style={[
              localStyles.overlay,
              { zIndex: 999 }, // Ensure it's below the menu button but above other content
            ]}
            activeOpacity={1}
            onPress={() => setSidePanelVisible(false)}
          >
            <SidePanel
              isVisible={isSidePanelVisible}
              onClose={() => setSidePanelVisible(false)}
            />
          </TouchableOpacity>
        )}

        {/* Banner */}

        <View style={localStyles.banner}>
          <TouchableOpacity
            onPress={toggleSidePanel}
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              zIndex: 100,
            }}
          >
            <View style={localStyles.menuIcon}>
              <View style={localStyles.bar} />
              <View style={localStyles.bar} />
              <View style={localStyles.bar} />
            </View>
          </TouchableOpacity>

          <View style={localStyles.bannerImageContainer}>
            <Image
              source={require("../../assets/images/mainpage_image.jpg")}
              // source={{
              //   uri: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              // }} // Replace with actual image URL
              style={localStyles.bannerImage}
            />
          </View>
        </View>

        <View style={localStyles.navTabs}>
          <TouchableOpacity
            style={[
              localStyles.tab,
              activeTab === "Home" && localStyles.activeTab,
            ]}
            onPress={() => handleTabPress("Home")}
          >
            <Text
              style={[
                localStyles.tabText,
                activeTab === "Home" && localStyles.activeTabText,
              ]}
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              localStyles.tab,
              activeTab === "Community Center" && localStyles.activeTab,
            ]}
            onPress={() => handleTabPress("Community Center")}
          >
            {/* <Text style={localStyles.tabText}>Community Center</Text> */}

            <Text
              style={[
                localStyles.tabText,
                activeTab === "Community Center" && localStyles.activeTabText,
              ]}
            >
              Community Center
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              localStyles.tab,
              activeTab === "Services" && localStyles.activeTab,
            ]}
            onPress={() => handleTabPress("Services")}
          >
            <Text
              style={[
                localStyles.tabText,
                activeTab === "Services" && localStyles.activeTabText,
              ]}
            >
              Services
            </Text>
          </TouchableOpacity>
        </View>

        {/* Filter */}
        <View style={localStyles.filter}>
          <View style={localStyles.filterOptions}>
            <TouchableOpacity
              style={localStyles.filterButton}
              onPress={() => {
                console.log("pressed before");
                handleRentAHomePress();
                console.log("Rent a Home button pressed");
              }}
            >
              {/* <Text style={localStyles.plusButton}>+</Text> */}
              <Ionicons
                name="add-circle-outline"
                style={localStyles.plusButton}
              />
              <Text style={localStyles.filterButtonText}>Add Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={localStyles.filterButton}
              onPress={() => {
                handleProvideServicesPress(),
                  console.log("Provide Services button pressed");
              }}
            >
              {/* <Text style={localStyles.plusButton}>+</Text> */}
              <Ionicons
                name="add-circle-outline"
                style={localStyles.plusButton}
              />
              <Text style={localStyles.filterButtonText}>Add Service</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={localStyles.filterButton}>
              <Text style={localStyles.filterButtonText}>Hotel</Text>
            </TouchableOpacity> */}
          </View>
          <TextInput
            placeholder="Where would you like to live?"
            placeholderTextColor="#ccc"
            style={localStyles.searchInput}
          />
          <View style={localStyles.filterActions}>
            <TouchableOpacity
              style={localStyles.actionButton}
              onPress={() => {
                router.push("/payment/paymentPage");
              }}
            >
              <Text style={localStyles.actionButtonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={localStyles.actionButton}
              onPress={() => {
                router.push("/pages/Map/googleMapPage");
              }}
            >
              <Text style={localStyles.actionButtonText}>Rent</Text>
            </TouchableOpacity>
          </View>
        </View>

        {activeTab === "Community Center" ? (
          <View style={localStyles.imageContainer}>
            <Image
              source={require("../../assets/images/mainpage_image.jpg")} // Community Center image path
              style={localStyles.communityCenterImage}
            />
          </View>
        ) : activeTab === "Services" ? (
          <View style={localStyles.imageContainer}>
            <Image
              source={require("../../assets/images/showAll_page_image.jpg")} // Services image path
              style={localStyles.communityCenterImage}
            />
          </View>
        ) : activeTab === "Home" ? (
          <View style={localStyles.latestListings}>
            <Text style={localStyles.latestListingsHeader}>
              Home For Rent or Sale
            </Text>
            <TouchableOpacity onPress={handleShowAllPress}>
              <Text style={localStyles.showAll}>Show all</Text>
            </TouchableOpacity>

            {/* Home Categories */}
            <TouchableOpacity onPress={handleHomePress}>
              <Text style={localStyles.categories}>Home</Text>
            </TouchableOpacity>
            <ScrollView horizontal style={localStyles.cardContainer}>
              {homes.map((home) => (
                <TouchableOpacity
                  key={home._id}
                  style={localStyles.card}
                  onPress={() =>
                    router.push({
                      pathname: "/pages/HomeInfoPage/homeDetailsShowPage",
                      params: { homeId: home._id }, // Pass the home ID as a query parameter
                    })
                  } // Navigate to the details page
                >
                  {home.images.length > 0 && (
                    <Image
                      source={{ uri: home.images[0] }} // Display the first image
                      style={localStyles.cardImage}
                    />
                  )}
                  <Text style={localStyles.cardPrice}>Tk {home.rent}</Text>
                  <Text style={localStyles.cardDetails}>
                    {home.details.beds} beds | {home.details.baths} baths |{" "}
                    {home.details.size} m²
                  </Text>
                  <Text style={localStyles.cardLocation}>
                    {home.location.city}, {home.location.area}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Similar sections for "Apartment" and "Sublet" */}
            <TouchableOpacity onPress={handleApartmentPress}>
              <Text style={localStyles.categories}>Apartment</Text>
            </TouchableOpacity>
            <ScrollView horizontal style={localStyles.cardContainer}>
              {homes.map((home) => (
                <TouchableOpacity
                  key={home._id}
                  style={localStyles.card}
                  onPress={() =>
                    router.push({
                      pathname: "/pages/HomeInfoPage/homeDetailsShowPage",
                      params: { homeId: home._id },
                    })
                  }
                >
                  {home.images.length > 0 && (
                    <Image
                      source={{ uri: home.images[0] }}
                      style={localStyles.cardImage}
                    />
                  )}
                  <Text style={localStyles.cardPrice}>Tk {home.rent}</Text>
                  <Text style={localStyles.cardDetails}>
                    {home.details.beds} beds | {home.details.baths} baths |{" "}
                    {home.details.size} m²
                  </Text>
                  <Text style={localStyles.cardLocation}>
                    {home.location.city}, {home.location.area}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  communityCenterImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },

  // topBar: {
  //   height: 40, // Adjust the height of the top bar
  //   backgroundColor: "#38bdf8", // Color for the top bar
  //   width: "100%",
  //   position: "absolute",
  //   top: 0,
  // },

  statusBarWrapper: {
    marginBottom: 33, // Adjust the bottom margin as needed
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Ensures spacing between logo and icon
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#38bdf8",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  menuIcon: {
    width: 35,
    height: 26, // Adjust to ensure the bars fit within this height
    justifyContent: "space-between", // Evenly space the bars
    alignItems: "center", // Center align the bars horizontally
    // backgroundColor: "transparent", // Optional: Transparent background
    backgroundColor: "black", // Replace with your desired color
    padding: 3,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 6,
  },

  bar: {
    width: "100%", // Make the bars span the full width of the menuIcon
    height: 3, // Thickness of the bars
    // backgroundColor: "black", // Replace with your desired color
    borderRadius: 2, // Rounded corners for the bars
    backgroundColor: "white", // Replace with your desired color
  },
  // menuIcon: {
  //   width: 30,
  //   height: 24,

  //   backgroundColor: "black", // Replace with your desired color
  //   borderRadius: 4, // Optional for rounded corners
  // },

  // bar: {
  //   width: '90%',
  //   height: 3,
  //   padding: 2,
  //   backgroundColor: "white",
  //   marginVertical: 1,
  // },

  banner: {
    backgroundColor: "#1e3a8a",
    position: "relative", // Ensure text and image stack properly
  },

  bannerImageContainer: {
    width: "100%",
    height: 200, // Adjust the height as needed
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8, // Optional for rounded corners
  },

  navTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
    backgroundColor: "black",
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 1,
    marginTop: 1,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#38bdf8",
  },
  activeTabText: {
    color: "#38bdf8",
  },
  tabText: {
    textAlign: "center",
    color: "white",
  },
  filter: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "black",
  },
  filterOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    // justifyContent: "space-around",
    marginBottom: 12,
  },
  plusButton: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 1,
  },
  filterButton: {
    // backgroundColor: "grey",
    backgroundColor: "#38bdf8",
    paddingHorizontal: 16,
    paddingVertical: 12,
    // paddingBottom: 12,
    // paddingTop: 1,

    borderRadius: 8,
    // width: 115,
    width: "49%",
    marginBottom: 1,
    marginTop: 1,
  },
  filterButtonText: {
    textAlign: "center",
    color: "white",
  },
  searchInput: {
    backgroundColor: "#2d3748",
    color: "white",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 1,
    marginTop: 1,
  },
  filterActions: {
    flexDirection: "row",
    // justifyContent: "space-around",
    justifyContent: "space-between",
    marginTop: 12,
  },
  actionButton: {
    backgroundColor: "#38bdf8",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    width: "49%",
    marginBottom: 1,
    marginTop: 1,
  },
  actionButtonText: {
    textAlign: "center",
    color: "white",
  },
  latestListings: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  latestListingsHeader: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  showAll: {
    color: "#38bdf8",
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "bold",
    // fontStyle: "italic",
  },
  categories: {
    color: "#38bdf8",
    marginBottom: 12,
  },
  cardContainer: {
    flexDirection: "row",
    // paddingHorizontal: 2,
    marginBottom: 16,
  },

  // cardContainer: {
  //   flexDirection: "row",
  //   marginBottom: 16,
  //   shadowColor: "white", // Shadow color
  //   shadowOffset: { width: 2, height: 2 }, // Horizontal shadow
  //   shadowOpacity: 0.25, // Shadow transparency
  //   shadowRadius: 3, // Blur radius
  //   elevation: 3, // Android-specific shadow
  //   // backgroundColor: "white", // Required for shadows to appear
  //   backgroundColor: "black",
  //   borderRadius: 3, // Optional: Add rounded corners
  // },

  card: {
    backgroundColor: "#2d3748",
    padding: 16,
    borderRadius: 8,
    marginRight: 16,
    width: 200,
  },
  cardImage: {
    height: 100,
    width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  cardPrice: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardDetails: {
    color: "white",
    marginBottom: 4,
  },
  cardLocation: {
    color: "gray",
  },

  sidePanel: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: 300,
    backgroundColor: "white",
    padding: 16,
    zIndex: 2,
    transform: [{ translateX: -300 }],
    transition: "transform 0.3s ease-in-out",
    // Add overflow handling to prevent scrolling
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.21)", // Dark overlay
    zIndex: 1, // Below the side panel
  },

  contactButton: {
    padding: 12,
    // backgroundColor: "#2563eb",
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Keep as absolute
    bottom: "20%", // Fixed pixel value instead of percentage
    alignSelf: "center",
    width: "80%", // Optional: make button width consistent
  },

  aboutButton: {
    padding: 12,
    // backgroundColor: "#22c55e",//38bdf8
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Keep as absolute
    bottom: "28%", // Fixed pixel value instead of percentage
    alignSelf: "center",
    width: "80%", // Optional: make button width consistent
  },

  logoutButton: {
    padding: 12,
    backgroundColor: "#ef4444",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Keep as absolute
    bottom: "8%", // Fixed pixel value instead of percentage
    alignSelf: "center",
    width: "80%", // Optional: make button width consistent
  },

  mapButton: {
    // backgroundColor: "grey",
    backgroundColor: "#38bdf8",
    paddingHorizontal: 16,
    paddingVertical: 12,
    // paddingBottom: 12,
    // paddingTop: 1,

    borderRadius: 8,
    // width: 115,
    width: "100%",
    marginBottom: 1,
    marginTop: 10,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
