import React from 'react';
import { shallow } from 'enzyme';
import RightArrow from '../../assets/svg/arrows/RightArrow';
import ExploreButton from './ExploreButton';

it('renders component', () => {
  shallow(<ExploreButton />);
});

it('should add class curved when receive prop curved set to true', () => {
  const wrapper = shallow(<ExploreButton curved />);

  expect(wrapper.find('.curved').exists()).toEqual(true);
});

it('should NOT add class curved when receive prop curved set to false', () => {
  const wrapper = shallow(<ExploreButton curved={false} />);

  expect(wrapper.find('.curved').exists()).toEqual(false);
});

it('should render the arrow', () => {
  const wrapper = shallow(<ExploreButton />);

  expect(wrapper.find(RightArrow).exists()).toEqual(true);
});
