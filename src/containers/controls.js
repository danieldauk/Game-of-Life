import React, {Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {presets} from "../components/presets"
import Refresh from "react-icons/lib/fa/repeat";
import Play from "react-icons/lib/fa/play";
import Pause from "react-icons/lib/fa/pause";
import Erase from "react-icons/lib/fa/eraser";
import Step from "react-icons/lib/fa/step-forward";

import {setSize, setSpeed, clearBoard, createInitialBoard, createNextBoard, presetBoard} from "../actions/index";

import Generations from "./generationsCounter";

var pause = false;

class controls extends Component{

  renderOptions(){
    var side = Math.sqrt(this.props.boxSize);
    return presets.map((element, index)=>{
      return (
        <option
          key={index}
          value={String(index)}
          disabled={(element.grid[0].length < side && element.grid.length < side)? false:true }
          >{element.name}
        </option>
      );
    })

  }


  render(){
    return(
      <div className="controls">
        <div className="buttons">
          <button
            className="active"
            onClick={()=>{
              $(".buttons button:nth-child(1)").addClass("active");
              $(".buttons button:nth-child(2)").removeClass("active");
              if(pause){
                this.props.start();
                pause=false;
              }
            }}
            >
            <Play/>
          </button>
          <button
            onClick={()=>{
              $(".buttons button:nth-child(2)").addClass("active");
              $(".buttons button:nth-child(1)").removeClass("active");
              this.props.stop();
              pause=true;
            }}
            >
            <Pause/>
          </button>
          <button
            onClick={()=>this.props.clearBoard(this.props.boxSize)}
            >
            <Erase/>
          </button>
            <button
              onClick={()=>this.props.createInitialBoard(this.props.boxSize)}
              >
              <Refresh/>
          </button>
              <button
                onClick={()=>this.props.createNextBoard(this.props.boxSize, this.props.board)}
                >
                <Step/>
          </button>
        </div>
        <div className="boardSizeButtons">
          <button
            onClick={()=>{
              $(".buttons button:nth-child(1)").addClass("active");
              $(".buttons button:nth-child(2)").removeClass("active");
              $(".boardSizeButtons button:nth-child(1)").addClass("active");
              $(".boardSizeButtons button:nth-child(2)").removeClass("active");
              $(".boardSizeButtons button:nth-child(3)").removeClass("active");
              $(".cell").css({width: 25, height: 25});
              this.props.setSize(20);
              this.props.createInitialBoard(400);
              this.props.stop();
              this.props.start();
              pause=false;
            }}
            >20x20
          </button>
          <button
            className="active"
            onClick={()=>{
              $(".buttons button:nth-child(1)").addClass("active");
              $(".buttons button:nth-child(2)").removeClass("active");
              $(".boardSizeButtons button:nth-child(1)").removeClass("active");
              $(".boardSizeButtons button:nth-child(2)").addClass("active");
              $(".boardSizeButtons button:nth-child(3)").removeClass("active");
              this.props.setSize(32);
              this.props.createInitialBoard(1024);
              this.props.stop();
              this.props.start();
              pause=false;
            }}
            >32x32
          </button>
          <button
            onClick={()=>{
              $(".buttons button:nth-child(1)").addClass("active");
              $(".buttons button:nth-child(2)").removeClass("active");
              $(".boardSizeButtons button:nth-child(1)").removeClass("active");
              $(".boardSizeButtons button:nth-child(2)").removeClass("active");
              $(".boardSizeButtons button:nth-child(3)").addClass("active");
              this.props.setSize(40);
              this.props.createInitialBoard(1600);
              this.props.stop();
              this.props.start();
              pause=false;
            }}
            >40x40
          </button>
        </div>
        <div className="speedRange">
          <img src="src/img/turtle.png"/>
          <input
            defaultValue="10"
            id="speedRange"
            onChange={()=>{
              var speed = Math.abs($("#speedRange")[0].valueAsNumber);
              this.props.setSpeed(speed);
            }}
            min="-500"
            max="10"
            step="10"
            type="range"
            >
          </input>
          <img src="src/img/rabbit.png"/>
        </div>
        <div className="selectPresets">
          <select
            id="selectPresets"
            onChange={()=>{
              this.props.presetBoard(presets[$("#selectPresets")[0].value].grid, this.props.boxSize);
            }}
            >
            <option
              value="" disabled  selected
               >Presets
             </option>
             {this.renderOptions()}
          </select>
        </div>
          <div className="name">
            <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">
            <div className="logo">
              <h3>Conway's</h3>
              <h3>Game of Life</h3>
            </div>
              </a>
          </div>
        <Generations/>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({setSize, setSpeed, clearBoard, createInitialBoard, createNextBoard, presetBoard}, dispatch);
}

function mapStateToProps({boxSize, speed, board}){
  return {boxSize, speed, board};
}

export default connect(mapStateToProps, mapDispatchToProps)(controls);
