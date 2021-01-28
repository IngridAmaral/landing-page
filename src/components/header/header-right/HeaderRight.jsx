import React from 'react';
import PropTypes from 'prop-types';
import MenuBar from './menu-bar/MenuBar';
import MenuButton from './menu-button/MenuButton';
import Close from '../../../assets/svg/Close';
import HamburgerIcon from '../../../assets/svg/HamburgerIcon';
import './HeaderRight.scss';

const HeaderRight = ({
  isMenuOpen,
  toggleMenu,
  selectNavItem,
  selectedNavItem
}) => (
  <div className="header-right-container">
    <MenuBar
      isMenuOpen={isMenuOpen}
      selectNavItem={selectNavItem}
      selectedNavItem={selectedNavItem}
    />
    <MenuButton
      icon={isMenuOpen ? <Close /> : <HamburgerIcon />}
      onClick={toggleMenu}
      isMenuOpen={isMenuOpen}
    />
  </div>
);

HeaderRight.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  selectNavItem: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  selectedNavItem: PropTypes.string.isRequired
};

export default HeaderRight;
