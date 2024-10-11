import React from "react";
import { Link } from "react-router-dom";

import { ImageAtom } from "../atoms/ImageAtom.tsx";

type Props = {
  linkClassName: string;
  linkPath: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
};

export const ImageLinkMolecule: React.FC<Props> = ({
  linkClassName,
  linkPath,
  imageSrc,
  imageAlt,
  imageClassName,
}) => {
  return (
    <Link to={linkPath} className={linkClassName}>
      <ImageAtom src={imageSrc} alt={imageAlt} className={imageClassName} />
    </Link>
  );
};
