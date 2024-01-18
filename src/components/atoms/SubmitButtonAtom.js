import React from "react";
import PropTypes from "prop-types";

const SubmitButtonAtom = ({ buttonType, buttonName }) => {
  return (
    <button type={buttonType} className="btn btn-outline-success">
      {buttonName}
    </button>
  );
};
SubmitButtonAtom.defaultProps = {
  buttonType: "submit",
  buttonName: "Search",
};
SubmitButtonAtom.propTypes = {
  buttonType: PropTypes.string.isRequired,
  buttonName: PropTypes.string,
};
export default SubmitButtonAtom;
