//react imports
import React, { useState, useEffect } from "react";

//styles
import "./Header.css";

//icons
import LightModeIcon from "@mui/icons-material/LightMode";

//firebase
import { db } from "../firebase/config";
import { addDoc, collection } from "@firebase/firestore";

export default function Header({ setNewToDo, toDos }) {
  //state for form input
  const [input, setInput] = useState("");

  //form handlers
  const inputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "todos"), {
        text: input,
        is_completed: false,
        tags: "ES6",
        created_at: new Date(),
      }).then(setInput(""));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="header">
      <div className="kindaNav">
        <h1>TO DO</h1>
        <LightModeIcon />
      </div>
      <div className="add">
        <form onSubmit={(e) => submitHandler(e)}>
          <input
            type="text"
            id="addTodo"
            placeholder="add a new to do.."
            onChange={(e) => inputHandler(e)}
            value={input}
          />
        </form>
      </div>
    </div>
  );
}
