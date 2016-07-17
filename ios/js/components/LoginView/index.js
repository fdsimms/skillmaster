import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";

import styles from "./stylesheet";

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = { showProgress: false };
    this.onPressSubmit = this.onPressSubmit.bind(this);
  }

  onPressSubmit() {
    this.setState({ showProgress: true });
    // TODO make sure this actually reflects what api needs
    fetch("http://localhost:3000/api/sessions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          password: this.state.password,
          email: this.state.email
        }
      })
    })
    .then(response => {
      console.log(response);
    })
    .finally(() => {
      this.setState({ showProgress: false });
    });
  }

  render() {
    return (
      <View style={styles.container}>
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
        <TouchableHighlight>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
        {this.state.showProgress &&
          <ActivityIndicator
            animating={this.state.showProgress}
            size="large"
          />
        }
      </View>
    );
  }
}
