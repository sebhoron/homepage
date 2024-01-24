import React from "react";
import PropTypes from "prop-types";

import InputAtom from "../atoms/InputAtom.js";
import ButtonAtom from "../atoms/ButtonAtom.js";

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
      <ButtonAtom buttonType={buttonType} buttonName={buttonName} />
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
