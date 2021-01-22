import React from 'react';
import Home from './assets/svg/Home';
import Settings from './assets/svg/Settings';
import User from './assets/svg/User';
import Exit from './assets/svg/Exit';

export const ICONS = {
  logout: { name: 'logout', icon: <Exit /> },
  home: { name: 'home', icon: <Home /> },
  settings: { name: 'settings', icon: <Settings /> },
  user: { name: 'user', icon: <User /> }
};

export const ICONS_KEYS = Object.keys(ICONS);

// main-content
// /investment-options
export const INVESTMENT_OPTIONS = [
  {
    title: 'Investments',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum elit id auctor mollis. Aenean feugiat commodo quam, vulputate viverra lorem iaculis in. Curabitur varius commodo lacus eget vestibulum. Curabitur vitae risus nec justo faucibus vulputate.',
    exploreButton: false
  },
  {
    title: 'Stocks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum elit id auctor mollis.',
    exploreButton: true
  }
];

// /introduction
export const INTRODUCTION_TITLE = 'Welcome to your personal area.';

export const INTRODUCTION_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum elit id auctor mollis. Aenean feugiat commodo quam, vulputate viverra lorem iaculis in. Curabitur varius commodo lacus eget vestibulum. Curabitur vitae risus nec justo faucibus vulputate. Nunc blandit nisi lobortis, gravida elit non, tincidunt dolor. Mauris ullamcorper suscipit risus, eget dictum dui consequat sed. Nam quis orci id dui consectetur elementum. Nulla et lacus massa.';

// user-products
export const USER_PRODUCTS = {
  title: 'Your Products',
  products: [
    {
      name: 'Wealth',
      details: { value: '500.000', currency: '€', variation: 25.3 }
    },
    {
      name: 'Cash',
      details: { value: '260.000', currency: '€', variation: 15.3 }
    },
    {
      name: 'Venture',
      details: { value: '928.000', currency: '€', variation: -0.13 }
    },
    {
      name: 'PE',
      details: { value: '850.000', currency: '€', variation: 50.8 }
    },
    {
      name: 'RE',
      details: { value: '799.000', currency: '€', variation: 25.6 }
    }
  ]
};

export const SORTING_OPTIONS = {
  highest: { text: 'highest values first', sortBy: 'highest' },
  lowest: { text: 'highest values last', sortBy: 'lowest' }
};

export const SORTING_OPTIONS_KEYS = Object.keys(SORTING_OPTIONS);
