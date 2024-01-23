import React from "react";
import PropTypes from "prop-types";

const ToggleButtonAtom = ({ type, className, label }) => {
  return (
    <button
      type={type}
      className={className}
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label={label}
    >
      <span className="visually-hidden">{label}</span>
      <span className={`${className}-icon`}></span>
    </button>
  );
};

ToggleButtonAtom.defaultTypes = {
  type: "button",
  className: "navbar-toggler",
  label: "Toggle navigation",
};

ToggleButtonAtom.prototypes = {
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ToggleButtonAtom;
