import React from "react";

type Props = {
  className: string;
  buttonName: string;
  buttonType?: "submit" | "reset" | "button";
};

export const ButtonAtom: React.FC<Props> = ({
  className,
  buttonName,
  buttonType = "button",
}) => {
  return (
    <button className={className} type={buttonType}>
      {buttonName}
    </button>
  );
};
