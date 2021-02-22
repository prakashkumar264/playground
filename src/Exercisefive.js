import './exercisefive.css';
import React from "react";

function Exercisefive()  {   
      return (
        <div className="stockBackground">
            <label><b>Current Status </b>: Not Started </label>
            <div className="clockContainer">
              <div style={{margin:'auto'}}>
                    <button className="counterBtn">START</button>
              </div>
              <div style={{margin:'auto'}}>
                    <button className="counterBtn">RESET</button>
              </div>
              <div style={{margin:'auto'}}>
                <label>Speed</label>
                <div className="buttons">
                    <button className="speedBtn">0.5PX</button>
                    <button className="speedBtn">5PX</button>
                    <button className="speedBtn">10PX</button>
                </div>
              </div>
            </div>
        </div>
      );
    
  }
   
export default Exercisefive;
