import React, { useState } from 'react';
import config from '../../config';
import './App.css';
import './reset.css';

import firebase from 'firebase';

// Components
import Login from '../Login/Login';
import Home from '../Home/Home';

const App = () => {
  // Initialize firebase, if it already is, return the app.
  const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

  firebase.analytics();

  const [showlogin, setShowLogin] = useState(true);


  return (
    <div className="App">
      {showlogin ?
        <Login 
          setShowLogin={setShowLogin} 
        />
      :
        <Home 
          setShowLogin={setShowLogin}
        />
      }
    </div>
  );
}

export default App;