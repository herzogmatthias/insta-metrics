import { applyMiddleware, createStore } from "redux";

import {rootReducer} from './reducer/index'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(thunk, logger, promise)

export default createStore(rootReducer, middleware)