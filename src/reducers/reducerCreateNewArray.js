
import {CREATE_NEW_ARRAY} from "../actions/index";
import {EMPTY_NEW_ARRAY} from "../actions/index";

export default function(state={}, action){
  switch(action.type){
    case CREATE_NEW_ARRAY:
      return Object.assign({}, state, action.payload);
    case EMPTY_NEW_ARRAY:
      return {};
    default:
      return state;
  }
}
