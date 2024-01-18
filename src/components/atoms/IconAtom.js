import React from "react";
import PropTypes from "prop-types";

const IconAtom = ({ iconName }) => {
  return <i className={iconName} aria-hidden="true"></i>;
};
IconAtom.defaultProps = {
  iconName: "fa fa-solid fa-block-question",
};
IconAtom.propTypes = {
  iconName: PropTypes.string.isRequired,
};
export default IconAtom;
