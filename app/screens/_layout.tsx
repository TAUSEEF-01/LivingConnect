import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/* Define the entry point of the stack */}
      <Stack.Screen name="mainPage" />
      <Stack.Screen name="DetailPage" /> {/* This will be your DetailPage */}
    </Stack>
  );
}
