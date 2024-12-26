import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";
import axios from "axios"; // Axios for making HTTP requests
import { StyleSheet } from "react-native";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  // const handleSignUp = async () => {
  //   if (password !== confirmPassword) {
  //     setError("Passwords don't match");
  //     return;
  //   }
  
  //   setLoading(true);
  //   setError("");
  //   try {
  //     // Use your computer's IP
  //     const response = await axios.post("http://localhost:5000/register", {
  //       email,
  //       password,
  //     });
  
  //     console.log("Full response:", response); // Add this for more detailed logging
  
  //     if (response.status === 201) {
  //       router.replace("/login");
  //     } else {
  //       setError(response.data.message || "Failed to register");
  //     }
  //   } catch (error) {
  //     // More detailed error logging
  //     console.error("Full error object:", error);
  //     console.error("Error response:", error.response);
  //     console.error("Error request:", error.request);
      
  //     setError(
  //       error.response?.data?.message || 
  //       error.response?.data?.error || 
  //       "Sign up failed"
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    

    setLoading(true);
    setError("");
    try {

      // console.log("here we go1");

      // Send registration data to the server
      const response = await axios.post("http://192.168.50.242:5000/auth/register", 
      // const response = await axios.post("http://59.153.103.24/32/auth/register", 
      {
        email,
        password,
      });

      // console.log("here we go2");

      if (response.status === 201) {
        router.replace("/login"); // Redirect to login page after successful signup
      } else {
        setError(response.data.message || "Failed to register");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Sign up failed");
      console.error("Sign up error:", error);
    } finally {
      setLoading(false);
    }
  };

  
  // const testRegister = async () => {
  //   try {
  //     const userData = {
  //       email: "test@example.com",
  //       password: "password123",
  //     };

  //     const response = await axios.post("http://192.168.50.242:5000/register", userData);

  //     // const response = await axios.post("http://localhost:5000/register", {
  //     //   email: "test@example.com",
  //     //   password: "password123",
  //     // }, {
  //     //   headers: {
  //     //     'Content-Type': 'application/json'
  //     //   }
  //     // });
      
  //     console.log("API response:", response.data);
  //   } catch (error) {
  //     console.error("API error:", error.response ? error.response.data : error.message);
  //   }
  // };



  // const testRegister1 = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: "test@example.com",
  //         password: "password123",
  //       }),
  //     });
  //     const data = await response.json();
  //     console.log("API response:", data);
  //   } catch (error) {
  //     console.error("API error:", error.message);
  //   }
  // };
  

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={styles.backgroundImage}
        source={require("../assets/images/background.png")}
      />

      <View style={styles.topBar} />

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
            Sign Up
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

          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            style={styles.inputContainer}
          >
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="gray"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </Animated.View>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={styles.buttonContainer}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={handleSignUp}
              // onPress={testRegister}
              disabled={loading}
            >
              <Text style={styles.buttonText}>
                {loading ? "Please wait..." : "Sign Up"}
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(800).duration(1000).springify()}
            style={styles.toggleContainer}
          >
            <Text style={styles.toggleText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.replace("/login")}>
              <Text style={styles.toggleLink}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles remain the same as the original code
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
    height: 40, // Adjust the height of the top bar
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
    top: 40, // Push the lights image down below the top bar
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
  // titleContainer: {
  //   alignItems: "center",
  // },

  titleContainer: {
    alignItems: "center",
    position: "absolute", // Position the title absolutely
    top: "30%", // Position the title at 30% from the top
    width: "100%", // Full width
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 50,
    letterSpacing: 2,
    marginTop: 70,
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
    marginTop: 200,
    marginBottom: 100,
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
