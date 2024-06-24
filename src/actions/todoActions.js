export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SORT_TODO = 'SORT_TODO';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const sortTodo = () =>({
  type: SORT_TODO,
  payload: {}
})