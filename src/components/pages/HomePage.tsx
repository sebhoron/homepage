import React from "react";

import { HomePageTemplate } from "../templates/HomePageTemplate.tsx";

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

export const HomePage: React.FC<Props> = ({
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
      <HomePageTemplate
        headerImageSrc={headerImageSrc}
        headerImageAlt={headerImageAlt}
        homePath={homePath}
        projectPath={projectPath}
        musicPath={musicPath}
        travelPath={travelPath}
        subHeaderImageSrc={subHeaderImageSrc}
        subHeaderImageAlt={subHeaderImageAlt}
        fullName={fullName}
        professions={professions}
      />
    </div>
  );
}
