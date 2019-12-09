import { applyMiddleware, createStore } from "redux";
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, promise)(createStore)(rootReducer, devTools)

export default store;