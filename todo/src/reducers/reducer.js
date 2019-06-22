import { ADD_TODO, TOGGLE_TODO } from '../actions/index'

const initialState = {
  debug: 'debugging',
}

function reducer(state = initialState, action){
  switch(action.type) {
    //in this case, we use the spread operator to grab everything currently on state and append a new todo onto it
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.text]
    }
      //in this case, we use the id of a given todo and toggle its completed property on state
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
      default:
        return state
  }
}

export default reducer;