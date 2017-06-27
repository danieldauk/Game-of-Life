import {SET_SPEED} from "../actions/index";

export default function(state=10, action){
  switch(action.type){
    case SET_SPEED:
      return action.payload;
    default:
      return state;
  }
}
