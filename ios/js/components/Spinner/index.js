import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { ActivityIndicator } from "react-native";

const Spinner = ({ showSpinner, size = "large", color = "#FFFFFF" }) => (
  showSpinner ? (
    <ActivityIndicator
      animating={showSpinner}
      size={size}
      color={color}
    />
  ) : null
);

const mapStateToProps = (state) => (
  { showSpinner: state.showSpinner }
);

Spinner.propTypes = {
  showSpinner: PropTypes.bool.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
};

export default connect(mapStateToProps)(Spinner);
