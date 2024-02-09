import React from "react";
import PropTypes from "prop-types";

const IconAtom = ({ iconName, ariaLabel }) => {
  return <i className={iconName} aria-hidden="true" aria-label={ariaLabel}></i>;
};

IconAtom.propTypes = {
  iconName: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

IconAtom.defaultProps = {
  iconName: "fa fa-question",
  ariaLabel: "Question",
};

export default IconAtom;
