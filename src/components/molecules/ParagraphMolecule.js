import React from "react";
import PropTypes from "prop-types";
import LinkAtom from "../atoms/LinkAtom";

const ParagraphMolecule = ({ text, link }) => {
  return (
    <p>
      {text}{" "}
      {link && (
        <LinkAtom
          path={link.path}
          className={link.className}
          text={link.text}
        />
      )}
    </p>
  );
};

ParagraphMolecule.defaultProps = {
  text: "Default paragraph text.",
  link: null,
};

ParagraphMolecule.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.shape({
    path: PropTypes.string.isRequired,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
};
