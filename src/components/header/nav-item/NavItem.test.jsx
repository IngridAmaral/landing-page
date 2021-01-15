import React from 'react';
import { shallow } from 'enzyme';
import NavItem from './NavItem';
import User from '../../../assets/svg/User';

const defaultProps = {
  onClick: () => {},
  text: 'User',
  icon: <User />,
  selectedNavItem: 'Home',
  isMenuOpen: false
};

it('renders component', () => {
  shallow(<NavItem {...defaultProps} />);
});

it('should trigger onClick when press the button if selectedItem is different', () => {
  const click = jest.fn();
  const wrapper = shallow(<NavItem {...defaultProps} onClick={click} />);

  wrapper.find('button').simulate('click');

  expect(click).toHaveBeenCalledTimes(1);
});

it('should NOT trigger onClick when press the button if selectedItem is different', () => {
  const click = jest.fn();
  const wrapper = shallow(
    <NavItem
      {...defaultProps}
      onClick={click}
      selectedNavItem={defaultProps.text}
    />
  );

  wrapper.find('button').simulate('click');
  expect(click).not.toHaveBeenCalled();
});

it('should render the selected class when selected', () => {
  const wrapper = shallow(<NavItem {...defaultProps} selectedNavItem="User" />);

  expect(wrapper.find('.selected').exists()).toEqual(true);
});

it('should not render the selected class when selected', () => {
  const wrapper = shallow(<NavItem {...defaultProps} />);

  expect(wrapper.find('.selected').exists()).toEqual(false);
});

it('should render correct text', () => {
  const wrapper = shallow(<NavItem {...defaultProps} />);

  expect(wrapper.find('.item-text').text()).toEqual(defaultProps.text);
});
