import React from "react";
import PropTypes from "prop-types";

import HeaderOrganism from "../organisms/Header/HeaderOrganism.jsx";
import SubHeaderOrganism from "../organisms/SubHeaderOrganism.jsx";
import MainContentOrganism from "../organisms/MainContentOrganism.jsx";
import FooterOrganism from "../organisms/FooterOrganism.jsx";

function HomePageTemplate({
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
}) {
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
      <FooterOrganism />
    </div>
  );
}

export default HomePageTemplate;
