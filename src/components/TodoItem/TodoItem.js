import React from "react";

const TodoItem = props => {
  console.log(props);
  return (
    <div className="todo-item">
      <div className="todo-item-text">{props.text}</div>
      <div className="todo-item-del">
        <button onClick={() => props.onDelete(props.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
