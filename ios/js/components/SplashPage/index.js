import React, { PropTypes, Component } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import SignupView from "../SignupView";
import SigninView from "../SigninView";
import globalStyles from "../../styles/global";
import { connect } from "react-redux";

import { changeScene, receiveSkills } from "../../actions";

class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.pushSignupView = this.pushSignupView.bind(this);
    this.pushSigninView = this.pushSigninView.bind(this);
  }

  componentWillMount() {
    AsyncStorage.getItem("skills").then(skills => {
      if (skills) {
        this.props.dispatch(receiveSkills(skills));
      }
    });
  }

  pushSignupView() {
    const { navigator, dispatch } = this.props;
    dispatch(changeScene({
      title: "Sign Up",
      component: <SignupView />
    }, navigator));
  }

  pushSigninView() {
    const { navigator, dispatch } = this.props;
    dispatch(changeScene({
      title: "Log In",
      component: <SigninView />
    }, navigator));
  }

  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.siteLogo}>Skillmaster</Text>
        <TouchableHighlight
          onPress={this.pushSignupView}
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>GET STARTED </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.pushSigninView}
        >
          <Text style={globalStyles.basicText}>
              Already have an account?
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

SplashPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};

export default connect()(SplashPage);
