import React from 'react';
import { shallow } from 'enzyme';
import Introduction, {
  INTRODUCTION_DESCRIPTION,
  INTRODUCTION_TITLE
} from './Introduction';

it('renders component', () => {
  shallow(<Introduction />);
});

it('should render the correct title', () => {
  const wrapper = shallow(<Introduction />);

  expect(wrapper.find('.introduction-title').text()).toEqual(
    INTRODUCTION_TITLE
  );
});

it('should render the correct description', () => {
  const wrapper = shallow(<Introduction />);

  expect(wrapper.find('.introduction-description').text()).toEqual(
    INTRODUCTION_DESCRIPTION
  );
});
