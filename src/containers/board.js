import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {createInitialBoard, createNextBoard, addCell} from "../actions/index";




class board extends Component {

componentWillMount(){
  this.props.createInitialBoard(this.props.boxSize);
}

componentDidMount(){
  setInterval(()=>this.props.createNextBoard(this.props.boxSize, this.props.board), 100);
}

renderBoard(board){
  return board.map((cell, index)=>{
    return (
      <div
        onClick={()=>this.props.addCell(index, this.props.board)}
        className={cell.status}
        key={index}
      >
      </div>
    );
  });
}

  render(){
    return (
      <div
        className="box"
        >
        {this.renderBoard(this.props.board)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createInitialBoard, createNextBoard, addCell}, dispatch);
}

function mapStateToProps({boxSize, board}){
  return {boxSize, board};
}

export default connect(mapStateToProps, mapDispatchToProps)(board);
