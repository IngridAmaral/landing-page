import React from 'react';
import { shallow } from 'enzyme';
import SortingButton from './SortingButton';

const defaultProps = {
  onClick: () => {},
  sortBy: 'lowest',
  isActive: false,
  text: 'lowest first'
};

it('renders component', () => {
  shallow(<SortingButton {...defaultProps} />);
});
