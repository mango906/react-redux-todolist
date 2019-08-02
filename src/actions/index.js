import * as types from "./ActionTypes";

export function add(text) {
  return {
    type: types.add,
    text
  };
}

export function del(index) {
  return {
    type: types.del,
    index
  };
}
