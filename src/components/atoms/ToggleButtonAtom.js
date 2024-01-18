import React from "react";
import PropTypes from "prop-types";

const ToggleButtonAtom = ({ type }) => {
  return (
    <button
      type={type}
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};
ToggleButtonAtom.defaultTypes = {
  type: "button",
};
ToggleButtonAtom.prototypes = {
  type: PropTypes.string,
};
export default ToggleButtonAtom;
