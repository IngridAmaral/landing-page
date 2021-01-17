import React from 'react';
import { shallow } from 'enzyme';
import NavItem from './NavItem';
import User from '../../../assets/svg/User';

const defaultProps = {
  onClick: () => {},
  text: 'User',
  icon: <User />,
  isSelected: false,
  isMenuOpen: false
};

it('renders component', () => {
  shallow(<NavItem {...defaultProps} />);
});

it('should add the selected class when selected', () => {
  const wrapper = shallow(<NavItem {...defaultProps} isSelected />);

  expect(wrapper.find('.selected').exists()).toEqual(true);
});

it('should NOT add the selected class when not selected', () => {
  const wrapper = shallow(<NavItem {...defaultProps} />);

  expect(wrapper.find('.selected').exists()).toEqual(false);
});

it('should render correct text', () => {
  const wrapper = shallow(<NavItem {...defaultProps} />);

  expect(wrapper.find('.item-text').text()).toEqual(defaultProps.text);
});
