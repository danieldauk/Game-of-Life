import React, {Component} from "react";
import Board from "../containers/board";
import Controls from "../containers/controls";
import Generations from "../containers/generationsCounter";

export default class App extends Component {

  render(){
    return (
      <div className="main">
        <Generations/>
        <Board/>
      </div>
    );
  }
}
