import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  const addTodo = (text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const completedTasks = todos.filter(
    (todo) => todo.completed
  ).length;

  const pendingTasks = todos.filter(
    (todo) => !todo.completed
  ).length;

  const filteredTodos = showCompleted
    ? todos
    : todos.filter((todo) => !todo.completed);

  return (
    <div className="app">
      <div className="todo-container">
        <h1>@Trackmytask</h1>

        {/* STATS BOXES */}
        <div className="stats-container">
          <div className="stat-box total">
            <h2>{todos.length}</h2>
            <p>Total Tasks</p>
          </div>

          <div className="stat-box completed-box">
            <h2>{completedTasks}</h2>
            <p>Completed</p>
          </div>

          <div className="stat-box pending">
            <h2>{pendingTasks}</h2>
            <p>Pending</p>
          </div>
        </div>

        <TodoForm addTodo={addTodo} />

        <button
          className="toggle-btn"
          onClick={() => setShowCompleted(!showCompleted)}
        >
          {showCompleted
            ? "Hide Completed Tasks"
            : "Show Completed Tasks"}
        </button>

        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;