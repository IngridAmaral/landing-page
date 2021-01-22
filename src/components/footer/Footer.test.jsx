import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../../assets/svg/logo/Logo';
import Footer from './Footer';

const defaultProps = {
  backgroundColor: 'mine-shaft',
  svgColor: 'white'
};

const { backgroundColor, svgColor } = defaultProps;

it('renders component', () => {
  shallow(<Footer {...defaultProps} />);
});

it('should render the correct class', () => {
  const wrapper = shallow(<Footer {...defaultProps} />);

  expect(wrapper.find(`.footer-container-${backgroundColor}`).exists()).toEqual(
    true
  );
});

it('should render logo component with the correct props', () => {
  const wrapper = shallow(<Footer {...defaultProps} />);

  expect(wrapper.find(Logo).exists()).toEqual(true);
  expect(wrapper.find(Logo).props().colorName).toEqual(svgColor);
});
