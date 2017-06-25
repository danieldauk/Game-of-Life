import {GENERATE_ARRAY} from "../actions/index";
import {UPDATE_ARRAY} from "../actions/index";

export default function(state=[], action){
  switch(action.type){
    case GENERATE_ARRAY:
      return action.payload;
    case UPDATE_ARRAY:
      return action.payload;
    default:
      return state;
  }
}
