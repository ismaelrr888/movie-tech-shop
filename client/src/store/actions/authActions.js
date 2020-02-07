import axios from "../../axios";

import { GET_ERRORS, GET_SUCCESS } from "./types";

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/users/register", userData)
    .then(res => {
      dispatch({
        type: GET_SUCCESS,
        payload: res.data
      });
      history.push("/login");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
