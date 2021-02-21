import './exercisethree.css'

import React, { Component } from "react";

class Exercisethree extends Component {
    render() {
      return (
        <div className="borderForFlex">
        <div className="row headerFirst" >
          <p style={{margin:'auto'}}><em>Header</em></p>
        </div>

        <div className="row hero" >
          <p style={{margin:'auto'}} ><em>Hero</em></p>
        </div>

        <div className="flex-container">
          <div className="flex-item-left">
            <p style={{margin:'auto'}} ><em>Content</em></p>
          </div>
          <div className="flex-item-right">
            <p style={{margin:'auto'}} ><em>Sidebar</em></p>
          </div>
        </div>
        <div className="row footer" >
          <p style={{margin:'auto'}} ><em>Footer</em></p>
        </div>

        </div>
      );
    }
  }
   
export default Exercisethree;
