import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from "react-native";

import styles from "./stylesheet";

export default class SignupView extends Component {
  constructor(props) {
    super(props);
    this.state = { showProgress: false };
    this.onPressSubmit = this.onPressSubmit.bind(this);
  }

  onPressSubmit() {
    this.setState({ showProgress: true });
    // TODO this will need to fetch from production api
    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          nickname: this.state.nickname,
          fname: this.state.fname,
          lname: this.state.lname,
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
        <Text style={styles.logo}> Sign Up </Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={(text) => this.setState({ fname: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={(text) => this.setState({ lname: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Nickname"
          onChangeText={(text) => this.setState({ nickname: text })}
        />
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
        {this.state.showProgress &&
          <ActivityIndicatorIOS
            animating={this.state.showProgress}
            size="large"
          />
        }
      </View>
    );
  }
}
