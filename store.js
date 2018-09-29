import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { api } from './middlewares/api'
import reducers from './reducers';


const exampleInitialState = {

};

export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(api)))
}
