import React from "react";
import { NavLink } from "react-router-dom";
import IconAtom from "../atoms/IconAtom";
import PropTypes from "prop-types";

const NavLinkMolecule = ({ path, iconName, name }) => {
  return (
    <NavLink className="nav-link" to={path}>
      <IconAtom iconName={iconName}></IconAtom>
      {name}
    </NavLink>
  );
};
NavLinkMolecule.defaultProps = {
  path: "/",
  iconName: "fa fa-solid fa-block-question",
  name: "Unknown",
};
NavLinkMolecule.propTypes = {
  path: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default NavLinkMolecule;
