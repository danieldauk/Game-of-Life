import {combineReducers} from "redux";
import ReducerBoxSize from "./reducerBoxSize";
import ReducerCreateBoard from "./reducerCreateBoard";
import ReducerSetSpeed from "./reducerSetSpeed";
import ReducerTimeOutValue from "./reducerTimeOutValue";
import ReducerGenerations from "./reducerGenerations";

const rootReducer = combineReducers ({
  boxSize: ReducerBoxSize,
  board: ReducerCreateBoard,
  speed: ReducerSetSpeed,
  timeOutValue: ReducerTimeOutValue,
  generations: ReducerGenerations
});

export default rootReducer;
