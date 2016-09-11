import React from "react";
import { TouchableHighlight, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";

const SkillCircle = () => (
  <TouchableHighlight>
    <View style={[s["bg-orange"], s.h3, s.w3, s.br4, s.asc]} />
  </TouchableHighlight>
);

export default SkillCircle;
