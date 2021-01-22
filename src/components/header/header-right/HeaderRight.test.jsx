import React from 'react';
import { shallow } from 'enzyme';
import HeaderRight from './HeaderRight';
import MenuButton from './menu-button/MenuButton';
import MenuBar from './menu-bar/MenuBar';

const defaultProps = {
  isMenuOpen: false,
  toggleMenu: () => {},
  selectNavItem: () => {},
  selectedNavItem: 'Home'
};

it('renders component', () => {
  shallow(<HeaderRight {...defaultProps} />);
});

it('renders menu button component', () => {
  const wrapper = shallow(<HeaderRight {...defaultProps} />);

  expect(wrapper.find(MenuButton).exists()).toEqual(true);
});

it('renders menu bar component', () => {
  const wrapper = shallow(<HeaderRight {...defaultProps} />);

  expect(wrapper.find(MenuBar).exists()).toEqual(true);
});
