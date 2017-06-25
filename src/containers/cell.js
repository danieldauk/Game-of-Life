import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {createNewArray} from "../actions/index";

class cell extends Component {


  componentWillMount(){
    this.checkForLife();
  }

  componentWillUpdate(){
    this.checkForLife();
  }

  checkForLife(){
    const neighborsAlive = this.findNeighbors();
    if(!this.props.isAlive && neighborsAlive ===3) {
      var thisCell = {
        index: this.props.index,
        x: this.props.x,
        y: this.props.y,
        isAlive: true
      }
    } else if (this.props.isAlive && (neighborsAlive === 3||neighborsAlive === 2)) {
      var thisCell = {
        index: this.props.index,
        x: this.props.x,
        y: this.props.y,
        isAlive: true
      }
    } else {
      var thisCell = {
        index: this.props.index,
        x: this.props.x,
        y: this.props.y,
        isAlive: false
      }
    }
    this.props.createNewArray(this.props.index, thisCell);
  }


  findNeighbors() {

      var neighbors = 0;
      for(var i=0; i<100; i++){
        if(this.props.array[i][i].isAlive){
          if (
            Math.abs(this.props.array[i][i].x-this.props.x) ==1 && Math.abs(this.props.array[i][i].y-this.props.y) ==1 ||
            Math.abs(this.props.array[i][i].x-this.props.x) ==0 && Math.abs(this.props.array[i][i].y-this.props.y) ==1 ||
            Math.abs(this.props.array[i][i].x-this.props.x) ==1 && Math.abs(this.props.array[i][i].y-this.props.y) ==0
          ){
            neighbors++;
          }
        };
      }
    return neighbors;
  }

  render() {
    return(
      <div
        className={this.props.isAlive? "cell alive": "cell dead"}
      ></div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({createNewArray}, dispatch);
}

export default connect(null, mapDispatchToProps)(cell);
