// import { View, Text } from 'react-native'
// import React from 'react'

// export default function home() {
//   return (
//     <View>
//       <Text>home</Text>
//     </View>
//   )
// }

import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontFamily: "OpenSans" }}>Hello Ashraful, Tamzid, Sumaiya! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c3c7F3", // Set background color to blue
    justifyContent: "center", // Optional: centers the text vertically
    alignItems: "center", // Optional: centers the text horizontally
  },
});
