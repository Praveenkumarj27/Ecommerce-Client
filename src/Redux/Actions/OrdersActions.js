import {
  ORDERS_GET_ALL_FAIL,
  ORDERS_GET_ALL_REQUEST,
  ORDERS_GET_ALL_SUCCESS,
} from "../Constants/OrdersConstants";
import * as OrdersApi from "../../api/OrderRequest";
import { toast } from "react-toastify";

// GET ORDERS
export const getOrders = () => async (dispatch) => {
  dispatch({ type: ORDERS_GET_ALL_REQUEST });
  try {
    const { data } = await OrdersApi.getOrdersApi();
    dispatch({ type: ORDERS_GET_ALL_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: ORDERS_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ORDER POST
export const postOrders = (navigate) => async () => {
  const { data } = await OrdersApi.postOrdersApi();
  if (data.msg) {
    toast.success(data.msg);
    navigate("/orders", { replace: true });
  }
};
