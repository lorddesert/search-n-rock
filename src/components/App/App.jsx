import React from 'react';
import './App.css';
import config from '../../config';

import firebase from 'firebase';


// Components
import Login from '../Login/Login';

const App = () => {
  // Initialize firebase, if it already is, return the app.
  const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  const auth = firebase.auth();  

  firebase.analytics();
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;