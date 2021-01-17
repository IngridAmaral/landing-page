import React from 'react';
import { shallow } from 'enzyme';
import LiqidWritten from '../../assets/svg/liqid/LiqidWritten';
import Footer from './Footer';

const defaultProps = {
  colorName: 'white'
};

it('renders component', () => {
  shallow(<Footer {...defaultProps} />);
});

it('should render liqid logo component with the correct props', () => {
  const wrapper = shallow(<Footer {...defaultProps} />);

  expect(wrapper.find(LiqidWritten).exists()).toEqual(true);
  expect(wrapper.find(LiqidWritten).props().colorName).toEqual(
    defaultProps.colorName
  );
});
