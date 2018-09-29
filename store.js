import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { api } from './middlewares/api'
import reducers from './reducers';

export function initializeStore (initialState = {}) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(api)))
}
