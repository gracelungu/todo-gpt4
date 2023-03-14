import { useState } from 'react';
import React from 'react';
import { capitalize } from '../helpers';

function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{editIndex === index ? <input type="text" value={editValue} onChange={handleEditChange} /> : capitalize(todo)}</span>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
import { useState } from "react";
const [editIndex, setEditIndex] = useState(-1);
const [editValue, setEditValue] = useState("");
const handleEdit = (index) => { setEditIndex(index); setEditValue(todos[index]); };
const handleEditChange = (event) => { setEditValue(event.target.value); };
const handleEditSubmit = (index) => { todos[index] = editValue; setEditIndex(-1); };
const [editIndex, setEditIndex] = useState(-1);
const [editValue, setEditValue] = useState('');
const handleEdit = (index) => { setEditIndex(index); setEditValue(todos[index]); };
const handleEditChange = (event) => { setEditValue(event.target.value); };
const handleEditSubmit = (index) => { todos[index] = editValue; setEditIndex(-1); };
