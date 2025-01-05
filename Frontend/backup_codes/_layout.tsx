// import React, { useState, useEffect } from "react";
// import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { initializeApp, getApps } from "firebase/app";
// import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
// import styles from "./styles"; 
// import Animated, {
//   FadeIn,
//   FadeInUp,
//   FadeInDown,
//   FadeOut,
// } from "react-native-reanimated";
// import { useNavigation } from "@react-navigation/native";


// // Firebase configuration and initialization
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

// export default function LoginScreen() {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [isLogin, setIsLogin] = useState(true);
//   const auth = getAuth(app);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, [auth]);

//   // const handleAuthentication = async () => {
//   //   setLoading(true);
//   //   setError('');
//   //   try {
//   //     if (isLogin) {
//   //       await signInWithEmailAndPassword(auth, email, password);
//   //     } else {
//   //       await createUserWithEmailAndPassword(auth, email, password);
//   //     }
//   //   } catch (err) {
//   //     setError(err.message);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleAuthentication = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       if (isLogin) {
//         await signInWithEmailAndPassword(auth, email, password);
//         navigation.navigate("Home"); // Navigate to HomeScreen after login
//       } else {
//         await createUserWithEmailAndPassword(auth, email, password);
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };
  

  

//   return (
//     // <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.authContainer}>
//         <StatusBar style="light" />
//         <Image
//           style={styles.backgroundImage}
//           source={require("../assets/images/background.png")}
//         />

//         {/* Lights */}
//         <View style={styles.lightContainer}>
//           <Animated.Image
//             entering={FadeInUp.delay(200).duration(1000).springify()}
//             style={styles.lightImage}
//             source={require("../assets/images/light.png")}
//           />
//           <Animated.Image
//             entering={FadeInUp.delay(400).duration(1000).springify()}
//             style={styles.lightImageSmall}
//             source={require("../assets/images/light.png")}
//           />
//         </View>

//         <View style={styles.formContainer}>
//           {/* Title */}
//           <View style={styles.titleContainer}>
//             <Animated.Text
//               entering={FadeInUp.duration(1000).springify()}
//               style={styles.title}
//             >
//               {/* {isLogin ? 'Login' : 'Sign Up'} */}
//               Login
//             </Animated.Text>
//           </View>

//           {/* Form */}
//           <View style={styles.formInputContainer}>
//             <Animated.View
//               entering={FadeInDown.duration(1000).springify()}
//               style={styles.inputWrapper}
//             >
//               <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 placeholderTextColor={"gray"}
//                 value={email}
//                 onChangeText={setEmail}
//                 autoCapitalize="none"
//                 keyboardType="email-address"
//               />
//             </Animated.View>

//             <Animated.View
//               entering={FadeInDown.delay(200).duration(1000).springify()}
//               style={styles.inputWrapper}
//             >
//               <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 placeholderTextColor={"gray"}
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//               />
//             </Animated.View>

//             {error ? <Text style={styles.errorText}>{error}</Text> : null}

//             <Animated.View
//               entering={FadeInDown.delay(400).duration(1000).springify()}
//               style={styles.buttonContainer}
//             >
//               <TouchableOpacity
//                 style={styles.loginButton}
//                 onPress={handleAuthentication}
//                 // onPress={() => navigation.push("SignUp")}
//                 disabled={loading}
//               >
//                 <Text style={styles.loginButtonText}>
//                   {loading ? 'Please wait...' : isLogin ? 'Login' : 'Sign Up'}
//                 </Text>
//               </TouchableOpacity>
//             </Animated.View>

//             <Animated.View
//               entering={FadeInDown.delay(600).duration(1000).springify()}
//               style={styles.toggleContainer}
//             >
//               <Text style={styles.toggleText}>
//                 {isLogin ? "Don't have an account? " : "Already have an account? "}
//               </Text>
//               <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
//                 <Text style={styles.toggleLink}>{isLogin ? 'Sign Up' : 'Login'}</Text>
//               </TouchableOpacity>
//             </Animated.View>
//           </View>
//         </View>
//       </View>
//     // </ScrollView>
//   );
// }















// import React, { useState, useCallback } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { initializeApp } from "firebase/app";
// import {
//   initializeAuth,
//   getReactNativePersistence,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import styles from "./styles";
// import Animated, {
//   FadeInUp,
//   FadeInDown,
// } from "react-native-reanimated";
// import { useFocusEffect } from '@react-navigation/native';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBMFSINuOzBy4hDLFzPMmZdaNGWh2qRThA",
//   authDomain: "fasthomeapp-21a4d.firebaseapp.com",
//   projectId: "fasthomeapp-21a4d",
//   storageBucket: "fasthomeapp-21a4d.appspot.com",
//   messagingSenderId: "830794875804",
//   appId: "1:830794875804:web:af7a373a2accf68a9bbe59",
//   measurementId: "G-LXMSFJH3PY",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

// function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isLogin, setIsLogin] = useState(true);

//   useFocusEffect(
//     useCallback(() => {
//       const unsubscribe = onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is signed in, navigate to Home
//           navigation.replace("Home");
//         }
//       });

//       return () => unsubscribe();
//     }, [navigation])
//   );

//   const handleAuthentication = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       if (isLogin) {
//         await signInWithEmailAndPassword(auth, email, password);
//       } else {
//         await createUserWithEmailAndPassword(auth, email, password);
//       }
//       // Navigation will be handled by the onAuthStateChanged listener
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.authContainer}>
//       <StatusBar style="light" />
//       <Image
//         style={styles.backgroundImage}
//         source={require("../assets/images/background.png")}
//       />

//       {/* Lights */}
//       <View style={styles.lightContainer}>
//         <Animated.Image
//           entering={FadeInUp.delay(200).duration(1000).springify()}
//           style={styles.lightImage}
//           source={require("../assets/images/light.png")}
//         />
//         <Animated.Image
//           entering={FadeInUp.delay(400).duration(1000).springify()}
//           style={styles.lightImageSmall}
//           source={require("../assets/images/light.png")}
//         />
//       </View>

//       <View style={styles.formContainer}>
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
//         <View style={styles.formInputContainer}>
//           <Animated.View
//             entering={FadeInDown.duration(1000).springify()}
//             style={styles.inputWrapper}
//           >
//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               placeholderTextColor={"gray"}
//               value={email}
//               onChangeText={setEmail}
//               autoCapitalize="none"
//               keyboardType="email-address"
//             />
//           </Animated.View>

//           <Animated.View
//             entering={FadeInDown.delay(200).duration(1000).springify()}
//             style={styles.inputWrapper}
//           >
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               placeholderTextColor={"gray"}
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry
//             />
//           </Animated.View>

//           {error ? <Text style={styles.errorText}>{error}</Text> : null}

//           <Animated.View
//             entering={FadeInDown.delay(400).duration(1000).springify()}
//             style={styles.buttonContainer}
//           >
//             <TouchableOpacity
//               style={styles.loginButton}
//               onPress={handleAuthentication}
//               disabled={loading}
//             >
//               <Text style={styles.loginButtonText}>
//                 {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
//               </Text>
//             </TouchableOpacity>
//           </Animated.View>

//           <Animated.View
//             entering={FadeInDown.delay(600).duration(1000).springify()}
//             style={styles.toggleContainer}
//           >
//             <Text style={styles.toggleText}>
//               {isLogin
//                 ? "Don't have an account? "
//                 : "Already have an account? "}
//             </Text>
//             <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
//               <Text style={styles.toggleLink}>
//                 {isLogin ? "Sign Up" : "Login"}
//               </Text>
//             </TouchableOpacity>
//           </Animated.View>
//         </View>
//       </View>
//     </View>
//   );
// }

// export default LoginScreen; 





//////////////////////////////////////////////////////////////////////////////


// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import React, { useState, useEffect } from 'react';
// import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { initializeApp, getApps } from 'firebase/app';
// import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

// // Firebase configuration and initialization
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

// const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication, loading, error }) => {
  
//   // useFonts({
//   //   'OpenSans': require('../assets/fonts/OpenSans-Regular.ttf'),
//   //   'OpenSans-medium': require('../assets/fonts/OpenSans-Medium.ttf'),
//   //   'OpenSans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
//   // })


//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
//       {error ? <Text style={styles.errorText}>{error}</Text> : null}
//       <TextInput
//         style={styles.input}
//         value={email}
//         onChangeText={setEmail}
//         placeholder="Email"
//         autoCapitalize="none"
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         value={password}
//         onChangeText={setPassword}
//         placeholder="Password"
//         secureTextEntry
//       />
//       <View style={styles.buttonContainer}>
//         <Button
//           title={loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Sign Up'}
//           onPress={handleAuthentication}
//           color="#3498db"
//           disabled={loading}
//         />
//       </View>
//       <View style={styles.bottomContainer}>
//         <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
//           {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
//         </Text>
//       </View>
//     </View>
//   );
// };

// const AuthenticatedScreen = ({ user, handleLogout }) => {
//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.title}>Welcome</Text>
//       <Text style={styles.emailText}>{user.email}</Text>
//       <Button title="Logout" onPress={handleLogout} color="#e74c3c" />
//     </View>
//   );
// };

// export default App = () => {

//   // useFonts({
//   //   'OpenSans': require('../assets/fonts/OpenSans-Regular.ttf'),
//   //   'OpenSans-medium': require('../assets/fonts/OpenSans-Medium.ttf'),
//   //   'OpenSans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
//   // })
  
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
//       if (user) {
//         await signOut(auth);
//         console.log('User logged out successfully!');
//       } else {
//         if (isLogin) {
//           await signInWithEmailAndPassword(auth, email, password);
//           console.log('User signed in successfully!');
//         } else {
//           await createUserWithEmailAndPassword(auth, email, password);
//           console.log('User created successfully!');
//         }
//       }
//     } catch (error) {
//       setError(error.message);
//       console.error('Authentication error:', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {user ? (
//         <AuthenticatedScreen user={user} handleLogout={handleAuthentication} />
//       ) : (
//         <AuthScreen
//           email={email}
//           setEmail={setEmail}
//           password={password}
//           setPassword={setPassword}
//           isLogin={isLogin}
//           setIsLogin={setIsLogin}
//           handleAuthentication={handleAuthentication}
//           loading={loading}
//           error={error}
//         />
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   authContainer: {
//     width: '80%',
//     maxWidth: 400,
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 8,
//     elevation: 3,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     marginBottom: 16,
//     padding: 8,
//     borderRadius: 4,
//   },
//   buttonContainer: {
//     marginBottom: 16,
//   },
//   toggleText: {
//     color: '#3498db',
//     textAlign: 'center',
//   },
//   bottomContainer: {
//     marginTop: 20,
//   },
//   emailText: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   errorText: {
//     color: '#e74c3c',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
// });






/////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import Animated, { FadeIn, FadeInUp, FadeInDown } from 'react-native-reanimated';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
// import { initializeApp, getApps } from 'firebase/app';

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

// export default function LoginScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const auth = getAuth(app);

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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   backgroundImage: {
//     height: '100%',
//     width: '100%',
//     position: 'absolute',
//   },
//   lightsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     position: 'absolute',
//   },
//   lightLeft: {
//     height: 225,
//     width: 90,
//   },
//   lightRight: {
//     height: 160,
//     width: 65,
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'space-around',
//     paddingTop: 160,
//     paddingBottom: 40,
//   },
//   titleContainer: {
//     alignItems: 'center',
//   },
//   title: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 50,
//     letterSpacing: 2,
//   },
//   formContainer: {
//     alignItems: 'center',
//     marginHorizontal: 16,
//     marginTop: 20,
//   },
//   inputContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     padding: 20,
//     borderRadius: 16,
//     width: '100%',
//     marginBottom: 16,
//   },
//   input: {
//     fontSize: 16,
//   },
//   errorText: {
//     color: '#e74c3c',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   buttonContainer: {
//     width: '100%',
//   },
//   button: {
//     backgroundColor: '#38bdf8',
//     padding: 12,
//     borderRadius: 16,
//     marginBottom: 12,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   toggleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   toggleText: {
//     fontSize: 16,
//   },
//   toggleLink: {
//     fontSize: 16,
//     color: '#0284c7',
//   },
// });




























import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeIn, FadeInUp, FadeInDown } from 'react-native-reanimated';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { initializeApp, getApps } from 'firebase/app';
import styles from "./styles";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMFSINuOzBy4hDLFzPMmZdaNGWh2qRThA",
  authDomain: "fasthomeapp-21a4d.firebaseapp.com",
  projectId: "fasthomeapp-21a4d",
  storageBucket: "fasthomeapp-21a4d.appspot.com",
  messagingSenderId: "830794875804",
  appId: "1:830794875804:web:af7a373a2accf68a9bbe59",
  measurementId: "G-LXMSFJH3PY"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const AuthenticatedScreen = ({ user, handleLogout }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.emailText}>{user.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    setLoading(true);
    setError('');
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in successfully!');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created successfully!');
      }
    } catch (error) {
      setError(error.message);
      console.error('Authentication error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out successfully!');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  if (user) {
    return <AuthenticatedScreen user={user} handleLogout={handleLogout} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={styles.backgroundImage}
        source={require("../assets/images/background.png")}
      />

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
        {/* Title */}
        <View style={styles.titleContainer}>
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            style={styles.title}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </Animated.Text>
        </View>

        {/* Form */}
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
              onPress={handleAuthentication}
              disabled={loading}
            >
              <Text style={styles.buttonText}>
                {loading ? 'Please wait...' : isLogin ? 'Login' : 'Sign Up'}
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={styles.toggleContainer}
          >
            <Text style={styles.toggleText}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
            </Text>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text style={styles.toggleLink}>
                {isLogin ? 'Sign Up' : 'Login'}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   backgroundImage: {
//     height: '100%',
//     width: '100%',
//     position: 'absolute',
//   },
//   lightsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     position: 'absolute',
//   },
//   lightLeft: {
//     height: 225,
//     width: 90,
//   },
//   lightRight: {
//     height: 160,
//     width: 65,
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'space-around',
//     paddingTop: 160,
//     paddingBottom: 40,
//   },
//   titleContainer: {
//     alignItems: 'center',
//   },
//   title: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 50,
//     letterSpacing: 2,
//   },
//   formContainer: {
//     alignItems: 'center',
//     marginHorizontal: 16,
//     marginTop: 20,
//   },
//   inputContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     padding: 20,
//     borderRadius: 16,
//     width: '100%',
//     marginBottom: 16,
//   },
//   input: {
//     fontSize: 16,
//   },
//   errorText: {
//     color: '#e74c3c',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   buttonContainer: {
//     width: '100%',
//   },
//   button: {
//     backgroundColor: '#38bdf8',
//     padding: 12,
//     borderRadius: 16,
//     marginBottom: 12,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   toggleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   toggleText: {
//     fontSize: 16,
//   },
//   toggleLink: {
//     fontSize: 16,
//     color: '#0284c7',
//   },
//   authContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   emailText: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
// });