import React from "react";
import { Link } from "react-router-dom";

type Props = {
  path: string;
  className: string;
  text: React.ReactNode;
}

export const LinkAtom: React.FC<Props> = ({ path, className, text = "Link" }) => {
  return (
    <Link className={className} aria-current="page" to={path}>
      {text && <span>{text}</span>}
    </Link>
  );
};
