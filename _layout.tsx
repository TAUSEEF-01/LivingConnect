// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import Animated, { FadeIn, FadeInUp, FadeInDown } from 'react-native-reanimated';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
// import { initializeApp, getApps } from 'firebase/app';
// import styles from "./styles";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBMFSINuOzBy4hDLFzPMmZdaNGWh2qRThA",
//   authDomain: "fasthomeapp-21a4d.firebaseapp.com",
//   projectId: "fasthomeapp-21a4d",
//   storageBucket: "fasthomeapp-21a4d.appspot.com",
//   messagingSenderId: "830794875804",
//   appId: "1:830794875804:web:af7a373a2accf68a9bbe59",
//   measurementId: "G-LXMSFJH3PY"
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// const AuthenticatedScreen = ({ user, handleLogout }) => {
//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.title}>Welcome</Text>
//       <Text style={styles.emailText}>{user.email}</Text>
//       <TouchableOpacity style={styles.button} onPress={handleLogout}>
//         <Text style={styles.buttonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default function LoginScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [user, setUser] = useState(null);
//   const [isLogin, setIsLogin] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const auth = getAuth(app);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, [auth]);

//   const handleAuthentication = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       if (isLogin) {
//         await signInWithEmailAndPassword(auth, email, password);
//         console.log('User signed in successfully!');
//       } else {
//         await createUserWithEmailAndPassword(auth, email, password);
//         console.log('User created successfully!');
//       }
//     } catch (error) {
//       setError(error.message);
//       console.error('Authentication error:', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       console.log('User logged out successfully!');
//     } catch (error) {
//       console.error('Logout error:', error.message);
//     }
//   };

//   if (user) {
//     return <AuthenticatedScreen user={user} handleLogout={handleLogout} />;
//   }

//   return (
//     <View style={styles.container}>
//       <StatusBar style="light" />
//       <Image
//         style={styles.backgroundImage}
//         source={require("../assets/images/background.png")}
//       />

//       {/* Lights */}
//       <View style={styles.lightsContainer}>
//         <Animated.Image
//           entering={FadeInUp.delay(200).duration(1000).springify()}
//           style={styles.lightLeft}
//           source={require("../assets/images/light.png")}
//         />
//         <Animated.Image
//           entering={FadeInUp.delay(400).duration(1000).springify()}
//           style={styles.lightRight}
//           source={require("../assets/images/light.png")}
//         />
//       </View>

//       <View style={styles.content}>
//         {/* Title */}
//         <View style={styles.titleContainer}>
//           <Animated.Text
//             entering={FadeInUp.duration(1000).springify()}
//             style={styles.title}
//           >
//             {isLogin ? 'Login' : 'Sign Up'}
//           </Animated.Text>
//         </View>

//         {/* Form */}
//         <View style={styles.formContainer}>
//           <Animated.View
//             entering={FadeInDown.duration(1000).springify()}
//             style={styles.inputContainer}
//           >
//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               placeholderTextColor="gray"
//               value={email}
//               onChangeText={setEmail}
//               autoCapitalize="none"
//               keyboardType="email-address"
//             />
//           </Animated.View>

//           <Animated.View
//             entering={FadeInDown.delay(200).duration(1000).springify()}
//             style={styles.inputContainer}
//           >
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               placeholderTextColor="gray"
//               secureTextEntry
//               value={password}
//               onChangeText={setPassword}
//             />
//           </Animated.View>

//           {error ? <Text style={styles.errorText}>{error}</Text> : null}

//           <Animated.View
//             entering={FadeInDown.delay(400).duration(1000).springify()}
//             style={styles.buttonContainer}
//           >
//             <TouchableOpacity
//               style={styles.button}
//               onPress={handleAuthentication}
//               disabled={loading}
//             >
//               <Text style={styles.buttonText}>
//                 {loading ? 'Please wait...' : isLogin ? 'Login' : 'Sign Up'}
//               </Text>
//             </TouchableOpacity>
//           </Animated.View>

//           <Animated.View
//             entering={FadeInDown.delay(600).duration(1000).springify()}
//             style={styles.toggleContainer}
//           >
//             <Text style={styles.toggleText}>
//               {isLogin ? "Don't have an account? " : "Already have an account? "}
//             </Text>
//             <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
//               <Text style={styles.toggleLink}>
//                 {isLogin ? 'Sign Up' : 'Login'}
//               </Text>
//             </TouchableOpacity>
//           </Animated.View>
//         </View>
//       </View>
//     </View>
//   );
// }
