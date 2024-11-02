// // File: app/_layout.tsx
// import { Stack } from 'expo-router';
// import { initializeApp, getApps } from 'firebase/app';

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyBMFSINuOzBy4hDLFzPMmZdaNGWh2qRThA",
//   authDomain: "fasthomeapp-21a4d.firebaseapp.com",
//   projectId: "fasthomeapp-21a4d",
//   storageBucket: "fasthomeapp-21a4d.appspot.com",
//   messagingSenderId: "830794875804",
//   appId: "1:830794875804:web:af7a373a2accf68a9bbe59",
//   measurementId: "G-LXMSFJH3PY"
// };

// if (!getApps().length) {
//   initializeApp(firebaseConfig);
// }

// export default function Layout() {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="index" options={{ headerShown: false }} />
//       <Stack.Screen name="login" options={{ headerShown: false }} />
//       <Stack.Screen name="signup" options={{ headerShown: false }} />
//       {/* <Stack.Screen name="DetailPage" options={{ headerShown: false }} /> */}
//       {/* <Stack.Screen name="home" options={{ headerShown: false }} />
//       <Stack.Screen name="testPage" options={{ headerShown: false }} /> */}
//       {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
//       <Stack.Screen name="(tabs)" />
//     </Stack>
//   );
// }



// // 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222

// File: app/_layout.tsx
import React, { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence, onAuthStateChanged } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBMFSINuOzBy4hDLFzPMmZdaNGWh2qRThA",
  authDomain: "fasthomeapp-21a4d.firebaseapp.com",
  projectId: "fasthomeapp-21a4d",
  storageBucket: "fasthomeapp-21a4d.appspot.com",
  messagingSenderId: "830794875804",
  appId: "1:830794875804:web:af7a373a2accf68a9bbe59",
  measurementId: "G-LXMSFJH3PY"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Use initializeAuth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      if (!user) {
        router.replace('/login');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="signup" options={{ headerShown: false }} />
        </>
      ) : (
        <Stack.Screen name="(tabs)" />
      )}
    </Stack>
  );
}




// ////////////////////////////////////////////////////////////

// // File: app/_layout.tsx
// import React, { useEffect, useState } from 'react';
// import { Stack, useRouter } from 'expo-router';
// import { initializeApp, getApps } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import * as SplashScreen from "expo-splash-screen";

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyBMFSINuOzBy4hDLFzPMmZdaNGWh2qRThA",
//   authDomain: "fasthomeapp-21a4d.firebaseapp.com",
//   projectId: "fasthomeapp-21a4d",
//   storageBucket: "fasthomeapp-21a4d.appspot.com",
//   messagingSenderId: "830794875804",
//   appId: "1:830794875804:web:af7a373a2accf68a9bbe59",
//   measurementId: "G-LXMSFJH3PY"
// };

// if (!getApps().length) {
//   initializeApp(firebaseConfig);
// }

// // ////////////////////////////////////////////////
// // export const unstable_settings = {
// //   // Ensure that reloading on `/modal` keeps a back button present.
// //   initialRouteName: "(tabs)",
// // };

// // SplashScreen.preventAutoHideAsync();

// // ///////////////////////////////////////////////

// export default function Layout() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsAuthenticated(!!user);
//       if (!user) {
//         // If not authenticated, navigate to login screen
//         router.replace('/login');
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {!isAuthenticated ? (
//         <>
//           {/* Show login and signup screens only when not authenticated */}
//           <Stack.Screen name="login" options={{ headerShown: false }} />
//           <Stack.Screen name="signup" options={{ headerShown: false }} />
//         </>
//       ) : (
//         <>
//           {/* Main app navigation */}
//           <Stack.Screen name="(tabs)" />
//         </>
//       )}
//     </Stack>
//   );
// }
