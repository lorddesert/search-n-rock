import React from 'react';
import './App.css';
import config from '../../config';

const App = () => {
  // Initialize firebase, if it already is, return the app.
  const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  const auth = app.auth();
  const database = app.database();

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;