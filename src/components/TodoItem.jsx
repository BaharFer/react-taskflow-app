function TodoItem({
  todo,
  deleteTodo,
  toggleTodo
}) {

  return (

    <div className="todo-item">

      <div
        className={
          todo.completed
            ? "completed"
            : ""
        }
        onClick={() =>
          toggleTodo(todo.id)
        }
      >
        {todo.text}
      </div>

      <button
        onClick={() =>
          deleteTodo(todo.id)
        }
      >
        Delete
      </button>

    </div>

  );
}

export default TodoItem;