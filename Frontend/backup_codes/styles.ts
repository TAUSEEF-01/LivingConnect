// // styles.ts
// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   authContainer: {
//     width: '80%',
//     maxWidth: 400,
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 8,
//     elevation: 3,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     marginBottom: 16,
//     padding: 8,
//     borderRadius: 4,
//   },
//   buttonContainer: {
//     marginBottom: 16,
//   },
//   toggleText: {
//     color: '#3498db',
//     textAlign: 'center',
//   },
//   bottomContainer: {
//     marginTop: 20,
//   },
 
//   errorText: {
//     color: '#e74c3c',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
// });

// export default styles;




// styles.ts
import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   // authContainer: {
//   //   flex: 1,
//   //   width: '100%',
//   //   backgroundColor: '#fff',
//   // },
//   authContainer: {
//     backgroundColor: '#fff', // bg-white
//     height: '100%', // h-full
//     width: '100%', // w-full
//   },
//   backgroundImage: {
//     position: 'absolute',
//     height: '100%',
//     width: '100%',
//   },
//   lightContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     position: 'absolute',
//     width: '100%',
//   },
//   lightImage: {
//     height: 225,
//     width: 90,
//   },
//   lightImageSmall: {
//     height: 160,
//     width: 65,
//   },
//   // formContainer: {
//   //   flex: 1,
//   //   justifyContent: 'space-around',
//   //   paddingTop: 40,
//   //   paddingBottom: 10,
//   // },

//   formContainer: {
//     height: '100%', // h-full
//     width: '100%', // w-full
//     flex: 1, // flex
//     justifyContent: 'space-around', // justify-around
//     paddingTop: 40, // pt-40
//     paddingBottom: 10, // pb-10
//   },
  
//   // titleContainer: {
//   //   alignItems: 'center',
//   // },

//   titleContainer: {
//     display: 'flex', // flex
//     alignItems: 'center', // items-center
//   },

  
//   // title: {
//   //   fontSize: 24,
//   //   marginBottom: 16,
//   //   textAlign: 'center',
//   //   color: '#fff',
//   //   fontWeight: 'bold',
//   // },

//   title: {
//     fontSize: 32, // text-5xl (approximately 32px)
//     color: '#fff', // text-white
//     fontWeight: 'bold', // font-bold
//     letterSpacing: 1, // tracking-wider (adjust based on how wide you want it)
//     textAlign: 'center', // center alignment
//   },

  
//   // formInputContainer: {
//   //   alignItems: 'center',
//   //   marginHorizontal: 16,
//   //   spaceVertical: 4,
//   // },

//   formInputContainer: {
//     display: 'flex', // flex
//     alignItems: 'center', // items-center
//     marginHorizontal: 16, // mx-4 (corresponds to margin of 16 on both left and right)
//     gap: 16, // space-y-4 (corresponds to vertical spacing of 16)
//   },
  

//   // inputWrapper: {
//   //   backgroundColor: 'rgba(0,0,0,0.05)',
//   //   padding: 16,
//   //   borderRadius: 12,
//   //   width: '100%',
//   //   marginBottom: 12,
//   // },

//   inputWrapper: {
//     backgroundColor: 'rgba(0,0,0,0.05)', // bg-black/5
//     padding: 20, // p-5 (20px padding)
//     borderRadius: 16, // rounded-2xl (16px border radius)
//     width: '100%', // w-full
//     marginBottom: 12, // margin bottom if needed for spacing between input fields
//   },

//   emailText: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 20,
//   },

  
//   input: {
//     height: 40,
//     fontSize: 16,
//   },
//   buttonContainer: {
//     width: '100%',
//   },
//   loginButton: {
//     backgroundColor: '#3498db',
//     padding: 16,
//     borderRadius: 12,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   toggleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 16,
//   },
//   toggleText: {
//     fontSize: 16,
//   },
//   toggleLink: {
//     fontSize: 16,
//     color: '#3498db',
//   },
//   errorText: {
//     color: '#e74c3c',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
// });

// export default styles;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  lightsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
  },
  lightLeft: {
    height: 225,
    width: 90,
  },
  lightRight: {
    height: 160,
    width: 65,
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 160,
    paddingBottom: 40,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    letterSpacing: 2,
  },
  titleHome: {
    color: 'Black',
    fontWeight: 'bold',
    fontSize: 55,
    letterSpacing: 2,
  },
  formContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 20,
  },
  inputContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    padding: 20,
    borderRadius: 16,
    width: '100%',
    marginBottom: 16,
  },
  input: {
    fontSize: 16,
  },
  errorText: {
    color: '#e74c3c',
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#38bdf8',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  toggleText: {
    fontSize: 16,
  },
  toggleLink: {
    fontSize: 16,
    color: '#0284c7',
  },
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  emailText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default styles;