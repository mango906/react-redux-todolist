import React from "react";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = React.useState("");

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleClick = e => {
    addTodo(text);
    setText("");
  };

  return (
    <React.Fragment>
      <input onChange={handleChange} value={text} />
      <button type="submit" onClick={handleClick}>
        ADD
      </button>
    </React.Fragment>
  );
};

export default AddTodo;
