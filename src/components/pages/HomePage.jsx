import React from "react";
import PropTypes from "prop-types";
import HomePageTemplate from "../templates/HomePageTemplate.jsx";

const HomePage = ({
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
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
