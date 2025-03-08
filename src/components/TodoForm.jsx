import React from "react";
import { useState } from "react";


function TodoForm({ addTodo }) {
     const [todoText, setTodoText] = useState("");

     const handleSubmit = (e) => {
          e.preventDefault();
          if (todoText.trim() === "")return;
          addTodo({ id: Date.now(), title: todoText, completed: false});
          setTodoText("");
     };

     return (
          <form onSubmit={handleSubmit} className="todo-form">
               <input 
                    type="text"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder="What needs to be done?"
               />
               <button type="submit">Add</button>
          </form>
     );
}


export default TodoForm;