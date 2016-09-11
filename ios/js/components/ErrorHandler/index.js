import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import { styles as s } from "react-native-style-tachyons";

const ErrorHandler = ({ message }) => (
  message ? (
    <Text style={[s.red]}>
      {message}
    </Text>
  ) : null
);

const mapStateToProps = (state) => (
  { message: state.errorMessage }
);

ErrorHandler.propTypes = { message: PropTypes.string.isRequired };

export default connect(mapStateToProps)(ErrorHandler);
