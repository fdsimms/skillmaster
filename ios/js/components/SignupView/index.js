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
import { styles as s } from "react-native-style-tachyons";
import { gs, fonts } from "../../styles/global";

class SignupView extends Component {
  constructor(props) {
    super(props);
    this.onPressSubmit = this.onPressSubmit.bind(this);
    this.state = {
      nickname: null,
      fname: null,
      lname: null,
      password: null,
      email: null
    };
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
      <View style={[gs.container, s["bg-blue"]]}>
        <ErrorHandler />
        <Text style={[fonts.lobsterRegular, s.white, s.f2]}>Sign Up</Text>
        <TextInput
          style={[gs.input, s.mt3]}
          placeholder="First Name"
          onChangeText={(text) => this.setState({ fname: text })}
        />
        <TextInput
          style={[gs.input]}
          placeholder="Last Name"
          onChangeText={(text) => this.setState({ lname: text })}
        />
        <TextInput
          style={[gs.input]}
          placeholder="Nickname"
          onChangeText={(text) => this.setState({ nickname: text })}
        />
        <TextInput
          style={[gs.input]}
          placeholder="Email"
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={[gs.input, s.mb3]}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(text) => this.setState({ password: text })}
        />
        <TouchableHighlight
          onPress={this.onPressSubmit}
          style={[s.asc, s.jcc, s["bg-orange"], s.pv2, s.ph3, s.br2, s.mb3]}
        >
          <Text style={[s.white, s.asc, s.b, s.f4]}>SUBMIT</Text>
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
