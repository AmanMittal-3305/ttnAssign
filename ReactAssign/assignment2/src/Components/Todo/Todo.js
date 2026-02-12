import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;

    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };

  const deleteAll = () => {
    setTodos([]);
  };

  const deleteTodo = (indexToDelete) => {
    setTodos((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="todo-box">
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter todo item..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button className="add-button" type="submit">
          Add
        </button>

        <button
          className="delete-all-button"
          type="button"
          onClick={deleteAll}
        >
          Delete All
        </button>
      </form>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
