import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ImageAtom from "../atoms/ImageAtom";

const SubHeaderOrganism = ({ imageSrc, imageAlt, fullName, professions }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-fluid">
      <ImageAtom src={imageSrc} alt={imageAlt} />
      <div className="subheader-content">
        <h1>{fullName}</h1>
        <div className="subheader-text">
          {console.log(windowWidth)}
          {windowWidth <= 768 ? (
            <h2>{professions.join(" | ")}</h2>
          ) : (
            professions.map((profession, index) => (
              <div key={index}>
                <h2>{profession}</h2>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

SubHeaderOrganism.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  fullName: PropTypes.string,
  professions: PropTypes.arrayOf(PropTypes.string),
};

SubHeaderOrganism.defaultProps = {
  imageSrc: "default-image.jpg",
  imageAlt: "Default Alt Text",
  fullName: "Default Name",
  professions: ["Default Profession"],
};

export default SubHeaderOrganism;
