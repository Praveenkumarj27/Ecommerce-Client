import {
  CARD_GET_ALL_FAIL,
  CARD_GET_ALL_REQUEST,
  CARD_GET_ALL_SUCCESS,
  CHANGE_CARD,
} from "../Constants/CardsConstants";

// GET ALL CARDS
export const getAllCardsReducers = (state = {}, action) => {
  switch (action.type) {
    case CARD_GET_ALL_REQUEST:
      return { loading: true };
    case CARD_GET_ALL_SUCCESS:
      return { loading: false, cards: action.payload };
    case CHANGE_CARD:
      return { ...state, cards: action.payload };
    case CARD_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return {};
  }
};
