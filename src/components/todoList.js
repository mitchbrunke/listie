//reacc imports
import React, { useState } from "react";

//firebase
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

//styles
import "./todoList.css";

const TodoList = ({ toDos, newToDo, setTodos }) => {
  return (
    <div className="todoList">
      {toDos &&
        toDos.map((todo) => (
          <div
            onClick={() => {
              deleteDoc(doc(db, "todos", todo.id));
            }}
            key={todo.id}
            className="single_todo"
          >
            <h5>{todo.text}</h5>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
