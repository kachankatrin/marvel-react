import {combineReducers, createStore} from 'redux';
import {character} from './characterReducer';
export const reducers = combineReducers({characters: character});

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({trace: true}));
