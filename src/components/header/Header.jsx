import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './nav-item/NavItem';
import LogoSmall from '../../assets/svg/liqid/LogoSmall';
import HeaderRight from './header-right/HeaderRight';
import Exit from '../../assets/svg/Exit';
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
        <LogoSmall />
      </div>
      <div className="presentation-text">
        Hallo, <span className="name">{userName}!</span>
      </div>
      <div className="logout">
        <NavItem
          icon={<Exit />}
          text="Logout"
          onClick={selectNavItem}
          isSelected={selectedNavItem === 'Logout'}
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
