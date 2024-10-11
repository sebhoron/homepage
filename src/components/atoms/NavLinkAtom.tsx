import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  path: string;
  text?: string;
};

export const NavLinkAtom: React.FC<Props> = ({ path, text = "NavLink" }) => {
  return <NavLink to={path}>{text && <span>{text}</span>}</NavLink>;
};
