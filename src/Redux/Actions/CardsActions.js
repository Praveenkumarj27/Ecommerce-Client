import { toast } from "react-toastify";
import * as CardsApi from "../../api/CardRequest";
import {
  CARD_GET_ALL_FAIL,
  CARD_GET_ALL_REQUEST,
  CARD_GET_ALL_SUCCESS,
  CHANGE_CARD,
} from "../Constants/CardsConstants";

// GET ALL CARDS
export const getCards = () => async (dispatch) => {
  dispatch({ type: CARD_GET_ALL_REQUEST });
  try {
    const { data } = await CardsApi.getCardsApi();
    dispatch({ type: CARD_GET_ALL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CARD_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// BUY NOTEBOOK
export const addCard = (id, navigate) => async () => {
  const { data } = await CardsApi.addCardApi(id);
  if (data.msg) {
    toast.success(data.msg);
    navigate("/card", { replace: true });
  } else {
    toast.warning(data.error);
  }
};

// PLUS ITEM
export const plusItem = (id) => async (dispatch) => {
  const { data } = await CardsApi.plusCardApi(id);
  if (data.msg) {
    dispatch({ type: CHANGE_CARD, payload: data.cart });
    toast.success(data.msg);
  }
};

// MINUS ITEM
export const minusItem = (id) => async (dispatch) => {
  const { data } = await CardsApi.minusCardApi(id);
  if (data.msg) {
    dispatch({ type: CHANGE_CARD, payload: data.cart });
    toast.error(data.msg);
  }
};

// REMOVE ITEM
export const removeItem = (id) => async (dispatch) => {
  const { data } = await CardsApi.removeCardApi(id);
  if (data.msg) {
    dispatch({ type: CHANGE_CARD, payload: data.cart });
    toast.error(data.msg);
  }
};
