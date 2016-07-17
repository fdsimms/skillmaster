import React from "react";
import { AppRegistry, NavigatorIOS } from "react-native";
import LoginView from "./ios/js/components/LoginView";

const Skillmaster = () =>
  <NavigatorIOS
    initialRoute={{
      title: "Login",
      component: LoginView
    }}
    style={{ flex: 1 }}
  />;

AppRegistry.registerComponent("Skillmaster", () => Skillmaster);
