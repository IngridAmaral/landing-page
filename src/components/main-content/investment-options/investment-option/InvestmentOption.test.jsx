import React from 'react';
import { shallow } from 'enzyme';
import InvestmentOption from './InvestmentOption';
import ExploreButton from '../../../explore-button/ExploreButton';

const defaultProps = {
  title: 'Stocks',
  description: 'Lorem',
  exploreButton: false
};

const { title, description } = defaultProps;

it('renders component', () => {
  shallow(<InvestmentOption {...defaultProps} />);
});

it('should render the correct title', () => {
  const wrapper = shallow(<InvestmentOption {...defaultProps} />);

  expect(wrapper.find('.option-title').text()).toEqual(title);
});

it('should render the correct description', () => {
  const wrapper = shallow(<InvestmentOption {...defaultProps} />);

  expect(wrapper.find('.option-description').text()).toEqual(description);
});

it('should render the explore button', () => {
  const wrapper = shallow(<InvestmentOption {...defaultProps} exploreButton />);

  expect(wrapper.find(ExploreButton).exists()).toEqual(true);
});

it('should NOT render the explore button', () => {
  const wrapper = shallow(<InvestmentOption {...defaultProps} />);

  expect(wrapper.find(ExploreButton).exists()).toEqual(false);
});
