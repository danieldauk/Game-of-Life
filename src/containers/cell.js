import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {createNewArray} from "../actions/index";

class cell extends Component {

  constructor(props) {
    super(props);

    this.state={
      x: this.props.x,
      y: this.props.y,
      isAlive: this.props.isAlive,
      index: this.props.index
    }
  }

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
    const neighbors = this.props.array.filter((neighbor, index)=>{

      return (
        Math.abs(neighbor[index].x-this.props.x) ==1 && Math.abs(neighbor[index].y-this.props.y) ==1 ||
        Math.abs(neighbor[index].x-this.props.x) ==0 && Math.abs(neighbor[index].y-this.props.y) ==1 ||
        Math.abs(neighbor[index].x-this.props.x) ==1 && Math.abs(neighbor[index].y-this.props.y) ==0
      );
    });
    const neighborsAlive = neighbors.filter((neighbor, index)=>{
      return neighbor[Object.keys(neighbor)[0]].isAlive;
    });
    return neighborsAlive.length;
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
