import React from "react";

type Props = {
  iconName?: string;
  ariaLabel?: string;
};

export const IconAtom: React.FC<Props> = ({
  iconName = "fa fa-question",
  ariaLabel = "Question",
}) => {
  return <i className={iconName} aria-hidden="true" aria-label={ariaLabel}></i>;
};
