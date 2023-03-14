import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
 const [todos, setTodos] = useState([]);
 const [editingIndex, setEditingIndex] = useState(-1);

 const addTodo = (newTodo) => {
 setTodos([...todos, newTodo]);
 };

 const deleteTodo = (index) => {
 setTodos(todos.filter((_, i) => i !== index));
 };

 const editTodo = (index, newValue) => {
 setTodos(todos.map((todo, i) => (i === index ? newValue : todo)));
 setEditingIndex(-1);
 };

 return (
 <div className='App'>
 <h1>Todo List</h1>
 <TodoForm addTodo={addTodo} editTodo={editTodo} editingIndex={editingIndex} todos={todos} />
 <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={(index) => setEditingIndex(index)} />
 </div>
 );
}

export default App;