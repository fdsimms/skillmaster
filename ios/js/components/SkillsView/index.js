import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  ListView
} from "react-native";

import { fetchSkills } from "../../apiUtils";
import {
  showSpinner,
  hideSpinner,
  updateErrorMessage
} from "../../actions";
import { styles as s } from "react-native-style-tachyons";
import { gs } from "../../styles/global";

const Skill = ({ skill }) => (
  <View
      key={skill.id}
      style={[s.asc, s.jcc]}>
    <Text style={[s.tc, s.darkGray, s.pb2]}>
      {skill.name}
    </Text>
  </View>
);

const Skills = ({ skills }) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  return Object.keys(skills).length > 0 ? (
    <ListView
      dataSource={ds.cloneWithRows(skills)}
      renderRow={skill => <Skill skill={skill} />}
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

  render() {
    return (
      <View style={[gs.container, s.mt7]}>
        <Skills skills={this.props.skills} />
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
