import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './nav-item/NavItem';
import LogoImg from '../../assets/svg/logo/LogoImg';
import HeaderRight from './header-right/HeaderRight';
import { ICONS } from '../../data';
import './Header.scss';

const Header = ({
  userName,
  toggleMenu,
  isMenuOpen,
  selectNavItem,
  selectedNavItem
}) => (
  <header className={`header-container ${isMenuOpen ? 'menu-open' : ''}`}>
    <div className="left">
      <div className="header-logo">
        <LogoImg />
      </div>
      <div className="presentation-text">
        Hallo, <span className="name">{userName}!</span>
      </div>
      <div className="logout">
        <NavItem
          key={`nav-item-${ICONS.logout.name}`}
          iconData={{
            icon: ICONS.logout.icon,
            name: ICONS.logout.name,
            isSelected: selectedNavItem === ICONS.logout.name
          }}
          onClick={selectNavItem}
          isMenuOpen={isMenuOpen}
        />
      </div>
    </div>
    <HeaderRight
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
      selectNavItem={selectNavItem}
      selectedNavItem={selectedNavItem}
    />
  </header>
);

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  selectNavItem: PropTypes.func.isRequired,
  selectedNavItem: PropTypes.string.isRequired
};

export default Header;
