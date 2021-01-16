import React from 'react';
import Introduction from './introduction/Introduction';
import InvestmentOptions from './investment-options/InvestmentOptions';
import './MainContent.scss';

const MainContent = () => (
  <div className="main-content-container">
    <Introduction />
    <InvestmentOptions />
  </div>
);

export default MainContent;
