import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {generateArray, updateArray, emptyNewArray} from "../actions/index";
import Cell from "./cell";

class box extends Component {


componentWillMount(){
  this.props.generateArray(this.props.width, this.props.height);
  setInterval(()=>{
    this.props.updateArray(this.props.newArray);
    this.props.emptyNewArray();
  }, 100);
}


  renderArray(){
    return this.props.generatedArray.map((cell, index)=>{

      return (
        <Cell
          key={index}
          index={index}
          x={cell[index].x}
          y={cell[index].y}
          isAlive={cell[index].isAlive}
          array={this.props.generatedArray}
          />
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
  return bindActionCreators({generateArray, updateArray, emptyNewArray}, dispatch);
}

function mapStateToProps({width, height, generatedArray, newArray}){
  return {width, height, generatedArray, newArray};
}

export default connect(mapStateToProps, mapDispatchToProps)(box);
