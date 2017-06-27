import {CREATE_NEXT_BOARD} from "../actions/index";
import {CREATE_INITIAL_BOARD} from "../actions/index";



export default function(state=0, action){
  switch(action.type){
    case CREATE_NEXT_BOARD:
      return state+1;
    case CREATE_INITIAL_BOARD:
      return 0;
    default:
      return state;
  }
}
