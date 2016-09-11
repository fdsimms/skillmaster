import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  TextInput,
  TouchableHighlight
} from "react-native";

import { resetErrorMessage, changeScene } from "../../actions";
import Spinner from "../Spinner";
import { createSession } from "../../apiUtils";
import SkillsView from "../SkillsView";
import ErrorHandler from "../ErrorHandler";
import { styles as s } from "react-native-style-tachyons";
import { gs, fonts } from "../../styles/global";

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
    this.props.dispatch(createSession(sessionParams))
    .then(() => {
      this.props.dispatch(changeScene({
        title: "Skills", component: <SkillsView />
      }, this.props.navigator));
    });
  }

  render() {
    return (
      <View style={[gs.container, s["bg-blue"]]}>
        <ErrorHandler />
        <Text style={[fonts.lobsterRegular, s.white, s.f2]}>
          Sign In
        </Text>
        <TextInput
          style={[gs.input, s.mb1, s.mt3]}
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
          <Text style={[s.white, s.asc, s.b, s.f4]}>
            SUBMIT
          </Text>
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
