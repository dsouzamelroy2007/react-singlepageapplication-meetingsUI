import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Home";
import Welcome from "./Welcome";
import { useState } from 'react';
import Navigation from './Navigation';
import Login from './Login';

import { Router } from "@reach/router";

function App() {

  const[user, setUser] = useState("Mel");
  return (
    <div>
        <Navigation user={user}/>
        {user && (
         <span>
           <Welcome user={user}/>
           </span>
         )}
         <Router>
           <Home path="/" user={user}/>
           <Login path="/login" user={user}/>
         </Router>
        
    </div>

  )
}

export default App;
