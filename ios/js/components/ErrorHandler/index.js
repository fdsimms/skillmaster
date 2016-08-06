import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";

import styles from "./stylesheet";

const ErrorHandler = ({ message }) => (
  message ? <Text style={styles.text}>{message}</Text> : null
);

const mapStateToProps = (state) => (
  { message: state.errorMessage }
);

ErrorHandler.propTypes = { message: PropTypes.string.isRequired };

export default connect(mapStateToProps)(ErrorHandler);
