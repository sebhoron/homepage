import React from "react";
import PropTypes from "prop-types";

function ImageAtom({ src, alt, className }) {
  return <img src={src} alt={alt} className={className} />;
}

IconAtom.defaultProps = {
  src: "",
  alt: "",
  className: "",
};

ImageAtom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ImageAtom;
