// import React, { Component } from 'react';
// import { Text, StyleSheet, View, Linking, Platform, TouchableOpacity } from 'react-native';

// export default class CallerDialScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.recipientName = this.props.route.params.recipientName || 'Recipient'; // Get the recipient name from navigation params
//     this.phoneNumber = this.props.route.params.phoneNumber || '01234567890'; // Get the phone number from navigation params
//   }

//   makeCall = () => {
//     let phoneNumber = '';

//     if (Platform.OS === 'android') {
//       phoneNumber = `tel:${this.phoneNumber}`;
//     } else {
//       phoneNumber = `telprompt:${this.phoneNumber}`;
//     }

//     Linking.openURL(phoneNumber).catch(err => {
//       console.error('Error occurred while trying to make a call:', err);
//     });

//     // Navigate back to the previous screen after initiating the call
//     this.props.navigation.goBack();
//   };

//   cancelCall = () => {
//     // Navigate back to the previous screen
//     this.props.navigation.goBack();
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Are you sure to call?</Text>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity onPress={this.makeCall} style={[styles.button, styles.yesButton]}>
//             <Text style={styles.buttonText}>Yes</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={this.cancelCall} style={[styles.button, styles.noButton]}>
//             <Text style={styles.buttonText}>No</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '80%',
//   },
//   button: {
//     padding: 15,
//     borderRadius: 8,
//     width: '40%',
//     alignItems: 'center',
//   },
//   yesButton: {
//     backgroundColor: 'green',
//   },
//   noButton: {
//     backgroundColor: 'red',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });






import { router } from 'expo-router';
import React, { Component } from 'react';
import { Text, StyleSheet, View, Linking, Platform, TouchableOpacity } from 'react-native';

export default class CallerDialScreen extends Component {
  constructor(props) {
    super(props);

    const params = this.props.route?.params || {}; // Fallback to an empty object
    this.recipientName = params.recipientName || 'Recipient';
    this.phoneNumber = params.phoneNumber || '01234567890';
  }

  makeCall = () => {
    const phoneNumber = Platform.OS === 'android' 
      ? `tel:${this.phoneNumber}` 
      : `telprompt:${this.phoneNumber}`;

    Linking.openURL(phoneNumber).catch(err => {
      console.error('Error occurred while trying to make a call:', err);
    });

    // Navigate back to the previous screen after initiating the call
    this.props.navigation.goBack();
  };

  cancelCall = () => {
    // Navigate back to the previous screen
    // this.props.navigation.goBack();
    // this.props.navigation?.goBack?.();
    router.push("/pages/HomeInfoPage/homeDetailsShowPage")
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Are you sure to call {this.recipientName}?</Text>
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
