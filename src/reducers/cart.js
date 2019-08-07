import { actionType } from '../actions/actionType';

const initialState = {
  cartItemList: [],
  total: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART: {
      let product = action.payload;
      const cartItemList = [...state.cartItemList];
      let itemIdx = cartItemList.findIndex(item => item.id === product.id);
      if (itemIdx >= 0) {
        cartItemList[itemIdx] = {
          ...cartItemList[itemIdx],
          quantity: cartItemList[itemIdx].quantity + 1
        }
      }
      else {
        const cartItem = {
          product,
          id: product.id,
          quantity: 1
        }
        cartItemList.push(cartItem);
      }
      let total = state.total;
      total = total + product.salePrice;

      return { ...state, cartItemList: cartItemList, total }
    };
    case actionType.REMOVE_FROM_CART: {
      // get product / cartItemList
      // find IDX
      // remove
      // update total
      const product = action.payload;
      const cartItemList = [...state.cartItemList];
      const itemIdx = cartItemList.findIndex(i => i.id === product.id);
      let total = state.total;
      total = total - (cartItemList[itemIdx].product.salePrice * cartItemList[itemIdx].quantity);
      cartItemList.splice(itemIdx, 1);

      return { ...state, total, cartItemList };
    }
    case actionType.REMOVE_ONE_ITEM_FROM_CART: {

      // find idx 
      //remove 1 quantity
      //update total

      const product = action.payload;
      const cartItemList = [...state.cartItemList];
      const itemIdx = cartItemList.findIndex(i => i.id === product.id);
      let total = state.total;
      cartItemList[itemIdx] = {
        ...cartItemList[itemIdx],
        quantity: cartItemList[itemIdx].quantity - 1
      };

      total = total - product.product.salePrice;

      return { ...state, cartItemList, total };
    }

    default: return state;
  }
}

export default cartReducer;