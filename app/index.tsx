// File: app/index.tsx
import { Redirect, router } from 'expo-router';
import { LogBox } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

LogBox.ignoreAllLogs(); // Ignore all log notifications

export default function Index() {

  // const handleLogout = async () => {
  //   try {
  //     // Use expo-router's navigation
  //     router.replace("/login");
  //   } catch (error) {
  //     console.error("Login page error:", error);
  //   }
  // };

  const auth = getAuth();
  const user = auth.currentUser;


  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // If user is not authenticated, reset the navigation stack
        // router.reset({
        //   index: 0,
        //   routes: [{ name: "/login" }],
        // });
        router.replace("/login");
      } else {
        router.replace("/mainPage");
      }
    });

    return () => unsubscribe();
  }, []);
  
  // return (
    // handleLogout()
  // );

  // return <Redirect href="/login" />; 


  
}



// // File: app/login.tsx
// // Your existing LoginScreen code, but update navigation to use expo-router
// import { router } from 'expo-router';

// // In your navigation handlers, replace navigation.navigate with router.push
// const handleNavigateToSignUp = () => {
//   router.push('/signup');
// };

// // File: app/signup.tsx
// // Your existing SignUpScreen code, but update navigation to use expo-router
// import { router } from 'expo-router';

// // In your navigation handlers, replace navigation.navigate with router.push
// const handleNavigateToLogin = () => {
//   router.push('/login');
// };

// // File: app/home.tsx
// // Your existing HomeScreen code, but update navigation to use expo-router
// import { router } from 'expo-router';

// // In your navigation handlers, replace navigation.replace with router.replace
// const handleLogout = () => {
//   router.replace('/login');
// };