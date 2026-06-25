import { useState } from "react";

function TodoForm({ addTodo }) {

  const [text, setText] =
    useState("");

  const handleSubmit = () => {

    if (!text.trim()) return;

    addTodo(text);

    setText("");

  };

  return (

    <div className="todo-form">

      <input
        type="text"
        placeholder="Add task..."
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button
        onClick={handleSubmit}
      >
        Add
      </button>

    </div>

  );
}

export default TodoForm;