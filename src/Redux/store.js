import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "../Redux/Reducers/index";

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools;

const initialState = {
  // users: getUsersInfoFromLocalStorage,
  userLogin: { userInfo: userInfoFromLocalStorage },
  // posts: getPostsInfoFromLocalStorage
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
