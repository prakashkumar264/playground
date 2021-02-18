import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route 
} from 'react-router-dom';
import exercisetwo from "./excercisetwo"
import exerciseone from "./exerciseone"


function App() {
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
         </ul>

         <Route path="/exerciseone" component={exerciseone}/>
         <Route path="/exercisetwo" component={exercisetwo}/>
       </Router>

       </header>
    </div>
  );
}

export default App;
