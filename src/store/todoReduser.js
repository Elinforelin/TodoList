import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO, UPDATE_TODO } from './actionTypes'

export const initialState = {
  todoList: [],
};

export const todoReduser = (state = initialState, action) => {
  const newArray = [...state.todoList]

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state, todoList: [...state.todoList, action.payload]
      }
    case TOGGLE_TODO:
      newArray.forEach((item) => {
        if (item.id === action.id) {
          item.done = !item.done
        }
        return item
      })
      return { ...state, todoList: newArray }
    case DELETE_TODO:
      return { ...state, todoList: state.todoList.filter((item) => item.id !== action.id) }
    case EDIT_TODO:
      newArray.forEach((item) => {
        if (item.id === action.id) {
          item.text = action.text
          return item.isEditing = !item.isEditing
        }
        return item.isEditing = false
      })
      return { ...state, todoList: newArray }
    case UPDATE_TODO:
      newArray.forEach((item) => {
        if (item.id === action.id) {
          item.text = action.text
          return item.isEditing = !item.isEditing
        }
        return item
      })
      return { ...state, todoList: newArray }
    default:
      return state
  }
};

