export function addTodo(todo, dispatch) {
    dispatch({type: "ADD_TODO", payload: todo})
}