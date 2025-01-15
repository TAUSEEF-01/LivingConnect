import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // const handleLogin = async () => {
  //   setLoading(true);
  //   setError("");

  //   try {
  //     const response = await fetch("http://192.168.50.242:5000/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       // Save the token to AsyncStorage
  //       await AsyncStorage.setItem("userToken", data.token);

  //       // Navigate to the main page
  //       console.log("Login successful:", data);
  //       // router.replace("/(tabs)/mainPage");
  //       router.replace("/screens/about_us");
  //     } else {
  //       console.error("Login failed. Status:", response.status, "Message:", data.message);
  //       setError(data.message || "Failed to log in.");
  //     }
  //   } catch (err) {
  //     console.error("Error during login:", err.message);
  //     setError("Something went wrong. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://192.168.50.242:5000/auth/login", {
        // const response = await fetch("http://192.168.50.242:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        // console.log("Login successful:", data);

        console.log("logged in!");

        const token = data.token;
        await AsyncStorage.setItem("userToken", token);

        // console.log("Token saved to AsyncStorage:", token);

        // router.replace("/(tabs)/mainPage"); // Navigate to the main page
        router.replace("/pages/mainPage");

        // router.replace("/(tabs)/explore"); // Navigate to the main page

        // router.replace("/screens/about_us"); // Navigate to the main page
      } else {
        // Login failed
        setError(data.message || "Failed to log in.");
        console.error("Login error:", data.message);
      }
    } catch (err) {
      console.error("Error during login:", err.message);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={styles.backgroundImage}
        source={require("../assets/images/background.png")}
      />

      {/* Top bar to ensure lights image is below status bar */}
      <View style={styles.topBar} />

      {/* Lights */}
      <View style={styles.lightsContainer}>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={styles.lightLeft}
          source={require("../assets/images/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          style={styles.lightRight}
          source={require("../assets/images/light.png")}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            style={styles.title}
          >
            Login
          </Animated.Text>
        </View>

        <View style={styles.formContainer}>
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            style={styles.inputContainer}
          >
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="gray"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={styles.inputContainer}
          >
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </Animated.View>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            style={styles.buttonContainer}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
              disabled={loading}
            >
              <Text style={styles.buttonText}>
                {loading ? "Please wait..." : "Login"}
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={styles.toggleContainer}
          >
            <Text style={styles.toggleText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.replace("/signup")}>
              <Text style={styles.toggleLink}>Sign Up</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /* Styles go here */
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  topBar: {
    height: 33, // Adjust the height of the top bar
    backgroundColor: "#38bdf8", // Color for the top bar
    width: "100%",
    position: "absolute",
    top: 0,
  },
  lightsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
    top: 33, // Push the lights image down below the top bar
  },
  lightLeft: {
    height: 225,
    width: 90,
  },
  lightRight: {
    height: 160,
    width: 65,
  },
  content: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: 160,
    paddingBottom: 40,
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    marginTop: 60,
    fontSize: 50,
    letterSpacing: 2,
  },
  titleHome: {
    color: "Black",
    fontWeight: "bold",
    fontSize: 50,
    letterSpacing: 2,
  },
  formContainer: {
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 100,
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    padding: 20,
    borderRadius: 16,
    width: "100%",
    marginBottom: 16,
  },
  input: {
    fontSize: 16,
  },
  errorText: {
    color: "#e74c3c",
    marginBottom: 16,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#38bdf8",
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  toggleText: {
    fontSize: 16,
  },
  toggleLink: {
    fontSize: 16,
    color: "#0284c7",
  },
  authContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  emailText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
