export const SET_SIZE = "SET_SIZE";
export const CREATE_INITIAL_BOARD = "CREATE_INITIAL_BOARD";
export const CREATE_NEXT_BOARD = "CREATE_INITIAL_BOARD";


export function setSize(side) {
  var boxSize = side*side;
  return {
    type: SET_SIZE,
    payload: boxSize
  }
}

export function createInitialBoard(boxSize){

  var board = [];

  for(var i = 0; i<boxSize; i++){
    var random = Math.random();
    if(random > 0.8){
      var status = "cell alive";
    } else {
      var status = "cell dead";
    }
    board.push({id: i, status: status});
  }

  return{
    type:CREATE_INITIAL_BOARD,
    payload: board
  }
}

export function createNextBoard(boxSize, oldBoard){
  var nextBoard = [];
  var side = Math.sqrt(boxSize);

  for (var i=0; i<boxSize; i++){

    nextBoard.push({id: i, status: ""});
    var neighbors = checkForNeighbors(i, oldBoard, side, boxSize);

    //change status of cell based on number of neighbors--->>
    //<<---change status of cell based on number of neighbors
  }




  return {
    type: CREATE_NEXT_BOARD,
    payload: nextBoard;
  }


  checkForNeighbors(cell, oldBoard, side, boxSize){
    var neighbors = 0;
    var borderCell =0;
    //top boarder ---------------------------->>>
    if(i>=0 && i<=side-1) {
      borderCell = 1;
      var rowPosition = side - i;

      //directly above
      if(oldBoard[boxSize-rowPosition].status==="cell alive" ||
         oldBoard[boxSize-rowPosition].status==="cell alive old"){
           neighbors++;
      }
      //above diagonal left
      if(i!=0){
        if(oldBoard[boxSize-rowPosition-1].status==="cell alive" ||
           oldBoard[boxSize-rowPosition-1].status==="cell alive old") {
             neighbors++;
           }
      }
      //above diagonalabove  right
      if(i!=side-1){
        if(oldBoard[boxSize-rowPosition+1].status==="cell alive" ||
           oldBoard[boxSize-rowPosition+1].status==="cell alive old") {
             neighbors++;
           }
      }
      //first cell diagonal above left
      if(i==0){
        if(oldBoard[boxSize-1].status==="cell alive" ||
           oldBoard[boxSize-1].status==="cell alive old") {
             neighbors++;
           }
      }
      //last cell above diagonal right
      if(i==side-1){
        if(oldBoard[boxSize-side+1].status==="cell alive" ||
           oldBoard[boxSize-side+1].status==="cell alive old") {
             neighbors++;
           }
      }
      //directly below
      if(oldBoard[i+side].status==="cell alive" ||
         oldBoard[i+side].status==="cell alive old"){
           neighbors++;
      }
      //below diagonal left
      if(i!=0){
        if(oldBoard[i+side-1].status==="cell alive" ||
           oldBoard[i+side-1].status==="cell alive old"){
             neighbors++;
        }
      }
      //below diagonal right
      if(i!=side-1){
        if(oldBoard[i+side+1].status==="cell alive" ||
           oldBoard[i+side+1].status==="cell alive old"){
             neighbors++;
        }
      }
      //below diagonal right last cell
      if(i==side-1){
        if(oldBoard[side].status==="cell alive" ||
           oldBoard[side].status==="cell alive old"){
             neighbors++;
        }
      }
      //below diagonal left first cell
      if(i==0){
        if(oldBoard[(side*2)-1].status==="cell alive" ||
           oldBoard[(side*2)-1].status==="cell alive old"){
             neighbors++;
        }
      }

      //right
      if(i!=side-1){
        if(oldBoard[i+1].status==="cell alive" ||
           oldBoard[i+1].status==="cell alive old"){
             neighbors++;
        }
      }
      //last cell right
      if(i==side-1){
        if(oldBoard[0].status==="cell alive" ||
           oldBoard[0].status==="cell alive old"){
             neighbors++;
        }
      }
      //left
      if(i!=0){
        if(oldBoard[i-1].status==="cell alive" ||
           oldBoard[i-1].status==="cell alive old"){
             neighbors++;
        }
      }
      //first cell left
      if(i==0){
        if(oldBoard[side-1].status==="cell alive" ||
           oldBoard[side-1].status==="cell alive old"){
             neighbors++;
        }
      }
    }
    //bottom boarder ---------------------------->>>
    if(i>=boxSize-side && i<boxSize-1){

    }
    //left boarder ---------------------------->>>
    if(i%side==0){

    }
    //right boarder ---------------------------->>>
    if((i+1)%side==0){
      
    }
    //non-border cells ---------------------------->>>
    if(borderCell == 0) {
      //above directly
      if(oldBoard[i-side].status==="cell alive" ||
        oldBoard[i-side].status==="cell alive old" ){
          neighbors++;
      }
      //above diagonal right
      if(oldBoard[i-side +1].status==="cell alive" ||
        oldBoard[i-side + 1].status==="cell alive old"){
          neighbors++;
        }
     //above diagonal left
      if(oldBoard[i-side -1].status==="cell alive" ||
        oldBoard[i-side -1].status==="cell alive old"){
          neighbors++;
      }
      //right
      if(oldBoard[i+1].status==="cell alive" ||
      oldBoard[i+1].status==="cell alive old"){
          neighbors++;
      }
      //left
      if(oldBoard[i-1].status==="cell alive" ||
        oldBoard[i-1].status==="cell alive old"){
          neighbors++;
      }
      //below diagonal right
      if(oldBoard[i+side+1].status==="cell alive" ||
        oldBoard[i+side+1].status==="cell alive old"){
          neighbors++;
      }
      //below diagonal left
        if(oldBoard[i+side-1].status==="cell alive" ||
          oldBoard[i+side-1].status==="cell alive old"){
            neighbors++;
        }
      //below directly
      if(oldBoard[i+side].status==="cell alive" ||
        oldBoard[i+side].status==="cell alive old" ){
          neighbors++;
      }
    }
  }

}
