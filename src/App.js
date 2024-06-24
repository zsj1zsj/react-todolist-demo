import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import NewButton from './components/NewButton';
import SortLink from './components/SortLink';

function App() {
  return (

    <div>
      <h3>React Redux Todo App</h3>
      <NewButton />
      <SortLink />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;