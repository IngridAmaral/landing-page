import React from 'react';
import Product from './product/Product';
import SortingButton from './sorting-button/SortingButton';
import './UserProducts.scss';

export const USER_PRODUCTS = {
  title: 'Your Products',
  products: [
    {
      name: 'Wealth',
      details: { value: '500.000', currency: '€', variation: 25.3 }
    },
    {
      name: 'Cash',
      details: { value: '260.000', currency: '€', variation: 15.3 }
    },
    {
      name: 'Venture',
      details: { value: '928.000', currency: '€', variation: -0.13 }
    },
    {
      name: 'PE',
      details: { value: '850.000', currency: '€', variation: 50.8 }
    },
    {
      name: 'RE',
      details: { value: '799.000', currency: '€', variation: 25.6 }
    }
  ]
};

export const SORTING_BUTTONS = [
  { text: 'highest values first', sortBy: 'highest' },
  { text: 'highest values last', sortBy: 'lowest' }
];

class UserProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHighestValueFirst: false,
      title: USER_PRODUCTS.title,
      productsData: USER_PRODUCTS.products
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

  handleSort = (sortBy) => {
    const { productsData } = this.state;
    let sortedProducts = productsData;
    let sortByHighest = false;

    switch (sortBy) {
      case 'highest':
        sortedProducts = this.sortByHighest(productsData);
        sortByHighest = true;
        break;

      case 'lowest':
        sortedProducts = this.sortByLowest(productsData);
        sortByHighest = false;
        break;

      default:
        sortedProducts = productsData;
        sortByHighest = false;
        break;
    }

    this.setState({
      isHighestValueFirst: sortByHighest,
      productsData: sortedProducts
    });
  };

  render() {
    const { productsData, isHighestValueFirst, title } = this.state;

    return (
      <div className="user-products-container">
        <span className="user-products-title">{title}</span>
        <div className="sort-section">
          <span className="sort-title">Sort:</span>
          <div className="sorting-buttons">
            {SORTING_BUTTONS.map(({ text, sortBy }) => (
              <SortingButton
                key={`sorting-button-${text}`}
                text={text}
                onClick={this.handleSort}
                isActive={
                  sortBy === 'lowest'
                    ? !isHighestValueFirst
                    : isHighestValueFirst
                }
                sortBy={sortBy}
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
