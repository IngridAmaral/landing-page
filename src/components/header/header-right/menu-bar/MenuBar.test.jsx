import React from 'react';
import { shallow } from 'enzyme';
import { ICONS, ICONS_KEYS } from '../../../../data';
import MenuBar from './MenuBar';
import NavItem from '../../nav-item/NavItem';

const defaultProps = {
  selectNavItem: () => {},
  selectedNavItem: 'Home',
  isMenuOpen: false
};

const { selectNavItem, selectedNavItem } = defaultProps;

it('renders component', () => {
  shallow(<MenuBar {...defaultProps} />);
});

it('should render the correct number of nav items', () => {
  const wrapper = shallow(<MenuBar {...defaultProps} />);

  expect(wrapper.find(NavItem)).toHaveLength(ICONS_KEYS.length - 1);
});

it('should send render the correct props to nav items', () => {
  const wrapper = shallow(<MenuBar {...defaultProps} />);

  ICONS_KEYS.filter((name) => name !== 'logout').forEach((iconName, idx) => {
    expect(wrapper.find(NavItem).at(idx).props().iconData).toEqual({
      icon: ICONS[iconName].icon,
      name: iconName,
      isSelected: selectedNavItem === iconName
    });
    expect(wrapper.find(NavItem).at(idx).props().onClick).toEqual(
      selectNavItem
    );
  });
});
