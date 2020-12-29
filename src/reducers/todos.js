import {ADD_TODO} from '../actions/types';

export function todos(state=[], action) {
    switch(action.type) {
        case ADD_TODO:
        return [...state, action.payload]
        default:
        return state
    }
}
