import { useState } from 'react';

import './HeaderOrganism.css';
import { SwitchAtom } from '../../atoms/SwitchAtom';

export function Header() {
  const [isMobileMenuOpen, setISMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setISMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className='nav__wrapper container'>
        <div className='nav__logo'>Sebastian Horon</div>
        <ul className={`nav__menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
          <li className='nav__menu-items'>
            <a href='#home'>Home</a>
          </li>
          <li className='nav__menu-items'>
            <a href='#services'>Services</a>
          </li>
          <li className='nav__menu-items'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='nav__menu-items'>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li className='nav__menu-items'>
            <a href='#contact'>Contact</a>
          </li>
          <li className='buttons'>
            <label htmlFor='' className='switch'>
              <SwitchAtom />
            </label>
            <a href='' className='button'>
              Hire Me
            </a>
          </li>
        </ul>
      </div>
      <div className='hamburger-menu' onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
    </div>
  );
};
