// File: app/DetailPage.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function DetailPage() {
  return (
    <View>
      <Text>Detail Page</Text>
      <Button title="Go Back" onPress={() => router.replace('/(tabs)/mainPage')} />
    </View>
  );
}
