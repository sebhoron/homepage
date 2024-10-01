import React from "react";

import { HeaderOrganism } from "../organisms/header/HeaderOrganism.tsx";
import { MainContentOrganism } from "../organisms/MainContentOrganism.tsx";
import { Footer } from "../organisms/FooterOrganism.tsx";
import { SubHeaderOrganism } from "../organisms/SubHeaderOrganism.tsx";

type Props = {
  headerImageSrc: string;
  headerImageAlt: string;
  homePath: string;
  projectPath: string;
  musicPath: string;
  travelPath: string;
  subHeaderImageSrc: string;
  subHeaderImageAlt: string;
  fullName: string;
  professions: string[];
}

export const HomePageTemplate: React.FC<Props> = ({
  headerImageSrc,
  headerImageAlt,
  homePath,
  projectPath,
  musicPath,
  travelPath,
  subHeaderImageSrc,
  subHeaderImageAlt,
  fullName,
  professions,
}) => {
  return (
    <div>
      <HeaderOrganism
        imageSrc={headerImageSrc}
        imageAlt={headerImageAlt}
        homePath={homePath}
        projectPath={projectPath}
        musicPath={musicPath}
        travelPath={travelPath}
      />
      <SubHeaderOrganism
        imageSrc={subHeaderImageSrc}
        imageAlt={subHeaderImageAlt}
        fullName={fullName}
        professions={professions}
      />
      <MainContentOrganism />
      <Footer />
    </div>
  );
};
