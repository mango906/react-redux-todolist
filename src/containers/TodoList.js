import React from "react";

import { connect } from "react-redux";
import { add, del } from "../actions";

import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, store } = this.props;

    const todoItem = todos.map((todo, i) => (
      <TodoItem key={i} {...todo} onDelete={index => store.dispatch(del(index))} />
    ));

    return (
      <React.Fragment>
        <ul>{todoItem}</ul>
        <AddTodo addTodo={text => store.dispatch(add(text))} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
