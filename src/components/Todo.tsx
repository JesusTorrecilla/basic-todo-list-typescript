import React from "react";
import { Item } from "../types";

interface newTodo extends Item {
  handleRemove: (id: number) => void;
  handleComplete: (id: number, completed: boolean) => void;
}

const Todo: React.FC<newTodo> = ({
  id,
  text,
  completed,
  handleRemove,
  handleComplete,
}) => {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={(e) => {
          handleComplete(id, e.target.checked);
        }}
      ></input>
      <label>{text}</label>
      <button
        className="destroy"
        onClick={() => {
          handleRemove(id);
        }}
      ></button>
    </div>
  );
};

export default Todo;
