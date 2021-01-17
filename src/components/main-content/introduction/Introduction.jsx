import React from 'react';
import './Introduction.scss';

export const INTRODUCTION_TITLE = 'Welcome to your personal area.';
export const INTRODUCTION_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum elit id auctor mollis. Aenean feugiat commodo quam, vulputate viverra lorem iaculis in. Curabitur varius commodo lacus eget vestibulum. Curabitur vitae risus nec justo faucibus vulputate. Nunc blandit nisi lobortis, gravida elit non, tincidunt dolor. Mauris ullamcorper suscipit risus, eget dictum dui consequat sed. Nam quis orci id dui consectetur elementum. Nulla et lacus massa.';

const Introduction = () => (
  <div className="introduction-container">
    <span className="introduction-title">{INTRODUCTION_TITLE}</span>
    <span className="introduction-description">{INTRODUCTION_DESCRIPTION}</span>
  </div>
);

export default Introduction;
