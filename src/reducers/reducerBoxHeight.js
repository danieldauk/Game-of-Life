import {SET_HEIGHT} from "../actions/index";

export default function(state=30, action){
  switch(action.type){
    case SET_HEIGHT:
      return action.payload;
    default:
      return state;
  }
}
