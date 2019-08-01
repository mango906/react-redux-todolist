import React from "react";
import TodoList from "./containers/TodoList";

import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

function App() {
  return (
    <div className="App">
      <TodoList store={store} todos={store.getState()} />
    </div>
  );
}

export default App;
