import * as types from "../actions/ActionTypes";

const initialState = {};

export default function todo(state = initialState, action) {
  if (action.type === types.add) {
    return state;
  } else {
    return state;
  }
}
