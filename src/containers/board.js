import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {createInitialBoard, createNextBoard, addCell} from "../actions/index";
import Controls from "./controls";

var timeOut = 0


class board extends Component {

componentWillMount(){
  this.props.createInitialBoard(this.props.boxSize);
}

componentDidMount(){
  this.startTimeout();
}

componentWillReceiveProps(){
  if(this.props.boxSize === 400){
      $(".cell").css({width: 25, height: 25});
  } else if(this.props.boxSize ===1024){
      $(".cell").css({width: 15.625, height: 15.625});
  } else if (this.props.boxSize === 1600){
      $(".cell").css({width: 12.5, height: 12.5});
  }
}


startTimeout(){
    timeOut = setTimeout(()=>{
      this.props.createNextBoard(this.props.boxSize, this.props.board);
      this.startTimeout();
    }, this.props.speed)
}

stopTimeout(){
  clearTimeout(timeOut);
  timeOut = 0;
}

renderBoard(board){

  return board.map((cell, index)=>{
    return (
      <div
        onMouseDown={()=>this.props.addCell(index, this.props.board)}
        className={cell.status}
        key={index}
        id={index}
      >
      </div>
    );
  });
}

  render(){
    return (
      <div>
        <div
          className="box"
          >
          {this.renderBoard(this.props.board)}
        </div>
        <Controls
          stop={this.stopTimeout.bind(this)}
          start={this.startTimeout.bind(this)}
          timeOut={timeOut}
          />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createInitialBoard, createNextBoard, addCell}, dispatch);
}

function mapStateToProps({boxSize, board, speed}){
  return {boxSize, board, speed};
}

export default connect(mapStateToProps, mapDispatchToProps)(board);
