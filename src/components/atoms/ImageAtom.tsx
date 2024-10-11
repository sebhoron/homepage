import React from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export const ImageAtom: React.FC<Props> = ({
  src,
  alt = "Not Found",
  className = "img-fluid",
}) => {
  return <img src={src} alt={alt} className={className} />;
};
