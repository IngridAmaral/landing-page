import React from 'react';
import PropTypes from 'prop-types';
import ExploreButton from '../../explore-button/ExploreButton';
import Arrow from '../../../assets/svg/arrows/Arrow';
import Details from './details/Details';
import './Product.scss';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVariationPositive: false,
      arrowStyle: ''
    };
  }

  componentDidMount() {
    this.checkVariation();
  }

  checkVariation = () => {
    const {
      product: {
        details: { variation }
      }
    } = this.props;

    const check = variation > 0;

    this.setState({
      isVariationPositive: check,
      arrowStyle: check ? 'up-finch' : 'down-copper'
    });
  };

  chooseArrow = (arrowStyle) => <Arrow arrowStyle={arrowStyle} />;

  render() {
    const {
      product: { name, details }
    } = this.props;
    const { isVariationPositive, arrowStyle } = this.state;

    return (
      <div className="product-container">
        <div className="product-information">
          <span className="product-name">
            <span className="liqid">liqid </span>
            {name}
          </span>
          <Details
            details={details}
            arrow={this.chooseArrow(arrowStyle)}
            colorName={isVariationPositive ? 'finch' : 'copper'}
          />
        </div>
        <ExploreButton />
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    details: PropTypes.shape({
      value: PropTypes.string,
      currency: PropTypes.string,
      variation: PropTypes.number
    })
  }).isRequired
};

export default Product;
