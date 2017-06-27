import {SET_TIMEOUT} from "../actions/index";

export default function(state=true, action){
  switch(action.type){
    case SET_TIMEOUT:
      return action.payload;
    default:
      return state;
  }
}
