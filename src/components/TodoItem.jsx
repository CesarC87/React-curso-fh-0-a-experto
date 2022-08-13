

export const TodoItem = ( { todo , onToggleTodo } ) => {
    return (
        <li>
            <span onClick={ () => onToggleTodo(todo.id)}>{todo.description}</span>            
        </li>
    )
}