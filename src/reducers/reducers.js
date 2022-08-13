




export const todoReducer = ( initialState, action ) => {
    switch (action.type) {
        case 'Add Todo':
            console.log(action.payload)
            return [ ...initialState, action.payload ]            
        case 'Remove Todo':            
            return initialState.filter( todo => todo.id !== action.payload.id )                 
        default:
            return initialState;
    }
}
