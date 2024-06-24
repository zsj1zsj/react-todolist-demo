import { ADD_TODO, SORT_TODO, TOGGLE_TODO } from '../actions/todoActions';

const initialState = {
  todos: [{id: 1, text: 'b', completed: false}, {id: 2, text: 'a', completed: false},{id: 3, text: 'c', completed: false}],
  sortby: 'a'
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload.text,
            completed: false
          }
        ],
        sortby: state.sortby
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
        sortby:state.sortby
      };
    case SORT_TODO:
      const sortedTodos = [...state.todos].sort((a, b) => {
        const textA = a.text.toLowerCase();
        const textB = b.text.toLowerCase();
        if (state.sortby === 'a') {
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        } else {
          return textA > textB ? -1 : textA < textB ? 1 : 0;
        }
      });
      return {
        ...state,
        todos: sortedTodos,
        sortby: state.sortby === 'a' ? 'd' : 'a'
      };
    default:
      return state;
  }
};

export default todoReducer;