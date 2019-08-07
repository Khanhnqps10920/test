import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';

class ProductList extends PureComponent {
  render() {

    const { productList, onProductClick, onAddToCartClick } = this.props

    return (
      <div className="row">
        {productList.map((p, index) => {
          return <Product key={p.id + index} product={p} onClick={onProductClick} addToCartClick={onAddToCartClick} />
        })}
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
  onProductClick: PropTypes.func,
  onAddToCartClick: PropTypes.func
};

ProductList.defaultProps = {
  onProductClick: null,
  onAddToCartClick: null
}

export default ProductList;