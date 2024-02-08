import React from "react";
import PropTypes from "prop-types";
import ImageLinkMolecule from "../molecules/ImageLinkMolecule.jsx";
import NavbarTogglerAtom from "../atoms/NavbarTogglerAtom.jsx";
import NavLinkMolecule from "../molecules/NavLinkMolecule.jsx";
import SearchFormMolecule from "../molecules/SearchFormMolecule.jsx";

const HeaderOrganism = ({
  homePath,
  projectPath,
  musicPath,
  travelPath,
  logoSrc,
  logoAlt,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <ImageLinkMolecule
          linkPath={homePath}
          linkClassName=""
          imageSrc={logoSrc}
          imageAlt={logoAlt}
          imageClassName=""
        />
        <NavbarTogglerAtom type="button" />
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
                path={projectPath}
                iconName="fa fa-plus mx-1"
                name="Projects"
              />
            </li>
            <li className="nav-item">
              <NavLinkMolecule
                path={musicPath}
                iconName="fa fa-question mx-1"
                name="Music"
              />
            </li>
            <li className="nav-item">
              <NavLinkMolecule
                path={travelPath}
                iconName="fa fa-question mx-1"
                name="Travels"
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
  homePath: "/",
  projectPath: "/",
  musicPath: "/",
  travelPath: "/",
  logoSrc: "",
  logoAlt: "",
};

HeaderOrganism.propTypes = {
  homePath: PropTypes.string.isRequired,
  projectPath: PropTypes.string.isRequired,
  musicPath: PropTypes.string.isRequired,
  travelPath: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
};

export default HeaderOrganism;
