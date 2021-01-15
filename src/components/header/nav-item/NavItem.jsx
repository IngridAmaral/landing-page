import React from 'react';
import PropTypes from 'prop-types';
import './NavItem.scss';

const NavItem = ({ icon, onClick, text, selectedNavItem, isMenuOpen }) => (
  <button
    className={`${
      selectedNavItem === text && !isMenuOpen ? 'selected' : 'nav-item-btn'
    }`}
    type="button"
    onClick={selectedNavItem === text ? () => {} : () => onClick(text)}
  >
    {icon}
    <span className="item-text">{text}</span>
  </button>
);

NavItem.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  selectedNavItem: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired
};

export default NavItem;
