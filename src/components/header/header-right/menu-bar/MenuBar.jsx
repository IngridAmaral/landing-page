import React from 'react';
import PropTypes from 'prop-types';
import NavItem from '../../nav-item/NavItem';
import Home from '../../../../assets/svg/Home';
import Settings from '../../../../assets/svg/Settings';
import User from '../../../../assets/svg/User';
import './MenuBar.scss';

export const ICONS = [
  { name: 'Home', icon: <Home /> },
  { name: 'Settings', icon: <Settings /> },
  { name: 'User', icon: <User /> }
];

const MenuBar = ({ selectNavItem, selectedNavItem }) => (
  <div className="menu-bar-container">
    {ICONS.map(({ name, icon }) => (
      <NavItem
        key={`nav-item-${name}`}
        selectedNavItem={selectedNavItem}
        onClick={selectNavItem}
        icon={icon}
        text={name}
      />
    ))}
  </div>
);

MenuBar.propTypes = {
  selectNavItem: PropTypes.func.isRequired,
  selectedNavItem: PropTypes.string.isRequired
};

export default MenuBar;
