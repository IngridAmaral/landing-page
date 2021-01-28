import React from 'react';
import { shallow } from 'enzyme';
import Arrow from '../../../../assets/svg/arrow/Arrow';
import Details, { replaceNegatveOperator } from './Details';

const defaultProps = {
  arrow: <Arrow direction="up" color="white" />,
  details: { value: '500.000', currency: '€', variation: 25.3 },
  colorName: 'finch'
};

const {
  details: { value, currency, variation },
  colorName
} = defaultProps;

it('renders component', () => {
  shallow(<Details {...defaultProps} />);
});

it('should render the correct class', () => {
  const wrapper = shallow(<Details {...defaultProps} />);

  expect(wrapper.find(`.product-details-${colorName}`).exists()).toEqual(true);
});

it('should render the value whith currency', () => {
  const wrapper = shallow(<Details {...defaultProps} />);

  expect(wrapper.find('.value').text()).toEqual(`${value} ${currency}`);
});

it('should render the correct variation', () => {
  const wrapper = shallow(<Details {...defaultProps} />);

  expect(wrapper.find('.variation-number').text()).toEqual(
    `${replaceNegatveOperator(variation)}%`
  );
});

it('should render the arrow', () => {
  const wrapper = shallow(<Details {...defaultProps} />);

  expect(wrapper.find(Arrow).exists()).toEqual(true);
});
