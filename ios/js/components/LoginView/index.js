import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  TextInput,
  TouchableHighlight
} from "react-native";

import Spinner from "../Spinner";
import { createSession } from "../../apiUtils";
import ErrorHandler from "../ErrorHandler";
import styles from "./stylesheet";

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = { showProgress: false };
    this.onPressSubmit = this.onPressSubmit.bind(this);
  }

  onPressSubmit() {
    this.props.dispatch(createSession(this.state.email, this.state.password));
  }

  render() {
    return (
      <View style={styles.container}>
        <ErrorHandler />
        <Text> Sign In </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => this.setState({ password: text })}
        />
        <TouchableHighlight
          onPress={this.onPressSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
        <Spinner />
      </View>
    );
  }
}

LoginView.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(LoginView);
