import React from "react";

type Props = {
  videoId: string;
  width?: string;
  height?: string;
};

export const YouTubeIFrameAtom: React.FC<Props> = ({
  videoId = "watch?v=LLFhKaqnWwk",
  width = "560",
  height = "315",
}) => {
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
