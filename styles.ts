import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  lightsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
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
    justifyContent: "space-around",
    paddingTop: 160,
    paddingBottom: 40,
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 50,
    letterSpacing: 2,
  },
  titleHome: {
    color: 'Black',
    fontWeight: 'bold',
    fontSize: 50,
    letterSpacing: 2,
  },
  formContainer: {
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 20,
  },
  inputContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    padding: 20,
    borderRadius: 16,
    width: "100%",
    marginBottom: 16,
  },
  input: {
    fontSize: 16,
  },
  errorText: {
    color: "#e74c3c",
    marginBottom: 16,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#38bdf8",
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  toggleText: {
    fontSize: 16,
  },
  toggleLink: {
    fontSize: 16,
    color: "#0284c7",
  },
  authContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  emailText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default styles;
