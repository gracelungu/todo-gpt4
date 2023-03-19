import React, { useState, useEffect } from 'react';
import { capitalize } from '../helpers';

function TodoForm({ addTodo, editTodo, editingIndex, todos }) {
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    if (isEditing) {
      editTodo(editingIndex, inputValue);
      setIsEditing(false);
    } else {
      addTodo(inputValue);
    }
    setInputValue('');
  };

  useEffect(() => {
    if (editingIndex !== -1) {
      setInputValue(todos[editingIndex]);
      setIsEditing(true);
    }
  }, [editingIndex, todos]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(capitalize(e.target.value))}
        placeholder='Add new todo'
      />
      <button type='submit'>{isEditing ? 'Edit' : 'Add'} Todo</button>
    </form>
  );
}

export default TodoForm;
