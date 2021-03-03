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
import ExerciseSix from "./ExerciseSix"
import ExerciseSeven from "./ExerciseSeven"
import Lottery from "./components/Lottery/Lottery"
import FormHome from "./components/Form/FormHome"


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
           <li><Link to="/ExerciseSix">Excercise Six</Link></li>
           <li><Link to="/ExerciseSeven">Excercise Seven</Link></li>
           <li><Link to="/Lottery">Lottery</Link></li>
           <li><Link to="/FormHome">Student Data</Link></li>
          </ul>
        </div>
     
         <Route path="/Exerciseone" component={Exerciseone}/>
         <Route path="/Exercisetwo" component={Exercisetwo}/>
         <Route path="/Exercisethree" component={Exercisethree}/>
         <Route path="/Exercisefour" component={Exercisefour}/>
         <Route path="/Exercisefive" component={Exercisefive}/>
         <Route path="/ExerciseSix" component={ExerciseSix}/>
         <Route path="/ExerciseSeven" component={ExerciseSeven}/>
         <Route path="/ExerciseSeven" component={ExerciseSeven}/>
         <Route path="/Lottery" component={Lottery}/>
         <Route path="/FormHome" component={FormHome}/>
 
       </Router>



      
       </div>
    </div>
  );
}

export default App;
