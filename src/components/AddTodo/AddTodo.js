import React from "react";

const AddTodo = props => {
  const [text, setText] = React.useState("");

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleClick = e => {
    const { addTodo } = props;
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
