import React, {Component} from "react";



export default class cell extends Component {

  render() {
    return(
      <div
        className={this.props.status}
        id={this.props.index}
      ></div>
    );
  }
}
