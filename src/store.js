// /shopper/src/store.js

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import { createStore, applyMiddleware, combineReducers } from 'redux'

// Reducers
import shopperReducer from './reducer.js'

//create and combine middleware
const middleware = applyMiddleware(thunk, promise(), logger());

//combine all reducers
const reducers = combineReducers({
	shopperReducer,
});

// Create Store
const store = createStore(reducers, middleware);

export default store;