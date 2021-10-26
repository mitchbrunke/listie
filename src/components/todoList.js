//reacc imports
import React, { useEffect, useState } from "react";

//styles
import "./todoList.css";

const TodoList = ({ toDos, newToDo, setTodos }) => {
  useEffect(() => {
    setTodos([...toDos, newToDo]);
  }, [newToDo]);

  return (
    <div className="todoList">
      {toDos &&
        toDos.map((todo) => (
          <div key={todo.id} className="single_todo">
            <h5>{todo.text}</h5>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
