export const SET_WIDTH = "SET_WIDTH";
export const SET_HEIGHT = "SET_HEIGHT";
export const GENERATE_ARRAY = "GENERATE_ARRAY";
export const CREATE_NEW_ARRAY = "CREATE_NEW_ARRAY";
export const UPDATE_ARRAY = "UPDATE_ARRAY";
export const EMPTY_NEW_ARRAY = "CREATE_NEW_ARRAY";

export function setWidth(width) {
  return {
    type: SET_WIDTH,
    payload: width
  }
}

export function setHeight(height) {
  return {
    type: SET_HEIGHT,
    payload: height
  }
}

export function generateArray(width, height) {

var generatedArray = [];
var index = -1;
for(let i=0; i<width; i++) {
  for(let j=0; j<height; j++) {
    index ++;
    function random(){
      if(Math.random()<0.5){
        return true;
      } else {
        return false;
      }
    };

    var obj = {
      [index]: {index: index, x:i, y:j, isAlive: random()}
    }

    generatedArray.push(obj);
  }
}
  return {
    type: GENERATE_ARRAY,
    payload: generatedArray
  }
}

export function createNewArray(index, object){

  var newObject = {[index]:{[object.index]: object}}

  return{
    type: CREATE_NEW_ARRAY,
    payload: newObject
  }
}

export function updateArray(newObject){

  var newArray = Object.values(newObject);
  return {
    type: UPDATE_ARRAY,
    payload: newArray
  }
}

export function emptyNewArray(){
  return {
    type: EMPTY_NEW_ARRAY
  }
}
