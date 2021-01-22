import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import NavItem from '../nav-item/NavItem';
import { ICONS, ICONS_KEYS } from '../../../data';
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
      {ICONS_KEYS.map((iconName) => (
        <div key={`nav-item-${iconName}`} className="lateral-menu-item">
          <NavItem
            iconData={{
              icon: ICONS[iconName].icon,
              name: ICONS[iconName].name,
              isSelected: selectedNavItem === ICONS[iconName].name
            }}
            onClick={selectNavItem}
            isMenuOpen={isMenuOpen}
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
  isMenuOpen: PropTypes.bool.isRequired,
  selectNavItem: PropTypes.func.isRequired,
  selectedNavItem: PropTypes.string
};

LateralMenu.defaultProps = {
  selectedNavItem: ''
};

export default LateralMenu;
