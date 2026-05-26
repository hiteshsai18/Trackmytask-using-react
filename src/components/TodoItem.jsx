function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <div className={`todo-item ${todo.completed ? "done" : ""}`}>
      <div className="todo-content">
        <span className={todo.completed ? "completed" : ""}>
          {todo.text}
        </span>
      </div>

      <div className="todo-actions">
        <button
          className="complete-btn"
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;