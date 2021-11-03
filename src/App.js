//react imports
import React, { useEffect, useState } from "react";

//firebase
import { db } from "./firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

//styles & icons
import "./App.css";

//components
import Header from "./components/header";
import TodoList from "./components/todoList";

function App() {
  const [toDos, setTodos] = useState([]);
  const [newToDo, setNewToDo] = useState([]);

  useEffect(() => {
    let ref = collection(db, "todos");

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setTodos(results);
      console.log(results);
    });

    return () => unsub;
  }, []);

  return (
    <div className="App">
      <Header setNewToDo={setNewToDo} toDos={toDos} />
      <TodoList toDos={toDos} setTodos={setTodos} newToDo={newToDo} />
    </div>
  );
}

export default App;
