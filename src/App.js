//react imports
import React, { useEffect, useState } from "react";

//styles & icons
import "./App.css";

//components
import Header from "./components/header";
import TodoList from "./components/todoList";

function App() {
  const [toDos, setTodos] = useState([]);
  const [newToDo, setNewToDo] = useState([]);

  // const addToDo = () => {
  //   newToDo ? setTodos([...toDos, { newToDo }]) : console.log("no new todo");
  // };

  const getData = async () => {
    await fetch("http://localhost:3004/items")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Header setNewToDo={setNewToDo} toDos={toDos} />
      <TodoList toDos={toDos} setTodos={setTodos} newToDo={newToDo} />
    </div>
  );
}

export default App;
