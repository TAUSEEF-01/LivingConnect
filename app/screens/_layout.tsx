// import { Stack } from "expo-router";

// export default function Layout() {
//   return (
//     <Stack>
//       {/* Define the entry point of the stack */}
//       {/* <Stack.Screen name="mainPage" /> */}
//       <Stack.Screen name="DetailPage" /> {/* This will be your DetailPage */}
//       <Stack.Screen name="ContactUsPage" />
//       <Stack.Screen name="AboutUsPage" />
//     </Stack>
//   );
// }



// import { Stack } from "expo-router";

// export default function Layout() {
//   return (
//     <Stack>
//       {/* Define the entry point of the stack */}
//       <Stack.Screen name="DetailPage" /> {/* This will be your DetailPage */}
//       <Stack.Screen name="about_us" /> {/* Matches `about_us.tsx` */}
//       <Stack.Screen name="contact_us" /> {/* Matches `contact_us.tsx` */}
//     </Stack>
//   );
// }



import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)/mainPage" /> {/*Main Page in tabs */}
      <Stack.Screen name="screens/DetailPage" /> {/* Detail Page */}
      <Stack.Screen name="screens/about_us" />  {/* About Us Page */}
      <Stack.Screen name="screens/contact_us" /> {/* Contact Us Page */}
    </Stack>
  );
}



// import { Link } from "expo-router";
// import { View, Text, Button } from "react-native";

// export default function MainPage() {
//   return (
//     <View>
//       <Text>Welcome to the Main Page!</Text>
//       <Link href='./DetailPage'>Go to Detail Page</Link>
//     </View>
//   );
// }




