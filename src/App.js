import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Home";
import Welcome from "./Welcome";
import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Login from './Login';

import { Router } from "@reach/router";
import firebase from "./Firebase";

function App() {

  const[user, setUser] = useState("");
  const ref = firebase.database().ref('user');

  useEffect(() => {
    //const ref = firebase.database().ref('user');

    ref.on('value', snapshot => {
      let FBUser = snapshot.val();
      setUser(FBUser);
    })
  },[ref]);

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
