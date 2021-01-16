import React from 'react';
import { shallow } from 'enzyme';
import InvestmentOption from './investment-option/InvestmentOption';
import InvestmentOptions, { INVESTMENT_OPTIONS } from './InvestmentOptions';

it('renders component', () => {
  shallow(<InvestmentOptions />);
});

it('should render the correct number of investment options', () => {
  const wrapper = shallow(<InvestmentOptions />);

  expect(wrapper.find(InvestmentOption)).toHaveLength(
    INVESTMENT_OPTIONS.length
  );
});

it('should pass the correct props to each investment option', () => {
  const wrapper = shallow(<InvestmentOptions />);

  INVESTMENT_OPTIONS.forEach(({ title, description, exploreButton }, idx) => {
    expect(wrapper.find(InvestmentOption).at(idx).props().title).toEqual(title);
    expect(wrapper.find(InvestmentOption).at(idx).props().description).toEqual(
      description
    );
    expect(
      wrapper.find(InvestmentOption).at(idx).props().exploreButton
    ).toEqual(exploreButton);
  });
});
