import React from "react";

export const SpinnerAtom: React.FC = () => {
  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
