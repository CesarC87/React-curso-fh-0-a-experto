import React, { useReducer, useEffect } from "react";
import { todoReducer } from "../reducers/reducers";

const useTodos = () => {
  // Si recargamos la pagina, todos los to-dos hechos se van a borrar. Para evitar eso, los seteamos en el localStorage. Cada
  // vez que se monta el componente, los seteamos mediante useEffect. Pero al montarse nos trae el initialState que está vacio.
  // Para eso usamos la funcion init propia del useReducer, que inicia el estado con lo que le declaremos. Por eso creamos la
  // fx init, que nos trae los items del localStorage parseado y los setea como initialState. Asi persiste la info
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  // const [ state, dispatch ] = useReducer( reducer , initialState )  --> Estructura del useReducer
  const [todos, dispatchTodo] = useReducer( todoReducer, [], init );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };
    dispatchTodo(action);
  };
  const handleRemoveTodo = (todo) => {
    console.log("remove funca", todo);
    const action = {
      type: "Remove Todo",
      payload: todo,
    };
    dispatchTodo(action);
  };

  const handleOntoggleTodo = (id) => {
    const action = {
      type: "Toggle Todo",
      payload: id,
    };
    dispatchTodo(action);
  };

  const todosCount = todos.length
  const todosLeft = todos.filter(todo=>!todo.done).length

  return {
    handleNewTodo,
    handleRemoveTodo,
    handleOntoggleTodo,
    todos,
    todosCount,
    todosLeft
  };
};

export default useTodos;
