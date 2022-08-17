import { TodoItem } from "./TodoItem"


export const TodoList = ( { todos = [] , onRemoveTodo, onToggleTodo }) => {
    
    console.log(todos)
    
    return (
        <ul>
            {
                todos?.map( todo => {
                    console.log('todo desde map todoList', todo)
                    return (
                        <>
                            <TodoItem key={todo.id} todo={todo} onToggleTodo={ onToggleTodo }/> 
                            <button onClick={ () => onRemoveTodo(todo) }>Borrar</button>                        
                        </>
                    )
                                
                        
                  })
            }
        </ul>
    )
}