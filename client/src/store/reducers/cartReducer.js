import {
  LOADING_MOVIES_ADD_TO_CART,
  MOVIES_ADD_TO_CART
} from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_MOVIES_ADD_TO_CART:
      return {
        ...state,
        loading: true
      };
    case MOVIES_ADD_TO_CART:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
