import { GET_SUCCESS, CLEAR_SUCCESS } from "../actions/types";

const initialState = {};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case GET_SUCCESS:
      return actions.payload;
    case CLEAR_SUCCESS:
      return {};
    default:
      return state;
  }
}
