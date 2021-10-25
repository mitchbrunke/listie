//react imports
import React, { useState, useEffect } from "react";

//styles
import "./Header.css";

//icons
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header({ newToDo, setNewToDo }) {
  //state for form input
  const [input, setInput] = useState([]);

  //form handlers
  const inputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setNewToDo([input]);
    setInput("");
  };

  useEffect(() => {
    console.log(newToDo);
  }, [newToDo]);

  return (
    <div className="header">
      <div className="kindaNav">
        <h1>TO DO</h1>
        <LightModeIcon />
      </div>
      <div className="add">
        <form onSubmit={(e) => submitHandler(e)}>
          <label htmlFor="addTodo">
            <input
              type="text"
              id="addTodo"
              placeholder="add a new to do.."
              onChange={(e) => inputHandler(e)}
              value={input}
            />
          </label>
        </form>
      </div>
    </div>
  );
}
