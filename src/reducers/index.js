import {combineReducers} from "redux";
import ReducerBoxWidth from "./reducerBoxWidth";
import ReducerBoxHeight from "./reducerBoxHeight";
import ReducerGenerateArray from "./reducerGenerateArray";

const rootReducer = combineReducers ({
  width: ReducerBoxWidth,
  height: ReducerBoxHeight,
  generatedArray: ReducerGenerateArray
});

export default rootReducer;
