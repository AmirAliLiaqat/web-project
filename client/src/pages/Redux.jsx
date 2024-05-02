import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteAllTodos,
} from "../redux/actions";

function Redux({ todos, addTodo, toggleTodo, deleteTodo, deleteAllTodos }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  const handleToggle = (id) => {
    toggleTodo(id);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleDeleteAll = () => {
    deleteAllTodos();
  };

  return (
    <div className="container my-5">
      <h1 className="fw-bolder">Todo List</h1>
      <div className="d-flex mb-3">
        <input
          type="text"
          value={text}
          className="form-control me-2"
          onChange={handleChange}
          style={{ width: "88%" }}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Add
        </button>
        <button className="btn btn-danger ms-2" onClick={handleDeleteAll}>
          Delete All
        </button>
      </div>
      <ul className="list-group">
        {todos ? (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
              onClick={() => handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(todo.id)}
              >
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </li>
          ))
        ) : (
          <p></p>
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteAllTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
