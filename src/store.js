import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import GameReducer  from './reducers/GameReducer';
import UserReducer from './reducers/UserReducer';

// eslint-disable-next-line import/imports-first
import 'babel-polyfill';

const Store = createStore(
    combineReducers({ 
        GameReducer, 
        UserReducer 
    }),
    compose(applyMiddleware(logger, thunk))
);

export default Store;