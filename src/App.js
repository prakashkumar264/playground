import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route 
} from 'react-router-dom';
import Exercisetwo from "./Exercisetwo"
import Exerciseone from "./Exerciseone"
import Exercisethree from "./Exercisethree"
import Exercisefour from "./Exercisefour"
import Exercisefive from "./Exercisefive"


function App() {

  const [isNavOpen,setIsNavOpen]=useState(true)

  return (
    <div className="App">
      <div className="App-header"> 
      <Router>
        <div className="navbar">
          <ul>
          <li><Link to="/">Home</Link></li>
           <li><Link to={{ pathname: "https://github.com/prakashkumar264/playground" }} target="_blank" >Github</Link></li>
           <li><Link to="/Exerciseone">Excercise One</Link></li>
           <li><Link to="/Exercisetwo">Excercise Two</Link></li>
           <li><Link to="/Exercisethree">Excercise Three</Link></li>
           <li><Link to="/Exercisefour">Excercise Four</Link></li>
           <li><Link to="/Exercisefive">Excercise Five</Link></li>
          </ul>
        </div>
     
         <Route path="/Exerciseone" component={Exerciseone}/>
         <Route path="/Exercisetwo" component={Exercisetwo}/>
         <Route path="/Exercisethree" component={Exercisethree}/>
         <Route path="/Exercisefour" component={Exercisefour}/>
         <Route path="/Exercisefive" component={Exercisefive}/>
 
       </Router>



      
       </div>
    </div>
  );
}

export default App;
