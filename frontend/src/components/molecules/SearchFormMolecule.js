import React from "react";
import InputAtom from "../atoms/InputAtom";
import SubmitButtonAtom from "../atoms/SubmitButtonAtom";
import PropTypes from "prop-types";

const SearchFormMolecule = ({
  inputType,
  inputPlaceholder,
  inputLabel,
  buttonType,
  buttonName,
}) => {
  return (
    <form className="d-flex">
      <InputAtom
        inputType={inputType}
        inputPlaceholder={inputPlaceholder}
        inputLabel={inputLabel}
      />
      <SubmitButtonAtom buttonType={buttonType} buttonName={buttonName} />
    </form>
  );
};
SearchFormMolecule.defaultProps = {
  inputType: "search",
  inputPlaceholder: "",
  inputLabel: "Search",
  buttonType: "submit",
  buttonName: "Search",
};
SearchFormMolecule.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  inputLabel: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  buttonName: PropTypes.string,
};
export default SearchFormMolecule;
