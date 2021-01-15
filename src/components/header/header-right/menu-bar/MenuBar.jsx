import React from 'react';
import PropTypes from 'prop-types';
import NavItem from '../../nav-item/NavItem';
import Home from '../../../../assets/svg/Home';
import Settings from '../../../../assets/svg/Settings';
import User from '../../../../assets/svg/User';
import Exit from '../../../../assets/svg/Exit';
import './MenuBar.scss';

export const ICONS = [
  { name: 'Logout', icon: <Exit /> },
  { name: 'Home', icon: <Home /> },
  { name: 'Settings', icon: <Settings /> },
  { name: 'User', icon: <User /> }
];

const MenuBar = ({ selectNavItem, selectedNavItem, isMenuOpen }) => (
  <div className="menu-bar-container">
    {ICONS.filter((icon) => icon.name !== 'Logout').map(({ name, icon }) => (
      <NavItem
        key={`nav-item-${name}`}
        selectedNavItem={selectedNavItem}
        onClick={selectNavItem}
        icon={icon}
        text={name}
        isMenuOpen={isMenuOpen}
      />
    ))}
  </div>
);

MenuBar.propTypes = {
  selectNavItem: PropTypes.func.isRequired,
  selectedNavItem: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired
};

export default MenuBar;
