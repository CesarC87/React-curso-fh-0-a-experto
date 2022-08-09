import { TodoItem } from "./TodoItem"


export const TodoList = ( { todos = [] }) => {
    console.log(todos)
    return (
        <ul>
            {
                todos.map( todo => {
                    return <TodoItem key={todo.id} todo={todo}/>
                  })
            }
        </ul>
    )
}