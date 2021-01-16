import React from 'react';
import InvestmentOption from './investment-option/InvestmentOption';
import './InvestmentOptions.scss';

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

const InvestmentOptions = () => (
  <div className="investment-options-container">
    {INVESTMENT_OPTIONS.map(({ title, description, exploreButton }) => (
      <InvestmentOption
        title={title}
        description={description}
        exploreButton={exploreButton}
        key={`investment-option-${title}`}
      />
    ))}
  </div>
);

export default InvestmentOptions;
