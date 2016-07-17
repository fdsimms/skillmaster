import React from "react";
import { AppRegistry, NavigatorIOS } from "react-native";
import SplashPage from "./ios/js/components/SplashPage";

const Skillmaster = () =>
  <NavigatorIOS
    initialRoute={{
      title: "Skillmaster",
      component: SplashPage
    }}
    style={{ flex: 1 }}
  />;

AppRegistry.registerComponent("Skillmaster", () => Skillmaster);
