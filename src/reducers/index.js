import {combineReducers} from "redux";
import ReducerBoxSize from "./reducerBoxSize";
import ReducerCreateBoard from "./reducerCreateBoard";


const rootReducer = combineReducers ({
  boxSize: ReducerBoxSize,
  board: ReducerCreateBoard
});

export default rootReducer;
