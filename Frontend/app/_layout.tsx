// import React, { useEffect, useState } from "react";
// import { Stack, useRouter } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// export default function Layout() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   // Function to check authentication
//   const checkAuthStatus = async () => {
//     try {
//       // Assuming you store a session token in AsyncStorage
//       const token = await AsyncStorage.getItem("userToken");
//       if (!token) {
//         setIsAuthenticated(false);
//         router.replace("/login");
//         return;
//       }

//       // Verify the token/session with your backend (if applicable)
//       const response = await axios.get("http://localhost:5000/verify", {
//         headers: {
//           Authorization: `Bearer ${token}`, // Adjust if you're using cookies or other mechanisms
//         },
//       });

//       if (response.status === 200) {
//         setIsAuthenticated(true);
//       } else {
//         setIsAuthenticated(false);
//         router.replace("/login");
//       }
//     } catch (err) {
//       console.error("Authentication check failed:", err);
//       setIsAuthenticated(false);
//       router.replace("/login");
//     }
//   };

//   useEffect(() => {
//     checkAuthStatus();
//   }, []);

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {!isAuthenticated ? (
//         <>
//           <Stack.Screen name="login" options={{ headerShown: false }} />
//           <Stack.Screen name="signup" options={{ headerShown: false }} />
//         </>
//       ) : (
//         <Stack.Screen name="(tabs)" />
//       )}
//     </Stack>
//   );

// }




import { Stack } from "expo-router";



export default function Layout() {
  return (

    
      <Stack screenOptions={{ headerShown: false }} />
  );
}
