import axios from "../../axios";
import { LOADING_MOVIES, GET_MOVIES } from "./types";

export const setMoviesLoading = () => {
  return {
    type: LOADING_MOVIES
  };
};

export const getMovies = data => dispatch => {
  dispatch(setMoviesLoading());
  axios
    .get(
      `/movies/searchby?search=${data.search}&sortBy=${data.sortBy}&resPerPage=${data.resPerPage}`
    )
    .then(res =>
      dispatch({
        type: GET_MOVIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MOVIES,
        payload: null
      })
    );
};
