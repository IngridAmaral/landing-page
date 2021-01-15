import React from 'react';
import { shallow } from 'enzyme';
import MenuBar, { ICONS } from './MenuBar';
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

  expect(wrapper.find(NavItem)).toHaveLength(ICONS.length - 1);
});

it('should send render the correct props to nav items', () => {
  const wrapper = shallow(<MenuBar {...defaultProps} />);

  ICONS.filter((icon) => icon.name !== 'Logout').forEach(
    ({ icon, name }, idx) => {
      expect(wrapper.find(NavItem).at(idx).props().icon).toEqual(icon);
      expect(wrapper.find(NavItem).at(idx).props().text).toEqual(name);
      expect(wrapper.find(NavItem).at(idx).props().onClick).toEqual(
        selectNavItem
      );
      expect(wrapper.find(NavItem).at(idx).props().selectedNavItem).toEqual(
        selectedNavItem
      );
    }
  );
});
