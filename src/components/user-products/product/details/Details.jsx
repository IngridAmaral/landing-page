import React from 'react';
import PropTypes from 'prop-types';
import './Details.scss';

export const replaceNegatveOperator = (n) => n.toString().replace('-', '');

const Details = ({
  details: { variation, currency, value },
  arrow,
  colorName
}) => (
  <div className={`product-details-${colorName}`}>
    <span className="value">{`${value} ${currency}`}</span>
    <span className="variation">
      {arrow}
      <span className="variation-number">
        {replaceNegatveOperator(variation)}%
      </span>
    </span>
  </div>
);

Details.propTypes = {
  details: PropTypes.shape({
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    variation: PropTypes.number.isRequired
  }).isRequired,
  arrow: PropTypes.node.isRequired,
  colorName: PropTypes.string.isRequired
};

export default Details;
