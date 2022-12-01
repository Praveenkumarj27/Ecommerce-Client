import {
  NOTEBOOK_EDIT,
  NOTEBOOK_GET_ALL_FAIL,
  NOTEBOOK_GET_ALL_REQUEST,
  NOTEBOOK_GET_ALL_SUCCESS,
  NOTEBOOK_GET_ONE_SUCCESS,
  NOTEBOOK_REMOVE,
} from "../Constants/NotebooksConstants";

// GET ALL NOTEBOOKS
export const getAllNotebooksReducers = (state = {}, action) => {
  switch (action.type) {
    case NOTEBOOK_GET_ALL_REQUEST:
      return { loading: true };
    case NOTEBOOK_GET_ALL_SUCCESS:
      return {
        loading: false,
        pages: action.payload.pages,
        page: action.payload.page,
        notebooks: action.payload.notebooks,
      };
    case NOTEBOOK_EDIT:
      return {
        ...state,
        notebooks: [
          ...state.notebooks.map((item) => {
            if (item._id === action.payload.id) {
              return { ...action.payload.notebook };
            }
            return item;
          }),
        ],
      };
    case NOTEBOOK_REMOVE:
      return {
        ...state,
        notebooks: [
          ...state.notebooks.filter((item) => item._id !== action.payload),
        ],
      };
    case NOTEBOOK_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// GET ONE NOTEBOOK
export const getOneNotebookReducers = (state = {}, action) => {
  switch (action.type) {
    case NOTEBOOK_GET_ONE_SUCCESS:
      return { notebook: action.payload };
    default:
      return state;
  }
};
