import React , { useReducer, useEffect } from 'react'
import { TodoList } from './TodoList'
import TodoAdd from './TodoAdd'
import useTodos from '../hooks/useTodos'
import NavBar from './NavBar'

const TodoApp = () => {    
  
  const { todos, todosCount, todosLeft, handleNewTodo, handleOntoggleTodo, handleRemoveTodo } = useTodos(); 

  return (
    <>
    <NavBar />
    <div className='todo'>
      <h1>TodoApp: {todosCount} <small>Pendientes: {todosLeft}</small></h1>
      <TodoList todos={todos} onRemoveTodo={(todo)=>handleRemoveTodo(todo)} onToggleTodo={handleOntoggleTodo}/>
    </div>    
    <div className="agregarTodo">
      <h4>Agregar Todo</h4>
      <hr />
      <TodoAdd onNewTodo={ (todo) => handleNewTodo(todo) }/>
    </div>
    </>
  )
}

export default TodoApp