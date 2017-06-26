import {CREATE_INITIAL_BOARD} from "../actions/index";

export default function(state=[], action){
  switch(action.type){
    case CREATE_INITIAL_BOARD:
      return action.payload;
    default:
      return state;
  }
}
