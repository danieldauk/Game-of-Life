import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {generateArray} from "../actions/index";
import Cell from "./cell";

class box extends Component {

componentWillMount(){
  this.props.generateArray(this.props.width, this.props.height);
}

  renderArray(){
    console.log(this.props.generatedArray);
    return this.props.generatedArray.map((cell, index)=>{
      return (
        <Cell key={index} index={index} x={cell.x} y={cell.y} isAlive={cell.isAlive}/>
      );
    });
  }

  render(){
    return (
      <div
        className="box"
        >
        {this.renderArray()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({generateArray}, dispatch);
}

function mapStateToProps({width, height, generatedArray}){
  return {width, height, generatedArray};
}

export default connect(mapStateToProps, mapDispatchToProps)(box);
