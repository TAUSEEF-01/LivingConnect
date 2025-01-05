// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { initializeApp, getApps } from "firebase/app";
// import {
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
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
//   measurementId: "G-LXMSFJH3PY",
// };



// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// export default function LoginScreen() {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
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
//     setError("");
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
//             {/* {isLogin ? 'Login' : 'Sign Up'} */}
//             Login
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
//               // onPress={() => navigation.push("SignUp")}
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
//     // </ScrollView>
//   );
// }


///////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { initializeApp, getApps } from "firebase/app";
// import {
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import styles from "./styles";
// import Animated, {
//   FadeInUp,
//   FadeInDown,
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
//   measurementId: "G-LXMSFJH3PY",
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// // Initialize Firebase Auth with AsyncStorage for persistence
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

// export default function LoginScreen() {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isLogin, setIsLogin] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleAuthentication = async () => {
//     setLoading(true);
//     setError("");
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
//             Login
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
//               {isLogin ? "Don't have an account? " : "Already have an account? "}
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











// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   Button,
// } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { initializeApp, getApps } from "firebase/app";
// import {
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signOut,
//   initializeAuth,
//   getReactNativePersistence,
// } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import styles from "./styles";
// import Animated, {
//   FadeInUp,
//   FadeInDown,
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
//   measurementId: "G-LXMSFJH3PY",
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// // Initialize Firebase Auth with AsyncStorage for persistence
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

// export default function LoginScreen() {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isLogin, setIsLogin] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleAuthentication = async () => {
//     setLoading(true);
//     setError("");
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

//   const handleLogout = async () => {
//     await signOut(auth);
//     setUser(null);
//   };

//   const AuthenticatedScreen = ({ user, handleLogout }) => {
//     return (
//       <View style={styles.authContainer}>
//         <Text style={styles.title}>Welcome</Text>
//         <Text style={styles.emailText}>{user?.email}</Text>
//         <Button title="Logout" onPress={handleLogout} color="#e74c3c" />
//       </View>
//     );
//   };

//   return (
//     <View style={styles.authContainer}>
//       <StatusBar style="light" />
//       <Image
//         style={styles.backgroundImage}
//         source={require("../assets/images/background.png")}
//       />

//       {/* Check if user is authenticated */}
//       {user ? (
//         <AuthenticatedScreen user={user} handleLogout={handleLogout} />
//       ) : (
//         <>
//           {/* Lights */}
//           <View style={styles.lightContainer}>
//             <Animated.Image
//               entering={FadeInUp.delay(200).duration(1000).springify()}
//               style={styles.lightImage}
//               source={require("../assets/images/light.png")}
//             />
//             <Animated.Image
//               entering={FadeInUp.delay(400).duration(1000).springify()}
//               style={styles.lightImageSmall}
//               source={require("../assets/images/light.png")}
//             />
//           </View>

//           <View style={styles.formContainer}>
//             {/* Title */}
//             <View style={styles.titleContainer}>
//               <Animated.Text
//                 entering={FadeInUp.duration(1000).springify()}
//                 style={styles.title}
//               >
//                 Login
//               </Animated.Text>
//             </View>

//             {/* Form */}
//             <View style={styles.formInputContainer}>
//               <Animated.View
//                 entering={FadeInDown.duration(1000).springify()}
//                 style={styles.inputWrapper}
//               >
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Email"
//                   placeholderTextColor={"gray"}
//                   value={email}
//                   onChangeText={setEmail}
//                   autoCapitalize="none"
//                   keyboardType="email-address"
//                 />
//               </Animated.View>

//               <Animated.View
//                 entering={FadeInDown.delay(200).duration(1000).springify()}
//                 style={styles.inputWrapper}
//               >
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Password"
//                   placeholderTextColor={"gray"}
//                   value={password}
//                   onChangeText={setPassword}
//                   secureTextEntry
//                 />
//               </Animated.View>

//               {error ? <Text style={styles.errorText}>{error}</Text> : null}

//               <Animated.View
//                 entering={FadeInDown.delay(400).duration(1000).springify()}
//                 style={styles.buttonContainer}
//               >
//                 <TouchableOpacity
//                   style={styles.loginButton}
//                   onPress={handleAuthentication}
//                   disabled={loading}
//                 >
//                   <Text style={styles.loginButtonText}>
//                     {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
//                   </Text>
//                 </TouchableOpacity>
//               </Animated.View>

//               <Animated.View
//                 entering={FadeInDown.delay(600).duration(1000).springify()}
//                 style={styles.toggleContainer}
//               >
//                 <Text style={styles.toggleText}>
//                   {isLogin
//                     ? "Don't have an account? "
//                     : "Already have an account? "}
//                 </Text>
//                 <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
//                   <Text style={styles.toggleLink}>
//                     {isLogin ? "Sign Up" : "Login"}
//                   </Text>
//                 </TouchableOpacity>
//               </Animated.View>
//             </View>
//           </View>
//         </>
//       )}
//     </View>
//   );
// }









//////////////////////////////////////////////////////////


// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { initializeApp, getApps } from "firebase/app";
// import {
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import styles from "./styles";
// import Animated, {
//   FadeInUp,
//   FadeInDown,
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
//   measurementId: "G-LXMSFJH3PY",
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// // Initialize Firebase Auth with AsyncStorage for persistence
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

// export default function LoginScreen() {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isLogin, setIsLogin] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleAuthentication = async () => {
//     setLoading(true);
//     setError("");
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
//             Login
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
//               {isLogin ? "Don't have an account? " : "Already have an account? "}
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




// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { initializeApp, getApps } from "firebase/app";
// import {
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import styles from "./styles";
// import Animated, {
//   FadeInUp,
//   FadeInDown,
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
//   measurementId: "G-LXMSFJH3PY",
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// // Initialize Firebase Auth with AsyncStorage for persistence
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

// export default function LoginScreen() {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isLogin, setIsLogin] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       // Navigate to Home if user is authenticated
//       if (currentUser) {
//         navigation.navigate("Home");
//       }
//     });
//     return () => unsubscribe();
//   }, [navigation]); // Adding navigation as a dependency

//   const handleAuthentication = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       if (isLogin) {
//         await signInWithEmailAndPassword(auth, email, password);
//         // If login is successful, navigate to Home
//         navigation.navigate("Home");
//       } else {
//         await createUserWithEmailAndPassword(auth, email, password);
//       }
//       // Clear email and password after successful authentication
//       setEmail("");
//       setPassword("");
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
//             Login
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
//               {isLogin ? "Don't have an account? " : "Already have an account? "}
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





/////////////////////////////////////////////////

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