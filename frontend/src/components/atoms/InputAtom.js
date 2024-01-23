import PropTypes from "prop-types";
import React from "react";

const InputAtom = ({ className, inputType, inputPlaceholder, inputLabel }) => {
  return (
    <input
      className={className}
      type={inputType}
      aria-label={inputLabel}
      placeholder={inputPlaceholder}
    />
  );
};

InputAtom.defaultProps = {
  className: "",
  inputType: "search",
  inputPlaceholder: "",
  inputLabel: "Search",
};

InputAtom.propTypes = {
  className: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  inputLabel: PropTypes.string.isRequired,
};

export default InputAtom;
