import React, {Component} from "react";

export default class cell extends Component {

  constructor(props) {
    super(props);

    this.state={
      index: this.props.index,
      x: this.props.x,
      y: this.props.y,
      isAlive: this.props.isAlive
    }
  }

  render() {
    return(
      <div className="cell"></div>
    );
  }
}
