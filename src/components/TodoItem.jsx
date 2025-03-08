import React, { useState } from "react";


function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
     const [isEditing, setIsEditing] = useState(false);
     const [newTitle, setNewTitle] = useState(todo.title);

     const handleEdit = () => {
          setIsEditing(true);
     };

     const handleSave = () => {
          editTodo(todo.id, newTitle);
          setIsEditing(false);
     };

     return (
          <li className="todo-item">
               {isEditing ? (
                    <input 
                         type="text"
                         value={newTitle}
                         onChange={(e) => setNewTitle(e.target.value)}
                    />
               ) : (
                    <>
                         <input
                              type="text"
                              checked={todo.completed}
                              onChange={() => toggleComplete(todo.id)}
                         />
                         <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
                         <button onClick={handleEdit} disabled={todo.completed}>Edit</button>
                         <button onClick={() => deleteTodo(todo.id)} disabled={!todo.completed}>
                              Delete
                         </button>
                    </>
               )}
               {isEditing && <button onClick={handleSave}></button>}
          </li>
     );
}


export default TodoItem;