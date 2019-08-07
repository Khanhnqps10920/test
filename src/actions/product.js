import { actionType } from './actionType'
import Axios from 'axios';

export const getProductList = () => {
  return async (dispatch) => {
    try {
      //START FETCHING
      dispatch({ type: actionType.FETCH_PRODUCT_LIST });
      const productList = await Axios.get("http://api.demo.nordiccoder.com/api/products");
      const { data } = productList;
      //fetching success 
      dispatch({
        type: actionType.FETCH_PRODUCT_LIST_SUCCESS,
        payload: data.body
      });

    } catch (e) {

      dispatch({
        type: actionType.FETCH_PRODUCT_LIST_FAILED,
        payload: e.message,
      });

    }
  };
};