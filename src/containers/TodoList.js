import React from "react";

import { connect } from "react-redux";
import { add, del } from "../actions";

import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";

import * as types from "../actions/ActionTypes";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, store, add, del } = this.props;

    const todoItem = todos.map((todo, i) => (
      <TodoItem key={i} {...todo} onDelete={index => del(index)} />
    ));

    return (
      <React.Fragment>
        <ul>{todoItem}</ul>
        <AddTodo addTodo={text => add(text)} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: text => {
      dispatch({ type: types.add, text });
    },
    del: index => dispatch({ type: types.del, index })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
