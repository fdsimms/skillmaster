import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import {
  View,
} from "react-native";

class SkillView extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", padding: 10, marginTop: 150 }} />
    );
  }
}

SkillView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};

export default connect()(SkillView);
