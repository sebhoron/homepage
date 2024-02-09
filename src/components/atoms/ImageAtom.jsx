import React from "react";
import PropTypes from "prop-types";

function ImageAtom({ src, alt, className }) {
  return <img src={src} alt={alt} className={className} />;
}

ImageAtom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ImageAtom.defaultProps = {
  src: "",
  alt: "Not Found",
  className: "img-fluid",
};

export default ImageAtom;
