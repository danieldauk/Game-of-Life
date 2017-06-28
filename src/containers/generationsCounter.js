import React, {Component} from "react";
import {connect} from "react-redux";

class generations extends Component {

  render(){
    return (
      <div className="generations">
        Generations: {this.props.generations}
      </div>
    );
  }
}

function mapStateToProps({generations}){
  return {generations};
}

export default connect(mapStateToProps)(generations);
