import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text
} from "react-native";
import { styles as s } from "react-native-style-tachyons";

import {
  showSpinner,
  hideSpinner,
  updateErrorMessage
} from "../../actions";
import { fetchSkill } from "../../apiUtils";
import { gs } from "../../styles/global";

class SkillView extends Component {
  componentWillMount() {
    this.props.dispatch(showSpinner());
    this.props.dispatch(fetchSkill(this.props.skillId))
    .catch(() => this.props.dispatch(updateErrorMessage("Error")))
    .finally(this.props.dispatch(hideSpinner()));
  }

  render() {
    const skill = this.props.skills[this.props.skillId];
    return (
      <View style={gs.container}>
        {skill &&
          <Text style={[s.tc, s.darkGray, s.pb2]}>
            {skill.name}
          </Text>
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => (
  { skills: state.skills }
);

SkillView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(SkillView);
