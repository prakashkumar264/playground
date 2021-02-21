import './exercisethree.css'

import React, { Component } from "react";

class Exercisethree extends Component {
    render() {
      return (
        <div class="borderForFlex">
        <div class="row headerFirst" >
          <p style={{margin:'auto'}}><em>Header</em></p>
        </div>

        <div class="row hero" >
          <p style={{margin:'auto'}} ><em>Hero</em></p>
        </div>

        <div class="flex-container">
          <div class="flex-item-left">
            <p style={{margin:'auto'}} ><em>Content</em></p>
          </div>
          <div class="flex-item-right">
            <p style={{margin:'auto'}} ><em>Sidebar</em></p>
          </div>
        </div>
        <div class="row footer" >
          <p style={{margin:'auto'}} ><em>Footer</em></p>
        </div>

        </div>
      );
    }
  }
   
export default Exercisethree;