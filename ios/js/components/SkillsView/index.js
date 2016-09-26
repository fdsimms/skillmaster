import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  ListView,
  TouchableHighlight
} from "react-native";

import SkillView from "../SkillView";
import { fetchSkills } from "../../apiUtils";
import {
  showSpinner,
  hideSpinner,
  changeScene,
  updateErrorMessage
} from "../../actions";
import { styles as s } from "react-native-style-tachyons";
import { gs } from "../../styles/global";

const Skill = ({ skill, onSelectSkill }) => (
  <View
      key={skill.id}
      style={[s.asc, s.jcc]}>
    <TouchableHighlight onPress={() => onSelectSkill(skill)}>
      <View style={[s["bg-orange"], s.h3, s.w3, s.br4, s.asc]} />
    </TouchableHighlight>
    <Text style={[s.tc, s.darkGray, s.pb2]}>
      {skill.name}
    </Text>
  </View>
);

const Skills = ({ skills, onSelectSkill }) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  return Object.keys(skills).length > 0 ? (
    <ListView
      dataSource={ds.cloneWithRows(skills)}
      renderRow={skill => <Skill skill={skill} onSelectSkill={onSelectSkill} />}
    />
  ) : null;
};

class SkillsView extends Component {
  componentDidMount() {
    this.fetchSkillsIfNotFetched();
  }

  fetchSkillsIfNotFetched() {
    if (!this.props.skills.length) {
      this.props.dispatch(showSpinner());
      this.props.dispatch(fetchSkills())
      .catch(() => this.props.dispatch(updateErrorMessage("Error")))
      .finally(this.props.dispatch(hideSpinner()));
    }
  }

  onSelectSkill(skill) {
    this.props.dispatch(changeScene({
      title: skill.name, component: <SkillView skillId={skill.id} />
    }, this.props.navigator));
  }

  render() {
    return (
      <View style={[gs.container, s.mt7]}>
        <Skills
          skills={this.props.skills}
          onSelectSkill={this.onSelectSkill.bind(this)}
        />
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
  skills: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(SkillsView);
