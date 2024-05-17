import React from "react";
import Logo from "../assets/logo-box.svg?react";

const RhozelandLogo = ({ strokeColor }) => {
  return (
    <div>
      <Logo style={{ stroke: strokeColor }} />
    </div>
  );
};

export default RhozelandLogo;
