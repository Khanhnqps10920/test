import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './CartPage.scss'
import CartItemList from '../../components/CartItem/CartItemList';

class CartPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    // const { cartItems } = this.state;
    const { cartItemList, total } = this.props;
    console.log(cartItemList)
    let cart;

    if (cartItemList.length < 1) {
      cart = (
        <div className="cart">
          <div className="cart__img">
            <img src="/images/empty_cart.png" alt="" />
          </div>
        </div>
      );
    }
    else {
      cart = (
        <div className="cart cart-item">
          <div className="cart-justify-space-between">
            <div className="cart__backToShop">
              <h3>
                <Link to="/shop">BACK TO SHOP</Link>
              </h3>
            </div>
            <div className="cart__total">
              <h3>Total: {total}</h3>
            </div>
          </div>

          <CartItemList cartItemList={cartItemList} />
        </div>
      );
    }

    return (
      <div>
        {cart}
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    cartItemList: state.cart.cartItemList,
    total: state.cart.total
  }
};

CartPage.propTypes = {
  cartItemList: PropTypes.array,
  total: PropTypes.number
};

CartPage.defaultProps = {
  total: 0,
  cartItemList: []
}

export default connect(mapStateToProps)(CartPage);