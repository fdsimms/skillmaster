import React, { PropTypes, Component } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import SignupView from "../SignupView";
import SigninView from "../SigninView";
import { connect } from "react-redux";
import { styles as s } from "react-native-style-tachyons";
import { gs, fonts } from "../../styles/global";
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
      <View style={[gs.container, s["bg-blue"]]}>
        <Text style={[s.white, s.tc, fonts.lobsterRegular, s.f1, s.ma1]}>
          Skillmaster
        </Text>
        <TouchableHighlight
          onPress={this.pushSignupView}
          style={[s.asc, s.jcc, s["bg-orange"], s.pv2, s.ph3, s.br2, s.mb2]}
        >
          <Text style={[s.white, s.asc, s.b, s.f4]}>
            GET STARTED
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.pushSigninView}
        >
          <Text style={[s.white]}>
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
