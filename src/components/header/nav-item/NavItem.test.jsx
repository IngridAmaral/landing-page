import React from 'react';
import { shallow } from 'enzyme';
import NavItem from './NavItem';
import User from '../../../assets/svg/User';

const defaultProps = {
  onClick: () => {},
  iconData: { icon: <User />, name: 'user', isSelected: false },
  isMenuOpen: false
};

const { iconData } = defaultProps;

it('renders component', () => {
  shallow(<NavItem {...defaultProps} />);
});

it('should add the selected class when selected', () => {
  const wrapper = shallow(
    <NavItem {...defaultProps} iconData={{ ...iconData, isSelected: true }} />
  );

  expect(wrapper.find('.selected').exists()).toEqual(true);
});

it('should NOT add the selected class when not selected', () => {
  const wrapper = shallow(<NavItem {...defaultProps} />);

  expect(wrapper.find('.selected').exists()).toEqual(false);
});

it('should render correct text', () => {
  const wrapper = shallow(<NavItem {...defaultProps} />);

  expect(wrapper.find('.item-name').text()).toEqual(iconData.name);
});
