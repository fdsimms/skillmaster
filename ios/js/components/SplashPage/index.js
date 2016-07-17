import React, { PropTypes, Component } from "react";
import {
  Text,
  View,
  TouchableHighlight
} from "react-native";
import SignupView from "../SignupView";
import LoginView from "../LoginView";
import styles from "./stylesheet";

class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.pushSignupView = this.pushSignupView.bind(this);
    this.pushLoginView = this.pushLoginView.bind(this);
  }

  pushSignupView() {
    this.props.navigator.push({
      title: "Sign Up",
      component: SignupView
    });
  }

  pushLoginView() {
    this.props.navigator.push({
      title: "Log In",
      component: LoginView
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Skillmaster</Text>
        <TouchableHighlight
          onPress={this.pushSignupView}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.pushLoginView}
        >
          <Text>Already have an account?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

SplashPage.propTypes = {
  navigator: PropTypes.object.isRequired
};

export default SplashPage;
