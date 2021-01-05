import React from 'react';
import 'Album.css';

const Album = props => {
  <div className="Album">
    <main>
      <h1 className="Album-name">{props.name}</h1>
    </main>
    <footer className="Album-year">
      <span>{props.year}</span>      
    </footer>
  </div>
}

export default Album;