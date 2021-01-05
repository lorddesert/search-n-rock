import React from 'react'
import './Band.css';


const Band = props => {
  // Fetch the albums of the band, show the loader and then render.
  return (
    <div className="Band">
      <main>
        <h1 className="Band-name">{props.name}</h1>
        <h3>{props.year}</h3>
        <h3>{props.country}</h3>
        <Tag genre={props.genre} />
      </main>
    </div>
  );
}

export default Band;