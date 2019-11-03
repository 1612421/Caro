import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import GameReducer  from './reducers/GameReducer';
import UserReducer from './reducers/UserReducer';
import ChatReducer from './reducers/ChatReducer';
import SocketReducer from './reducers/SocketReducer';

// eslint-disable-next-line import/imports-first
import 'babel-polyfill';

const Store = createStore(
    combineReducers({ 
        GameReducer, 
        UserReducer,
        ChatReducer,
        SocketReducer
    }),
    applyMiddleware(logger, thunk)
);

export default Store;