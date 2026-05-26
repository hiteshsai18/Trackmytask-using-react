import TodoItem from './TodoItem'

function TodoList({todos,deleteTodo,toggleComplete}){
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty">No tasks added</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
    );
}

export default TodoList