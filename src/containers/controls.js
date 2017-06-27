import React, {Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {setSpeed, clearBoard, createInitialBoard, createNextBoard} from "../actions/index";


class controls extends Component{


  render(){
    return(
      <div>
        <button
          onClick={()=>this.props.start()}
          >Play</button>
        <button
          onClick={()=>this.props.stop()}
          >Pause</button>
        <button
          onClick={()=>this.props.clearBoard(this.props.boxSize)}
          >
          Clear</button>
          <button
            onClick={()=>this.props.createInitialBoard(this.props.boxSize)}
            >
            Reset</button>
            <button
              onClick={()=>this.props.createNextBoard(this.props.boxSize, this.props.board)}
              >
              Step</button>
        <button
          onClick={()=>this.props.setSpeed(10)}
          >10ms
        </button>
        <button
          onClick={()=>this.props.setSpeed(100)}
          >100ms
        </button>
        <button
          onClick={()=>this.props.setSpeed(500)}
          >500ms
        </button>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({setSpeed, clearBoard, createInitialBoard, createNextBoard}, dispatch);
}

function mapStateToProps({boxSize, speed, board}){
  return {boxSize, speed, board};
}

export default connect(mapStateToProps, mapDispatchToProps)(controls);
