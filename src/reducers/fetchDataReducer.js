import { FETCH_DATA, FETCH_ITEMS } from '../actions/actionTypes';

const initialState = {
  items: [],
  activeItems: {
    name: "",
    items: [],
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_ITEMS:
      return {
        ...state,
        activeItems: action.payload

      };
    default:
      return state;
  }
}