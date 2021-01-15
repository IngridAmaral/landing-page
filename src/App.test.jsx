import React from 'react';
import { shallow } from 'enzyme';
import Header from './components/header/Header';
import App, { HOME } from './App';

it('renders component', () => {
  shallow(<App />);
});

it('should OPEN the menu when toggleMenu is triggered', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.state().isMenuOpen).toEqual(false);

  wrapper.find(Header).props().toggleMenu(new Event('click'));
  wrapper.update();

  expect(wrapper.state().isMenuOpen).toEqual(true);
});

it('should CLOSE the menu when toggleMenu is triggered', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.state().isMenuOpen).toEqual(false); // default

  wrapper.find(Header).props().toggleMenu(new Event('click'));
  wrapper.update();

  expect(wrapper.state().isMenuOpen).toEqual(true);

  wrapper.find(Header).props().toggleMenu(new Event('click'));
  wrapper.update();

  expect(wrapper.state().isMenuOpen).toEqual(false);
});

it('should change the selected nav item and send as prop to header', () => {
  const wrapper = shallow(<App />);
  const settings = 'Settings';

  expect(wrapper.state().selectedNavItem).toEqual(HOME); // default

  expect(wrapper.find(Header).props().selectedNavItem).toEqual(
    wrapper.state().selectedNavItem
  );

  wrapper.find(Header).props().selectNavItem(settings); // selects a new item
  wrapper.update();

  expect(wrapper.state().selectedNavItem).toEqual(settings); // state changes

  expect(wrapper.find(Header).props().selectedNavItem).toEqual(
    wrapper.state().selectedNavItem
  );
});
