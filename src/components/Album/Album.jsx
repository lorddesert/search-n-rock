import React from 'react';
import './Album.css';

const Album = props => {
  return (
    <div className="Album">
    <main>
      <h1 className="Album-name">{props.album.name}</h1>
    </main>
    <footer className="Album-year">
      <span>{props.album.year}</span>      
    </footer>
  </div>
  );
}

export default Album;