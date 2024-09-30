import React from "react";

import { NavLinkMolecule } from "../../molecules/NavLinkMolecule.tsx";
import { ImageLinkMolecule } from "../../molecules/ImageLinkMolecule.tsx";
import { NavbarTogglerAtom } from "../../atoms/NavbarTogglerAtom.tsx";

type Props = {
  imageSrc: string;
  imageAlt: string;
  homePath: string;
  projectPath: string;
  musicPath: string;
  travelPath: string;
}

export const HeaderOrganism: React.FC<Props> = ({
  imageSrc,
  imageAlt,
  homePath,
  projectPath,
  musicPath,
  travelPath,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <ImageLinkMolecule
          linkClassName="navbar-brand"
          linkPath={homePath}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          imageClassName="d-inline-block align-text-top"
        />
        <NavbarTogglerAtom type="button" />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLinkMolecule
                path={homePath}
                iconName="fa fa-home mx-1"
                name="Home"
              />
            </li>
            <li className="nav-item">
              <NavLinkMolecule
                path={projectPath}
                iconName="fa-solid fa-code mx-1"
                name="Projects"
              />
            </li>
            <li className="nav-item">
              <NavLinkMolecule
                path={musicPath}
                iconName="fa-solid fa-music mx-1"
                name="Music"
              />
            </li>
            <li className="nav-item">
              <NavLinkMolecule
                path={travelPath}
                iconName="fa-solid fa-earth-americas mx-1"
                name="Travels"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
