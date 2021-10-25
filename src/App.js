//react imports
import React, { useEffect, useState } from "react";

//styles & icons
import "./App.css";

//components
import Header from "./components/header";
import TodoList from "./components/todoList";

function App() {
  const [toDos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoList toDos={toDos} setTodos={setTodos} />
    </div>
  );
}

export default App;
