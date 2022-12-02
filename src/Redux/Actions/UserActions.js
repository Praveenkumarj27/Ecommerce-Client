import { toast } from "react-toastify";
import * as AuthApi from "../../api/AuthRequest";
import * as UsersApi from "../../api/UsersRequest";
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
export const register = (dataForm, navigate) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    const { data } = await AuthApi.register(dataForm);

    if (data.error) {
      toast.warning(data.error);
    } else {
      navigate("/login", { replace: true });
      toast.success(data.msg);
    }

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// LOGIN
export const login = (logData, navigate) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    const { data } = await AuthApi.login(logData);
    if (data.error) {
      toast.warning(data.error);
    } else {
      navigate("/", { replace: true });
      document.location.href = "/";
      toast.success(data.msg);
    }

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.setItem("role", data.user.role);

  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// UPDATE PROFILE
export const updateProfile =
  (name, email, confirm, password, myEmail, navigate) => async (dispatch) => {
    const { data } = await UsersApi.updateProfile({
      name,
      email,
      password,
      confirm,
      myEmail,
    });
    if (data.error) {
      toast.warning(data.error);
    } else {
      toast.success(data.msg);
      navigate("/", { replace: true });
      dispatch({ type: UPDATE_PROFILE, payload: { name, email } });
    }
  };

// GET ORDERED
export const getOrdered = () => async (dispatch) => {
  dispatch({ type: GET_ORDERED_REQUEST });
  try {
    const { data } = await UsersApi.getOrderedApi();

    dispatch({ type: GET_ORDERED_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ORDERED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// LOGOUT
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("role");
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/login";
  toast.error("Be healthy until you see !");
};
