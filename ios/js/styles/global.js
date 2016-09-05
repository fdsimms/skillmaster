import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DACD6",
    padding: 10
  },
  siteLogo: {
    fontSize: 36,
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Lobster-Regular",
    margin: 2.5
  },
  button: {
    height: 50,
    marginTop: 10,
    backgroundColor: "#FAC219",
    padding: 4,
    width: 250,
    borderRadius: 5,
    alignSelf: "center",
    justifyContent: "center",
    margin: 10
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
    alignSelf: "center",
    fontWeight: "bold"
  },
  basicText: {
    fontSize: 16,
    color: "#FFFFFF"
  },
  headerText: {
    fontSize: 28,
    color: "#FFFFFF",
    fontFamily: "Lobster-Regular"
  },
  input: {
    height: 50,
    marginTop: 2.5,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5
  }
});

export default styles;
