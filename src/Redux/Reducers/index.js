import { combineReducers } from "redux";
import { getAllCardsReducers } from "./CardsReducers";
import {
  getAllNotebooksReducers,
  getOneNotebookReducers,
} from "./NotebooksReducers";
import { getOrdersReducers } from "./OrdersReducers";
import {
  getOrderedReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./UserReducers";

export const reducers = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  notebooks: getAllNotebooksReducers,
  notebook: getOneNotebookReducers,
  cards: getAllCardsReducers,
  orders: getOrdersReducers,
  ordered: getOrderedReducer,
});
