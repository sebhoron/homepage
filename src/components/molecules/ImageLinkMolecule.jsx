import React from "react";
import PropTypes from "prop-types";

import LinkAtom from "../atoms/LinkAtom.jsx";
import ImageAtom from "../atoms/ImageAtom.jsx";

function ImageLinkMolecule({
  linkClassName,
  linkPath,
  imageSrc,
  imageAlt,
  imageClassName,
}) {
  return (
    <LinkAtom
      path={linkPath}
      className={linkClassName}
      text={
        <ImageAtom src={imageSrc} alt={imageAlt} className={imageClassName} />
      }
    />
  );
}

ImageLinkMolecule.propTypes = {
  linkPath: PropTypes.string.isRequired,
  linkClassName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageClassName: PropTypes.string,
};

ImageLinkMolecule.defaultProps = {
  linkPath: "/",
  linkClassName: "",
  imageSrc: "",
  imageAlt: "",
  imageClassName: "",
};

export default ImageLinkMolecule;
