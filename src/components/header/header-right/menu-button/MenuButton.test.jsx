import React from 'react';
import { shallow } from 'enzyme';
import MenuButton from './MenuButton';
import Close from '../../../../assets/svg/Close';

const defaultProps = {
  onClick: () => {},
  isMenuOpen: false,
  icon: <Close />
};

it('renders component', () => {
  shallow(<MenuButton {...defaultProps} />);
});

it('should trigger onClick when press the button', () => {
  const click = jest.fn();
  const wrapper = shallow(<MenuButton {...defaultProps} onClick={click} />);

  wrapper.find('button').simulate('click');

  expect(click).toHaveBeenCalledTimes(1);
});

it('should render the open button the menu when variable isMenuOpen is true', () => {
  const wrapper = shallow(<MenuButton {...defaultProps} isMenuOpen />);

  expect(wrapper.find('.open-btn').exists()).toEqual(true);
});

it('should render the close button the menu when variable isMenuOpen is false', () => {
  const wrapper = shallow(<MenuButton {...defaultProps} />);

  expect(wrapper.find('.close-btn').exists()).toEqual(true);
});
