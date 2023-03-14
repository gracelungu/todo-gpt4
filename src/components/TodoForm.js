import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) {
      return;
    }

    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
