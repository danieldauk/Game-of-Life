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


startTimeout(){
    timeOut = setTimeout(()=>{
      this.props.createNextBoard(this.props.boxSize, this.props.board);
      this.startTimeout();
    }, this.props.speed)
}

stopTimeout(){
  clearTimeout(timeOut);
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
