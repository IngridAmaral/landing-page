import React from 'react';
import { shallow } from 'enzyme';
import Introduction from './introduction/Introduction';
import InvestmentOptions from './investment-options/InvestmentOptions';
import MainContent from './MainContent';

it('renders component', () => {
  shallow(<MainContent />);
});

it('should render introduction component', () => {
  const wrapper = shallow(<MainContent />);

  expect(wrapper.find(Introduction).exists()).toEqual(true);
});

it('should render investment options component', () => {
  const wrapper = shallow(<MainContent />);

  expect(wrapper.find(InvestmentOptions).exists()).toEqual(true);
});
