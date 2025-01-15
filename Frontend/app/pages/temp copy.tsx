import React, { useState } from "react";
import { View, TouchableOpacity, Text, Alert, Platform } from "react-native";
// import { WebView } from "react-native-webview";
import { WebView } from "react-native-webview";

const PaymentButton = () => {
  const [showWebView, setShowWebView] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState("");

  const API_URL = Platform.select({
    ios: "https://livingconnect-backend.vercel.app",
    android: "http://10.0.2.2:5000",
  });

  const handlePayment = async () => {
    try {
      const response = await fetch(
        "https://livingconnect-backend.vercel.app/init",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.url) {
        setPaymentUrl(data.url);
        setShowWebView(true);
      } else {
        Alert.alert("Error", "Payment URL not found in response");
      }
    } catch (error) {
      Alert.alert("Error", "Connection failed. Please try again.");
      console.error("Error fetching payment URL:", error);
    }
  };

  const handleNavigationStateChange = (navState) => {
    const { url } = navState;
    if (url.includes("/success")) {
      setShowWebView(false);
      Alert.alert("Success", "Payment successful!");
    } else if (url.includes("/fail")) {
      setShowWebView(false);
      Alert.alert("Failed", "Payment failed");
    } else if (url.includes("/cancel")) {
      setShowWebView(false);
      Alert.alert("Cancelled", "Payment cancelled");
    }
  };

  if (showWebView && paymentUrl) {
    return (
      <WebView
        source={{ uri: paymentUrl }}
        onNavigationStateChange={handleNavigationStateChange}
      />
    );
  }

  return (
    <TouchableOpacity
      onPress={handlePayment}
      style={{
        backgroundColor: "#2089dc",
        padding: 10,
        borderRadius: 5,
      }}
    >
      <Text style={{ color: "white", textAlign: "center" }}>Pay Now</Text>
    </TouchableOpacity>
  );
};

export default PaymentButton;
