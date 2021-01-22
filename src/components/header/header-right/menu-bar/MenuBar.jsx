import React from 'react';
import PropTypes from 'prop-types';
import NavItem from '../../nav-item/NavItem';
import { ICONS, ICONS_KEYS } from '../../../../data';
import './MenuBar.scss';

const MenuBar = ({ selectNavItem, selectedNavItem, isMenuOpen }) => (
  <div className="menu-bar-container">
    {ICONS_KEYS.map((iconName) =>
      iconName !== 'logout' ? (
        <NavItem
          key={`nav-item-${iconName}`}
          iconData={{
            icon: ICONS[iconName].icon,
            name: iconName,
            isSelected: selectedNavItem === iconName
          }}
          onClick={selectNavItem}
          isMenuOpen={isMenuOpen}
        />
      ) : null
    )}
  </div>
);

MenuBar.propTypes = {
  selectNavItem: PropTypes.func.isRequired,
  selectedNavItem: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired
};

export default MenuBar;
