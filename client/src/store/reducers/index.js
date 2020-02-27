import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import successReducer from "./successReducer";
import movieReducer from "./movieReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  auth: authReducer,
  success: successReducer,
  errors: errorReducer,
  movies: movieReducer,
  cart: cartReducer
});
