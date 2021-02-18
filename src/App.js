import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header"> 
       <p class="makeinbold" >Prakash Kumar</p>
       <Router>
             <Link to={{ pathname: "https://github.com/prakashkumar264/playground" }} target="_blank" >Github</Link>
       </Router>

      </header>
    </div>
  );
}

export default App;
