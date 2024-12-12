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




// // export default function RootLayout() {
//   // useFonts({
//   //   'OpenSans': require('../assets/fonts/OpenSans-Regular.ttf'),
//   //   'OpenSans-medium': require('../assets/fonts/OpenSans-Medium.ttf'),
//   //   'OpenSans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
//   // })
// //   return (
// //     <Stack screenOptions={{ headerShown: false }}>
// //       <Stack.Screen name="(tabs)" />
// //     </Stack>
// //   );
// // }


//////////////////////////////////////////



// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import React, { useState, useEffect } from 'react';
// import { ScrollView, View, Text, TextInput, Button } from 'react-native';
// import { initializeApp, getApps } from 'firebase/app';
// import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
// import styles from './styles'; // Import your styles from the new file

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



import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
// import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";
// import { useNavigation } from "@react-navigation/native";
import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import styles from "./styles"; // Import the styles


// import { View, Text, Image, TextInput, Touchable, TouchableOpacity } from "react-native";
import Animated, {
  FadeIn,
  FadeInUp,
  FadeInDown,
  FadeOut,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";


// Firebase configuration and initialization
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

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);
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
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.authContainer}>
        <StatusBar style="light" />
        <Image
          style={styles.backgroundImage}
          source={require("../assets/images/background.png")}
        />

        {/* Lights */}
        <View style={styles.lightContainer}>
          <Animated.Image
            entering={FadeInUp.delay(200).duration(1000).springify()}
            style={styles.lightImage}
            source={require("../assets/images/light.png")}
          />
          <Animated.Image
            entering={FadeInUp.delay(400).duration(1000).springify()}
            style={styles.lightImageSmall}
            source={require("../assets/images/light.png")}
          />
        </View>

        <View style={styles.formContainer}>
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
          <View style={styles.formInputContainer}>
            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
              style={styles.inputWrapper}
            >
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"gray"}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={styles.inputWrapper}
            >
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={"gray"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </Animated.View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={styles.buttonContainer}
            >
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleAuthentication}
                disabled={loading}
              >
                <Text style={styles.loginButtonText}>
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
                <Text style={styles.toggleLink}>{isLogin ? 'Sign Up' : 'Login'}</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
