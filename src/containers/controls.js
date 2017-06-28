import React, {Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {presets} from "../components/presets"

import {setSize, setSpeed, clearBoard, createInitialBoard, createNextBoard, presetBoard} from "../actions/index";


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
      <div>
        <button
          onClick={()=>this.props.start()}
          >Play</button>
        <button
          onClick={()=>this.props.stop()}
          >Pause</button>
        <button
          onClick={()=>this.props.clearBoard(this.props.boxSize)}
          >
          Clear</button>
          <button
            onClick={()=>this.props.createInitialBoard(this.props.boxSize)}
            >
            Reset</button>
            <button
              onClick={()=>this.props.createNextBoard(this.props.boxSize, this.props.board)}
              >
              Step</button>
        <button
          onClick={()=>this.props.setSpeed(10)}
          >10ms
        </button>
        <button
          onClick={()=>this.props.setSpeed(100)}
          >100ms
        </button>
        <button
          onClick={()=>this.props.setSpeed(500)}
          >500ms
        </button>
        <button
          onClick={()=>{
            $(".cell").css({width: 25, height: 25});
            this.props.setSize(20);
            this.props.createInitialBoard(this.props.boxSize);
          }}
          >20x20
        </button>
        <button
          onClick={()=>{
            $(".cell").css({width: 15.625, height: 15.625});
            this.props.setSize(32);
            this.props.createInitialBoard(this.props.boxSize);
          }}
          >32x32
        </button>
        <button
          onClick={()=>{
            $(".cell").css({width: 12.5, height: 12.5});
            this.props.setSize(40);
            this.props.createInitialBoard(this.props.boxSize);
          }}
          >40x40
        </button>
        <select
          placeholder="Presets"
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
