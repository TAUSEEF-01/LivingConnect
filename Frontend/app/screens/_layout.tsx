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
