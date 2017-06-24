import {combineReducers} from "redux";
import ReducerBoxWidth from "./reducerBoxWidth";
import ReducerBoxHeight from "./reducerBoxHeight";
import ReducerGenerateArray from "./reducerGenerateArray";
import ReducerCreateNewArray from "./ReducerCreateNewArray";

const rootReducer = combineReducers ({
  width: ReducerBoxWidth,
  height: ReducerBoxHeight,
  generatedArray: ReducerGenerateArray,
  newArray: ReducerCreateNewArray
});

export default rootReducer;
