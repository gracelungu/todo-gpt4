import React from 'react';
import { capitalize } from '../helpers';

function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{capitalize(todo)}</span>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
