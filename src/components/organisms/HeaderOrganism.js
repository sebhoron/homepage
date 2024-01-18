import React from "react";
import PropTypes from "prop-types";
import SearchFormMolecule from "../molecules/SearchFormMolecule";
import NavLinkMolecule from "../molecules/NavLinkMolecule";
import LinkAtom from "../atoms/LinkAtom";
import ToggleButtonAtom from "../atoms/ToggleButtonAtom";

const HeaderOrganism = ({ brand, homePath, registrationPath, aboutPath }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <LinkAtom brand={brand} path={homePath} />
        <ToggleButtonAtom type="button" />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLinkMolecule
                path={homePath}
                iconName="fa fa-home mx-1"
                name="Home"
              />
            </li>
            <li className="nav-item">
              <NavLinkMolecule
                path={registrationPath}
                iconName="fa fa-plus mx-1"
                name="Register"
              />
            </li>
            <li className="nav-item">
              <NavLinkMolecule
                path={aboutPath}
                iconName="fa fa-question mx-1"
                name="About Us"
              />
            </li>
          </ul>
          <SearchFormMolecule
            inputType="search"
            inputPlaceholder="Search"
            labelId="search"
            labelName="Search"
            buttonType="Submit"
            buttonName="Search"
          />
        </div>
      </div>
    </nav>
  );
};
HeaderOrganism.defaultProps = {
  brand: "Unknown",
  homePath: "/",
  registrationPath: "/",
  aboutPath: "/",
};
HeaderOrganism.propTypes = {
  brand: PropTypes.string.isRequired,
  homePath: PropTypes.string.isRequired,
  registrationPath: PropTypes.string.isRequired,
  aboutPath: PropTypes.string.isRequired,
};
export default HeaderOrganism;
