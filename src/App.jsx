import React, { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: "Find that missing sock", completed: false},
    {id: 2, title: "Save Ooo from the Ice King", completed: false},
  ]);

  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map(todo => (todo.id === id ? {...todo, title: newTitle} : todo))
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App
