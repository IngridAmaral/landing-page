import React from 'react';
import { shallow } from 'enzyme';
import LateralMenu from './LateralMenu';
import { ICONS, ICONS_KEYS } from '../../data';
import Header from '../header/Header';
import NavItem from '../header/nav-item/NavItem';

const defaultProps = {
  userName: 'liqid',
  toggleMenu: () => {},
  selectNavItem: () => {},
  selectedNavItem: ''
};

const { userName, toggleMenu, selectNavItem, selectedNavItem } = defaultProps;

it('renders component', () => {
  shallow(<LateralMenu {...defaultProps} />);
});

it('should render a header component with props', () => {
  const wrapper = shallow(<LateralMenu {...defaultProps} />);

  expect(wrapper.find(Header).props().userName).toEqual(userName);
  expect(wrapper.find(Header).props().toggleMenu).toEqual(toggleMenu);
  expect(wrapper.find(Header).props().isMenuOpen).toEqual(true);
  expect(wrapper.find(Header).props().selectNavItem).toEqual(selectNavItem);
  expect(wrapper.find(Header).props().selectedNavItem).toEqual(selectedNavItem);
});

it('should render the correct number of items', () => {
  const wrapper = shallow(<LateralMenu {...defaultProps} />);

  expect(wrapper.find('.lateral-menu-item')).toHaveLength(ICONS_KEYS.length);
});

it('should send the correct props to nav item', () => {
  const wrapper = shallow(<LateralMenu {...defaultProps} />);

  ICONS_KEYS.forEach((iconName, idx) => {
    expect(wrapper.find(NavItem).at(idx).props().iconData).toEqual({
      icon: ICONS[iconName].icon,
      name: iconName,
      isSelected: selectedNavItem === iconName
    });
    expect(wrapper.find(NavItem).at(idx).props().isMenuOpen).toEqual(true);
  });
});
