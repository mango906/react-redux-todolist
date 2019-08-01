import * as types from "../actions/ActionTypes";

const todo = (state = [], action) => {
  switch (action.type) {
    case types.add:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];

    default:
      return state;
  }
};

export default todo;
