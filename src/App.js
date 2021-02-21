import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route 
} from 'react-router-dom';
import exercisetwo from "./excercisetwo"
import exerciseone from "./exerciseone"
/* import exercisethree from "./exercisethree"
import exercisefour from "./exercisefour"
import exercisefive from "./exercisefive"
 */

function App() {

  const [isNavOpen,setIsNavOpen]=useState(true)

  return (
    <div className="App">
      <header className="App-header"> 
       <h2 class="makeinbold" >Prakash Kumar</h2>
       
       <Router>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to={{ pathname: "https://github.com/prakashkumar264/playground" }} target="_blank" >Github</Link></li>
           <li><Link to="/exerciseone">Excercise One</Link></li>
           <li><Link to="/exercisetwo">Excercise Two</Link></li>
{/*            <li><Link to="/exercisethree">Excercise Three</Link></li>
           <li><Link to="/exercisefour">Excercise Four</Link></li>
           <li><Link to="/exercisefive">Excercise Five</Link></li> */}

         </ul>

         <Route path="/exerciseone" component={exerciseone}/>
         <Route path="/exercisetwo" component={exercisetwo}/>
      {/*    <Route path="/exercisethree" component={exercisethree}/>
         <Route path="/exercisefour" component={exercisefour}/>
         <Route path="/exercisefive" component={exercisefive}/>
 */}
       </Router>

      
       </header>
    </div>
  );
}

export default App;
