import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import NavItem from '../nav-item/NavItem';
import { ICONS } from '../header-right/menu-bar/MenuBar';
import './LateralMenu.scss';
import Footer from '../../footer/Footer';

const LateralMenu = ({
  userName,
  toggleMenu,
  isMenuOpen,
  selectNavItem,
  selectedNavItem
}) => (
  <div className="lateral-menu">
    <Header
      userName={userName}
      toggleMenu={toggleMenu}
      isMenuOpen={isMenuOpen}
      selectNavItem={selectNavItem}
      selectedNavItem={selectedNavItem}
    />
    <div className="lateral-menu-items">
      {ICONS.map(({ name, icon }) => (
        <div key={`nav-item-${name}`} className="lateral-menu-item">
          <NavItem
            isSelected={selectedNavItem === name}
            onClick={selectNavItem}
            icon={icon}
            text={name}
            isMenuOpen={isMenuOpen}
          />
        </div>
      ))}
    </div>

    <div className="footer">
      <Footer colorName="white" />
    </div>
  </div>
);

LateralMenu.propTypes = {
  userName: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  selectNavItem: PropTypes.func.isRequired,
  selectedNavItem: PropTypes.string
};

LateralMenu.defaultProps = {
  selectedNavItem: ''
};

export default LateralMenu;
