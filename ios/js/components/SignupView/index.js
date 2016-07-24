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

class SignupView extends Component {
  constructor(props) {
    super(props);
    this.state = { showProgress: false };
    this.onPressSubmit = this.onPressSubmit.bind(this);
  }

  onPressSubmit() {
    this.props.dispatch(showSpinner());

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
      if (!response.ok) { throw Error(response.statusText); }
    })
    .catch(() => this.props.dispatch(updateErrorMessage("Error")))
    .finally(() => this.props.dispatch(hideSpinner()))
  }

  render() {
    return (
      <View style={styles.container}>
        <ErrorHandler />
        <Text style={styles.logo}>Sign Up</Text>
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
        <Spinner />
      </View>
    );
  }
}

export default connect()(SignupView);
