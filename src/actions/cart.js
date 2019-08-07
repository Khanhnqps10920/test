import { actionType } from './actionType';

export const addToCart = (product) => {
  return {
    type: actionType.ADD_TO_CART,
    payload: product
  }
}

export const removeFromCart = (product) => {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: product
  }
}

export const removeOneItemFromCart = (product) => {
  return {
    type: actionType.REMOVE_ONE_ITEM_FROM_CART,
    payload: product
  }
}