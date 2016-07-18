import React from "react";
import { AppRegistry, NavigatorIOS } from "react-native";
import SplashPage from "./ios/js/components/SplashPage";
import { Provider } from "react-redux";
import configureStore from "./ios/js/configureStore.js";

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
