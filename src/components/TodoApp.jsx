import React , { useReducer, useEffect } from 'react'
import { todoReducer } from '../reducers/reducers'
import { TodoList } from './TodoList'
import TodoAdd from './TodoAdd'

const TodoApp = () => {

  const initialState = [
  //   {
  //   id: 1,
  //   description: 'Estudiar',
  //   done: false
  // },
    
]
// Si recargamos la pagina, todos los todos hechos se van a borrar. Para evitar eso, los seteamos en el localStorage. Cada
// vez que se monta el componente, los seteamos mediante useEffect. Pero al montarse nos trae el initialState que está vacio. 
// Para eso usamos la funcion init propia del useReducer, que inicia el estado con lo que le declaremos. Por eso creamos la 
// fx init, que nos trae los items del localStorage parseado y los setea como initialState. Asi persiste la info
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) 
}

  // const [ state, dispatch ] = useReducer( reducer , initialState )
  const [ todos, dispatchTodo ] = useReducer( todoReducer , initialState , init)  

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ) || [] )
  }, [todos])
  

  const handleNewTodo = (todo) => {
    const action = {
      type: 'Add Todo',
      payload: todo
    }
    dispatchTodo(action)
  }
  const handleRemoveTodo = (todo) => {
    console.log('remove funca', todo)
    const action = {
      type: 'Remove Todo',
      payload: todo
    }
    dispatchTodo(action)
  }

  return (
    <>
    <div className='todo'>
      <h1>TodoApp: 10 <small>Pendientes: 2</small></h1>
      <TodoList todos={todos} onRemoveTodo={(todo)=>handleRemoveTodo(todo)}/>
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