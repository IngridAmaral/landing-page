import React from 'react';
import PropTypes from 'prop-types';
import ExploreButton from '../../../explore-button/ExploreButton';
import './InvestmentOption.scss';

const InvestmentOption = ({ title, description, exploreButton }) => (
  <div className="investment-option-container">
    <span className="option-title">{title}</span>
    <span className="option-description">{description}</span>
    {exploreButton && <ExploreButton curved />}
  </div>
);

InvestmentOption.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  exploreButton: PropTypes.bool.isRequired
};

export default InvestmentOption;
