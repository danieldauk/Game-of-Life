import React, {Component} from "react";
import {connect} from "react-redux";

class generations extends Component {

  render(){
    return (
      <div className="generations">
        <h4>Generations</h4>
        <h3>{this.props.generations}</h3> 
      </div>
    );
  }
}

function mapStateToProps({generations}){
  return {generations};
}

export default connect(mapStateToProps)(generations);
