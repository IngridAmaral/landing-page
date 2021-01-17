import React from 'react';
import { shallow } from 'enzyme';
import Product from './product/Product';
import SortingButton from './sorting-button/SortingButton';
import UserProducts, { SORTING_BUTTONS } from './UserProducts';

it('renders component', () => {
  shallow(<UserProducts />);
});

it('should render the correct number of sorting buttons', () => {
  const wrapper = shallow(<UserProducts />);

  expect(wrapper.find(SortingButton)).toHaveLength(SORTING_BUTTONS.length);
});

it('should send the correct props for each sorting button', () => {
  const wrapper = shallow(<UserProducts />);
  const state = wrapper.state();

  SORTING_BUTTONS.forEach(({ text, sortBy }, idx) => {
    expect(wrapper.find(SortingButton).at(idx).props().text).toEqual(text);
    expect(wrapper.find(SortingButton).at(idx).props().sortBy).toEqual(sortBy);
    expect(wrapper.find(SortingButton).at(idx).props().isActive).toEqual(
      sortBy === 'lowest'
        ? !state.isHighestValueFirst
        : state.isHighestValueFirst
    );
  });
});

it('should send the correct props to each product', () => {
  const wrapper = shallow(<UserProducts />);

  wrapper.state().productsData.forEach((product, idx) => {
    expect(wrapper.find(Product).at(idx).props().product).toEqual(product);
  });
});
