import React, {Component} from "react";
import Board from "../containers/board";
import Controls from "../containers/controls";

export default class App extends Component {

  render(){
    return (
      <div className="main">
        <Board/>
      </div>
    );
  }
}
