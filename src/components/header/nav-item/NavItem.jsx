import React from 'react';
import PropTypes from 'prop-types';
import './NavItem.scss';

const NavItem = ({
  iconData: { name, icon, isSelected },
  onClick,
  isMenuOpen
}) => (
  <button
    className={`${isSelected && !isMenuOpen ? 'selected' : 'nav-item-btn'}`}
    type="button"
    onClick={isSelected ? () => {} : () => onClick(name)}
  >
    {icon}
    <span className="item-name">{name}</span>
  </button>
);

NavItem.propTypes = {
  iconData: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.node,
    isSelected: PropTypes.bool
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired
};

export default NavItem;
