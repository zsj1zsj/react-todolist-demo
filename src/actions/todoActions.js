export const ADD_TODO = 'ADD_TODO';

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const SORT_TODO = 'SORT_TODO';

export const CHANGE_TODO = 'CHANGE_TODO';

export const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT';

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

});

export const changeTodo = (id) =>({

  type: CHANGE_TODO,

  payload:{id}

});

export const updateTodoText = (todoId, text)=>({

  type: UPDATE_TODO_TEXT,

  payload:{todoId, text}

});