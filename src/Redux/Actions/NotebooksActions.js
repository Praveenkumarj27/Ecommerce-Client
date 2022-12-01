import { toast } from "react-toastify";
import * as NotebookApi from "../../api/NotebooksRequests";
import {
  NOTEBOOK_EDIT,
  NOTEBOOK_GET_ALL_FAIL,
  NOTEBOOK_GET_ALL_REQUEST,
  NOTEBOOK_GET_ALL_SUCCESS,
  NOTEBOOK_GET_ONE_SUCCESS,
  NOTEBOOK_REMOVE,
} from "../Constants/NotebooksConstants";

// GET ALL NOTEBOOKS
export const getAllNotebooks =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    dispatch({ type: NOTEBOOK_GET_ALL_REQUEST });
    try {
      const { data } = await NotebookApi.getNotebooksApi(keyword, pageNumber);

      dispatch({ type: NOTEBOOK_GET_ALL_SUCCESS, payload: data });
      localStorage.setItem("notebooks", JSON.stringify(data.notebooks));
    } catch (error) {
      dispatch({
        type: NOTEBOOK_GET_ALL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// ADD NOTEBOOK
export const addNotebook =
  (title, price, descr, img, phone, navigate) => async () => {
    const { data } = await NotebookApi.addNotebookApi({
      title,
      price,
      descr,
      img,
      phone,
    });

    if (data.error) {
      toast.warning(data.error);
    } else {
      navigate("/", { replace: true });
      toast.success(data.msg);
    }
  };

// EDIT NOTEBOOK
export const editNotebook =
  (title, price, descr, img, phone, id, setShowEditModal) =>
  async (dispatch) => {
    const { data } = await NotebookApi.aditNotebookApi({
      title,
      price,
      descr,
      img,
      phone,
      id,
    });
    if (data.error) {
      toast.warning(data.error);
    } else {
      setShowEditModal(false);
      dispatch({
        type: NOTEBOOK_EDIT,
        payload: { notebook: data.notebook, id },
      });
      toast.success(data.msg);
    }
  };

// REMOVE NOTEBOOK
export const removeNotebook = (id, setShowEditModal) => async (dispatch) => {
  const { data } = await NotebookApi.removeNotebookApi(id);
  if (data.error) {
    toast.warning(data.error);
  } else {
    setShowEditModal(false);
    dispatch({ type: NOTEBOOK_REMOVE, payload: id });
    toast.error(data.msg);
  }
};

// NOTEBOOK DETAIL
export const notebookDetail = (id) => async (dispatch) => {
  const { data } = await NotebookApi.getNotebookApi(id);

  dispatch({ type: NOTEBOOK_GET_ONE_SUCCESS, payload: data.notebook });
};
