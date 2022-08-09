import { useForm } from "../hooks/useForm"

const TodoAdd = ( { onNewTodo } ) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: ''
    })

    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if(description.length <= 1) return;

        const newTodo = {                   // Objeto que vamos a submitear
            id: new Date().getTime(),
            done: false,
            description: description
        }
        onNewTodo && onNewTodo(newTodo);
        onResetForm();
    }

  return (
    <>
    <form onSubmit={ onFormSubmit }>
        <input 
        type="text" 
        placeholder='¿que hay que hacer?' 
        name='description'
        value={ description }
        onChange={ onInputChange }
        />
        <button type="submit"> Agregar </button>
      </form>
    </>
  )
}

export default TodoAdd