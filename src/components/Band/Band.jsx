import React from 'react'
import './Band.css';


const Band = props => {
  // Fetch the albums of the band, show the loader and then render.
  return (
    <div className='Band' onClick={() => props.fetchBand(props.key)}>
      <main>
        <hgroup>
          <h1 className='Band-name'>{props.name}</h1>
          <h2>{props.country}</h2>
        </hgroup>
        <div className='genre'>{props.genre}</div>
      </main>
    </div>
  );
}

export default Band;
