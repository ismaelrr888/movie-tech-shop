import { GET_MOVIES, LOADING_MOVIES } from "../actions/types";

const initialState = {
  movies: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_MOVIES:
      return {
        ...state,
        loading: true
      };
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
