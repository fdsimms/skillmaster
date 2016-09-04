import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  TextInput,
  TouchableHighlight
} from "react-native";

import { resetErrorMessage } from "../../actions";
import Spinner from "../Spinner";
import { createUser } from "../../apiUtils";
import ErrorHandler from "../ErrorHandler";
import styles from "./stylesheet";

class SignupView extends Component {
  constructor(props) {
    super(props);
    this.onPressSubmit = this.onPressSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.errorMessage) {
      this.props.dispatch(resetErrorMessage());
    }
  }

  onPressSubmit() {
    const userParams = {
      nickname: this.state.nickname,
      fname: this.state.fname,
      lname: this.state.lname,
      password: this.state.password,
      email: this.state.email
    };
    this.props.dispatch(createUser(userParams, this.props.navigator));
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
          secureTextEntry={true}
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

const mapStateToProps = (state) => (
  { errorMessage: state.errorMessage }
);

SignupView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(SignupView);
