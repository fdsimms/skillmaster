import React, { PropTypes, Component } from "react";
import {
  Text,
  View,
  TouchableHighlight
} from "react-native";
import SignupView from "../SignupView";
import LoginView from "../LoginView";
import styles from "./stylesheet";
import { connect } from "react-redux";

import { changeScene } from "../../actions";

class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.pushSignupView = this.pushSignupView.bind(this);
    this.pushLoginView = this.pushLoginView.bind(this);
  }

  pushSignupView() {
    const { navigator, dispatch } = this.props;
    dispatch(changeScene({
      title: "Sign Up",
      component: <SignupView />
    }, navigator));
  }

  pushLoginView() {
    const { navigator, dispatch } = this.props;
    dispatch(changeScene({
      title: "Log In",
      component: <LoginView />
    }, navigator));
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
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};

export default connect()(SplashPage);
