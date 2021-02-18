import './excercisetwo.css';

import React, { Component } from "react";

class exercisetwo extends Component {
    render() {
      return (
        <div>
        <div class="row headerFirst" >
          <h5>Header</h5>
        </div>

        <div class="row hero" >
          <h5>Hero</h5>
        </div>

        <div class="flex-container">
          <div class="flex-item-left"><h5>Content</h5></div>
            <div class="flex-item-right"><h5>Sidebar</h5></div>
        </div>
        <div class="row footer" >
          <h5>Footer</h5>
        </div>

        </div>
      );
    }
  }
   
  export default exercisetwo;