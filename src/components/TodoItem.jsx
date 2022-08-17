

export const TodoItem = ( { todo , onToggleTodo } ) => {
    return (
        <li>
            <span style={{textDecoration: todo.done && "line-through"}}
            onClick={ () => onToggleTodo(todo.id)}>{todo.description}</span>            
        </li>
    )
}