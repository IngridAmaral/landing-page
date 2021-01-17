import React from 'react';
import PropTypes from 'prop-types';
import './NavItem.scss';

const NavItem = ({ icon, onClick, text, isSelected, isMenuOpen }) => (
  <button
    className={`${isSelected && !isMenuOpen ? 'selected' : 'nav-item-btn'}`}
    type="button"
    onClick={isSelected ? () => {} : () => onClick(text)}
  >
    {icon}
    <span className="item-text">{text}</span>
  </button>
);

NavItem.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired
};

export default NavItem;
