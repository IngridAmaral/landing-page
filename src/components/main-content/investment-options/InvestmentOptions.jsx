import React from 'react';
import InvestmentOption from './investment-option/InvestmentOption';
import { INVESTMENT_OPTIONS } from '../../../data';
import './InvestmentOptions.scss';

const InvestmentOptions = () => (
  <div className="investment-options-container">
    {INVESTMENT_OPTIONS.map((option) => (
      <InvestmentOption
        option={option}
        key={`investment-option-${option.title}`}
      />
    ))}
  </div>
);

export default InvestmentOptions;
