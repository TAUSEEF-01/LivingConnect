// import React from "react";
// import { View, Text, StyleSheet, Pressable } from "react-native";

// const CallerDialScreen = ({ route, navigation }) => {
//   const { recepientNumber } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.callingText}>Calling...</Text>
//       <Text style={styles.phoneNumber}>{recepientNumber}</Text>

//       <View style={styles.buttonContainer}>
//         <Pressable
//           style={[styles.button, styles.endCallButton]}
//           onPress={() => navigation.goBack()}
//         >
//           <Text style={styles.buttonText}>End Call</Text>
//         </Pressable>

//         <Pressable
//           style={[styles.button, styles.acceptCallButton]}
//           onPress={() => alert("Call Accepted")}
//         >
//           <Text style={styles.buttonText}>Accept Call</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// export default CallerDialScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F0F0F0",
//   },
//   callingText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   phoneNumber: {
//     fontSize: 20,
//     color: "gray",
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     gap: 20,
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   endCallButton: {
//     backgroundColor: "#FF3B30",
//   },
//   acceptCallButton: {
//     backgroundColor: "#34C759",
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });


// import React, { Component } from 'react';
// import { Text, StyleSheet, View, Linking, Platform, TouchableOpacity } from 'react-native';


// export default class App extends Component {

//   makeCall = () => {

//     let phoneNumber = '';

//     if (Platform.OS === 'android') {
//       phoneNumber = 'tel:${01234567890}';
//     } else {
//       phoneNumber = 'telprompt:${01234567890}';
//     }

//     Linking.openURL(phoneNumber);
//   };

//   render() {
//     return (
//       <View style={styles.container} >
//         <TouchableOpacity onPress={this.makeCall} activeOpacity={0.7} style={styles.touchableButton} >
//           <Text style={styles.TextStyle}> Click Here To Dial In Dial Screen</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create(
//   {
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       margin: 20
//     },
//     touchableButton: {
//       width: '80%',
//       padding: 10,
//       backgroundColor: '#9c27b0',
//     },
//     TextStyle: {
//       color: '#fff',
//       fontSize: 18,
//       textAlign: 'center',
//     }

//   });
import React, { Component } from 'react';
import { Text, StyleSheet, View, Linking, Platform, TouchableOpacity } from 'react-native';

export default class CallerDialScreen extends Component {
  constructor(props) {
    super(props);
    this.recipientName = this.props.route.params.recipientName || 'Recipient'; // Get the recipient name from navigation params
    this.phoneNumber = this.props.route.params.phoneNumber || '01234567890'; // Get the phone number from navigation params
  }

  makeCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${this.phoneNumber}`;
    } else {
      phoneNumber = `telprompt:${this.phoneNumber}`;
    }

    Linking.openURL(phoneNumber).catch(err => {
      console.error('Error occurred while trying to make a call:', err);
    });

    // Navigate back to the previous screen after initiating the call
    this.props.navigation.goBack();
  };

  cancelCall = () => {
    // Navigate back to the previous screen
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Are you sure to call?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.makeCall} style={[styles.button, styles.yesButton]}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.cancelCall} style={[styles.button, styles.noButton]}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: '40%',
    alignItems: 'center',
  },
  yesButton: {
    backgroundColor: 'green',
  },
  noButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
