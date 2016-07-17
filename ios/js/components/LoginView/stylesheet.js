import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 10
  },
  logo: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  input: {
    height: 50,
    borderWidth: 1,
    marginTop: 5,
    borderColor: "#DDD",
    padding: 4
  },
  button: {
    height: 50,
    borderWidth: 1,
    marginTop: 4,
    backgroundColor: "#48BBEC",
    padding: 4,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF",
    alignSelf: "center"
  }
});

export default styles;
