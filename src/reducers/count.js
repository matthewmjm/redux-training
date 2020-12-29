export function count(state=0, action) {
    switch(action.type) {
        case "ADD_TODO":
            return state + 1
        case "INCREMENT":
            return state + 1
        default:
            return state
    }
}
