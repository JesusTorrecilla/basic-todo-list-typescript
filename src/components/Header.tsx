import React, { ReactElement, useState } from "react";

interface Props {
  toAdd: (text: string) => void;
}

export const Header: React.FC<Props> = ({ toAdd }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    toAdd(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={() => {}}
        placeholder="¿Qué vas a hacer?"
        autoFocus
      ></input>
    </form>
  );
};

export default Header;
