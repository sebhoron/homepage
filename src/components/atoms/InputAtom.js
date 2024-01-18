import PropTypes from "prop-types";
import React from "react";

const InputAtom = ({ inputType, inputPlaceholder, inputLabel }) => {
  return (
    <input
      className="form-control me-2"
      type={inputType}
      aria-label={inputLabel}
      placeholder={inputPlaceholder}
    />
  );
};

InputAtom.defaultProps = {
  inputType: "search",
  inputPlaceholder: "",
  inputLabel: "Search",
};

InputAtom.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  inputLabel: PropTypes.string.isRequired,
};

export default InputAtom;
