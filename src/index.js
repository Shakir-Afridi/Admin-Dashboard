import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('#root'))
