import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItemList/CartItem';

class CartItemList extends PureComponent {
  render() {
    const { cartItemList } = this.props;
    return (
      <div className="list-item">
        {
          cartItemList.map(i => {
            return <CartItem product={i} key={i.id} />
          })
        }
      </div>
    );
  }
}

CartItemList.propTypes = {
  cartListItem: PropTypes.array
};
CartItemList.defaultProps = {
  cartListItem: []
}

export default CartItemList;