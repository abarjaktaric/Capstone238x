import { combineReducers } from "redux";

import fetchDataReducer from './fetchDataReducer';
import cartReducer from "./cartReducer";

const reducer = combineReducers({
  data: fetchDataReducer,
  cart: cartReducer
})
  
export default reducer;