import React from "react";
import { AppRegistry, NavigatorIOS } from "react-native";
import SplashPage from "./ios/js/components/SplashPage";
import { Provider } from "react-redux";
import configureStore from "./ios/js/configureStore.js";
import NativeTachyons from "react-native-style-tachyons";
import { StyleSheet } from "react-native";

NativeTachyons.build({
  colors: {
    palette: {
      blue: "#1DACD6",
      orange: "#FAC219",
      white: "#FFFFFF",
      black: "#000000",
      red: "#FF0000"
    }
  }
}, StyleSheet);

const store = configureStore();

const Skillmaster = () =>
  <Provider store={store}>
    <NavigatorIOS
      initialRoute={{
        title: "Skillmaster",
        component: SplashPage
      }}
      style={{ flex: 1 }}
    />
  </Provider>;

AppRegistry.registerComponent("Skillmaster", () => Skillmaster);
