import React from "react";
import PropTypes from "prop-types";
import LinkAtom from "../atoms/LinkAtom.jsx";
import ImageAtom from "../atoms/ImageAtom.jsx";

function ImageLinkMolecule({
  linkPath,
  linkClassName,
  imageSrc,
  imageAlt,
  imageClassName,
}) {
  return (
    <LinkAtom path={linkPath} className={linkClassName} text="">
      <ImageAtom src={imageSrc} alt={imageAlt} className={imageClassName} />
    </LinkAtom>
  );
}

ImageLinkMolecule.defaultProps = {
  linkPath: "/",
  linkClassName: "",
  imageSrc: "",
  imageAlt: "",
  imageClassName: "",
};

ImageLinkMolecule.propTypes = {
  linkPath: PropTypes.string.isRequired,
  linkClassName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageClassName: PropTypes.string,
};

export default ImageLinkMolecule;
