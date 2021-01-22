import React from 'react';
import PropTypes from 'prop-types';
import ExploreButton from '../../explore-button/ExploreButton';
import Arrow from '../../../assets/svg/arrow/Arrow';
import Details from './details/Details';
import './Product.scss';

const chooseArrow = (isVariationPositive) => {
  const arrowStyle = isVariationPositive
    ? { direction: 'up', color: 'finch' }
    : { direction: 'down', color: 'copper' };

  return <Arrow direction={arrowStyle.direction} color={arrowStyle.color} />;
};

const Product = ({ isVariationPositive, product: { name, details } }) => (
  <div className="product-container">
    <div className="product-information">
      <span className="product-name">
        <span className="liqid">liqid </span>
        {name}
      </span>
      <Details
        details={details}
        arrow={chooseArrow(isVariationPositive)}
        colorName={isVariationPositive ? 'positive' : 'negative'}
      />
    </div>
    <ExploreButton />
  </div>
);

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    details: PropTypes.shape({
      value: PropTypes.string,
      currency: PropTypes.string,
      variation: PropTypes.number
    })
  }).isRequired,
  isVariationPositive: PropTypes.bool.isRequired
};

export default Product;
