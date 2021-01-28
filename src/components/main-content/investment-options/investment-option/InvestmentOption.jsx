import React from 'react';
import PropTypes from 'prop-types';
import ExploreButton from '../../../explore-button/ExploreButton';
import './InvestmentOption.scss';

const InvestmentOption = ({
  option: { title, description, exploreButton }
}) => (
  <div className="investment-option-container">
    <div className="investment-description">
      <span className="option-title">{title}</span>
      <span className="option-description">{description}</span>
    </div>
    {exploreButton && <ExploreButton curved />}
  </div>
);

InvestmentOption.propTypes = {
  option: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    exploreButton: PropTypes.bool
  }).isRequired
};

export default InvestmentOption;
