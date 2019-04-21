import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import 'bootstrap/dist/css/bootstrap-grid.min.css';

import store from './store';
import 'normalize.css';
import './index.css';
import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
