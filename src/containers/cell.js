import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {updateArray} from "../actions/index";

class cell extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.checkForLife();
  }

  checkForLife(){
    const neighborsAlive = this.findNeighbors();
    if(!this.props.isAlive && neighborsAlive ===3) {
      var thisCell = {
        x: this.props.x,
        y: this.props.y,
        isAlive: true
      }
    } else if (this.props.isAlive && (neighborsAlive === 3||neighborsAlive === 2)) {
      var thisCell = {
        x: this.props.x,
        y: this.props.y,
        isAlive: true
      }
    } else {
      var thisCell = {
        x: this.props.x,
        y: this.props.y,
        isAlive: false
      }
    }
    this.props.updateArray(this.props.array, this.props.index, thisCell);
  }


  findNeighbors() {
    const neighbors = this.props.array.filter((neighbor)=>{
      return (
        Math.abs(neighbor.x-this.props.x) ==1 && Math.abs(neighbor.y-this.props.y) ==1 ||
        Math.abs(neighbor.x-this.props.x) ==0 && Math.abs(neighbor.y-this.props.y) ==1 ||
        Math.abs(neighbor.x-this.props.x) ==1 && Math.abs(neighbor.y-this.props.y) ==0
      );
    });
    const neighborsAlive = neighbors.filter((neighbor)=>{
      return neighbor.isAlive;
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
  return bindActionCreators({updateArray}, dispatch);
}

export default connect(null, mapDispatchToProps)(cell);
