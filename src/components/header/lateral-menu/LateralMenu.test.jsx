import React from 'react';
import { shallow } from 'enzyme';
import LateralMenu from './LateralMenu';
import { ICONS } from '../header-right/menu-bar/MenuBar';
import Header from '../Header';
import NavItem from '../nav-item/NavItem';

const defaultProps = {
  userName: 'liqid',
  toggleMenu: () => {},
  isMenuOpen: true,
  selectNavItem: () => {},
  selectedNavItem: ''
};

const {
  userName,
  toggleMenu,
  isMenuOpen,
  selectNavItem,
  selectedNavItem
} = defaultProps;

it('renders component', () => {
  shallow(<LateralMenu {...defaultProps} />);
});

it('should render a header component with props', () => {
  const wrapper = shallow(<LateralMenu {...defaultProps} />);

  expect(wrapper.find(Header).props().userName).toEqual(userName);
  expect(wrapper.find(Header).props().toggleMenu).toEqual(toggleMenu);
  expect(wrapper.find(Header).props().isMenuOpen).toEqual(isMenuOpen);
  expect(wrapper.find(Header).props().selectNavItem).toEqual(selectNavItem);
  expect(wrapper.find(Header).props().selectedNavItem).toEqual(selectedNavItem);
});

it('should render the correct number of items', () => {
  const wrapper = shallow(<LateralMenu {...defaultProps} />);

  expect(wrapper.find('.lateral-menu-item')).toHaveLength(ICONS.length);
});

it('should send the correct props to nav item', () => {
  const wrapper = shallow(<LateralMenu {...defaultProps} />);

  ICONS.forEach(({ icon, name }, idx) => {
    expect(wrapper.find(NavItem).at(idx).props().isSelected).toEqual(
      selectedNavItem === name
    );
    expect(wrapper.find(NavItem).at(idx).props().icon).toEqual(icon);
    expect(wrapper.find(NavItem).at(idx).props().text).toEqual(name);
    expect(wrapper.find(NavItem).at(idx).props().isMenuOpen).toEqual(
      isMenuOpen
    );
  });
});
