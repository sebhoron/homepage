import React from "react";
import PropTypes from "prop-types";

const YouTubeIFrameAtom = ({ videoId, width, height }) => {
  return (
    <iframe
      className="embed-responsive-item"
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}`}
      title={`YouTube Video: ${videoId}`}
      allowFullScreen
    ></iframe>
  );
};

YouTubeIFrameAtom.defaultProps = {
  videoId: "watch?v=LLFhKaqnWwk",
  width: "560",
  height: "315",
};

YouTubeIFrameAtom.propTypes = {
  videoId: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default YouTubeIFrameAtom;
