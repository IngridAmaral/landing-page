import React from 'react';
import { shallow } from 'enzyme';
import ExploreButton from '../../explore-button/ExploreButton';
import Details from './details/Details';
import Product from './Product';

const defaultProps = {
  product: {
    name: 'Wealth',
    details: { value: '500.000', currency: '€', variation: 25.3 }
  },
  isVariationPositive: true
};

const {
  product: { name, details }
} = defaultProps;

it('renders component', () => {
  shallow(<Product {...defaultProps} />);
});

it('renders the correct product name', () => {
  const wrapper = shallow(<Product {...defaultProps} />);

  expect(wrapper.find('.product-name').text()).toEqual(`liqid ${name}`);
});

it('renders the details component with the correct props', () => {
  const wrapper = shallow(<Product {...defaultProps} />);

  expect(wrapper.find(Details).props().details).toEqual(details);
  expect(wrapper.find(Details).props().details).toEqual(details);
});

it('should render the explore button', () => {
  const wrapper = shallow(<Product {...defaultProps} />);

  expect(wrapper.find(ExploreButton).exists()).toEqual(true);
});
