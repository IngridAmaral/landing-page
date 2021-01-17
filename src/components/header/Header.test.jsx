import React from 'react';
import { shallow } from 'enzyme';
import NavItem from './nav-item/NavItem';
import LogoSmall from '../../assets/svg/liqid/LogoSmall';
import HeaderRight from './header-right/HeaderRight';
import Exit from '../../assets/svg/Exit';
import Header from './Header';

const defaultProps = {
  onClick: () => {},
  userName: 'Liqid',
  toggleMenu: () => {},
  isMenuOpen: false,
  selectNavItem: () => {},
  selectedNavItem: 'Home'
};

const {
  userName,
  toggleMenu,
  isMenuOpen,
  selectNavItem,
  selectedNavItem
} = defaultProps;

it('renders component', () => {
  shallow(<Header {...defaultProps} />);
});

it('should render the menu open', () => {
  const wrapper = shallow(<Header {...defaultProps} isMenuOpen />);

  expect(wrapper.find('.menu-open').exists()).toEqual(true);
});

it('should not render the menu open', () => {
  const wrapper = shallow(<Header {...defaultProps} />);

  expect(wrapper.find('.menu-open').exists()).toEqual(false);
});

it('should render the logo component', () => {
  const wrapper = shallow(<Header {...defaultProps} />);

  expect(wrapper.find(LogoSmall).exists()).toEqual(true);
});

it('should render the correct user name', () => {
  const wrapper = shallow(<Header {...defaultProps} />);

  expect(wrapper.find('.name').text()).toEqual(`${userName}!`);
});

it('should render the logout icon', () => {
  const wrapper = shallow(<Header {...defaultProps} />);

  expect(wrapper.find(NavItem).props().text).toEqual('Logout');
});

it('should render the logout component with correct props', () => {
  const wrapper = shallow(<Header {...defaultProps} />);

  expect(wrapper.find(NavItem).props().icon).toEqual(<Exit />);
  expect(wrapper.find(NavItem).props().onClick).toEqual(selectNavItem);
  expect(wrapper.find(NavItem).props().isSelected).toEqual(
    selectedNavItem === 'Logout'
  );
});

it('should render the header right with the correct props', () => {
  const wrapper = shallow(<Header {...defaultProps} />);

  expect(wrapper.find(HeaderRight).props().isMenuOpen).toEqual(isMenuOpen);
  expect(wrapper.find(HeaderRight).props().toggleMenu).toEqual(toggleMenu);
  expect(wrapper.find(HeaderRight).props().selectNavItem).toEqual(
    selectNavItem
  );
  expect(wrapper.find(HeaderRight).props().selectedNavItem).toEqual(
    selectedNavItem
  );
});
