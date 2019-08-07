import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Product.scss';

class Product extends PureComponent {
  render() {

    const { product, onClick, addToCartClick } = this.props;

    return (

      <div className="product-item" onClick={() => onClick(product)}>
        <div className="product discount product_filter">
          <div className="product_image">
            <img src={product.image} alt="1" />
          </div>
          <div className="favorite favorite_left"></div>
          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
          <div className="product_info">
            <h6 className="product_name"><a href="single.html">{product.name}</a></h6>
            <div className="product_price">${product.salePrice}<span>${product.original}</span></div>
          </div>
        </div>
        <div onClick={(e) => addToCartClick(e, product)} className="red_button add_to_cart_button"><a>add to cart</a></div>
      </div>

    );
  }
}

Product.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
  addToCartClick: PropTypes.func
};

Product.defaultProps = {
  product: {},
  onClick: null,
  addToCartClick: null
}

export default Product;