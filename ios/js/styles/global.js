import { StyleSheet } from "react-native";

const fonts = StyleSheet.create({
  lobsterRegular: {
    fontFamily: "lobster-Regular"
  }
});

const gs = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  // TODO figure out why doing inputs with NativeTachyons breaks them
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

export { gs, fonts };
