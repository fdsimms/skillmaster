import React from "react";
import {
  AppRegistry
} from "react-native";
import LoginView from "./ios/js/components/LoginView";

const Skillmaster = () => <LoginView />;

AppRegistry.registerComponent("Skillmaster", () => Skillmaster);
