import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import NavItem from '../header/nav-item/NavItem';
import { ICONS, ICONS_KEYS } from '../../data';
import './LateralMenu.scss';
import Footer from '../footer/Footer';

const LateralMenu = ({
  userName,
  toggleMenu,
  selectNavItem,
  selectedNavItem
}) => (
  <div className="lateral-menu">
    <Header
      userName={userName}
      toggleMenu={toggleMenu}
      isMenuOpen
      selectNavItem={selectNavItem}
      selectedNavItem={selectedNavItem}
    />
    <div className="lateral-menu-items">
      {ICONS_KEYS.map((iconName) => (
        <div key={`nav-item-${iconName}`} className="lateral-menu-item">
          <NavItem
            iconData={{
              icon: ICONS[iconName].icon,
              name: ICONS[iconName].name,
              isSelected: selectedNavItem === ICONS[iconName].name
            }}
            onClick={selectNavItem}
            isMenuOpen
          />
        </div>
      ))}
    </div>

    <div className="footer">
      <Footer svgColor="white" backgroundColor="primary" />
    </div>
  </div>
);

LateralMenu.propTypes = {
  userName: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  selectNavItem: PropTypes.func.isRequired,
  selectedNavItem: PropTypes.string
};

LateralMenu.defaultProps = {
  selectedNavItem: ''
};

export default LateralMenu;
