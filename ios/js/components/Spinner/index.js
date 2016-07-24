import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { ActivityIndicator } from "react-native";

const Spinner = ({ showSpinner, size = "large" }) => (
  showSpinner ? (
    <ActivityIndicator
      animating={showSpinner}
      size={size}
    />
  ) : null
);

function mapStateToProps(state) {
  return { showSpinner: state.showSpinner };
}

Spinner.propTypes = {
  showSpinner: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Spinner);
