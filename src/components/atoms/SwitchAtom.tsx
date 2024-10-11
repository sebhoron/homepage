import React, { useContext } from "react";
import Switch from "react-switch";
import { PiMoonStarsFill } from "react-icons/pi";
import { HiOutlineSun } from "react-icons/hi2";
import { ThemeContext } from "../../context/ThemeContext";

export const SwitchAtom: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log("current theme:", theme);

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      onColor="#86d3ff"
      onHandleColor="#2693e6"
      handleDiameter={30}
      uncheckedIcon={<HiOutlineSun />}
      checkedIcon={<PiMoonStarsFill />}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}
    />
  );
};
