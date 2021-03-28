import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Home";
import Welcome from "./Welcome";
import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Login from './Login';
import Meetings from "./Meetings";
import { navigate, Router } from "@reach/router";
import firebase from "./Firebase";
import Register from './Register';

function App() {

  const[user, setUser] = useState({
    userObj : null,
    displayName : null,
    uuid : null

  });
  


  useEffect(() => {
    firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        setUser({
          userObj: FBUser,
          displayName: FBUser.displayName,
          uuid: FBUser.uuid
        });
      }
    });
  }, []);

  function  registerUser(userName){
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName : userName
      }).then(() =>  {
             console.log(userName);
              setUser({
                userObj : FBUser,
                displayName : userName,
                uuid : FBUser.uuid
              });
              navigate('/meetings');
         });
    });
  };

  return (
    <div>
        <Navigation user={user}/>
        {user.displayName && (
           <Welcome userName={user.displayName}/>
          
         )}
         <Router>
           <Home path="/" user={user}/>
           <Login path="/login" user={user}/>
           <Register path="/register" registerUser={registerUser}/>
           <Meetings path="/meetings" />

         </Router>
        
    </div>

  )
}

export default App;
