import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

const initionalState = {};

const middleware =[thunk];

const store = createStore(
    reducer, 
    initionalState,
    compose(
        applyMiddleware(...middleware)
    )   
);

export default store;