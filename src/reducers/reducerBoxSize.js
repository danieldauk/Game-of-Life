import {SET_SIZE} from "../actions/index";

export default function(state=1024, action){
  switch(action.type){
    case SET_SIZE:
      return action.payload;
    default:
      return state;
  }
}
