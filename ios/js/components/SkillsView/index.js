import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";

import {
  Text,
  View
} from "react-native";
import styles from "./stylesheet";
import { fetchSkills } from "../../apiUtils";

class SkillsView extends Component {
  componentDidMount() {
    if (!this.props.skills.length) {
      this.props.dispatch(fetchSkills());
    }
  }

  get skills() {
    const { skills } = this.props;
    return skills.length > 0 && (
      skills.map(skill => (
        <Text key={skill.id} style={styles.logo}>{skill.name}</Text>
      ))
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Skills</Text>
        <View style={styles.container}>
          {this.skills}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => (
  { skills: state.skills }
);

SkillsView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(SkillsView);
