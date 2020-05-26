import { createStore, applyMiddleware } from 'redux'
import user from './components/UserDemo/userReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(user, applyMiddleware(thunk, logger))

export default store
