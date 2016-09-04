import React from "react";
import { TouchableHighlight, View } from "react-native";
const SkillCircle = () => (
  <TouchableHighlight>
    <View style={{
      width: 100,
      height: 100,
      backgroundColor: "orange",
      borderRadius: 50,
      alignSelf: "center"
    }} />
  </TouchableHighlight>
);


export default SkillCircle;
