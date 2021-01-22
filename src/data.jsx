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
