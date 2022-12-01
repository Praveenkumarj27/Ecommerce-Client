import {
  GET_ORDERED_FAIL,
  GET_ORDERED_REQUEST,
  GET_ORDERED_SUCCESS,
  UPDATE_PROFILE,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../Constants/UserConstants";

// REGISTER
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// LOGIN
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_PROFILE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          user: {
            ...state.userInfo.user,
            name: action.payload.name,
            email: action.payload.email,
          },
        },
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// GET ORDERED YOUR PROFILE
export const getOrderedReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ORDERED_REQUEST:
      return { loading: true };
    case GET_ORDERED_SUCCESS:
      return { loading: false, ordered: action.payload.data };
    case GET_ORDERED_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
