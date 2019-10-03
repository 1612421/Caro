import { createStore } from 'redux';
import GameReducer  from './reducers/GameReducer';

const Store = createStore(GameReducer);

export default Store;