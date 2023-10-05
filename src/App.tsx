import React, { useState } from "react";
import Todos from "./components/Todos";
import { Item } from "./types";
import Header from "./components/Header";

const list: Array<Item> = [
  {
    id: 0,
    text: "Pasear al perro",
    completed: true,
  },
  {
    id: 1,
    text: "Ir al supermercado",
    completed: false,
  },
  {
    id: 2,
    text: "Limpiar la habitación",
    completed: false,
  },
  {
    id: 3,
    text: "Hacer la comida",
    completed: false,
  },
  {
    id: 4,
    text: "Estudiar",
    completed: false,
  },
  {
    id: 5,
    text: "Arreglar la puerta",
    completed: false,
  },
];

function App() {
  const [todo, setToDo] = useState<Array<Item>>(list);

  const handleRemove = (id: number) => {
    const newTodos = todo.filter((el) => el.id !== id);
    setToDo(newTodos);
  };

  const handleComplete = (id: number, completed: boolean) => {
    const newTodos = todo.map((el) => {
      if (el.id === id) {
        return { ...el, completed };
      }
      return el;
    });
    setToDo(newTodos);
  };

  const toAdd = (text: string) => {
    const newTodo = {
      text,
      completed: false,
      id: Math.ceil(Math.random() * 100000),
    };

    setToDo([...todo, newTodo]);
  };

  return (
    <div className="todoapp">
      <h1>To Do List</h1>
      <Header toAdd={toAdd}></Header>
      <Todos
        handleComplete={handleComplete}
        handleRemove={handleRemove}
        todos={todo}
      ></Todos>
    </div>
  );
}

export default App;
