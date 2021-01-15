import React from 'react';
import PropTypes from 'prop-types';
import './MenuButton.scss';

const MenuButton = ({ icon, onClick, isMenuOpen }) => (
  <button
    className={isMenuOpen ? 'open-btn' : 'close-btn'}
    type="button"
    onClick={onClick}
  >
    {icon}
  </button>
);

MenuButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isMenuOpen: PropTypes.bool
};

MenuButton.defaultProps = {
  onClick: () => {},
  isMenuOpen: false
};

export default MenuButton;
