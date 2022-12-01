import {
  ORDERS_GET_ALL_FAIL,
  ORDERS_GET_ALL_REQUEST,
  ORDERS_GET_ALL_SUCCESS,
} from "../Constants/OrdersConstants";

export const getOrdersReducers = (state = {}, action) => {
  switch (action.type) {
    case ORDERS_GET_ALL_REQUEST:
      return { loading: true };
    case ORDERS_GET_ALL_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDERS_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
