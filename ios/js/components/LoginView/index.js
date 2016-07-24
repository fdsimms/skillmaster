import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  TextInput,
  TouchableHighlight
} from "react-native";

import Spinner from "../Spinner";
import { updateErrorMessage, showSpinner, hideSpinner } from "../../actions";
import ErrorHandler from "../ErrorHandler";
import styles from "./stylesheet";

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = { showProgress: false };
    this.onPressSubmit = this.onPressSubmit.bind(this);
  }

  onPressSubmit() {
    this.props.dispatch(showSpinner());
    fetch("http://localhost:3000/api/session", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        session: {
          password: this.state.password,
          email: this.state.email
        }
      })
    })
    .then(response => {
      if (!response.ok) { throw Error(response.statusText); }
    })
    .catch(() => this.props.dispatch(updateErrorMessage("Error")))
    .finally(() => {
      this.props.dispatch(hideSpinner());
    });
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
        <TouchableHighlight onPress={this.onPressSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
        <Spinner />
      </View>
    );
  }
}

export default connect()(LoginView);
