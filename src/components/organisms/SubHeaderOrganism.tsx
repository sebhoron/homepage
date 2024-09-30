import React, { useState, useEffect } from "react";

import { ImageAtom } from "../atoms/ImageAtom.tsx";

type Props = {
  imageSrc: string;
  imageAlt: string;
  fullName: string;
  professions: string[];
}

export const SubHeaderOrganism: React.FC<Props> = ({ imageSrc, imageAlt = "Default Alt Text", fullName = "Default Name", professions = ["Default Profession"] }) => {
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
