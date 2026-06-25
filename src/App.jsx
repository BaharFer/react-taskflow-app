import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {

  const [todos, setTodos] = useState([]);

    const [filter, setFilter] = useState("today");

  useEffect(() => {

    const savedTodos =
      localStorage.getItem("todos");

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );

  }, [todos]);


  const addTodo = (text) => {

    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };

    setTodos([
      ...todos,
      newTodo
    ]);
  };

  const deleteTodo = (id) => {

    setTodos(
      todos.filter(
        todo => todo.id !== id
      )
    );
  };

  const toggleTodo = (id) => {

    setTodos(
      todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed:
                !todo.completed
            }
          : todo
      )
    );
  };
const filteredTodos = todos.filter(
  todo => {

    if (filter === "completed") {
      return todo.completed;
    }

    return true;

  }
);

const completedTasks =
  todos.filter(
    todo => todo.completed
  ).length;

  return (
    <div className="app">

     <Sidebar
  filter={filter}
  setFilter={setFilter}
  totalTasks={todos.length}
  completedTasks={completedTasks}
/>

      <main className="main-content">

        <h1>
          Today's Tasks
        </h1>

        <TodoForm
          addTodo={addTodo}
        />

        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />

      </main>

    </div>
  );
}

export default App;