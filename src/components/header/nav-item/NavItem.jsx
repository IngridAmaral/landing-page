import React from 'react';
import PropTypes from 'prop-types';
import './NavItem.scss';

const NavItem = ({ icon, onClick, text, selectedNavItem }) => (
  <button
    className={`${selectedNavItem === text ? 'selected' : 'nav-item-btn'}`}
    type="button"
    onClick={selectedNavItem === text ? () => {} : () => onClick(text)}
  >
    {icon}
    <span className="item-text">{text}</span>
  </button>
);

NavItem.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string,
  selectedNavItem: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  onClick: () => {},
  text: ''
};

export default NavItem;
