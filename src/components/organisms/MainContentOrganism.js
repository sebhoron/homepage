import React from "react";
import PropTypes from "prop-types";

const MainContentOrganism = ({ articles, featuredArticle, sidebarData }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8"></div>
      </div>
    </div>
  );
};

MainContentOrganism.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  featuredArticle: PropTypes.object,
  sidebarData: PropTypes.object.isRequired,
};

export default MainContentOrganism;
