import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO, UPDATE_TODO } from './actionTypes'

export const createTodoAction = (text, id) => ({
  type: ADD_TODO,
  payload: { id, text, done: false, isEditing: false }
})
export const toggleTodoAction = (id) => ({
  type: TOGGLE_TODO,
  id
})
export const deleteTodoAction = (id) => ({
  type: DELETE_TODO,
  id
})
export const editTodoAction = (text, id) => ({
  type: EDIT_TODO,
  id,
  text
})
export const updateTodoAction = (text, id) => ({
  type: UPDATE_TODO,
  id,
  text
})