import React, {Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {setSpeed} from "../actions/index";


class controls extends Component{


  render(){
    return(
      <div>
        <button
          onClick={()=>this.props.start()}
          >Start</button>
        <button
          onClick={()=>this.props.stop()}
          >Stop</button>
        <button>Clear</button>
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
  return bindActionCreators({setSpeed}, dispatch);
}

function mapStateToProps({boxSize, speed}){
  return {boxSize, speed};
}

export default connect(mapStateToProps, mapDispatchToProps)(controls);
