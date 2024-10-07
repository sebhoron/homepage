import React from 'react';
import Switch from 'react-switch';
import { PiMoonStarsFill } from "react-icons/pi";
import { HiOutlineSun } from "react-icons/hi2";
import { useTheme } from '../../context/useTheme';

export const SwitchAtom: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      height={34}
      width={62}
      onColor='#4D4D4D'
      offColor='#4D4D4D'
      checkedIcon={<PiMoonStarsFill />}
      uncheckedIcon={<HiOutlineSun />}
      onChange={toggleTheme}
      checked={theme === 'dark'}
    />
  );
}