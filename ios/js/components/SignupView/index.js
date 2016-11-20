import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  TextInput,
  TouchableHighlight
} from "react-native";

import {
  resetErrorMessage,
  updateErrorMessage,
  showSpinner,
  hideSpinner,
  changeScene
} from "../../actions";
import Spinner from "../Spinner";
import { createUser } from "../../apiUtils";
import SkillsView from "../SkillsView";
import ErrorHandler from "../ErrorHandler";
import { styles as s } from "react-native-style-tachyons";
import { gs, fonts } from "../../styles/global";

class SignupView extends Component {
  constructor(props) {
    super(props);
    this.onPressSubmit = this.onPressSubmit.bind(this);
    this.state = {
      password: null,
      confirmPassword: null,
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
      password: this.state.password,
      email: this.state.email,
      confirmPassword: this.state.confirmPassword
    };

    this.props.dispatch(showSpinner());
    this.props.dispatch(createUser(userParams))
    .then(() => {
      this.props.dispatch(changeScene({
        title: "Skills", component: <SkillsView />
      }, this.props.navigator));
    })
    .catch(() => this.props.dispatch(updateErrorMessage("Error")))
    .finally(this.props.dispatch(hideSpinner()));
  }

  render() {
    return (
      <View style={[gs.container, s["bg-blue"]]}>
        <ErrorHandler />
        <Text style={[fonts.lobsterRegular, s.white, s.f2, s.mb1]}>Sign Up</Text>
        <TextInput
          style={[gs.input]}
          placeholder="Email"
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={[gs.input]}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(text) => this.setState({ password: text })}
        />
        <TextInput
          style={[gs.input, s.mb3]}
          secureTextEntry={true}
          placeholder="Confirm Password"
          onChangeText={(text) => this.setState({ confirmPassword: text })}
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
