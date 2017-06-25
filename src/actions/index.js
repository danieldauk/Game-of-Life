export const SET_WIDTH = "SET_WIDTH";
export const SET_HEIGHT = "SET_HEIGHT";
export const GENERATE_ARRAY = "GENERATE_ARRAY";
export const CREATE_NEW_ARRAY = "CREATE_NEW_ARRAY";
export const UPDATE_ARRAY = "UPDATE_ARRAY";

var newArray = [];

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

for(var i=0; i<width; i++) {
  for(var j=0; j<height; j++) {
    function random(){
      if(Math.random()<0.5){
        return true;
      } else {
        return false;
      }
    };
    generatedArray.push({x:i, y:j, isAlive: random()});
  }
}

  return{
    type: GENERATE_ARRAY,
    payload: generatedArray
  }
}

export function createNewArray(object){
  newArray.push(object);
  if(newArray.length >= 400){
    var copiedArray = newArray.slice(0);
    newArray = [];
    return{
      type: CREATE_NEW_ARRAY,
      payload: copiedArray
    }
  } else {
    return{
      type: CREATE_NEW_ARRAY,
      payload: []
    }
  }
}

export function updateArray(updatedArray){
  return {
    type: UPDATE_ARRAY,
    payload: updatedArray
  }
}
