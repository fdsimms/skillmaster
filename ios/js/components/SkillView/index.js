import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import {
  View,
} from "react-native";
import { gs } from "../../styles/global";

class SkillView extends Component {

  render() {
    return (
      <View style={gs.container} />
    );
  }
}

SkillView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};

export default connect()(SkillView);
