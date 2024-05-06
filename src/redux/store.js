// store.js
import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';

const initialState = { count: 0 }; // Initial state here

const store = createStore(counterReducer, initialState);

export default store;
