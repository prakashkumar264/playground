import './excercisetwo.css';

import React, { Component } from "react";

class exercisetwo extends Component {
    render() {
      return (
        <div>
        <div class="row headerFirst" >
	<h2>Header</h2>
</div>

<div class="row hero" >
	<h2>Hero</h2>
</div>

<div class="flex-container">
	<div class="flex-item-left"><h2>Content</h2></div>
    <div class="flex-item-right"><h2>Sidebar</h2></div>
</div>
<div class="row footer" >
	<h2>Footer</h2>
</div>

        </div>
      );
    }
  }
   
  export default exercisetwo;