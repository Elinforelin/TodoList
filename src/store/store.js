import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReduser, initialState } from './todoReduser';

const persistedState = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state'))
  : initialState


export const store = createStore(todoReduser, persistedState, composeWithDevTools(applyMiddleware()))

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()))
})
