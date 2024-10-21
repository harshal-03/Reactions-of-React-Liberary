import React from "react";
import Header from "./components/Header"
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import './style.css'
function App() {
  return (
    <div className="todo-container">
      <Header title="TODOie App" />
      <TodoItem text="Eat" />
      <TodoItem text="Code" />
      <TodoItem text="Sleep" />
      <TodoItem text="Repeat" />
      <Button />
    </div>
  );
}

export default App;
