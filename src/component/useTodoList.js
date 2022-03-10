import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodoAction,
  deleteTodoAction,
  editTodoAction,
  updateTodoAction,
  toggleTodoAction,
} from "../store/actions";


export const useTodoList = () => {
  const [todoText, setTodoText] = useState("");
  const [editTodoItem, setEditTodoItem] = useState(null);
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);

  const getInputValue = (event) => {
    setTodoText(event.target.value);
  };

  const addTodo = () => {
    if (todoText !== "") {
      dispatch(createTodoAction(todoText, todoList.length + 1));
      setTodoText("");
    }
  };

  const toggleTodo = (id) => {
    dispatch(toggleTodoAction(id));
  };

  const deleteTodo = (event, id) => {
    event.stopPropagation();
    dispatch(deleteTodoAction(id));
    setTodoText("");
    setEditTodoItem(null);
  };
  const editTodo = (event, id) => {
    event.stopPropagation();
    const editingTodo = todoList.find((item) =>
      item.id === id ? true : false
    );
    setEditTodoItem(editingTodo);
    setTodoText(editingTodo.text);
    dispatch(editTodoAction(editingTodo.text, id));
  };

  const updateTodo = (event, text, id) => {
    event.stopPropagation();
    dispatch(updateTodoAction(text, id));
    setTodoText("");
    setEditTodoItem(null);
  };
  return {
    todoText,
    editTodoItem,
    todoList,
    getInputValue,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    updateTodo
  }
}