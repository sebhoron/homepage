import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkAtom = ({ path, className, text }) => {
  return (
    <Link className={className} aria-current="page" to={path}>
      {text}
    </Link>
  );
};

LinkAtom.defaultProps = {
  path: "/",
  className: "",
  text: "",
};

LinkAtom.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LinkAtom;
