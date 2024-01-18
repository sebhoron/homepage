import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkAtom = ({ path, brand }) => {
  return (
    <Link className="navbar-brand" aria-current="page" to={path}>
      {brand}
    </Link>
  );
};
LinkAtom.defaultProps = {
  path: "/",
  brand: "Unknown",
};
LinkAtom.propTypes = {
  path: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};
export default LinkAtom;
