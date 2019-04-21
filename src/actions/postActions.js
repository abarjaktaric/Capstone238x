import { FETCH_ITEMS } from './actionTypes';

export const fetchItems = (subcategoryItems) => dispatch => {
    dispatch({
        type: FETCH_ITEMS,
        payload: subcategoryItems
    });
}  
