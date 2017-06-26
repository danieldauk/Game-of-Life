import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {createInitialBoard} from "../actions/index";

import Cell from "../components/cell";



class board extends Component {

componentWillMount(){
  this.props.createInitialBoard(this.props.boxSize);
}

renderBoard(board){
  return board.map((cell, index)=>{
    return (
      <Cell
        status={cell.status}
        index={index}
        key={index}
      />
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
  return bindActionCreators({createInitialBoard}, dispatch);
}

function mapStateToProps({boxSize, board}){
  return {boxSize, board};
}

export default connect(mapStateToProps, mapDispatchToProps)(board);
