import { useState } from 'react';

import './HeaderOrganism.css';

import { SwitchAtom } from '../../atoms/SwitchAtom';
import { NavLinkAtom } from '../../atoms/NavLinkAtom';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <nav className='nav__wrapper container'>
        <div className='nav__logo'>Sebastian Horon</div>
        <ul className={`nav__menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
          <li className='nav__menu-items'>
            <NavLinkAtom path='/' text='Home' />
          </li>
          <li className='nav__menu-items'>
            <a href='#services'>Services</a>
          </li>
          <li className='nav__menu-items'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='nav__menu-items'>
            <NavLinkAtom path='portfolio' text='Portfolio' />
          </li>
          <li className='nav__menu-items'>
            <a href='#contact'>Contact</a>
          </li>
          <li className='buttons'>
            <div className='switch'>
              <SwitchAtom />
            </div>
          </li>
        </ul>
      </nav>
      <div className='hamburger-menu' onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
    </div>
  );
};
