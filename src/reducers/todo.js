import * as types from "../actions/ActionTypes";

const todo = (state = [], action) => {
  switch (action.type) {
    case types.add:
      return [
        ...state,
        {
          id: state.length,
          text: action.text
        }
      ];
    case types.del:
      console.log(action);
      return state.filter(el => el.id !== action.index);
    default:
      return state;
  }
};

export default todo;
