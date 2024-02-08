import React from "react";
import PropTypes from "prop-types";

import HeaderOrganism from "../organisms/HeaderOrganism.js";
import MainContentOrganism from "../organisms/MainContentOrganism.js";
import FooterOrganism from "../organisms/FooterOrganism.js";

function HomePageTemplate() {
  return (
    <div>
      <HeaderOrganism />
      <MainContentOrganism />
      <FooterOrganism />
    </div>
  );
}

export default HomePageTemplate;
