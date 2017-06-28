import {CREATE_INITIAL_BOARD} from "../actions/index";
import {CREATE_NEXT_BOARD} from "../actions/index";
import {CLEAR_BOARD} from "../actions/index";
import {ADD_CELL} from "../actions/index";
import {PRESET_BOARD} from "../actions/index";

export default function(state=[], action){
  switch(action.type){
    case CREATE_INITIAL_BOARD:
      return action.payload;
    case CREATE_NEXT_BOARD:
      return action.payload;
    case ADD_CELL:
      return action.payload;
    case CLEAR_BOARD:
      return action.payload;
    case PRESET_BOARD:
      return action.payload;
    default:
      return state;
  }
}
