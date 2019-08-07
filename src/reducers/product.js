import { actionType } from '../actions/actionType';

const initialState = {
  current: {},
  list: [],
  loading: false,
  error: null
}


const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_PRODUCT_LIST: {
      return { ...state, loading: true };
    }

    case actionType.FETCH_PRODUCT_LIST_SUCCESS: {
      return { ...state, loading: false, list: action.payload };
    }

    case actionType.FETCH_PRODUCT_LIST_FAILED: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
}

export default productReducer;