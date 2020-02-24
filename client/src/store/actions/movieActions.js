import axios from "../../axios";
import { LOADING_MOVIES, GET_MOVIES, GET_ALL_MOVIES } from "./types";

export const setMoviesLoading = () => {
  return {
    type: LOADING_MOVIES
  };
};

export const getMovies = data => dispatch => {
  dispatch(setMoviesLoading());
  axios
    .get(
      `/movies/searchby?search=${data.search}&sortBy=${data.sortBy}&resPerPage=${data.resPerPage}&page=${data.page}`
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

export const getAllMovies = () => dispatch => {
  axios.get("/movies/all").then(res =>
    dispatch({
      type: GET_ALL_MOVIES,
      payload: res.data
    })
  );
};
