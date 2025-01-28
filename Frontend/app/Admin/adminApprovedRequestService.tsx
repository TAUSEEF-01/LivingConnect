import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import axios from "axios";
import { router, useFocusEffect } from "expo-router";

const AdminPendingRequestPage = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSuccessTrue = async () => {
    try {
      console.log("here you are");
      setLoading(true);
      const response = await axios.get(
        "http://192.168.50.242:5000/serviceDetails/successTrue"
      );
      setForms(response.data);
    } catch (error) {
      Alert.alert(
        "Error",
        "Failed to fetch form details. Please try again later.",
        [{ text: "OK", style: "default" }]
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchSuccessTrue();
      return () => {};
    }, [])
  );

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#22C55E" />
          <Text style={styles.loadingText}>Loading requests...</Text>
        </View>
      );
    }

    if (forms.length === 0) {
      return (
        <View style={styles.centerContainer}>
          <Text style={styles.noDataText}>No forms to verify</Text>
          <Text style={styles.noDataSubText}>
            New requests will appear here
          </Text>
        </View>
      );
    }

    return (
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {forms.map((form, index) => (
          <TouchableOpacity
            key={form._id}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/Admin/approveCancelservice",
                params: { communityId: form._id },
              })
            }
            activeOpacity={0.7}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardNumber}>Request #{index + 1}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>Pending</Text>
              </View>
            </View>
            <View style={styles.cardDivider} />
            <View style={styles.cardContent}>
              <Text style={styles.idLabel}>Request ID:</Text>
              <Text style={styles.idText}>{form._id}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Approved Requests</Text>
        <Text style={styles.headerSubtitle}>Review and Process</Text>
      </View>
      {renderContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    backgroundColor: "#22C55E", // Changed to green
    padding: 24,
    paddingTop: Platform.OS === "ios" ? 20 : 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#DCFCE7", // Adjusted for green theme
    textAlign: "center",
    marginTop: 4,
    letterSpacing: 0.5,
  },
  scrollContainer: {
    flex: 1,
    padding: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#64748B",
    fontWeight: "500",
  },
  noDataText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#64748B",
    marginBottom: 8,
  },
  noDataSubText: {
    fontSize: 14,
    color: "#94A3B8",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: "600",
    color: "#22C55E", // Changed to green
  },
  statusBadge: {
    backgroundColor: "#DCFCE7", // Changed to light green
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#86EFAC", // Changed to green border
  },
  statusText: {
    color: "#16A34A", // Changed to darker green
    fontSize: 12,
    fontWeight: "600",
  },
  cardDivider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginBottom: 12,
  },
  cardContent: {
    gap: 4,
  },
  idLabel: {
    fontSize: 14,
    color: "#64748B",
    fontWeight: "500",
  },
  idText: {
    fontSize: 14,
    color: "#334155",
    fontWeight: "400",
  },
});

export default AdminPendingRequestPage;
