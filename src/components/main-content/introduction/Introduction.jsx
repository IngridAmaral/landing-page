import React from 'react';
import { INTRODUCTION_TITLE, INTRODUCTION_DESCRIPTION } from '../../../data';
import './Introduction.scss';

const Introduction = () => (
  <div className="introduction-container">
    <span className="introduction-title">{INTRODUCTION_TITLE}</span>
    <span className="introduction-description">{INTRODUCTION_DESCRIPTION}</span>
  </div>
);

export default Introduction;
