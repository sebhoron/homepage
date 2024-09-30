import React from "react";
import { NavLink } from "react-router-dom";

import { IconAtom } from "../atoms/IconAtom";

type Props = {
  path: string;
  name: string;
  iconName?: string;
  ariaLabel?: string;
}

export const NavLinkMolecule: React.FC<Props> = ({ path, name, ariaLabel, iconName }) => {
  return (
    <NavLink className="nav-link" to={path}>
      <IconAtom iconName={iconName} ariaLabel={ariaLabel}></IconAtom>
      {name}
    </NavLink>
  );
};
