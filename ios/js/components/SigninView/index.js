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
import { createSession } from "../../apiUtils";
import ErrorHandler from "../ErrorHandler";
import globalStyles from "../../styles/global";

class SigninView extends Component {
  constructor(props) {
    super(props);
    this.onPressSubmit = this.onPressSubmit.bind(this);
    this.state = { password: null, email: null };
  }

  componentDidMount() {
    if (this.props.errorMessage) {
      this.props.dispatch(resetErrorMessage());
    }
  }

  onPressSubmit() {
    const sessionParams = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.dispatch(createSession(sessionParams, this.props.navigator));
  }

  render() {
    return (
      <View style={globalStyles.container}>
        <ErrorHandler />
        <Text style={globalStyles.headerText}> Sign In </Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Email"
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={globalStyles.input}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(text) => this.setState({ password: text })}
        />
        <TouchableHighlight
          onPress={this.onPressSubmit}
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>SUBMIT</Text>
        </TouchableHighlight>
        <Spinner />
      </View>
    );
  }
}

const mapStateToProps = (state) => (
  { errorMessage: state.errorMessage }
);

SigninView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(SigninView);
