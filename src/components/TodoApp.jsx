import React , { useReducer } from 'react'
import { todoReducer } from '../reducers/reducers'
import { TodoList } from './TodoList'
import TodoAdd from './TodoAdd'

const TodoApp = () => {

  const initialState = [
    {
    id: 1,
    description: 'Estudiar',
    done: false
  },
    {
    id: 3,
    description: 'Dormir',
    done: false
  },
]

  // const [ state, dispatch ] = useReducer( reducer , initialState )
  const [ todos, dispatchTodo ] = useReducer( todoReducer , initialState )  

  const handleNewTodo = (todo) => {
    const action = {
      type: 'Add Todo',
      payload: todo
    }
    dispatchTodo(action)
  }

  return (
    <>
    <div className='todo'>
      <h1>TodoApp: 10 <small>Pendientes: 2</small></h1>
      <TodoList todos={todos}/>
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