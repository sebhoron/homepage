import React from "react";
import { IconType } from "react-icons";
import { v4 as uuid } from "uuid";

import "./card.css";

type Props = {
  icon: IconType;
  title: string;
  features?: string[];
};

export const Card: React.FC<Props> = ({ icon, title, features }) => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__icon">{React.createElement(icon)}</div>
        <div className="card__title">{title}</div>
        <div className="card__features">
          {features?.map((feature) => (
            <p key={uuid()}>{feature}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
