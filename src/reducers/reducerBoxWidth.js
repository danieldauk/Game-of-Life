import {SET_WIDTH} from "../actions/index";

export default function(state=30, action){
  switch(action.type){
    case SET_WIDTH:
      return action.payload;
    default:
      return state;
  }
}