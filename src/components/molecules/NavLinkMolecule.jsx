import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import IconAtom from "../atoms/IconAtom.jsx";

const NavLinkMolecule = ({ path, iconName, name }) => {
  return (
    <NavLink className="nav-link" to={path}>
      <IconAtom iconName={iconName}></IconAtom>
      {name}
    </NavLink>
  );
};

NavLinkMolecule.propTypes = {
  path: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

NavLinkMolecule.defaultProps = {
  path: "/",
  iconName: "fa fa-solid fa-block-question",
  name: "Unknown",
};

export default NavLinkMolecule;
