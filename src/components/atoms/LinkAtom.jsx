import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkAtom = ({ path, className, text }) => {
  return (
    <Link className={className} aria-current="page" to={path}>
      {text && <span>{text}</span>}
    </Link>
  );
};

LinkAtom.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

LinkAtom.defaultProps = {
  path: "/",
  className: "",
  text: "Link",
};

export default LinkAtom;
