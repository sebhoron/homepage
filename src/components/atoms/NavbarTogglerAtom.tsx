import React from "react";

type Props = {
  className?: string;
  label?: string;
  type?: "button" | "submit" | "reset";
}

export const NavbarTogglerAtom: React.FC<Props> = ({ className = "navbar-toggler", label = "Toggle navigation", type = "button", }) => {
  return (
    <button
      type={type}
      className={className}
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label={label}
    >
      <span className="visually-hidden">{label}</span>
      <span className={`${className}-icon`}></span>
    </button>
  );
};
