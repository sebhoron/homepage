import React from 'react';

import { LinkAtom } from '../atoms/LinkAtom.tsx';
import { ImageAtom } from '../atoms/ImageAtom.tsx';

type Props = {
  linkClassName: string;
  linkPath: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
}

export const ImageLinkMolecule: React.FC<Props> = ({
  linkClassName,
  linkPath,
  imageSrc,
  imageAlt,
  imageClassName
}) => {
  return (
    <LinkAtom
      path={linkPath}
      className={linkClassName}
      text={
        <ImageAtom src={imageSrc} alt={imageAlt} className={imageClassName} />
      }
    />
  );
};
