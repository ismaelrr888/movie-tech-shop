import {
  LOADING_MOVIES_ADD_TO_CART,
  GET_ERRORS,
  MOVIES_ADD_TO_CART
} from "../actions/types";
import axios from "../../axios";

export const setAddMoviesLoading = () => {
  return {
    type: LOADING_MOVIES_ADD_TO_CART
  };
};

export const addMovieToCart = data => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(setAddMoviesLoading());
    axios
      .post("/carts", data)
      .then(res => {
        dispatch({
          type: MOVIES_ADD_TO_CART,
          payload: res.data
        });
        resolve(res.data);
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
        reject(err.response.data);
      });
  });
