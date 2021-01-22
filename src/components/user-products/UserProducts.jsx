import React from 'react';
import Product from './product/Product';
import SortingButton from './sorting-button/SortingButton';
import {
  USER_PRODUCTS,
  SORTING_OPTIONS_KEYS,
  SORTING_OPTIONS
} from '../../data';
import './UserProducts.scss';

class UserProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSort: '',
      title: USER_PRODUCTS.title,
      productsData: USER_PRODUCTS.products.slice()
    };
  }

  sortByLowest = (products) =>
    products.sort(
      (a, b) => parseFloat(a.details.value) - parseFloat(b.details.value)
    );

  sortByHighest = (products) =>
    products.sort(
      (a, b) => parseFloat(b.details.value) - parseFloat(a.details.value)
    );

  handleSort = (sortBy = '') => {
    const { productsData } = this.state;
    let sortedProducts = productsData;

    switch (sortBy) {
      case 'highest':
        sortedProducts = this.sortByHighest(productsData);
        break;

      case 'lowest':
        sortedProducts = this.sortByLowest(productsData);
        break;

      default:
        sortedProducts = USER_PRODUCTS.products.slice();
        break;
    }

    this.setState({
      currentSort: sortBy,
      productsData: sortedProducts
    });
  };

  render() {
    const { productsData, title, currentSort } = this.state;

    return (
      <div className="user-products-container">
        <span className="user-products-title">{title}</span>
        <div className="sort-section">
          <span className="sort-title">Sort:</span>
          <div className="sorting-buttons">
            {SORTING_OPTIONS_KEYS.map((option) => (
              <SortingButton
                key={`sorting-button-${SORTING_OPTIONS[option].text}`}
                text={SORTING_OPTIONS[option].text}
                onClick={this.handleSort}
                isActive={SORTING_OPTIONS[option].sortBy === currentSort}
                sortBy={SORTING_OPTIONS[option].sortBy}
              />
            ))}
          </div>
        </div>
        <div className="user-products">
          {productsData.map((product) => (
            <Product
              product={product}
              key={`product${product.name}`}
              isVariationPositive={product.details.variation > 0}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default UserProducts;
