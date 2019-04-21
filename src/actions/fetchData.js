import { FETCH_DATA, FETCH_ITEMS } from "./actionTypes";
import axios from 'axios';

export const fetchData = () =>  dispatch =>  {  

    axios.get('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json')
   
    .then( res =>
      dispatch({
        type: FETCH_DATA,
        payload: res.data
      })
    )
    .then( data  => 
      dispatch({
        type: FETCH_ITEMS,
        payload: data.payload[0].subcategories[0]
      }));
};