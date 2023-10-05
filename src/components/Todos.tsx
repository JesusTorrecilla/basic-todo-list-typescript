import React from "react";
import { type ArrayTodo } from "../types";
import Todo from "./Todo";

interface Props {
  todos: ArrayTodo;
  handleRemove: (id: number) => void;
  handleComplete: (id: number, completed: boolean) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  handleRemove,
  handleComplete,
}) => {
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={`${todo.completed ? `completed` : ``}`}
            >
              <Todo
                key={todo.id}
                text={todo.text}
                id={todo.id}
                completed={todo.completed}
                handleRemove={handleRemove}
                handleComplete={handleComplete}
              ></Todo>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
